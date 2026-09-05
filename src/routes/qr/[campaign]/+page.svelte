<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import { clubInfo } from "$lib/data/club";
    import { currentSchedule } from "$lib/data/meetings";
    import { recordCampaignVisit, trackEvent } from "$lib/analytics";

    let campaign = $derived(page.params.campaign || "campus-flyer");
    let humanizedCampaign = $derived(
        campaign
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
    );

    onMount(() => {
        recordCampaignVisit(campaign, "qr_flyer_landing");
    });

    function handleJoinDiscord() {
        trackEvent("qr_join_discord_clicked", {
            campaign,
            location: "qr_landing_page",
        });
    }

    function handleBrowseSite() {
        trackEvent("qr_browse_site_clicked", {
            campaign,
        });
    }
</script>

<svelte:head>
    <title>Welcome to {clubInfo.name} | Flyer QR</title>
    <meta
        name="description"
        content="You scanned our flyer! Join Illini Redstone Computing at UIUC - building computer architectures & logic in Minecraft."
    />
</svelte:head>

<div class="qr-landing">
    <div class="container qr-container">
        <div class="qr-card card">
            <div class="card-glow-accent"></div>

            <!-- Flyer Attribution Badge -->
            <div class="attribution-badge">
                <span class="badge-pulse-dot"></span>
                <span>Flyer Source: <strong>{humanizedCampaign}</strong></span>
            </div>

            <div class="qr-icon-hero">
                <svg
                    viewBox="0 0 24 24"
                    width="48"
                    height="48"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <rect
                        x="9"
                        y="11"
                        width="6"
                        height="10"
                        rx="1"
                        fill="#713f12"
                        stroke="#451a03"
                    />
                    <rect
                        x="8"
                        y="4"
                        width="8"
                        height="7"
                        rx="2"
                        fill="#ff2d46"
                        stroke="#ff5c72"
                    />
                    <line
                        x1="12"
                        y1="2"
                        x2="12"
                        y2="4"
                        stroke="#ff8595"
                        stroke-linecap="round"
                    />
                    <circle cx="12" cy="7.5" r="1.5" fill="#ffffff" />
                </svg>
            </div>

            <h1 class="qr-title">Welcome to Illini Redstone Computing!</h1>
            <p class="qr-tagline">{clubInfo.tagline}</p>

            <p class="qr-desc">
                We are UIUC's official RSO bringing students together to build
                full digital logic circuits, ALUs, memory, and programmable CPUs
                inside Minecraft.
            </p>

            <!-- 1-Tap Conversion Actions -->
            <div class="qr-actions">
                <a
                    href={clubInfo.discordUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary btn-lg"
                    onclick={handleJoinDiscord}
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                        />
                    </svg>
                    <span>Join Our Discord</span>
                </a>
                <a
                    href="/"
                    class="btn btn-secondary"
                    onclick={handleBrowseSite}
                >
                    Explore Club Website &rarr;
                </a>
            </div>

            <!-- Next Meeting Glance -->
            <div class="meeting-glance">
                <div class="glance-title">
                    <span>📅</span>
                    <strong>Weekly Meetings</strong>
                </div>
                <p class="glance-time">
                    {currentSchedule.day} &bull; {currentSchedule.time}
                </p>
                <p class="glance-room">
                    {currentSchedule.location} ({currentSchedule.room})
                </p>
                <p class="glance-note">
                    No experience or registration required. Just bring your
                    laptop!
                </p>
            </div>

            <!-- RSO Tag -->
            <div class="qr-footer-meta">
                <span class="uiuc-dot"></span>
                <span>{clubInfo.rsoStatus} &bull; University of Illinois</span>
            </div>
        </div>
    </div>
</div>

<style>
    .qr-landing {
        padding-block: 3.5rem;
        min-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .qr-container {
        max-width: 620px;
    }

    .qr-card {
        padding: 3rem 2.25rem;
        text-align: center;
        background: #111622;
        border: 1px solid rgba(255, 45, 70, 0.35);
        box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7);
    }

    .attribution-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(255, 95, 5, 0.15);
        border: 1px solid rgba(255, 95, 5, 0.35);
        color: #ff9d66;
        padding: 0.35rem 0.85rem;
        border-radius: var(--radius-full);
        font-size: 0.82rem;
        margin-bottom: 1.5rem;
        font-family: var(--font-mono);
    }

    .qr-icon-hero {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 72px;
        height: 72px;
        background: #182030;
        border: 2px solid #2a3750;
        border-radius: var(--radius-lg);
        box-shadow: 0 0 24px rgba(255, 45, 70, 0.3);
        margin-bottom: 1.25rem;
    }

    .qr-title {
        font-size: clamp(1.6rem, 4vw, 2.1rem);
        color: #ffffff;
        margin-bottom: 0.5rem;
    }

    .qr-tagline {
        font-size: 1rem;
        color: var(--illini-orange);
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .qr-desc {
        font-size: 0.95rem;
        color: var(--text-secondary);
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .qr-actions {
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
        margin-bottom: 2.25rem;
    }

    .btn-lg {
        padding: 0.95rem 1.6rem;
        font-size: 1.05rem;
    }

    .meeting-glance {
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-md);
        padding: 1.25rem;
        text-align: left;
        margin-bottom: 1.75rem;
    }

    .glance-title {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #ffffff;
        font-size: 0.95rem;
        margin-bottom: 0.35rem;
    }

    .glance-time {
        color: #cbd5e1;
        font-size: 0.9rem;
        font-weight: 600;
    }

    .glance-room {
        color: #ff7083;
        font-size: 0.88rem;
        font-weight: 500;
        margin-top: 0.15rem;
    }

    .glance-note {
        font-size: 0.8rem;
        color: var(--text-muted);
        margin-top: 0.5rem;
        border-top: 1px dashed var(--border-subtle);
        padding-top: 0.5rem;
    }

    .qr-footer-meta {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    .uiuc-dot {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background-color: var(--illini-orange);
    }
</style>
