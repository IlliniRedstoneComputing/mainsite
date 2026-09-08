<script lang="ts">
    import { animationState } from "$lib/state/animation.svelte";

    let {
        label = "",
        color = "var(--color-redstone)",
        class: className,
    } = $props<{
        label?: string;
        color?: string;
        class?: string;
    }>();

    const toggle = () => {
        animationState.enabled = !animationState.enabled;
    };
</script>

<button
    class="switch-control {className || ''}"
    type="button"
    class:active={animationState.enabled}
    role="switch"
    aria-checked={animationState.enabled}
    aria-label={label}
    onclick={toggle}
    style={`--switch-color: ${color}`}
>
    <span class="thumbstick"> </span>
</button>

<style>
    @property --depth {
        syntax: "<length>";
        inherits: false;
        initial-value: 0.25rem;
    }

    .switch-control {
        --switch-color: var(--color-redstone);

        --switch-color-light: color-mix(
            in srgb,
            var(--switch-color),
            black 35%
        );
        --switch-color-dark: color-mix(in srgb, var(--switch-color), black 75%);
        --switch-color-bg: color-mix(in srgb, var(--switch-color), black 85%);

        --depth: 0.25rem;

        width: 4rem;
        height: 2rem;
        background-color: var(--switch-color-bg);

        --border-width: 0.125rem;
        border-top: var(--border-width) solid var(--switch-color-light);
        border-left: var(--border-width) solid var(--switch-color-light);
        border-bottom: var(--border-width) solid var(--switch-color-dark);
        border-right: var(--border-width) solid var(--switch-color-dark);

        position: relative;

        transition:
            filter 0.1s cubic-bezier(0.34, 1.56, 0.64, 1),
            --depth 0.1s cubic-bezier(0.34, 1.56, 0.64, 1),
            background-color 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);

        cursor: pointer;

        &.active {
            --switch-color-bg: color-mix(
                in srgb,
                var(--color-redstone),
                black 45%
            );

            .thumbstick {
                translate: 2rem calc(-1 * var(--depth));
            }
        }

        &:hover {
            filter: brightness(1.2);
        }

        &:active {
            --depth: 0.125rem;
        }
    }

    .thumbstick {
        position: absolute;
        left: 0;
        bottom: 0;

        transition: translate 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);

        width: 2rem;
        aspect-ratio: 1;

        translate: 0 calc(-1 * var(--depth));

        background-color: var(--switch-color);

        border-top: 0.125rem solid var(--switch-color-light);
        border-left: 0.125rem solid var(--switch-color-light);
        border-bottom: 0.125rem solid var(--switch-color-dark);
        border-right: 0.125rem solid var(--switch-color-dark);

        box-shadow: 0 var(--depth) 0
            color-mix(in srgb, black, var(--switch-color) 50%);
    }
</style>
