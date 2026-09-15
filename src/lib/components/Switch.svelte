<script lang="ts">
    import { animationState } from "$lib/state/animation.svelte";

    let { label = "Animate background" } = $props<{ label?: string }>();

    const toggle = () => {
        animationState.enabled = !animationState.enabled;
    };
</script>

<div class="switch-control">
    <span class="switch-label">{label}</span>
    <button
        type="button"
        class="switch"
        class:active={animationState.enabled}
        role="switch"
        aria-checked={animationState.enabled}
        aria-label={label}
        onclick={toggle}
    >
        <span class="switch-thumb"></span>
    </button>
</div>

<style lang="less">
    .switch-control {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.65rem;
        padding: 0.5rem 0.65rem;
        color: white;
        background-color: #2b2d31;
        border: 0.125rem solid var(--color-text-dim);
        box-shadow:
            0.2rem 0.2rem 0 color-mix(in srgb, var(--color-bg), black 60%),
            inset 0.1rem 0.1rem 0 color-mix(in srgb, white, transparent 75%);
    }

    .switch-label {
        font-size: 0.85rem;
        font-weight: 700;
        white-space: nowrap;
    }

    .switch {
        --switch-color: var(--color-accent);
        --switch-inside: color-mix(in srgb, var(--switch-color), black 65%);
        --switch-light: color-mix(in srgb, var(--switch-color), black 30%);
        --switch-dark: color-mix(in srgb, var(--switch-color), black 75%);

        position: relative;
        width: 3.1rem;
        height: 1.6rem;
        padding: 0;
        border: 0.125rem solid var(--switch-dark);
        background-color: var(--switch-inside);
        box-shadow:
            inset 0.1rem 0.1rem 0 color-mix(in srgb, white, transparent 80%),
            inset -0.1rem -0.1rem 0 color-mix(in srgb, black, transparent 35%);
        cursor: pointer;
        transition:
            background-color 0.15s cubic-bezier(0.34, 1.56, 0.64, 1),
            border-color 0.15s cubic-bezier(0.34, 1.56, 0.64, 1),
            translate 0.1s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .switch:hover {
        --switch-inside: color-mix(in srgb, var(--switch-color), black 45%);
        --switch-light: color-mix(in srgb, var(--switch-color), black 10%);
        --switch-dark: color-mix(in srgb, var(--switch-color), black 60%);
    }

    .switch:active {
        translate: 0 0.1rem;
    }

    .switch.active {
        --switch-inside: color-mix(in srgb, var(--switch-color), white 15%);
        --switch-light: color-mix(in srgb, var(--switch-color), white 45%);
        --switch-dark: color-mix(in srgb, var(--switch-color), black 10%);
    }

    .switch-thumb {
        position: absolute;
        top: 0.15rem;
        left: 0.15rem;
        width: 1.05rem;
        height: 1.05rem;
        background-color: var(--switch-light);
        border-top: 0.1rem solid color-mix(in srgb, white, transparent 35%);
        border-left: 0.1rem solid color-mix(in srgb, white, transparent 35%);
        border-right: 0.1rem solid var(--switch-dark);
        border-bottom: 0.1rem solid var(--switch-dark);
        box-shadow:
            0.1rem 0.1rem 0 color-mix(in srgb, black, transparent 35%),
            inset 0.08rem 0.08rem 0 color-mix(in srgb, white, transparent 65%);
        transition:
            left 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
            background-color 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .switch.active .switch-thumb {
        left: 1.7rem;
    }
</style>
