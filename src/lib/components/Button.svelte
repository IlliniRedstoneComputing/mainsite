<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        color = "var(--color-primary)",
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
    class={`action button-block ${className || ""}`}
    style={`--button-color: ${color}`}
>
    {@render children()}
</a>
