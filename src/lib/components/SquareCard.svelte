<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        children,
        class: className,
    }: {
        children: Snippet;
        class?: string;
    } = $props();
</script>

<div class={`square-card ${className || ""}`}>
    {@render children()}
</div>

<style lang="less">
    .square-card {
        aspect-ratio: 1;
        width: 100%;
        padding: 1.5rem;
        overflow: auto;

        background-color: var(--color-bg-alt);
        border: 0.22rem solid #3e4855;
        border-right-color: #161d26;
        border-bottom-color: #11161d;
        box-shadow: 0.35rem 0.35rem 0 #070a0f;
    }
</style>
