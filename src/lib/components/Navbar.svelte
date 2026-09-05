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
                <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <!-- Redstone Torch / Circuit Icon -->
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
                stroke-width="2"
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
        background-color: rgba(10, 13, 20, 0.85);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-bottom: 1px solid var(--border-subtle);
        display: flex;
        align-items: center;
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
        width: 40px;
        height: 40px;
        background: #19202f;
        border: 1px solid #2a3750;
        border-radius: var(--radius-md);
        box-shadow: 0 0 12px rgba(255, 45, 70, 0.2);
    }

    .brand-text {
        display: flex;
        flex-direction: column;
    }

    .brand-title {
        font-family: var(--font-display);
        font-weight: 800;
        font-size: 1.125rem;
        color: #ffffff;
        line-height: 1.1;
        letter-spacing: -0.01em;
    }

    .brand-subtitle {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--illini-orange);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-family: var(--font-mono);
    }

    .desktop-nav {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .nav-link {
        padding: 0.5rem 0.9rem;
        border-radius: var(--radius-sm);
        font-size: 0.9375rem;
        font-weight: 500;
        color: var(--text-secondary);
        transition: all 0.2s ease;
    }

    .nav-link:hover {
        color: var(--text-primary);
        background-color: rgba(255, 255, 255, 0.05);
    }

    .nav-link.active {
        color: #ffffff;
        background-color: rgba(255, 45, 70, 0.12);
        border: 1px solid rgba(255, 45, 70, 0.25);
    }

    .btn-sm {
        padding: 0.5rem 1.1rem;
        font-size: 0.875rem;
    }

    .desktop-actions {
        display: flex;
        align-items: center;
    }

    .mobile-toggle {
        display: none;
        background: none;
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-sm);
        color: var(--text-primary);
        padding: 0.4rem;
        cursor: pointer;
    }

    .mobile-drawer {
        position: absolute;
        top: var(--header-height);
        left: 0;
        right: 0;
        background-color: var(--bg-surface);
        border-bottom: 1px solid var(--border-subtle);
        padding-block: 1.5rem;
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6);
    }

    .mobile-drawer-inner {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .mobile-link {
        padding: 0.75rem 1rem;
        border-radius: var(--radius-md);
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-secondary);
        background-color: var(--bg-main);
    }

    .mobile-link.active {
        color: #ffffff;
        background-color: rgba(255, 45, 70, 0.15);
        border: 1px solid rgba(255, 45, 70, 0.3);
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
