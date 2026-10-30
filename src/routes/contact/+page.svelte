<script lang="ts">
    import { socials, resources, members } from '$lib/data/community';
</script>

<svelte:head><title>Contact | Illini Redstone Computing</title><meta name="description" content="Connect with Illini Redstone Computing, find community links, and meet our members." /></svelte:head>

<div class="content-page">
    <header class="intro transition-1"><p class="eyebrow">Illini Redstone Computing</p><h1 class="content-title">Contact</h1><p>Have a question, a build to share, or an interest in redstone computing? Find the community and the people behind it here.</p></header>
    <nav class="section-nav" aria-label="Contact sections"><a href="#socials">Socials ↘</a><a href="#links">Useful links ↘</a><a href="#members">Members ↘</a></nav>
    <section id="socials" class="section" aria-labelledby="socials-heading">
        <div class="section-heading transition-2"><h2 id="socials-heading">Find us online</h2><p>Discord, Instagram, and email.</p></div>
        <div class="card-grid">{#each socials as social}<article class="info-card" style:--card-accent={social.accent}><h3>{social.name}</h3><p>{social.description}</p>{#if social.href}<a href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>{:else}<p class="placeholder">{social.label}</p>{/if}</article>{/each}</div>
    </section>
    <section id="links" class="section" aria-labelledby="links-heading">
        <div class="section-heading transition-3"><h2 id="links-heading">Useful links</h2><p>Guides and club resources.</p></div>
        <div class="card-grid">{#each resources as resource}<article class="info-card"><h3>{resource.name}</h3><p>{resource.description}</p>{#if resource.href}<a href={resource.href}>Explore →</a>{:else}<p class="placeholder">Link to be added</p>{/if}</article>{/each}</div>
    </section>
    <section id="members" class="section" aria-labelledby="members-heading">
        <div class="section-heading transition-4"><h2 id="members-heading">Meet the members</h2><p>Club members and their projects.</p></div>
        <div class="card-grid">{#each members as member}<article class="info-card" style="--card-accent: var(--color-illini-orange)"><div class="skin-preview">
            {#if member.skinImage}
                <img src={member.skinImage} alt={`${member.name}'s Minecraft skin`} loading="lazy" width="192" height="208" />
            {:else}
                <p class="placeholder">[Minecraft skin render]</p>
            {/if}
        </div><p class="eyebrow">{member.role}</p><h3>{member.name}</h3><p>{member.bio}</p>{#if member.href}<a href={member.href} target="_blank" rel="noreferrer">Member profile ↗</a>{/if}</article>{/each}</div>
    </section>
    <aside class="callout"><div><h2>Prefer to meet in person?</h2><p>Find the time and location for our general meetings.</p></div><a class="action" href="/about/meetings">Meeting details →</a></aside>
</div>
