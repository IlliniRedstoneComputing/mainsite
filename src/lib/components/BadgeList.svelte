<script lang="ts">
    const BADGES = [
        {
            id: "computer",
            name: "Computer",
            color: "var(--color-illini-orange)",
        },

        {
            id: "current-project",
            name: "Current Project",
            color: "var(--color-illini-blue)",
        },
        {
            id: "project",
            name: "Project",
            color: "var(--color-illini-blue)",
        },
        {
            id: "guide",
            name: "Guide",
            color: "var(--color-accent)",
        },
        {
            id: "tutorial",
            name: "Tutorial",
            color: "var(--color-redstone)",
        },
        {
            id: "completed",
            name: "Completed",
            color: "var(--color-green)",
        },
    ] as const;

    const { badgeIds }: { badgeIds: (typeof BADGES)[number]["id"][] } =
        $props();

    const badges = $derived(BADGES.filter(b => badgeIds.includes(b.id)));
</script>

<div class="badges">
    {#each badges as badge}
        <div
            class={`badge badge-${badge.id}`}
            style={`--badge-color: ${badge.color}`}>
            {badge.name}
        </div>
    {/each}
</div>

<style>
    .badges {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        width: fit-content;
        margin-inline: auto;
    }

    .badge {
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
        font-weight: 700;
        color: white;
        background-color: var(--badge-color);
    }
</style>
