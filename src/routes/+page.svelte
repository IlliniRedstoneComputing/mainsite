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
            x="0.0rem"
            y="0.1rem"
            depth={8}>
            Illini
        </TextShadow3D>
        <TextShadow3D
            color="var(--color-redstone)"
            textColor="var(--color-redstone)"
            x="0.0rem"
            y="0.1rem"
            depth={8}>
            Redstone
        </TextShadow3D>
        <TextShadow3D
            color="var(--color-illini-blue)"
            textColor="var(--color-illini-blue)"
            x="0.0rem"
            y="0.1rem"
            depth={8}>
            Computing
        </TextShadow3D>
    </h1>
</div>

<div class="blurb transition-2">
    <h3>Welcome to the Illini Redstone Computing community!</h3>
    <p>
        We are a group of students at the University of Illinois
        Urbana-Champaign who are passionate about Minecraft and redstone. We
        create complex redstone circuitry to have fun and learn about computer
        architecture and logic design. We also build mods and tooling to enhance
        our building experience.
    </p>
    <p>
        While we are an ECE redstone organization, we welcome anyone who is
        interested in redstone and Minecraft to join us. We have a discord
        server where we discuss redstone, share our builds, and help each other
        with our projects. We also have regular meetings where we brainstorm,
        work on our builds, and learn with each other.
    </p>
    <p>A few details about our organization:</p>

    <div class="organization-details">
        <div class="glass-card">
            <h4>Who we are</h4>
            <p>Students building, learning, and sharing together.</p>
        </div>
        <div class="glass-card">
            <h4>What we build</h4>
            <p>Redstone computers, Minecraft mods, and useful tooling.</p>
        </div>
        <div class="glass-card">
            <h4>Who can join</h4>
            <p>Anyone curious about Minecraft, redstone, or computing.</p>
        </div>
    </div>

    <p>
        Some resources are listed below to help you get started and become an
        official redstone engineer!
    </p>
</div>

<div class="buttons transition-3">
    <Button href="/discord" color="var(--color-discord)" target="_blank">
        Join Discord
    </Button>
    <Button href="/about#meetings" color="var(--color-illini-blue)">
        Meeting Info
    </Button>
    <Button href="/guides" color="var(--color-redstone)">Get Started!</Button>
</div>

<div class="animation-toggle">
    <!-- <Switch2 /> -->
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
        text-align: left;

        h3 {
            font-size: 1.7rem;
            font-weight: 400;
            margin: 2rem;
        }

        p {
            color: var(--color-text-slightly-muted);
            font-size: 1.1rem;
            margin: 2rem;
        }
    }

    .organization-details {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.5rem;
        margin: 2rem;

        h4 {
            color: var(--color-text);
            font-size: 1.35rem;
            margin-bottom: 1rem;
        }

        p {
            color: var(--color-text-slightly-muted);
            font-size: 1rem;
        }

        /* @container page (width < 56rem) {
            grid-template-columns: 1fr;
        } */
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
