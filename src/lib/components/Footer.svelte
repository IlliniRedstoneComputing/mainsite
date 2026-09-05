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
                        >
                            <rect
                                x="10"
                                y="10"
                                width="4"
                                height="11"
                                fill="#854d0e"
                                stroke="#451a03"
                                stroke-width="1.5"
                            />
                            <rect
                                x="7"
                                y="3"
                                width="10"
                                height="8"
                                fill="#ff253f"
                                stroke="#ff6b7e"
                                stroke-width="1.5"
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
                    <span>UIUC REGISTERED STUDENT ORGANIZATION</span>
                </div>
            </div>

            <!-- Column 2: Navigation -->
            <div class="footer-col">
                <h4 class="col-title">NAVIGATION</h4>
                <ul class="link-list">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT & MISSION</a></li>
                    <li><a href="/about#meetings">MEETING TIMES & ROOMS</a></li>
                    <li><a href="/about#faq">FREQUENTLY ASKED QUESTIONS</a></li>
                    <li><a href="/officers">EXECUTIVE BOARD & LEADS</a></li>
                </ul>
            </div>

            <!-- Column 3: Meetings & Server -->
            <div class="footer-col">
                <h4 class="col-title">WEEKLY MEETINGS</h4>
                <div class="meeting-highlight">
                    <p class="meeting-time">
                        <strong>{currentSchedule.day.toUpperCase()}</strong>
                    </p>
                    <p>{currentSchedule.time}</p>
                    <p class="meeting-room">
                        {currentSchedule.location} &bull; {currentSchedule.room}
                    </p>
                </div>
                <h4 class="col-title" style="margin-top: 1.25rem;">
                    MULTIPLAYER SERVER
                </h4>
                <p class="server-tag"><code>{clubInfo.serverIp}</code></p>
                <p class="server-ver">{clubInfo.minecraftVersion}</p>
            </div>

            <!-- Column 4: Community & Contact -->
            <div class="footer-col">
                <h4 class="col-title">CONNECT</h4>
                <ul class="link-list">
                    <li>
                        <a
                            href={clubInfo.discordUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="external-link"
                        >
                            DISCORD COMMUNITY &rarr;
                        </a>
                    </li>
                    <li>
                        <a
                            href={clubInfo.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="external-link"
                        >
                            GITHUB ORGANIZATION &rarr;
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
        background-color: #07090e;
        border-top: 3px solid #1c2637;
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
        width: 36px;
        height: 36px;
        background: #141b27;
        border-top: 2px solid #374662;
        border-left: 2px solid #374662;
        border-bottom: 2px solid #0b0f17;
        border-right: 2px solid #0b0f17;
    }

    .brand-title {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 1.3rem;
        color: #ffffff;
        letter-spacing: 0.03em;
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
        background-color: rgba(19, 41, 75, 0.4);
        border-top: 2px solid #ff7b2b;
        border-left: 2px solid #ff7b2b;
        border-bottom: 2px solid #802f00;
        border-right: 2px solid #802f00;
        font-family: var(--font-display);
        font-size: 0.8rem;
        color: #cbd5e1;
        font-weight: 700;
    }

    .uiuc-dot {
        width: 8px;
        height: 8px;
        background-color: var(--illini-orange);
    }

    .col-title {
        font-size: 1.05rem;
        letter-spacing: 0.06em;
        color: #ffffff;
        margin-bottom: 1rem;
        font-family: var(--font-display);
    }

    .link-list {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
    }

    .link-list a {
        font-family: var(--font-display);
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--text-secondary);
        transition: color 0.15s ease;
        letter-spacing: 0.03em;
    }

    .link-list a:hover {
        color: #ff5c72;
    }

    .meeting-highlight {
        font-size: 0.88rem;
        background: #101622;
        border-top: 2px solid #2d3b55;
        border-left: 2px solid #2d3b55;
        border-bottom: 2px solid #0d121c;
        border-right: 2px solid #0d121c;
        padding: 0.85rem;
        box-shadow: 2px 2px 0px #000000;
    }

    .meeting-time {
        color: #ffffff;
        font-family: var(--font-display);
        font-size: 1rem;
        margin-bottom: 0.2rem;
    }

    .meeting-room {
        color: #ff9d66;
        margin-top: 0.3rem;
        font-weight: 600;
    }

    .server-tag {
        font-size: 0.85rem;
        color: #ffffff;
        margin-bottom: 0.25rem;
    }

    .server-tag code {
        background: #161f30;
        padding: 0.3rem 0.6rem;
        border-top: 2px solid #33435e;
        border-left: 2px solid #33435e;
        border-bottom: 2px solid #0b0f17;
        border-right: 2px solid #0b0f17;
        color: #ff6e82;
        font-weight: 700;
    }

    .server-ver {
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    .footer-bottom {
        border-top: 2px solid #1c2637;
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
        font-size: 0.82rem;
        color: var(--text-muted);
        font-family: var(--font-display);
    }
</style>
