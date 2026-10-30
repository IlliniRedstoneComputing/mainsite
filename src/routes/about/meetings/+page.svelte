<script lang="ts">
    import { meeting, pastMeetings } from '$lib/data/community';
</script>

<svelte:head><title>Meetings | Illini Redstone Computing</title><meta name="description" content="Meeting times, location, and past meetings for Illini Redstone Computing." /></svelte:head>

<div class="content-page">
    <header class="intro transition-1">
        <p class="eyebrow">Build · Learn · Share</p>
        <h1 class="content-title">Meetings</h1>
        <p>Meet up with the IRC community to brainstorm, work on builds, and learn together.</p>
    </header>
    <div class="card-grid">
        <article class="info-card"><p class="eyebrow">01 / When</p><h2>{meeting.day}</h2><p class="stat">{meeting.time}</p><p>Weekly general meetings.</p></article>
        <article class="info-card" style="--card-accent: var(--color-redstone)"><p class="eyebrow">02 / Where</p><h2>{meeting.location}</h2><p>{meeting.room}</p><a href="/discord" target="_blank" rel="noreferrer">Check Discord →</a></article>
        <article class="info-card" style="--card-accent: var(--color-illini-orange)"><p class="eyebrow">03 / Before you arrive</p><h2>Come prepared</h2><p class="placeholder">[Add what to bring, any required setup, and arrival instructions.]</p><a href="/about#faq">Read the FAQ →</a></article>
    </div>
    <aside class="callout"><div><h2>Find this week’s room</h2><p>Check the Discord announcement before heading over to ECEB.</p></div><a class="action" href="/discord" target="_blank" rel="noreferrer">Open Discord ↗</a></aside>
    <section class="section" aria-labelledby="past-meetings">
        <div class="section-heading transition-2"><h2 id="past-meetings">Past meetings</h2><p>Notes, builds, and things we learned.</p></div>
        {#if pastMeetings.length > 0}
            <div class="card-grid">{#each pastMeetings as item}<article class="info-card"><p class="eyebrow">{item.date}</p><h3>{item.title}</h3><p>{item.summary}</p></article>{/each}</div>
        {:else}
            <div class="empty-state"><h3>Meeting archive</h3><p class="placeholder">[Add past meeting dates, topics, and recap notes.]</p></div>
        {/if}
    </section>
</div>
