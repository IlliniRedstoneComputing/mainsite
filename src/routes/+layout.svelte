<script lang="ts">
    import "../app.css";
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { recordCampaignVisit } from "$lib/analytics";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();

    onMount(() => {
        // Detect URL campaign or referral parameters across any entry page
        const params = page.url.searchParams;
        const ref =
            params.get("ref") ||
            params.get("src") ||
            params.get("utm_campaign") ||
            params.get("source");
        if (ref) {
            recordCampaignVisit(ref, "query_param");
        }
    });
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="site-wrapper">
    <Navbar />
    <main class="site-main">
        {@render children()}
    </main>
    <Footer />
</div>

<style>
    .site-wrapper {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;
    }

    .site-main {
        flex: 1;
    }
</style>
