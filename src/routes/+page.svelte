<script lang="ts">
    import { clubInfo, clubPillars } from "$lib/data/club";
    import { currentSchedule } from "$lib/data/meetings";
    import { trackEvent } from "$lib/analytics";
    import LogicGateDemo from "$lib/components/LogicGateDemo.svelte";

    function handleHeroDiscord() {
        trackEvent("hero_discord_clicked", { section: "hero" });
    }

    function handleCtaDiscord() {
        trackEvent("cta_discord_clicked", { section: "bottom_cta" });
    }
</script>

<svelte:head>
    <title>{clubInfo.name} | UIUC Minecraft Redstone Computing RSO</title>
    <meta
        name="description"
        content="Join Illini Redstone Computing at UIUC. We design and build real digital logic systems, ALUs, memory architectures, and programmable computer CPUs inside Minecraft."
    />
</svelte:head>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container hero-container">
        <div class="hero-badges">
            <span class="badge badge-illini">
                <span class="uiuc-dot"></span>
                UIUC Official RSO
            </span>
            <span class="badge badge-redstone">
                <span class="badge-pulse-dot"></span>
                Minecraft Digital Logic & CPUs
            </span>
        </div>

        <h1 class="hero-title">
            COMPUTING AT THE SPEED OF <span class="glow-text">REDSTONE</span>
        </h1>

        <p class="hero-subtitle">
            {clubInfo.tagline}
        </p>

        <p class="hero-body">
            {clubInfo.description}
        </p>

        <div class="hero-actions">
            <a
                href={clubInfo.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary"
                onclick={handleHeroDiscord}
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                    />
                </svg>
                <span>Join Discord</span>
            </a>
            <a href="/about#meetings" class="btn btn-secondary">
                <span>Meeting Schedule & Location &rarr;</span>
            </a>
            <a href="/officers" class="btn btn-outline">
                <span>Meet the Officers</span>
            </a>
        </div>

        <!-- Key Highlights Bar -->
        <div class="stats-bar">
            <div class="stat-item">
                <span class="stat-num">100% FREE</span>
                <span class="stat-label">Open to All Majors</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
                <span class="stat-num">{currentSchedule.day.toUpperCase()}</span
                >
                <span class="stat-label">{currentSchedule.time}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
                <span class="stat-num">SIEBEL CENTER</span>
                <span class="stat-label">{currentSchedule.room}</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
                <span class="stat-num">JAVA 1.21+</span>
                <span class="stat-label">Dedicated Server</span>
            </div>
        </div>
    </div>
</section>

<!-- Interactive Logic Gate Simulator Section -->
<section class="section sim-section">
    <div class="container">
        <LogicGateDemo />
    </div>
</section>

<!-- What We Build Section -->
<section class="section">
    <div class="container">
        <div class="section-heading">
            <span class="badge badge-illini">ENGINEERING IN MINECRAFT</span>
            <h2 class="section-title">
                From Logic Gates to Programmable Silicon
            </h2>
            <p class="section-desc">
                Minecraft provides an infinite voxel sandbox where redstone dust
                acts as wiring, repeaters act as repeaters & diodes, and torches
                act as inverters. Here is what we construct together:
            </p>
        </div>

        <div class="grid-4">
            <div class="card">
                <div class="card-glow-accent"></div>
                <div class="card-icon">➕</div>
                <h3 class="card-title">Arithmetic Logic (ALUs)</h3>
                <p class="card-text">
                    High-speed ripple-carry & carry-lookahead adders, two's
                    complement subtractors, bit-shifters, and zero/negative flag
                    registers.
                </p>
                <span class="card-tag">HARDWARE LOGIC</span>
            </div>

            <div class="card">
                <div class="card-glow-accent"></div>
                <div class="card-icon">💾</div>
                <h3 class="card-title">Memory & Register Files</h3>
                <p class="card-text">
                    Dual-port read registers, instant piston-tape ROMs, address
                    decoders, and high-density redstone RAM matrix arrays.
                </p>
                <span class="card-tag">SEQUENTIAL CIRCUITS</span>
            </div>

            <div class="card">
                <div class="card-glow-accent"></div>
                <div class="card-icon">🧠</div>
                <h3 class="card-title">Complete 8/16-Bit CPUs</h3>
                <p class="card-text">
                    RISC-inspired instruction pipelines, program counters, jump
                    & branch multiplexers, and microcode execution loops.
                </p>
                <span class="card-tag">COMPUTER ARCHITECTURE</span>
            </div>

            <div class="card">
                <div class="card-glow-accent"></div>
                <div class="card-icon">📺</div>
                <h3 class="card-title">Screens & Peripherals</h3>
                <p class="card-text">
                    Redstone lamp pixel displays, 7-segment digital screens,
                    hopper-based punch card readers, and binary-to-BCD
                    converters.
                </p>
                <span class="card-tag">PERIPHERALS & I/O</span>
            </div>
        </div>
    </div>
</section>

<!-- Club Pillars Section -->
<section class="section pillars-section">
    <div class="container">
        <div class="section-heading">
            <span class="badge badge-redstone">WHY JOIN IRC</span>
            <h2 class="section-title">
                Built for Students, Driven by Curiosity
            </h2>
            <p class="section-desc">
                Whether you want to visualize your CS 233 / ECE 120 concepts or
                simply enjoy tinkering with redstone engineering:
            </p>
        </div>

        <div class="grid-2">
            {#each clubPillars as pillar}
                <div class="card pillar-card">
                    <div class="card-glow-accent"></div>
                    <div class="pillar-header">
                        <span class="pillar-icon">{pillar.icon}</span>
                        <h3 class="pillar-title">{pillar.title}</h3>
                    </div>
                    <p class="pillar-desc">{pillar.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Call to Action Banner -->
<section class="section cta-section">
    <div class="container">
        <div class="cta-box card">
            <div class="card-glow-accent"></div>
            <div class="cta-content">
                <span class="badge badge-redstone">
                    <span class="badge-pulse-dot"></span>
                    NO EXPERIENCE NEEDED
                </span>
                <h2 class="cta-title">
                    Ready to build your first CPU in Minecraft?
                </h2>
                <p class="cta-desc">
                    Join our Discord community to introduce yourself, get server
                    access, and find out about our next workshop in {currentSchedule.location}.
                </p>
                <div class="cta-buttons">
                    <a
                        href={clubInfo.discordUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary"
                        onclick={handleCtaDiscord}
                    >
                        Join Our Discord
                    </a>
                    <a href="/about" class="btn btn-secondary">
                        Read About Our Workshops &rarr;
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    /* Hero Section */
    .hero-section {
        padding-top: 5rem;
        padding-bottom: 3.5rem;
        text-align: center;
    }

    .hero-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .hero-badges {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem;
        margin-bottom: 1.75rem;
    }

    .uiuc-dot {
        width: 8px;
        height: 8px;
        background-color: var(--illini-orange);
    }

    .hero-title {
        font-size: clamp(2.4rem, 6vw, 4.4rem);
        font-weight: 700;
        max-width: 950px;
        margin-bottom: 1.25rem;
        line-height: 1.1;
        letter-spacing: 0.03em;
    }

    .glow-text {
        color: #ff334e;
        text-shadow: 0 0 25px rgba(255, 37, 63, 0.7);
    }

    .hero-subtitle {
        font-size: clamp(1.1rem, 2.5vw, 1.4rem);
        color: #cbd5e1;
        max-width: 750px;
        font-weight: 500;
        margin-bottom: 1rem;
        line-height: 1.4;
    }

    .hero-body {
        font-size: 1rem;
        color: var(--text-secondary);
        max-width: 680px;
        margin-bottom: 2.25rem;
    }

    .hero-actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 3.5rem;
    }

    /* Stats Bar */
    .stats-bar {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;
        background: #101622;
        border-top: 3px solid #2d3b55;
        border-left: 3px solid #2d3b55;
        border-bottom: 3px solid #0d121c;
        border-right: 3px solid #0d121c;
        box-shadow: 4px 4px 0px #000000;
        padding: 1.5rem 2.5rem;
        width: 100%;
        max-width: 900px;
    }

    .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .stat-num {
        font-family: var(--font-display);
        font-size: 1.4rem;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 0.04em;
    }

    .stat-label {
        font-size: 0.85rem;
        color: var(--text-muted);
        font-family: var(--font-mono);
        margin-top: 0.15rem;
    }

    .stat-divider {
        width: 2px;
        height: 36px;
        background-color: var(--border-subtle);
    }

    @media (max-width: 768px) {
        .stat-divider {
            display: none;
        }
        .stats-bar {
            gap: 1.25rem;
        }
    }

    /* Section Headings */
    .section-heading {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3rem;
    }

    .section-title {
        font-size: clamp(1.8rem, 4vw, 2.7rem);
        margin-top: 0.75rem;
        margin-bottom: 0.85rem;
        letter-spacing: 0.03em;
    }

    .section-desc {
        font-size: 1.05rem;
        max-width: 640px;
    }

    /* Feature Cards */
    .card-icon {
        font-size: 2.2rem;
        margin-bottom: 1.25rem;
    }

    .card-title {
        font-size: 1.35rem;
        color: #ffffff;
        margin-bottom: 0.65rem;
        letter-spacing: 0.03em;
    }

    .card-text {
        font-size: 0.92rem;
        line-height: 1.6;
        margin-bottom: 1.25rem;
    }

    .card-tag {
        display: inline-block;
        font-family: var(--font-display);
        font-size: 0.8rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        color: var(--illini-orange);
        background: rgba(255, 95, 5, 0.12);
        border: 1px solid rgba(255, 95, 5, 0.3);
        padding: 0.2rem 0.5rem;
    }

    /* Pillars */
    .pillars-section {
        background: rgba(10, 13, 20, 0.6);
    }

    .pillar-card {
        padding: 2.25rem;
    }

    .pillar-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 0.85rem;
    }

    .pillar-icon {
        font-size: 2rem;
    }

    .pillar-title {
        font-size: 1.4rem;
        color: #ffffff;
        letter-spacing: 0.03em;
    }

    .pillar-desc {
        font-size: 0.95rem;
        line-height: 1.6;
    }

    /* CTA Box */
    .cta-box {
        text-align: center;
        background: #111824;
        border-top: 3px solid #ff4d64;
        border-left: 3px solid #ff4d64;
        border-bottom: 3px solid #590914;
        border-right: 3px solid #590914;
        padding: 4rem 2rem;
        box-shadow: 6px 6px 0px #000000;
    }

    .cta-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 660px;
        margin-inline: auto;
    }

    .cta-title {
        font-size: clamp(1.8rem, 4vw, 2.7rem);
        margin-top: 1rem;
        margin-bottom: 0.85rem;
        color: #ffffff;
        letter-spacing: 0.03em;
    }

    .cta-desc {
        font-size: 1.05rem;
        color: #cbd5e1;
        margin-bottom: 2rem;
    }

    .cta-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
</style>
