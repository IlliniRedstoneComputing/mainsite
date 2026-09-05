<script lang="ts">
    type GateType = "AND" | "OR" | "XOR" | "NAND" | "NOR" | "NOT";

    let selectedGate = $state<GateType>("AND");
    let inputA = $state(false);
    let inputB = $state(false);

    let output = $derived.by(() => {
        switch (selectedGate) {
            case "AND":
                return inputA && inputB;
            case "OR":
                return inputA || inputB;
            case "XOR":
                return (!inputA && inputB) || (inputA && !inputB);
            case "NAND":
                return !(inputA && inputB);
            case "NOR":
                return !(inputA || inputB);
            case "NOT":
                return !inputA;
            default:
                return false;
        }
    });

    const gateDescriptions: Record<
        GateType,
        { formula: string; redstoneDesc: string }
    > = {
        AND: {
            formula: "Y = A ∧ B",
            redstoneDesc:
                "Two redstone torches on blocks with dust between them and an inverting torch.",
        },
        OR: {
            formula: "Y = A ∨ B",
            redstoneDesc:
                "Two lines of redstone dust connecting directly together into a common line.",
        },
        XOR: {
            formula: "Y = A ⊕ B",
            redstoneDesc:
                "Compact piston or comparator design; essential for binary adders & ALU sum bits.",
        },
        NAND: {
            formula: "Y = ¬(A ∧ B)",
            redstoneDesc:
                "Universal gate! Any computer in Minecraft can theoretically be built solely from NANDs.",
        },
        NOR: {
            formula: "Y = ¬(A ∨ B)",
            redstoneDesc:
                "Dual inputs powering a single inverted redstone torch. Baseline for RS-NOR latches.",
        },
        NOT: {
            formula: "Y = ¬A",
            redstoneDesc:
                "A single redstone torch mounted on the back of a solid block.",
        },
    };
</script>

