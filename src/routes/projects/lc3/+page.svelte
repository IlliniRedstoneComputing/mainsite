<script lang="ts">
    import BadgeList from "$lib/components/BadgeList.svelte";
</script>

<svelte:head><title>LC-3 | Illini Redstone Computing</title></svelte:head>

<div class="content-page">
    <header class="intro transition-1">
        <p class="eyebrow">Projects</p>
        <h1 class="content-title">The LC-3 computer</h1>
        <BadgeList badgeIds={["computer", "current-project"]} />
    </header>

    <section class="section transition-2" aria-labelledby="overview">


<h2 id="overview" class="page-heading">Overview</h2>
<p class="page-copy">
    The LC-3 CPU is a 16-bit processor designed with a von Neumann architecture.
    It has eight general-purpose registers (<span class="bold">R0-R7</span>),
    along with a program counter (<span class="bold">PC</span>), instruction
    register (<span class="bold">IR</span>), memory address and data registers (<span
        class="bold">MAR</span>
    and
    <span class="bold">MDR</span>), and an NZP flags register. There are 16
    instruction opcodes for computation, memory functions, and branching.
</p>

    </section>
    <section class="section" aria-labelledby="architecture">
        <div class="section-heading transition-3"><h2 id="architecture">Architecture</h2></div>
        <div class="card-grid">
            <article class="info-card">
                <p class="eyebrow">Processor</p>
                <h3>16-bit</h3>
                <p>Von Neumann architecture with 16 instruction opcodes.</p>
            </article>
            <article class="info-card" style="--card-accent: var(--color-redstone)">
                <p class="eyebrow">Registers</p>
                <h3>R0?R7</h3>
                <p>Eight general-purpose registers, plus PC, IR, MAR, MDR, and NZP flags.</p>
            </article>
            <article class="info-card" style="--card-accent: var(--color-illini-orange)">
                <p class="eyebrow">Instructions</p>
                <h3>Computation & control</h3>
                <p>Instructions for computation, memory functions, and branching.</p>
            </article>
        </div>
    </section>
</div>
