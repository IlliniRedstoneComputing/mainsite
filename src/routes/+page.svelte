<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import GridSnakes from "$lib/components/GridSnakes.svelte";
    import Switch2 from "$lib/components/Switch2.svelte";
    import { animationState } from "$lib/state/animation.svelte";
</script>

<div class="container perspective">
    <GridSnakes pause={!animationState.enabled} />
    <h1 class="font-chakra irc-title">
        <span class="illini">Illini</span>
        <span class="redstone">Redstone</span>
        <span class="computing">Computing</span>
    </h1>

    <div class="content">
        <div class="blurb">
            <h3>Welcome to the Illini Redstone Computing community!</h3>
            <p>
                SHORT BLURB:Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dolor in maiores, adipisci quas molestiae ratione
                voluptatum? Eius quo est nihil quae. Enim quasi repellendus
                quidem dicta possimus, laboriosam quo totam!
            </p>
        </div>

        <div class="buttons">
            <Button
                href="https://discord.gg/3XwGbCXmwq"
                color="var(--color-discord)">Join Discord</Button
            >
            <Button href="/about#meetings" color="var(--color-illini-blue)"
                >Meeting Info</Button
            >
            <Button href="/logic" color="var(--color-redstone)"
                >Learn About Logic</Button
            >
        </div>

        <div class="animation-toggle">
            <Switch2 />
        </div>
    </div>
</div>

<style>
    .perspective {
        perspective: 1000px;
    }

    .container {
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .content {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;

        width: 60rem;
        height: 100vh;
    }

    .irc-title {
        font-size: 5rem;
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;

        display: flex;
        width: 95%;
        justify-content: center;
        gap: 3rem;

        margin-top: 10rem;
        transform: rotateX(5deg) translateZ(0);

        filter: saturate(1.2);
    }

    .illini {
        color: var(--color-illini-orange);
    }
    .redstone {
        color: var(--color-redstone);
    }
    .computing {
        color: var(--color-illini-blue);
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
    }

    .animation-toggle {
        position: fixed;
        right: 2rem;
        bottom: 2rem;
    }
</style>
