<a
    href="https://discord.gg/3XwGbCXmwq"
    target="_blank"
    rel="noreferrer"
    class="discord-button"
>
    Discord</a
>

<style lang="less">
    .discord-button {
        display: block;
        width: 100%;
        font-size: 1.25rem;
        font-weight: 700;
        padding: 0.5rem 1rem;
        text-align: center;

        color: white;
        background-color: var(--color-discord-really-dark);

        --border-width: 0.125rem;
        border-right: var(--border-width) solid var(--color-discord-dark);
        border-bottom: var(--border-width) solid var(--color-discord-dark);
        border-top: var(--border-width) solid var(--color-discord-light);
        border-left: var(--border-width) solid var(--color-discord-light);

        transition:
            translate 0.1s ease-in-out,
            filter 0.1s ease-in-out;

        &:hover {
            translate: 0 -0.2rem;
        }

        &:active {
            translate: 0 0.1rem;
            filter: brightness(0.9);
        }
    }
</style>