<div class="logic-sim card">
    <div class="card-glow-accent"></div>
    <div class="sim-header">
        <div>
            <span class="badge badge-redstone">
                <span class="badge-pulse-dot"></span>
                Interactive Logic Simulator
            </span>
            <h3 class="sim-title">Silicon Made of Stone & Dust</h3>
        </div>
        <p class="sim-subtitle">
            Test how basic logic primitives function before scaling into 8-bit
            registers and ALUs.
        </p>
    </div>

    <!-- Gate Selector Tabs -->
    <div class="gate-selector" role="tablist">
        {#each ["AND", "OR", "XOR", "NAND", "NOR", "NOT"] as GateType[] as gate}
            <button
                type="button"
                class="gate-tab"
                class:active={selectedGate === gate}
                onclick={() => (selectedGate = gate)}
            >
                {gate}
            </button>
        {/each}
    </div>

    <!-- Interactive Circuit Canvas -->
    <div class="circuit-board">
        <!-- Inputs Section -->
        <div class="inputs-col">
            <div class="input-node">
                <button
                    type="button"
                    class="lever-btn"
                    class:active={inputA}
                    onclick={() => (inputA = !inputA)}
                    aria-label="Toggle input A"
                >
                    <span class="lever-handle"></span>
                    <span class="lever-label">Input A</span>
                    <span class="state-indicator" class:on={inputA}
                        >{inputA ? "1 (HIGH)" : "0 (LOW)"}</span
                    >
                </button>
                <div class="wire wire-h" class:wire-powered={inputA}></div>
            </div>

            {#if selectedGate !== "NOT"}
                <div class="input-node">
                    <button
                        type="button"
                        class="lever-btn"
                        class:active={inputB}
                        onclick={() => (inputB = !inputB)}
                        aria-label="Toggle input B"
                    >
                        <span class="lever-handle"></span>
                        <span class="lever-label">Input B</span>
                        <span class="state-indicator" class:on={inputB}
                            >{inputB ? "1 (HIGH)" : "0 (LOW)"}</span
                        >
                    </button>
                    <div class="wire wire-h" class:wire-powered={inputB}></div>
                </div>
            {/if}
        </div>

        <!-- Logic Gate Center -->
        <div class="gate-core">
            <div class="gate-badge">
                <span class="gate-name">{selectedGate}</span>
                <span class="gate-formula"
                    >{gateDescriptions[selectedGate].formula}</span
                >
            </div>
            <div class="wire wire-out" class:wire-powered={output}></div>
        </div>

        <!-- Output Lamp / Signal -->
        <div class="output-col">
            <div class="redstone-lamp" class:lamp-lit={output}>
                <div class="lamp-inner">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7zm-3 18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H9v1z"
                        />
                    </svg>
                </div>
                <span class="output-title">Redstone Lamp</span>
                <span class="state-indicator" class:on={output}>
                    {output ? "POWERED (1)" : "UNPOWERED (0)"}
                </span>
            </div>
        </div>
    </div>

    <!-- Redstone Lore / Description -->
    <div class="sim-footer">
        <div class="lore-tag">Minecraft Implementation:</div>
        <p class="lore-text">{gateDescriptions[selectedGate].redstoneDesc}</p>
    </div>
</div>

<style>
    .logic-sim {
        background: #111622;
        border: 1px solid var(--border-subtle);
        padding: 2rem;
        border-radius: var(--radius-lg);
    }

    .sim-header {
        margin-bottom: 1.5rem;
    }

    .sim-title {
        font-size: 1.5rem;
        margin-top: 0.65rem;
        color: #ffffff;
    }

    .sim-subtitle {
        font-size: 0.95rem;
        margin-top: 0.35rem;
    }

    .gate-selector {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.75rem;
        padding-bottom: 1.25rem;
        border-bottom: 1px solid var(--border-subtle);
    }

    .gate-tab {
        padding: 0.45rem 1rem;
        border-radius: var(--radius-md);
        background: #19202f;
        border: 1px solid var(--border-subtle);
        color: var(--text-secondary);
        font-family: var(--font-mono);
        font-weight: 700;
        font-size: 0.85rem;
        cursor: pointer;
        transition: all 0.15s ease;
    }

    .gate-tab:hover {
        background: #232d42;
        color: #ffffff;
    }

    .gate-tab.active {
        background: rgba(255, 45, 70, 0.15);
        border-color: var(--redstone-base);
        color: #ff5c72;
        box-shadow: 0 0 12px rgba(255, 45, 70, 0.25);
    }

    .circuit-board {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        background: #090c12;
        padding: 2rem 1.5rem;
        border-radius: var(--radius-md);
        border: 1px solid #1a2233;
        position: relative;
        overflow-x: auto;
    }

    .inputs-col {
        display: flex;
        flex-direction: column;
        gap: 1.75rem;
        min-width: 170px;
    }

    .input-node {
        display: flex;
        align-items: center;
    }

    .lever-btn {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
        background: #141b27;
        border: 1px solid var(--border-subtle);
        padding: 0.65rem 0.9rem;
        border-radius: var(--radius-sm);
        cursor: pointer;
        transition: all 0.2s ease;
        width: 130px;
        text-align: left;
    }

    .lever-btn:hover {
        border-color: var(--border-focus);
        background: #1c2637;
    }

    .lever-btn.active {
        border-color: var(--redstone-base);
        box-shadow: 0 0 14px rgba(255, 45, 70, 0.25);
        background: #1e1a25;
    }

    .lever-label {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        font-weight: 700;
        color: #e2e8f0;
    }

    .state-indicator {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        color: var(--text-muted);
        font-weight: 600;
    }

    .state-indicator.on {
        color: #ff5c72;
        text-shadow: 0 0 8px rgba(255, 45, 70, 0.6);
    }

    /* Redstone Wires */
    .wire {
        background-color: var(--redstone-wire-off);
        transition:
            background-color 0.15s ease,
            box-shadow 0.15s ease;
    }

    .wire-h {
        height: 4px;
        flex: 1;
        min-width: 40px;
    }

    .wire-out {
        height: 4px;
        flex: 1;
        min-width: 50px;
    }

    .wire-powered {
        background-color: var(--redstone-base);
        box-shadow:
            0 0 10px 1px #ff2d46,
            0 0 20px 2px rgba(255, 45, 70, 0.5);
    }

    /* Gate Core Box */
    .gate-core {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: center;
    }

    .gate-badge {
        background: #1b2333;
        border: 2px solid var(--border-subtle);
        border-radius: var(--radius-md);
        padding: 1.25rem 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 110px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    }

    .gate-name {
        font-family: var(--font-display);
        font-weight: 800;
        font-size: 1.35rem;
        color: #ffffff;
        letter-spacing: 0.05em;
    }

    .gate-formula {
        font-family: var(--font-mono);
        font-size: 0.8rem;
        color: var(--illini-orange);
        margin-top: 0.25rem;
    }

    /* Output Redstone Lamp */
    .output-col {
        min-width: 170px;
        display: flex;
        justify-content: flex-end;
    }

    .redstone-lamp {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #131924;
        border: 2px solid var(--border-subtle);
        border-radius: var(--radius-md);
        padding: 1rem 1.2rem;
        width: 145px;
        transition: all 0.25s ease;
    }

    .lamp-inner {
        color: #475569;
        margin-bottom: 0.5rem;
        transition: all 0.25s ease;
    }

    .lamp-lit {
        border-color: #fbbf24;
        background: radial-gradient(
            circle,
            rgba(251, 191, 36, 0.25) 0%,
            rgba(19, 25, 36, 1) 90%
        );
        box-shadow: 0 0 25px rgba(251, 191, 36, 0.5);
    }

    .lamp-lit .lamp-inner {
        color: #fef08a;
        filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.8));
    }

    .output-title {
        font-size: 0.8rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 0.2rem;
    }

    .sim-footer {
        margin-top: 1.25rem;
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--border-subtle);
        border-radius: var(--radius-sm);
        padding: 0.75rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.85rem;
    }

    .lore-tag {
        font-family: var(--font-mono);
        font-weight: 700;
        color: var(--illini-orange);
        white-space: nowrap;
    }

    .lore-text {
        color: var(--text-secondary);
        margin: 0;
    }

    @media (max-width: 680px) {
        .circuit-board {
            flex-direction: column;
            gap: 1.5rem;
        }

        .inputs-col,
        .output-col {
            width: 100%;
            justify-content: center;
            align-items: center;
        }

        .wire {
            display: none;
        }
    }
</style>
