<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        color,
        textColor,
        x = "0rem",
        y = "0.1rem",
        depth = 8,
        children,
        class: className,
    }: {
        color: string;
        textColor?: string;
        x?: string;
        y?: string;
        depth?: number;
        children: Snippet;
        class?: string;
    } = $props();

    const shadow = $derived(
        Array.from({ length: depth }, (_, index) => {
            const layer = index + 1;
            const darkness = layer * 10;
            return `calc(${x} * ${layer}) calc(${y} * ${layer}) 0 color-mix(in srgb, ${color}, black ${darkness}%)`;
        }).join(", "),
    );
</script>

<span
    class={`text-shadow-3d ${className || ""}`}
    style={`--text-color: ${textColor || "inherit"}; text-shadow: ${shadow}`}
>
    {@render children()}
</span>

<style>
    .text-shadow-3d {
        color: var(--text-color);
    }
</style>
