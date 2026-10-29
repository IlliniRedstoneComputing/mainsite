<script lang="ts">
    import BadgeList from "$lib/components/BadgeList.svelte";
</script>

<h1 class="page-title">The LC-3 Computer</h1>

<BadgeList badgeIds={["computer", "current-project"]} />

<h2 class="page-heading">LC-3 Overview</h2>
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
