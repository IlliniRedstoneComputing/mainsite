<script lang="ts">
    import Button from "$lib/components/Button.svelte";
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

<div class="content-page content-page--home">
<div class="blurb">
    <h2 class="page-heading">
        Minecraft, redstone, and computing at Illinois
    </h2>
    <p class="page-copy">
        We are a group of students at the University of Illinois
        Urbana-Champaign who are passionate about Minecraft and redstone. We
        create complex redstone circuitry to have fun and learn about computer
        architecture and logic design. We also build mods and tooling to enhance
        our building experience.
    </p>
    <p class="page-copy">
        While we are an ECE redstone organization, we welcome anyone who is
        interested in redstone and Minecraft to join us. We have a discord
        server where we discuss redstone, share our builds, and help each other
        with our projects. We also have regular meetings where we brainstorm,
        work on our builds, and learn with each other.
    </p>


    <div class="card-grid">
        <div class="info-card">
            <h3 class="card-title">Who we are</h3>
            <p class="card-copy">
                Students at the University of Illinois Urbana-Champaign.
            </p>
        </div>
        <div class="info-card" style="--card-accent: var(--color-redstone)">
            <h3 class="card-title">What we build</h3>
            <p class="card-copy">
                Redstone computers, Minecraft mods, and useful tooling.
            </p>
        </div>
        <div class="info-card" style="--card-accent: var(--color-illini-orange)">
            <h3 class="card-title">Who can join</h3>
            <p class="card-copy">
                Anyone curious about Minecraft, redstone, or computing.
            </p>
        </div>
    </div>

    <div class="section">
    <p class="page-copy">
        Join our Discord, check the meeting schedule, or read the setup guides.
    </p>
    </div>
</div>

<div class="action-row transition-3">
    <Button href="/discord" color="var(--color-discord)" target="_blank">
        Join Discord
    </Button>
    <Button href="/about/meetings" color="var(--color-illini-blue)">
        Meeting Info
    </Button>
    <Button href="/guides" color="var(--color-redstone)">Setup guides</Button>
</div>

</div>

<style>
    .title-container {
        width: 100%;
        container: title / inline-size;
    }

    .irc-title {
        font-size: var(--page-title-size);
        font-weight: 700;
        text-align: center;
        text-transform: uppercase;

        display: flex;
        width: 100%;
        justify-content: center;
        gap: var(--page-title-gap);

        margin-block: var(--page-title-margin-top) var(--page-title-margin);

        filter: saturate(1.2);

        @container title (width < 48rem) {
            flex-direction: column;
            align-items: center;
            gap: var(--page-compact-gap);

            font-size: var(--page-title-size-mobile);

            margin-block-start: var(--page-title-margin-top-mobile);
        }
    }

    .blurb {
        text-align: left;
    }

</style>
