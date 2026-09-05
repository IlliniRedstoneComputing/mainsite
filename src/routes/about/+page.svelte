<script lang="ts">
    import { clubInfo } from "$lib/data/club";
    import {
        currentSchedule,
        workshopTracks,
        clubFaqs,
    } from "$lib/data/meetings";
    import { trackEvent } from "$lib/analytics";

    let openFaqIndex = $state<number | null>(0);

    function toggleFaq(index: number) {
        openFaqIndex = openFaqIndex === index ? null : index;
    }

    function handleDiscordClick() {
        trackEvent("about_discord_clicked", { section: "about_page" });
    }
</script>

<svelte:head>
    <title>About & Meetings | {clubInfo.name}</title>
    <meta
        name="description"
        content="Learn about Illini Redstone Computing at UIUC, our weekly meeting times at Siebel Center, workshop curriculum, and how to get involved."
    />
</svelte:head>

<div class="about-page">
    <!-- Hero / Intro -->
    <section class="about-hero">
        <div class="container">
            <div class="hero-content">
                <span class="badge badge-illini">
                    <span class="uiuc-dot"></span>
                    UIUC Registered Student Organization
                </span>
                <h1 class="page-title">
                    Bridging Abstract Logic & Physical Creation
                </h1>
                <p class="lead-text">
                    Illini Redstone Computing was founded by University of
                    Illinois students who realized that Minecraft is the most
                    intuitive, engaging hardware development platform in
                    existence.
                </p>
            </div>
        </div>
    </section>

    <!-- Mission & Story -->
    <section class="section story-section">
        <div class="container">
            <div class="grid-2 story-grid">
                <div class="story-card card">
                    <div class="card-glow-accent"></div>
                    <h2 class="card-section-title">Our Mission</h2>
                    <p>
                        In traditional computer engineering courses like ECE 120
                        or CS 233, students study logic gates, Karnaugh maps,
                        and ALU multiplexers on paper or in schematic
                        simulators.
                    </p>
                    <p style="margin-top: 1rem;">
                        <strong
                            >At IRC, we turn those schematics into tangible
                            worlds.</strong
                        > You can physically walk into an adder, follow a single
                        redstone tick as it ripples through an ALU, and collaborate
                        on a persistent multiplayer server with students across all
                        engineering and computing disciplines.
                    </p>
                </div>

                <div class="story-card card">
                    <div class="card-glow-accent"></div>
                    <h2 class="card-section-title">Who Can Join?</h2>
                    <p>
                        <strong
                            >Any currently enrolled student at the University of
                            Illinois Urbana-Champaign.</strong
                        >
                    </p>
                    <p style="margin-top: 1rem;">
                        There are no application forms, no tryouts, and no
                        membership fees. Whether you are building your first
                        Redstone door or designing custom RISC-V microcode, we
                        provide the mentorship, community, and server resources
                        to bring your ideas to life.
                    </p>
                    <div class="badge-row">
                        <span class="pill-tag">Open to All Majors</span>
                        <span class="pill-tag">No Experience Required</span>
                        <span class="pill-tag">Free Membership</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Meeting Times & Location -->
    <section id="meetings" class="section meetings-section">
        <div class="container">
            <div class="section-heading">
                <span class="badge badge-redstone">
                    <span class="badge-pulse-dot"></span>
                    Weekly Schedule
                </span>
                <h2 class="section-title">Join Us at Our Next Meeting</h2>
                <p class="section-desc">
                    We meet every week during the semester for interactive
                    workshops and collaborative building.
                </p>
            </div>

            <div class="meeting-card card">
                <div class="card-glow-accent"></div>
                <div class="meeting-details-grid">
                    <!-- When & Where -->
                    <div class="detail-box">
                        <div class="detail-icon">📅</div>
                        <div class="detail-info">
                            <span class="detail-label">When</span>
                            <h3 class="detail-heading">
                                {currentSchedule.day}
                            </h3>
                            <p class="detail-sub">{currentSchedule.time}</p>
                            <span class="semester-pill"
                                >{currentSchedule.semester}</span
                            >
                        </div>
                    </div>

                    <div class="detail-box">
                        <div class="detail-icon">📍</div>
                        <div class="detail-info">
                            <span class="detail-label">Where</span>
                            <h3 class="detail-heading">
                                {currentSchedule.location}
                            </h3>
                            <p class="detail-sub highlight-room">
                                {currentSchedule.room}
                            </p>
                            <p class="detail-note">
                                Urbana, IL &bull; University of Illinois Campus
                            </p>
                        </div>
                    </div>

                    <div class="detail-box">
                        <div class="detail-icon">🎒</div>
                        <div class="detail-info">
                            <span class="detail-label">What to Bring</span>
                            <ul class="bring-list">
                                <li>Laptop with Minecraft Java Edition</li>
                                <li>
                                    External mouse (recommended for placing
                                    blocks)
                                </li>
                                <li>Laptop charger</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="meeting-footer">
                    <div class="meeting-note">
                        <span class="note-icon">💡</span>
                        <span>{currentSchedule.note}</span>
                    </div>
                    <a
                        href={clubInfo.discordUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary"
                        onclick={handleDiscordClick}
                    >
                        Join Discord for Room Reminders
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Workshop Curriculum Progression -->
    <section class="section curriculum-section">
        <div class="container">
            <div class="section-heading">
                <span class="badge badge-illini">Skill Progression</span>
                <h2 class="section-title">Semester Workshop Curriculum</h2>
                <p class="section-desc">
                    Our curriculum takes you step-by-step from raw redstone dust
                    to complete, programmable computer systems.
                </p>
            </div>

            <div class="tracks-list">
                {#each workshopTracks as track}
                    <div class="track-card card">
                        <div class="track-step-num">{track.step}</div>
                        <div class="track-content">
                            <div class="track-header">
                                <h3 class="track-title">{track.title}</h3>
                                <span
                                    class="track-badge"
                                    class:beginner={track.badge === "Beginner"}
                                    class:intermediate={track.badge ===
                                        "Intermediate"}
                                    class:advanced={track.badge === "Advanced"}
                                >
                                    {track.badge}
                                </span>
                            </div>
                            <p class="track-summary">{track.summary}</p>
                            <div class="topic-chips">
                                {#each track.topics as topic}
                                    <span class="topic-chip"
                                        >&bull; {topic}</span
                                    >
                                {/each}
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>

    <!-- Minecraft Server Details -->
    <section class="section server-section">
        <div class="container">
            <div class="server-box card">
                <div class="card-glow-accent"></div>
                <div class="server-inner">
                    <div class="server-text">
                        <span class="badge badge-redstone"
                            >IRC Dedicated Build Server</span
                        >
                        <h2 class="server-title">
                            Engineered for Massive Circuits
                        </h2>
                        <p>
                            Running complex redstone computers requires precise
                            tick timing. Our custom server is optimized with
                            Fabric, Carpet mod, and Lithium to ensure 20.0 TPS
                            even during heavy logic execution.
                        </p>
                        <div class="server-meta-tags">
                            <div class="meta-tag">
                                <span class="meta-label">SERVER IP:</span>
                                <code class="meta-code"
                                    >{clubInfo.serverIp}</code
                                >
                            </div>
                            <div class="meta-tag">
                                <span class="meta-label">VERSION:</span>
                                <span class="meta-val"
                                    >{clubInfo.minecraftVersion}</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="server-specs">
                        <div class="spec-card">
                            <span class="spec-val">20.0 TPS</span>
                            <span class="spec-desc">Tick Rate Optimization</span
                            >
                        </div>
                        <div class="spec-card">
                            <span class="spec-val">Carpet Mod</span>
                            <span class="spec-desc"
                                >Tick Freeze & Step Debugging</span
                            >
                        </div>
                        <div class="spec-card">
                            <span class="spec-val">Creative Plots</span>
                            <span class="spec-desc"
                                >Isolated Sandbox & Schematics</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="section faq-section">
        <div class="container">
            <div class="section-heading">
                <span class="badge badge-illini">FAQ</span>
                <h2 class="section-title">Frequently Asked Questions</h2>
                <p class="section-desc">
                    Got questions before stopping by? Here is everything you
                    need to know.
                </p>
            </div>

            <div class="faq-container">
                {#each clubFaqs as faq, index}
                    <div
                        class="faq-item card"
                        class:open={openFaqIndex === index}
                    >
                        <button
                            type="button"
                            class="faq-trigger"
                            onclick={() => toggleFaq(index)}
                            aria-expanded={openFaqIndex === index}
                        >
                            <span class="faq-q">{faq.question}</span>
                            <span class="faq-icon"
                                >{openFaqIndex === index ? "−" : "+"}</span
                            >
                        </button>
                        {#if openFaqIndex === index}
                            <div class="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        {/if}
                    </div>
                {/each}
            </div>
        </div>
    </section>
</div>

<style>
    .about-page {
        padding-bottom: 3rem;
    }

    .about-hero {
        padding-top: 4.5rem;
        padding-bottom: 3rem;
        text-align: center;
        background: radial-gradient(
            ellipse 60% 40% at 50% 0%,
            rgba(19, 41, 75, 0.3),
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
        font-size: 1.2rem;
        color: #cbd5e1;
        line-height: 1.6;
    }

    .uiuc-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--illini-orange);
    }

    /* Story */
    .story-card {
        padding: 2.25rem;
    }

    .card-section-title {
        font-size: 1.45rem;
        margin-bottom: 1rem;
        color: #ffffff;
    }

    .badge-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1.5rem;
    }

    .pill-tag {
        background: rgba(255, 95, 5, 0.12);
        border: 1px solid rgba(255, 95, 5, 0.3);
        color: #ff9d66;
        padding: 0.35rem 0.75rem;
        border-radius: var(--radius-full);
        font-size: 0.8rem;
        font-weight: 600;
    }

    /* Meetings Card */
    .meeting-card {
        padding: 2.5rem;
        background: #111622;
    }

    .meeting-details-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 2rem;
        margin-bottom: 2.5rem;
    }

    .detail-box {
        display: flex;
        gap: 1.25rem;
        align-items: flex-start;
    }

    .detail-icon {
        font-size: 2rem;
        background: #192233;
        padding: 0.75rem;
        border-radius: var(--radius-md);
        border: 1px solid var(--border-subtle);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .detail-label {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--illini-orange);
        text-transform: uppercase;
        letter-spacing: 0.08em;
    }

    .detail-heading {
        font-size: 1.25rem;
        color: #ffffff;
        margin-block: 0.2rem;
    }

    .detail-sub {
        font-size: 1rem;
        color: #cbd5e1;
    }

    .highlight-room {
        color: #ff7083;
        font-weight: 700;
    }

    .detail-note {
        font-size: 0.82rem;
        color: var(--text-muted);
        margin-top: 0.25rem;
    }

    .semester-pill {
        display: inline-block;
        margin-top: 0.5rem;
        font-size: 0.75rem;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--border-subtle);
        padding: 0.2rem 0.6rem;
        border-radius: var(--radius-full);
        color: var(--text-secondary);
    }

    .bring-list {
        list-style: none;
        margin-top: 0.35rem;
        font-size: 0.88rem;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        color: var(--text-secondary);
    }

    .bring-list li::before {
        content: "✔ ";
        color: var(--illini-orange);
        font-weight: bold;
    }

    .meeting-footer {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        padding-top: 1.75rem;
        border-top: 1px solid var(--border-subtle);
    }

    .meeting-note {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.95rem;
        color: #cbd5e1;
        max-width: 600px;
    }

    .note-icon {
        font-size: 1.3rem;
    }

    /* Section Headings */
    .section-heading {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2.75rem;
    }

    .section-title {
        font-size: clamp(1.8rem, 4vw, 2.5rem);
        margin-top: 0.75rem;
        margin-bottom: 0.85rem;
    }

    .section-desc {
        font-size: 1.05rem;
        max-width: 640px;
    }

    /* Workshop Tracks */
    .tracks-list {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
        max-width: 900px;
        margin-inline: auto;
    }

    .track-card {
        display: flex;
        gap: 1.75rem;
        align-items: flex-start;
        padding: 1.5rem 1.75rem;
    }

    .track-step-num {
        font-family: var(--font-display);
        font-size: 2rem;
        font-weight: 800;
        color: var(--redstone-base);
        background: rgba(255, 45, 70, 0.1);
        width: 54px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-md);
        border: 1px solid rgba(255, 45, 70, 0.25);
        flex-shrink: 0;
    }

    .track-content {
        flex: 1;
    }

    .track-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
        margin-bottom: 0.35rem;
    }

    .track-title {
        font-size: 1.25rem;
        color: #ffffff;
    }

    .track-badge {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        padding: 0.2rem 0.65rem;
        border-radius: var(--radius-full);
        font-weight: 700;
        text-transform: uppercase;
    }

    .track-badge.beginner {
        background: rgba(34, 197, 94, 0.15);
        color: #4ade80;
        border: 1px solid rgba(34, 197, 94, 0.3);
    }

    .track-badge.intermediate {
        background: rgba(234, 179, 8, 0.15);
        color: #facc15;
        border: 1px solid rgba(234, 179, 8, 0.3);
    }

    .track-badge.advanced {
        background: rgba(255, 45, 70, 0.15);
        color: #ff7083;
        border: 1px solid rgba(255, 45, 70, 0.3);
    }

    .track-summary {
        font-size: 0.95rem;
        margin-bottom: 0.75rem;
    }

    .topic-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .topic-chip {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        background: #19202f;
        padding: 0.25rem 0.6rem;
        border-radius: 4px;
        color: #cbd5e1;
    }

    /* Server Details */
    .server-box {
        padding: 3rem;
        background: radial-gradient(
            ellipse at 80% 50%,
            #1a2538 0%,
            #101622 100%
        );
    }

    .server-inner {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 3rem;
        align-items: center;
    }

    .server-title {
        font-size: 2rem;
        margin-top: 0.75rem;
        margin-bottom: 1rem;
        color: #ffffff;
    }

    .server-meta-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        margin-top: 1.75rem;
    }

    .meta-tag {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .meta-label {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        color: var(--illini-orange);
        letter-spacing: 0.08em;
    }

    .meta-code {
        font-size: 1.1rem;
        font-weight: 700;
        color: #ffffff;
        background: #1b2435;
        padding: 0.35rem 0.75rem;
        border-radius: var(--radius-sm);
        border: 1px solid var(--border-subtle);
    }

    .meta-val {
        font-size: 1rem;
        font-weight: 600;
        color: #cbd5e1;
    }

    .server-specs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .spec-card {
        background: rgba(10, 13, 20, 0.6);
        border: 1px solid var(--border-subtle);
        padding: 1rem 1.25rem;
        border-radius: var(--radius-md);
        display: flex;
        flex-direction: column;
    }

    .spec-val {
        font-family: var(--font-mono);
        font-size: 1.25rem;
        font-weight: 800;
        color: #ff5c72;
    }

    .spec-desc {
        font-size: 0.85rem;
        color: var(--text-secondary);
    }

    @media (max-width: 850px) {
        .server-inner {
            grid-template-columns: 1fr;
        }
    }

    /* FAQ */
    .faq-container {
        max-width: 800px;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .faq-item {
        padding: 0;
        cursor: pointer;
    }

    .faq-trigger {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1.25rem 1.5rem;
        background: none;
        border: none;
        color: #ffffff;
        text-align: left;
        cursor: pointer;
        font-size: 1.05rem;
        font-weight: 600;
        font-family: var(--font-sans);
    }

    .faq-icon {
        font-family: var(--font-mono);
        font-size: 1.4rem;
        color: var(--illini-orange);
    }

    .faq-answer {
        padding: 0 1.5rem 1.25rem;
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--text-secondary);
        border-top: 1px solid rgba(255, 255, 255, 0.05);
        padding-top: 0.75rem;
    }
</style>
