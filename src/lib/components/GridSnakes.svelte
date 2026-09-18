<script lang="ts">
    import { onMount } from "svelte";

    let { pause = false } = $props<{
        pause?: boolean;
    }>();

    type Point = { x: number; y: number };
    type Snake = {
        points: Point[];
        direction: number;
        length: number;
        progress: number;
    };

    const directions: Point[] = [
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: -1, y: 0 },
        { x: 0, y: -1 },
    ];

    let canvas: HTMLCanvasElement;
    let startAnimation = () => {};
    let stopAnimation = () => {};

    $effect(() => {
        pause;
        if (pause) stopAnimation();
        else startAnimation();
    });

    function createRandom(seed: number) {
        let state = seed;

        return () => {
            state = (state * 1664525 + 1013904223) % 4294967296;
            return state / 4294967296;
        };
    }

    onMount(() => {
        const context = canvas.getContext("2d");
        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );

        if (!context) return;

        const random = createRandom(
            20260907 + Math.floor(Math.random() * 1000000),
        );
        let gridSize = 32;
        let width = 0;
        let height = 0;
        let originX = 0;
        let originY = 0;
        let columns = 0;
        let rows = 0;
        let animationFrame = 0;
        let lastTime = performance.now();
        const stepDuration = 220;
        let running = false;

        const snakes: Snake[] = Array.from({ length: 16 }, () => ({
            points: [],
            direction: Math.floor(random() * directions.length),
            length: 18 + Math.floor(random() * 22),
            progress: 0,
        }));

        const resize = () => {
            const bounds = canvas.getBoundingClientRect();
            const devicePixelRatio = window.devicePixelRatio || 1;
            const rootStyles = getComputedStyle(document.documentElement);
            gridSize =
                parseFloat(rootStyles.getPropertyValue("--grid-size")) || 32;
            width = bounds.width;
            height = bounds.height;
            originX = ((-bounds.left % gridSize) + gridSize) % gridSize;
            originY = ((-bounds.top % gridSize) + gridSize) % gridSize;
            columns = Math.max(1, Math.floor((width - originX) / gridSize));
            rows = Math.max(1, Math.floor((height - originY) / gridSize));
            canvas.width = Math.ceil(width * devicePixelRatio);
            canvas.height = Math.ceil(height * devicePixelRatio);
            context.setTransform(
                devicePixelRatio,
                0,
                0,
                devicePixelRatio,
                0,
                0,
            );

            for (const snake of snakes) {
                snake.points = snake.points.map(point => ({
                    x: Math.min(point.x, columns),
                    y: Math.min(point.y, rows),
                }));
            }
        };

        const nextPoint = (snake: Snake) => {
            const current = snake.points[snake.points.length - 1];
            if (!current) {
                return {
                    x: Math.floor(random() * columns),
                    y: Math.floor(random() * rows),
                };
            }

            const canMove = (direction: number) => {
                const vector = directions[direction];
                const x = current.x + vector.x;
                const y = current.y + vector.y;
                return x >= 0 && x <= columns && y >= 0 && y <= rows;
            };

            const distanceToCenter = (point: Point) =>
                Math.hypot(point.x - columns / 2, point.y - rows / 2);

            if (random() > 0.72 || !canMove(snake.direction)) {
                const options = directions
                    .map((_, index) => index)
                    .filter(
                        index =>
                            canMove(index) &&
                            index !== (snake.direction + 2) % 4,
                    );
                if (options.length > 0) {
                    const currentDistance = distanceToCenter(current);
                    const weightedOptions = options.map(direction => {
                        const vector = directions[direction];
                        const candidate = {
                            x: current.x + vector.x,
                            y: current.y + vector.y,
                        };
                        const inwardBias = Math.max(
                            0,
                            currentDistance - distanceToCenter(candidate),
                        );

                        return {
                            direction,
                            weight: 1 + inwardBias * 0.12,
                        };
                    });
                    const totalWeight = weightedOptions.reduce(
                        (total, option) => total + option.weight,
                        0,
                    );
                    let selection = random() * totalWeight;

                    for (const option of weightedOptions) {
                        selection -= option.weight;
                        if (selection <= 0) {
                            snake.direction = option.direction;
                            break;
                        }
                    }
                }
            }

            const vector = directions[snake.direction];
            return {
                x: current.x + vector.x,
                y: current.y + vector.y,
            };
        };

        const advance = (snake: Snake) => {
            snake.points.push(nextPoint(snake));
            while (snake.points.length > snake.length) snake.points.shift();
        };

        const draw = () => {
            context.clearRect(0, 0, width, height);
            context.lineWidth = Math.max(1.25, gridSize * 0.1);
            context.lineCap = "square";
            context.lineJoin = "miter";
            context.strokeStyle = getComputedStyle(document.documentElement)
                .getPropertyValue("--color-redstone")
                .trim();

            for (const snake of snakes) {
                for (let index = 1; index < snake.points.length; index += 1) {
                    const from = snake.points[index - 1];
                    const gridPoint = snake.points[index];
                    const isHead = index === snake.points.length - 1;
                    const previousPoint = snake.points[index - 1];
                    const to = isHead
                        ? {
                              x:
                                  previousPoint.x +
                                  (gridPoint.x - previousPoint.x) *
                                      snake.progress,
                              y:
                                  previousPoint.y +
                                  (gridPoint.y - previousPoint.y) *
                                      snake.progress,
                          }
                        : gridPoint;
                    const opacity = 0.04 + (index / snake.points.length) * 0.46;
                    context.globalAlpha = opacity;
                    context.beginPath();
                    context.moveTo(
                        originX + from.x * gridSize,
                        originY + from.y * gridSize,
                    );
                    context.lineTo(
                        originX + to.x * gridSize,
                        originY + to.y * gridSize,
                    );
                    context.stroke();
                }
            }

            context.globalAlpha = 1;
        };

        const loop = (time: number) => {
            const delta = Math.min(time - lastTime, 100);
            lastTime = time;

            for (const snake of snakes) {
                snake.progress += delta / stepDuration;
                while (snake.progress >= 1) {
                    advance(snake);
                    snake.progress -= 1;
                }
            }
            draw();
            if (running) animationFrame = requestAnimationFrame(loop);
        };

        startAnimation = () => {
            if (running || reducedMotion.matches) return;
            running = true;
            lastTime = performance.now();
            animationFrame = requestAnimationFrame(loop);
        };

        stopAnimation = () => {
            if (!running) return;
            running = false;
            cancelAnimationFrame(animationFrame);
            animationFrame = 0;
        };

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);
        resize();
        for (const snake of snakes) {
            for (let index = 0; index < snake.length; index += 1)
                advance(snake);
            snake.progress = 1;
        }
        draw();

        if (!pause) startAnimation();

        return () => {
            stopAnimation();
            resizeObserver.disconnect();
        };
    });
</script>

<canvas bind:this={canvas} class="grid-snakes" aria-hidden="true"></canvas>

<style>
    .grid-snakes {
        position: fixed;
        top: 0;
        right: 0;
        /* left: 20rem; */
        width: calc(100% - 20rem);
        height: 100vh;
        filter: blur(3px) brightness(0.8);
        pointer-events: none;
    }
</style>
