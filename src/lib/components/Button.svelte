<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        color = "#5865f2",
        href,
        target,
        rel,
        children,
        class: className,
    }: {
        color?: string;
        href: string;
        target?: string;
        rel?: string;
        children: Snippet;
        class?: string;
    } = $props();
</script>

<a
    {href}
    {target}
    {rel}
    class={`button ${className || ""}`}
    style={`--button-color: ${color}`}
>
    {@render children()}
</a>

<style lang="less">
    .button {
        --button-color-inside: color-mix(
            in srgb,
            var(--button-color),
            black 60%
        );
        --button-color-light: color-mix(
            in srgb,
            var(--button-color),
            black 35%
        );
        --button-color-dark: color-mix(in srgb, var(--button-color), black 75%);

        display: block;
        width: 100%;
        font-size: 1.25rem;
        font-weight: 700;
        padding: 0.5rem 1rem;
        text-align: center;

        color: white;
        background-color: var(--button-color-inside);

        --border-width: 0.125rem;
        border-right: var(--border-width) solid var(--button-color-dark);
        border-bottom: var(--border-width) solid var(--button-color-dark);
        border-top: var(--border-width) solid var(--button-color-light);
        border-left: var(--border-width) solid var(--button-color-light);

        transition:
            translate 0.1s ease-in-out,
            background-color 0.1s ease-in-out,
            border-color 0.1s ease-in-out,
            filter 0.1s ease-in-out;

        &:hover {
            --button-color-inside: color-mix(
                in srgb,
                var(--button-color),
                black 45%
            );
            --button-color-light: color-mix(
                in srgb,
                var(--button-color),
                black 15%
            );
            --button-color-dark: color-mix(
                in srgb,
                var(--button-color),
                black 60%
            );

            translate: 0 -0.2rem;
        }

        &:active {
            --button-color-inside: color-mix(
                in srgb,
                var(--button-color),
                white 20%
            );
            --button-color-light: color-mix(
                in srgb,
                var(--button-color),
                white 45%
            );
            --button-color-dark: color-mix(
                in srgb,
                var(--button-color),
                black 10%
            );

            translate: 0 0.1rem;
        }
    }
</style>
