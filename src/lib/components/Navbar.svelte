<script lang="ts">
    import { page } from "$app/state";
    import { clubInfo } from "$lib/data/club";
    import { trackEvent } from "$lib/analytics";

    let isMobileMenuOpen = $state(false);

    function toggleMenu() {
        isMobileMenuOpen = !isMobileMenuOpen;
    }

    function closeMenu() {
        isMobileMenuOpen = false;
    }

    function handleDiscordClick() {
        trackEvent("nav_discord_clicked", { location: "navbar" });
    }
</script>

<header class="header">
    <div class="container header-inner">
        <!-- Brand Logo -->
        <a href="/" class="brand" onclick={closeMenu}>
            <div class="brand-icon">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
                    <!-- Minecraft Redstone Torch Block Icon -->
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
                    <rect x="9" y="5" width="6" height="4" fill="#ffffff" />
                </svg>
            </div>
            <div class="brand-text">
                <span class="brand-title">Illini Redstone</span>
                <span class="brand-subtitle">Computing</span>
            </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="desktop-nav" aria-label="Main Navigation">
            <a
                href="/"
                class="nav-link"
                class:active={page.url.pathname === "/"}
            >
                Home
            </a>
            <a
                href="/about"
                class="nav-link"
                class:active={page.url.pathname.startsWith("/about")}
            >
                About & Meetings
            </a>
            <a
                href="/officers"
                class="nav-link"
                class:active={page.url.pathname.startsWith("/officers")}
            >
                Officers
            </a>
        </nav>

        <!-- Desktop Action Button -->
        <div class="desktop-actions">
            <a
                href={clubInfo.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-primary btn-sm"
                onclick={handleDiscordClick}
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path
                        d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                    />
                </svg>
                <span>Join Discord</span>
            </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
            type="button"
            class="mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            onclick={toggleMenu}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
            >
                {#if isMobileMenuOpen}
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                {:else}
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                {/if}
            </svg>
        </button>
    </div>

    <!-- Mobile Menu Drawer -->
    {#if isMobileMenuOpen}
        <div class="mobile-drawer">
            <div class="container mobile-drawer-inner">
                <a
                    href="/"
                    class="mobile-link"
                    class:active={page.url.pathname === "/"}
                    onclick={closeMenu}
                >
                    Home
                </a>
                <a
                    href="/about"
                    class="mobile-link"
                    class:active={page.url.pathname.startsWith("/about")}
                    onclick={closeMenu}
                >
                    About & Meetings
                </a>
                <a
                    href="/officers"
                    class="mobile-link"
                    class:active={page.url.pathname.startsWith("/officers")}
                    onclick={closeMenu}
                >
                    Officers
                </a>
                <div class="mobile-cta">
                    <a
                        href={clubInfo.discordUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-primary"
                        style="width: 100%;"
                        onclick={() => {
                            handleDiscordClick();
                            closeMenu();
                        }}
                    >
                        Join Discord
                    </a>
                </div>
            </div>
        </div>
    {/if}
</header>

<style>
    .header {
        position: sticky;
        top: 0;
        z-index: 100;
        height: var(--header-height);
        background-color: rgba(10, 13, 19, 0.95);
        border-bottom: 3px solid #1e293b;
        display: flex;
        align-items: center;
        box-shadow: 0 4px 0px rgba(0, 0, 0, 0.4);
    }

    .header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
    }

    .brand {
        display: flex;
        align-items: center;
        gap: 0.85rem;
    }

    .brand-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        background: #141b27;
        border-top: 2px solid #374662;
        border-left: 2px solid #374662;
        border-bottom: 2px solid #0b0f17;
        border-right: 2px solid #0b0f17;
        box-shadow: 2px 2px 0px #000000;
    }

    .brand-text {
        display: flex;
        flex-direction: column;
    }

    .brand-title {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 1.35rem;
        color: #ffffff;
        line-height: 1.05;
        letter-spacing: 0.03em;
    }

    .brand-subtitle {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--illini-orange);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-family: var(--font-display);
    }

    .desktop-nav {
        display: flex;
        align-items: center;
        gap: 0.4rem;
    }

    .nav-link {
        padding: 0.5rem 1rem;
        font-family: var(--font-display);
        font-size: 1.05rem;
        font-weight: 600;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.04em;
        border-top: 2px solid transparent;
        border-left: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-right: 2px solid transparent;
        transition: all 0.1s ease;
    }

    .nav-link:hover {
        color: #ffffff;
        background-color: #172132;
        border-top-color: #384a6b;
        border-left-color: #384a6b;
        border-bottom-color: #0b0f17;
        border-right-color: #0b0f17;
    }

    .nav-link.active {
        color: #ffffff;
        background-color: rgba(255, 37, 63, 0.15);
        border-top-color: #ff4d64;
        border-left-color: #ff4d64;
        border-bottom-color: #590914;
        border-right-color: #590914;
        box-shadow: 2px 2px 0px #000000;
    }

    .btn-sm {
        padding: 0.55rem 1.1rem;
        font-size: 0.95rem;
    }

    .desktop-actions {
        display: flex;
        align-items: center;
    }

    .mobile-toggle {
        display: none;
        background: #141b27;
        border-top: 2px solid #374662;
        border-left: 2px solid #374662;
        border-bottom: 2px solid #0b0f17;
        border-right: 2px solid #0b0f17;
        box-shadow: 2px 2px 0px #000000;
        color: var(--text-primary);
        padding: 0.45rem;
        cursor: pointer;
    }

    .mobile-drawer {
        position: absolute;
        top: var(--header-height);
        left: 0;
        right: 0;
        background-color: #0f141e;
        border-bottom: 3px solid #1e293b;
        padding-block: 1.5rem;
        box-shadow: 0 16px 0px rgba(0, 0, 0, 0.6);
    }

    .mobile-drawer-inner {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .mobile-link {
        padding: 0.75rem 1rem;
        font-family: var(--font-display);
        font-size: 1.15rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--text-secondary);
        background-color: #161e2c;
        border-top: 2px solid #2d3b55;
        border-left: 2px solid #2d3b55;
        border-bottom: 2px solid #0d121c;
        border-right: 2px solid #0d121c;
    }

    .mobile-link.active {
        color: #ffffff;
        background-color: rgba(255, 37, 63, 0.2);
        border-top-color: #ff4d64;
        border-left-color: #ff4d64;
        border-bottom-color: #590914;
        border-right-color: #590914;
    }

    .mobile-cta {
        margin-top: 0.5rem;
    }

    @media (max-width: 768px) {
        .desktop-nav,
        .desktop-actions {
            display: none;
        }

        .mobile-toggle {
            display: flex;
        }
    }
</style>
