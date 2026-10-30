<script lang="ts">
    import { faqs } from '$lib/data/community';
    let query = $state('');
    let category = $state('All');
    const categories = ['All', ...new Set(faqs.map(item => item.category))];
    let filtered = $derived(faqs.filter(item => (category === 'All' || item.category === category) && `${item.question} ${item.answer}`.toLowerCase().includes(query.trim().toLowerCase())));
</script>

<svelte:head><title>About & FAQ | Illini Redstone Computing</title><meta name="description" content="Get to know Illini Redstone Computing and find answers about joining, meetings, and getting started." /></svelte:head>

<div class="content-page">
    <header class="intro transition-1"><p class="eyebrow">About the community</p><h1 class="content-title">About IRC</h1><p>We’re students at the University of Illinois Urbana-Champaign exploring computer architecture and logic design through Minecraft, redstone, mods, and tooling.</p></header>
    <div class="callout"><div><h2>Joining IRC</h2><p>We welcome anyone interested in redstone and Minecraft. Share a build, ask a question, or join us at a meeting.</p></div><a class="action" href="/about/meetings">Explore meetings →</a></div>
    <section id="faq" class="section" aria-labelledby="faq-heading">
        <div class="section-heading transition-2"><h2 id="faq-heading">Frequently asked questions</h2><p>A few things to help you get started.</p></div>
        <label class="search-label" for="faq-search">Search questions</label>
        <input id="faq-search" type="search" bind:value={query} placeholder="Try “meetings” or “Minecraft”" />
        <div class="filters" aria-label="Filter questions by topic">
            {#each categories as topic}<button class="action" type="button" aria-pressed={category === topic} onclick={() => category = topic}>{topic}</button>{/each}
        </div>
        <p class="result-count" role="status">{filtered.length} {filtered.length === 1 ? 'question' : 'questions'}</p>
        <div class="faq-list">
            {#each filtered as item (item.id)}
                <details class="info-card accordion"><summary>{item.question}<span aria-hidden="true">+</span></summary><div class="answer"><p class:placeholder={item.placeholder}>{item.answer}</p>{#if item.href}<a href={item.href}>{item.label} →</a>{/if}</div></details>
            {/each}
        </div>
        {#if filtered.length === 0}<div class="empty-state"><h3>No matching questions</h3><p>Try another search or choose a different topic.</p><button class="action reset" type="button" onclick={() => { query = ''; category = 'All'; }}>Clear filters</button></div>{/if}
    </section>
    <aside class="callout"><div><h2>Still have a question?</h2><p>Ask us on Discord or use the contact page.</p></div><a class="action" href="/contact">Get in touch →</a></aside>
</div>

<style>
    .search-label { display: block; margin-bottom: .5rem; font-weight: 600; }
    input { width: 100%; padding: .9rem 1rem; font: inherit; color: var(--color-text); background: var(--color-bg); border: var(--glass-border); }
    .filters { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: 1rem; }
    .result-count { margin: 1rem 0; font-size: .9rem; }
    .faq-list { display: grid; gap: .75rem; }
    .faq-list details { display: block; border-top: var(--glass-border); }
    .answer { padding-top: 1rem; max-width: 65ch; }
    .answer a { display: inline-block; margin-top: 1rem; }
    .reset { margin-top: 1rem; }
</style>
