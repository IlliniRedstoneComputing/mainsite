<script lang="ts">
    import { page } from "$app/state";
    import favicon from "$lib/assets/favicon.svg";
    import DiscordButton from "$lib/components/DiscordButton.svelte";
    import "../app.css";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
    <aside>
        <div class="title font-chakra">
            <h1>
                <span class="illini">I</span> <span class="redstone">R</span>
                <span class="computing">C</span>
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
                    <a href="/about#faq" class="about-faq"><span>FAQ</span></a>
                    <a href="/about#meetings" class="about-meetings">
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
                    <a href="/contact#socials" class="contact-socials"
                        ><span>Socials</span></a
                    >
                    <a href="/contact#links" class="contact-links"
                        ><span>Links</span></a
                    >
                    <a href="/contact#members" class="contact-members"
                        ><span>Members</span></a
                    >
                </div>
            </div>
            <div
                class="link-category"
                class:active={page.url.pathname.startsWith("/projects")}
            >
                <a href="/projects" class="projects category-header">Projects</a
                >
                <div class="sub-links">
                    <a href="/projects#overture">Overture CPU</a>
                    <a href="/projects#brainfck">Brainf***</a>
                </div>
            </div>
            <div
                class="link-category"
                class:active={page.url.pathname.startsWith("/logic")}
            >
                <a href="/logic" class="logic category-header">What is Logic?</a
                >
                <div class="sub-links">
                    <a href="/logic#gates">Gates</a>
                    <a href="/logic#circuits">Circuits</a>
                </div>
            </div>
        </nav>

        <div class="sidebar-bottom">
            <DiscordButton />
        </div>
    </aside>
    <main>
        {@render children()}
    </main>
</div>

<style lang="less">
    .text-shadow-3d(@x; @y; @color; @depth: 8; @iteration: 1)
        when
        (@iteration <= @depth) {
        text-shadow+: (@x * @iteration) calc(@y * @iteration) 0
            color-mix(in srgb, @color, black calc(@iteration * 10%));
        .text-shadow-3d(@x; @y; @color; @depth; (@iteration + 1));
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
    aside {
        position: fixed;
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

        --shadow-length: 0.1rem;
    }

    .illini {
        color: var(--color-illini-orange);
        .text-shadow-3d(
            0.03125rem;
            var(--shadow-length);
            var(--color-illini-orange-dark)
        );
    }
    .redstone {
        color: var(--color-redstone);
        .text-shadow-3d(0; var(--shadow-length); var(--color-redstone-dark));
    }
    .computing {
        color: var(--color-illini-blue);
        .text-shadow-3d(
            -0.03125rem;
            var(--shadow-length);
            var(--color-illini-blue-dark)
        );
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
        z-index: 1;
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

        span {
            display: inline-block;
            transition: translate 0.1s ease-in-out;
        }

        &:hover span {
            translate: 0.25rem 0;
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
</style>
