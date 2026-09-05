<script lang="ts">
    import { clubInfo } from "$lib/data/club";
    import { executiveBoard } from "$lib/data/officers";
    import { trackEvent } from "$lib/analytics";

    function handleDiscordClick() {
        trackEvent("officers_discord_clicked", { section: "officers_page" });
    }
</script>

<svelte:head>
    <title>Officers & Leadership | {clubInfo.name}</title>
    <meta
        name="description"
        content="Meet the executive board and project leads of Illini Redstone Computing at the University of Illinois Urbana-Champaign."
    />
</svelte:head>

<div class="officers-page">
    <!-- Hero Section -->
    <section class="officers-hero">
        <div class="container">
            <div class="hero-content">
                <span class="badge badge-illini">
                    <span class="uiuc-dot"></span>
                    RSO Leadership Team
                </span>
                <h1 class="page-title">The Engineers Behind the Redstone</h1>
                <p class="lead-text">
                    Meet the executive board and project leads who organize
                    workshops, maintain our Minecraft server infrastructure, and
                    mentor students across UIUC.
                </p>
            </div>
        </div>
    </section>

    <!-- Officers Grid -->
    <section class="section">
        <div class="container">
            <div class="grid-3 officers-grid">
                {#each executiveBoard as officer}
                    <div class="officer-card card">
                        <div class="card-glow-accent"></div>

                        <!-- Header with Avatar -->
                        <div class="card-top">
                            <div class="avatar-wrapper">
                                <img
                                    src={`https://mc-heads.net/avatar/${officer.minecraftIgn}/100`}
                                    alt={`${officer.name}'s Minecraft skin`}
                                    class="avatar-img"
                                    loading="lazy"
                                    onerror={e => {
                                        // Graceful fallback if offline or username not found
                                        const target =
                                            e.currentTarget as HTMLImageElement;
                                        target.src =
                                            "https://mc-heads.net/avatar/Steve/100";
                                    }}
                                />
                            </div>
                            <div class="officer-meta">
                                <span class="role-badge">{officer.role}</span>
                                <h2 class="officer-name">{officer.name}</h2>
                                <p class="officer-major">{officer.major}</p>
                                <span class="officer-year">{officer.year}</span>
                            </div>
                        </div>

                        <!-- Handles -->
                        <div class="handles-row">
                            <div class="handle-item">
                                <span class="handle-label">IGN:</span>
                                <code class="handle-val"
                                    >{officer.minecraftIgn}</code
                                >
                            </div>
                            {#if officer.discordHandle}
                                <div class="handle-item">
                                    <span class="handle-label">Discord:</span>
                                    <span class="handle-val discord-tag"
                                        >{officer.discordHandle}</span
                                    >
                                </div>
                            {/if}
                        </div>

                        <!-- Bio -->
                        <p class="officer-bio">{officer.bio}</p>

                        <!-- Favorite Build -->
                        {#if officer.favoriteRedstoneBuild}
                            <div class="build-quote">
                                <span class="build-label">FAVORITE BUILD:</span>
                                <p class="build-val">
                                    "{officer.favoriteRedstoneBuild}"
                                </p>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Call to Action: Get Involved -->
    <section class="section get-involved-section">
        <div class="container">
            <div class="get-involved-card card">
                <div class="card-glow-accent"></div>
                <div class="involved-content">
                    <span class="badge badge-redstone">
                        <span class="badge-pulse-dot"></span>
                        Leadership Opportunities
                    </span>
                    <h2 class="involved-title">
                        Want to Lead a Project or Workshop?
                    </h2>
                    <p class="involved-desc">
                        We are always looking for students who want to become
                        Project Leads, teach special topic workshops (e.g.,
                        Pipelined CPU design, Redstone compilers, custom texture
                        packs), or join the executive board next semester.
                    </p>
                    <div class="involved-actions">
                        <a
                            href={clubInfo.discordUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-primary"
                            onclick={handleDiscordClick}
                        >
                            Chat with Us on Discord &rarr;
                        </a>
                        <a
                            href={`mailto:${clubInfo.email}`}
                            class="btn btn-secondary"
                        >
                            Email {clubInfo.email}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

<style>
    .officers-page {
        padding-bottom: 3rem;
    }

    .officers-hero {
        padding-top: 4.5rem;
        padding-bottom: 2.5rem;
        text-align: center;
        background: radial-gradient(
            ellipse 60% 40% at 50% 0%,
            rgba(255, 45, 70, 0.12),
            transparent 70%
        );
    }

    .hero-content {
        max-width: 800px;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .page-title {
        font-size: clamp(2.2rem, 5vw, 3.5rem);
        margin-top: 1rem;
        margin-bottom: 1.25rem;
    }

    .lead-text {
        font-size: 1.15rem;
        color: #cbd5e1;
        line-height: 1.6;
    }

    .uiuc-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--illini-orange);
    }

    /* Officers Grid */
    .officers-grid {
        gap: 2rem;
    }

    .officer-card {
        display: flex;
        flex-direction: column;
        background: #111622;
        padding: 2rem;
    }

    .card-top {
        display: flex;
        gap: 1.25rem;
        align-items: center;
        margin-bottom: 1.25rem;
    }

    .avatar-wrapper {
        width: 72px;
        height: 72px;
        border-radius: var(--radius-md);
        background: #19202f;
        border: 2px solid var(--border-subtle);
        overflow: hidden;
        flex-shrink: 0;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    }

    .avatar-img {
        width: 100%;
        height: 100%;
        image-rendering: pixelated;
        display: block;
    }

    .officer-meta {
        display: flex;
        flex-direction: column;
    }

    .role-badge {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        font-weight: 700;
        color: var(--illini-orange);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 0.2rem;
    }

    .officer-name {
        font-size: 1.35rem;
        color: #ffffff;
        line-height: 1.2;
    }

    .officer-major {
        font-size: 0.88rem;
        color: #cbd5e1;
        margin-top: 0.2rem;
    }

    .officer-year {
        font-size: 0.78rem;
        color: var(--text-muted);
    }

    .handles-row {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        background: rgba(0, 0, 0, 0.25);
        border: 1px solid var(--border-subtle);
        padding: 0.65rem 0.85rem;
        border-radius: var(--radius-sm);
        margin-bottom: 1.15rem;
    }

    .handle-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.8rem;
    }

    .handle-label {
        color: var(--text-muted);
        font-family: var(--font-mono);
    }

    .handle-val {
        font-weight: 600;
        color: #e2e8f0;
    }

    .handle-val.discord-tag {
        color: #818cf8;
    }

    .officer-bio {
        font-size: 0.92rem;
        line-height: 1.6;
        margin-bottom: 1.25rem;
        flex: 1;
    }

    .build-quote {
        background: rgba(255, 45, 70, 0.06);
        border-left: 3px solid var(--redstone-base);
        padding: 0.75rem 1rem;
        border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
    }

    .build-label {
        display: block;
        font-family: var(--font-mono);
        font-size: 0.68rem;
        font-weight: 700;
        color: #ff7083;
        letter-spacing: 0.08em;
        margin-bottom: 0.2rem;
    }

    .build-val {
        font-size: 0.82rem;
        font-style: italic;
        color: #cbd5e1;
        margin: 0;
    }

    /* Get Involved */
    .get-involved-card {
        background: radial-gradient(
            ellipse at center,
            #1b2438 0%,
            #121824 100%
        );
        border: 1px solid rgba(255, 95, 5, 0.35);
        padding: 3.5rem 2rem;
        text-align: center;
    }

    .involved-content {
        max-width: 680px;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .involved-title {
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        color: #ffffff;
        margin-top: 1rem;
        margin-bottom: 0.85rem;
    }

    .involved-desc {
        font-size: 1.05rem;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .involved-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
</style>
