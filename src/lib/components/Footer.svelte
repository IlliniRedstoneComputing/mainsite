<script lang="ts">
    import { clubInfo } from "$lib/data/club";
    import { currentSchedule } from "$lib/data/meetings";
</script>

<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <!-- Column 1: Identity & Affiliation -->
            <div class="footer-col brand-col">
                <div class="brand">
                    <div class="brand-icon">
                        <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
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
                        </svg>
                    </div>
                    <span class="brand-title">Illini Redstone Computing</span>
                </div>
                <p class="brand-desc">
                    Official Registered Student Organization at the University
                    of Illinois Urbana-Champaign. Bridging digital hardware
                    architecture, logic synthesis, and Minecraft redstone.
                </p>
                <div class="affiliation-badge">
                    <span class="uiuc-dot"></span>
                    <span>University of Illinois Urbana-Champaign RSO</span>
                </div>
            </div>

            <!-- Column 2: Navigation -->
            <div class="footer-col">
                <h4 class="col-title">Navigation</h4>
                <ul class="link-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About & Mission</a></li>
                    <li><a href="/about#meetings">Meeting Times & Rooms</a></li>
                    <li><a href="/about#faq">Frequently Asked Questions</a></li>
                    <li><a href="/officers">Executive Board & Leads</a></li>
                </ul>
            </div>

            <!-- Column 3: Meetings & Server -->
            <div class="footer-col">
                <h4 class="col-title">Weekly Meetings</h4>
                <div class="meeting-highlight">
                    <p class="meeting-time">
                        <strong>{currentSchedule.day}</strong>
                    </p>
                    <p>{currentSchedule.time}</p>
                    <p class="meeting-room">
                        {currentSchedule.location} &bull; {currentSchedule.room}
                    </p>
                </div>
                <h4 class="col-title" style="margin-top: 1.25rem;">
                    Multiplayer Server
                </h4>
                <p class="server-tag"><code>{clubInfo.serverIp}</code></p>
                <p class="server-ver">{clubInfo.minecraftVersion}</p>
            </div>

            <!-- Column 4: Community & Contact -->
            <div class="footer-col">
                <h4 class="col-title">Connect</h4>
                <ul class="link-list">
                    <li>
                        <a
                            href={clubInfo.discordUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="external-link"
                        >
                            Discord Community &rarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href={clubInfo.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="external-link"
                        >
                            GitHub Organization &rarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href={`mailto:${clubInfo.email}`}
                            class="external-link"
                        >
                            {clubInfo.email}
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Disclaimer & Bottom Bar -->
        <div class="footer-bottom">
            <p class="disclaimer">
                Illini Redstone Computing is a registered student organization
                at the University of Illinois Urbana-Champaign. Not an official
                Minecraft product. Not approved by or associated with Mojang or
                Microsoft.
            </p>
            <p class="copyright">
                &copy; {new Date().getFullYear()} Illini Redstone Computing.
            </p>
        </div>
    </div>
</footer>

<style>
    .footer {
        margin-top: auto;
        background-color: #080a0f;
        border-top: 1px solid var(--border-subtle);
        padding-top: 4rem;
        padding-bottom: 2.5rem;
    }

    .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1.3fr 1fr;
        gap: 3rem;
        margin-bottom: 3.5rem;
    }

    @media (max-width: 960px) {
        .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
        }
    }

    @media (max-width: 600px) {
        .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    .brand {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
    }

    .brand-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: #19202f;
        border: 1px solid #2a3750;
        border-radius: var(--radius-sm);
    }

    .brand-title {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 1.1rem;
        color: #ffffff;
    }

    .brand-desc {
        font-size: 0.9rem;
        line-height: 1.6;
        margin-bottom: 1.25rem;
        max-width: 380px;
    }

    .affiliation-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.75rem;
        border-radius: var(--radius-sm);
        background-color: rgba(19, 41, 75, 0.4);
        border: 1px solid rgba(255, 95, 5, 0.3);
        font-size: 0.8rem;
        color: #cbd5e1;
        font-weight: 500;
    }

    .uiuc-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: var(--illini-orange);
    }

    .col-title {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--text-primary);
        margin-bottom: 1rem;
        font-family: var(--font-mono);
    }

    .link-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
    }

    .link-list a {
        font-size: 0.92rem;
        color: var(--text-secondary);
        transition: color 0.15s ease;
    }

    .link-list a:hover {
        color: #ffffff;
    }

    .meeting-highlight {
        font-size: 0.88rem;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--border-subtle);
        padding: 0.85rem;
        border-radius: var(--radius-md);
    }

    .meeting-time {
        color: #ffffff;
        margin-bottom: 0.2rem;
    }

    .meeting-room {
        color: #ff9d66;
        margin-top: 0.3rem;
        font-weight: 500;
    }

    .server-tag {
        font-size: 0.85rem;
        color: #ffffff;
        margin-bottom: 0.25rem;
    }

    .server-tag code {
        background: #161f30;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        border: 1px solid var(--border-subtle);
        color: #ff7083;
    }

    .server-ver {
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    .footer-bottom {
        border-top: 1px solid var(--border-subtle);
        padding-top: 2rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;
        text-align: center;
    }

    .disclaimer {
        font-size: 0.78rem;
        color: var(--text-muted);
        max-width: 800px;
    }

    .copyright {
        font-size: 0.8rem;
        color: var(--text-muted);
    }
</style>
