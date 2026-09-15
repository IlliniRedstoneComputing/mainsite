<script lang="ts">
    import { onNavigate } from "$app/navigation";
    import { page } from "$app/state";
    import favicon from "$lib/assets/favicon.svg";
    import Button from "$lib/components/Button.svelte";
    import GridSnakes from "$lib/components/GridSnakes.svelte";
    import { animationState } from "$lib/state/animation.svelte";
    import TextShadow3D from "$lib/components/TextShadow3D.svelte";

    import "../app.css";

    let { children } = $props();

    onNavigate(navigation => {
        if (typeof document === "undefined" || !document.startViewTransition) {
            return;
        }

        return new Promise<void>(resolve => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="wip-banner">
    <p>This is a work in progress!</p>
</div>
<div class="container">
    <aside>
        <div class="title font-chakra">
            <h1>
                <TextShadow3D
                    color="var(--color-illini-orange-dark)"
                    textColor="var(--color-illini-orange)"
                    x="0.03125rem">I</TextShadow3D
                >
                <TextShadow3D
                    color="var(--color-redstone-dark)"
                    textColor="var(--color-redstone)">R</TextShadow3D
                >
                <TextShadow3D
                    color="var(--color-illini-blue-dark)"
                    textColor="var(--color-illini-blue)"
                    x="-0.03125rem">C</TextShadow3D
                >
            </h1>
        </div>
        <nav class="links" aria-label="Primary navigation">
            <div class="link-category" class:active={page.url.pathname === "/"}>
                <a href="/" class="home category-header">Home</a>
            </div>
            <div
                class="link-category"
                class:active={page.url.pathname.startsWith("/about")}
            >
                <a href="/about" class="about category-header">About</a>
                <div class="sub-links">
                    <a
                        href="/about#faq"
                        class="about-faq"
                        class:active={page.url.pathname === "/about" &&
                            page.url.hash === "#faq"}><span>FAQ</span></a
                    >
                    <a
                        href="/about#meetings"
                        class="about-meetings"
                        class:active={page.url.pathname === "/about" &&
                            page.url.hash === "#meetings"}
                    >
                        <span>Meetings</span>
                    </a>
                </div>
            </div>
            <div
                class="link-category"
                class:active={page.url.pathname.startsWith("/contact")}
            >
                <a href="/contact" class="contact category-header">Contact</a>
                <div class="sub-links">
                    <a
                        href="/contact#socials"
                        class="contact-socials"
                        class:active={page.url.pathname === "/contact" &&
                            page.url.hash === "#socials"}
                    >
                        <span>Socials</span>
                    </a>
                    <a
                        href="/contact#links"
                        class="contact-links"
                        class:active={page.url.pathname === "/contact" &&
                            page.url.hash === "#links"}
                    >
                        <span>Links</span>
                    </a>
                    <a
                        href="/contact#members"
                        class="contact-members"
                        class:active={page.url.pathname === "/contact" &&
                            page.url.hash === "#members"}
                    >
                        <span>Members</span>
                    </a>
                </div>
            </div>
            <div
                class="link-category"
                class:active={page.url.pathname.startsWith("/projects")}
            >
                <a href="/projects" class="projects category-header">
                    Projects
                </a>
                <div class="sub-links">
                    <a
                        href="/projects#overture"
                        class:active={page.url.pathname.endsWith("/projects") &&
                            page.url.hash === "#overture"}>Overture CPU</a
                    >
                    <a
                        href="/projects#brainfck"
                        class:active={page.url.pathname.endsWith("/projects") &&
                            page.url.hash === "#brainfck"}>Brainf***</a
                    >
                </div>
            </div>
            <div
                class="link-category"
                class:active={page.url.pathname.startsWith("/guides")}
            >
                <a href="/logic" class="logic category-header">
                    Guides and Tutorials
                </a>
                <div class="sub-links">
                    <a
                        href="/guides"
                        class:active={page.url.pathname === "/guides"}
                        >Getting Started</a
                    >
                    <a
                        href="/guides/modpack"
                        class:active={page.url.pathname === "/guides/modpack"}
                        >Modpack and Tooling</a
                    >
                    <a
                        href="/guides/logic"
                        class:active={page.url.pathname == "/guides/logic"}
                        >Into to Logic</a
                    >
                </div>
            </div>
        </nav>

        <div class="sidebar-bottom">
            <div class="buttons">
                <Button
                    href="https://discord.gg/3XwGbCXmwq"
                    target="_blank"
                    rel="noreferrer"
                    color="var(--color-discord)"
                >
                    Discord
                </Button>
                <Button
                    href="https://www.instagram.com/illini_computing/"
                    target="_blank"
                    rel="noreferrer"
                    color="var(--color-instagram)"
                >
                    Instagram
                </Button>
            </div>
        </div>
    </aside>
    <main>
        <GridSnakes pause={!animationState.enabled} />
        <div class="page-content">
            {@render children()}
        </div>
    </main>
</div>

<style lang="less">
    .wip-banner {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: var(--color-redstone);
        color: white;
        text-align: center;
        z-index: 1000;
    }

    .container {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100vh;
    }
    main {
        width: calc(100% - 20rem);
        height: 100vh;
        margin-left: 20rem;
        overflow-y: auto;
    }

    .page-content {
        position: relative;
        min-height: 100%;
    }
    aside {
        position: fixed;
        view-transition-name: sidebar;
        inset: 0 auto 0 0;
        width: 20rem;
        height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: stretch;

        background-color: var(--color-bg);
        box-shadow: inset -0.75rem 0 0.9rem -0.75rem rgba(0, 0, 0, 0.6);
    }

    .title {
        font-size: 2.5rem;
        text-align: center;
        position: relative;
        perspective: 250px;
    }

    .title h1 {
        transform: rotateX(30deg) translateZ(0);
        font-weight: 700;
        display: flex;
        justify-content: center;
        gap: 0.5rem;
    }

    .sidebar-bottom {
        width: 100%;
        margin-top: auto;
        padding: 1rem 1.5rem 1.5rem;
    }

    .links {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem 1.5rem 0;
        font-size: 1.1rem;
    }

    .link-category {
        position: relative;

        // border-left: 0.125rem solid #779;
        border-top: 0.125rem solid #779;
        border-bottom: 0.125rem solid #557;
        // border-right: 0.125rem solid #557;
        background-color: color-mix(in srgb, #000000 15%, var(--color-bg));

        padding: 0.5rem 0.75rem;

        transition:
            background-color 0.1s ease-in-out,
            border-color 0.1s ease-in-out;

        &.active {
            background-color: color-mix(in srgb, #fff 5%, var(--color-bg));
            border-color: var(--color-redstone-active);
        }
    }

    .category-header {
        position: relative;
        padding: 0.25rem 0;
        font-weight: 700;
    }

    .sub-links {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        margin-left: 0.75rem;
        padding-left: 1.5rem;
    }

    .sub-links::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 1.1rem;
        left: 0.15rem;
        border-left: 1px solid var(--color-text-dim);
        opacity: 0.7;
    }

    .sub-links a {
        position: relative;
        padding: 0.25rem 0;

        transition: padding-left 0.1s ease-in-out;

        span {
            display: inline-block;
            transition: translate 0.1s ease-in-out;
        }

        &:hover span {
            translate: 0.25rem 0;
        }

        &.active {
            padding-left: 1rem;
        }
        &.active::after {
            // make a small arrow icon pointing to the right
            content: ">";
            position: absolute;
            left: 0;
        }
    }

    .sub-links a::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -1.35rem;
        width: 1.35rem;
        border-top: 1px solid var(--color-text-dim);
        opacity: 0.7;

        &:hover {
            translate: -0.5rem 0;
        }
    }

    .buttons {
        display: grid;
        grid-template-columns: 2fr 1fr;
    }
</style>
