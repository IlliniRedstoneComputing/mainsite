<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Switch2 from "$lib/components/Switch2.svelte";
    import TextShadow3D from "$lib/components/TextShadow3D.svelte";
</script>

<div class="title-container">
    <h1 class="font-chakra irc-title transition-1">
        <TextShadow3D
            color="var(--color-illini-orange)"
            textColor="var(--color-illini-orange)"
            x="0.05rem"
            y="0.1rem"
            depth={8}
        >
            Illini
        </TextShadow3D>
        <TextShadow3D
            color="var(--color-redstone)"
            textColor="var(--color-redstone)"
            x="0rem"
            y="0.1rem"
            depth={8}
        >
            Redstone
        </TextShadow3D>
        <TextShadow3D
            color="var(--color-illini-blue)"
            textColor="var(--color-illini-blue)"
            x="-0.05rem"
            y="0.1rem"
            depth={8}
        >
            Computing
        </TextShadow3D>
    </h1>
</div>

<div class="blurb transition-2">
    <h3>Welcome to the Illini Redstone Computing community!</h3>
    <p>
        SHORT BLURB:Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolor in maiores, adipisci quas molestiae ratione voluptatum? Eius quo
        est nihil quae. Enim quasi repellendus quidem dicta possimus, laboriosam
        quo totam!
    </p>
</div>

<div class="buttons transition-3">
    <Button
        href="https://discord.gg/3XwGbCXmwq"
        color="var(--color-discord)"
        target="_blank"
    >
        Join Discord
    </Button>
    <Button href="/about#meetings" color="var(--color-illini-blue)">
        Meeting Info
    </Button>
    <Button href="/guides" color="var(--color-redstone)">Get Started!</Button>
</div>

<div class="animation-toggle">
    <Switch2 />
</div>

<style>
    .title-container {
        width: 100%;
        container: title / inline-size;
    }

    .irc-title {
        font-size: clamp(2.5rem, calc(6cqw), 9rem);
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;

        display: flex;
        width: 100%;
        justify-content: center;
        gap: 3rem;

        margin-top: 10rem;

        filter: saturate(1.2);

        @container title (width < 48rem) {
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            font-size: clamp(3rem, calc(10cqw), 7rem);

            margin-top: 5rem;
        }
    }

    .blurb {
        text-align: center;

        h3 {
            font-size: 1.7rem;
            font-weight: 400;
            margin: 2rem;
        }

        p {
            color: var(--color-text-muted);
            font-size: 1.1rem;
        }
    }

    .buttons {
        margin: 2rem;
        display: flex;
        gap: 2rem;

        @container page (width < 48rem) {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            margin-inline: 0;
        }
    }

    .animation-toggle {
        position: fixed;
        right: 2rem;
        bottom: 2rem;
    }
</style>
