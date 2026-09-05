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
            <h3 class="sim-title">Silicon Made of Stone & Redstone Dust</h3>
        </div>
        <p class="sim-subtitle">
            Test how basic Minecraft logic gates function before scaling up into
            8-bit registers and ALUs.
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
                    class="mc-lever-btn"
                    class:active={inputA}
                    onclick={() => (inputA = !inputA)}
                    aria-label="Toggle input A"
                >
                    <div class="lever-mount">
                        <div
                            class="lever-stick"
                            class:stick-flipped={inputA}
                        ></div>
                    </div>
                    <div class="lever-meta">
                        <span class="lever-label">INPUT A</span>
                        <span class="state-indicator" class:on={inputA}
                            >{inputA ? "HIGH [1]" : "LOW [0]"}</span
                        >
                    </div>
                </button>
                <div class="wire wire-h" class:wire-powered={inputA}></div>
            </div>

            {#if selectedGate !== "NOT"}
                <div class="input-node">
                    <button
                        type="button"
                        class="mc-lever-btn"
                        class:active={inputB}
                        onclick={() => (inputB = !inputB)}
                        aria-label="Toggle input B"
                    >
                        <div class="lever-mount">
                            <div
                                class="lever-stick"
                                class:stick-flipped={inputB}
                            ></div>
                        </div>
                        <div class="lever-meta">
                            <span class="lever-label">INPUT B</span>
                            <span class="state-indicator" class:on={inputB}
                                >{inputB ? "HIGH [1]" : "LOW [0]"}</span
                            >
                        </div>
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

        <!-- Output Redstone Lamp -->
        <div class="output-col">
            <div class="redstone-lamp-block" class:lamp-lit={output}>
                <div class="lamp-grid">
                    <!-- Minecraft Lamp Pixel Lattice -->
                    <div class="lamp-cell"></div>
                    <div class="lamp-cell"></div>
                    <div class="lamp-cell"></div>
                    <div class="lamp-cell"></div>
                </div>
                <span class="lamp-name">REDSTONE LAMP</span>
                <span class="state-indicator" class:on={output}>
                    {output ? "POWERED (1)" : "OFF (0)"}
                </span>
            </div>
        </div>
    </div>

    <!-- Redstone Lore / Description -->
    <div class="sim-footer">
        <div class="lore-tag">[MINECRAFT IMPLEMENTATION]:</div>
        <p class="lore-text">{gateDescriptions[selectedGate].redstoneDesc}</p>
    </div>
</div>

<style>
    .logic-sim {
        background: #0f141e;
        padding: 2.25rem;
    }

    .sim-header {
        margin-bottom: 1.5rem;
    }

    .sim-title {
        font-size: 1.8rem;
        margin-top: 0.65rem;
        color: #ffffff;
        letter-spacing: 0.03em;
    }

    .sim-subtitle {
        font-size: 1rem;
        margin-top: 0.35rem;
    }

    .gate-selector {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.75rem;
        padding-bottom: 1.25rem;
        border-bottom: 2px solid var(--border-subtle);
    }

    .gate-tab {
        padding: 0.5rem 1.1rem;
        background: #172132;
        border-top: 2px solid #384a6b;
        border-left: 2px solid #384a6b;
        border-bottom: 2px solid #0b0f17;
        border-right: 2px solid #0b0f17;
        color: var(--text-secondary);
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 1.05rem;
        cursor: pointer;
        transition: all 0.1s ease;
        box-shadow: 2px 2px 0px #000000;
    }

    .gate-tab:hover {
        background: #223049;
        color: #ffffff;
    }

    .gate-tab.active {
        background: #b9152b;
        border-top-color: #ff4d64;
        border-left-color: #ff4d64;
        border-bottom-color: #590914;
        border-right-color: #590914;
        color: #ffffff;
        box-shadow: 3px 3px 0px #000000;
    }

    .circuit-board {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.25rem;
        background: #080b10;
        padding: 2.25rem 1.75rem;
        border-top: 3px solid #1c2637;
        border-left: 3px solid #1c2637;
        border-bottom: 3px solid #05070a;
        border-right: 3px solid #05070a;
        position: relative;
        overflow-x: auto;
    }

    .inputs-col {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        min-width: 190px;
    }

    .input-node {
        display: flex;
        align-items: center;
    }

    /* Minecraft Lever Button */
    .mc-lever-btn {
        display: flex;
        align-items: center;
        gap: 0.85rem;
        background: #252e3e;
        border-top: 3px solid #43516c;
        border-left: 3px solid #43516c;
        border-bottom: 3px solid #10151f;
        border-right: 3px solid #10151f;
        padding: 0.65rem 0.9rem;
        cursor: pointer;
        box-shadow: 3px 3px 0px #000000;
        text-align: left;
        transition: transform 0.08s ease;
        width: 155px;
    }

    .mc-lever-btn:active {
        transform: translate(2px, 2px);
        box-shadow: 1px 1px 0px #000000;
    }

    .mc-lever-btn.active {
        border-top-color: #ff4d64;
        border-left-color: #ff4d64;
        background: #2d242e;
    }

    .lever-mount {
        width: 24px;
        height: 32px;
        background: #505d74;
        border-top: 2px solid #7384a2;
        border-left: 2px solid #7384a2;
        border-bottom: 2px solid #28303e;
        border-right: 2px solid #28303e;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }

    .lever-stick {
        width: 6px;
        height: 20px;
        background: #854d0e;
        border: 1px solid #451a03;
        transform-origin: bottom center;
        transform: rotate(-25deg);
        transition: transform 0.15s cubic-bezier(0.2, 0, 0, 1);
    }

    .lever-stick.stick-flipped {
        transform: rotate(25deg);
        background: #a16207;
    }

    .lever-meta {
        display: flex;
        flex-direction: column;
    }

    .lever-label {
        font-family: var(--font-display);
        font-size: 0.95rem;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 0.03em;
    }

    .state-indicator {
        font-family: var(--font-mono);
        font-size: 0.72rem;
        color: var(--text-muted);
        font-weight: 700;
    }

    .state-indicator.on {
        color: #ff4d64;
        text-shadow: 0 0 8px rgba(255, 37, 63, 0.8);
    }

    /* Redstone Wires */
    .wire {
        background-color: var(--redstone-wire-off);
        transition:
            background-color 0.08s ease,
            box-shadow 0.08s ease;
    }

    .wire-h {
        height: 6px;
        flex: 1;
        min-width: 40px;
    }

    .wire-out {
        height: 6px;
        flex: 1;
        min-width: 50px;
    }

    .wire-powered {
        background-color: var(--redstone-base);
        box-shadow:
            0 0 12px var(--redstone-base),
            0 0 24px rgba(255, 37, 63, 0.6);
    }

    /* Gate Core Block */
    .gate-core {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: center;
    }

    .gate-badge {
        background: #192233;
        border-top: 3px solid #3d4f70;
        border-left: 3px solid #3d4f70;
        border-bottom: 3px solid #0c121c;
        border-right: 3px solid #0c121c;
        padding: 1.25rem 1.65rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 125px;
        box-shadow: 4px 4px 0px #000000;
    }

    .gate-name {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 1.6rem;
        color: #ffffff;
        letter-spacing: 0.05em;
    }

    .gate-formula {
        font-family: var(--font-mono);
        font-size: 0.85rem;
        color: var(--illini-orange);
        margin-top: 0.25rem;
        font-weight: 700;
    }

    /* Minecraft Redstone Lamp Block */
    .output-col {
        min-width: 180px;
        display: flex;
        justify-content: flex-end;
    }

    .redstone-lamp-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #2b1c10;
        border-top: 4px solid #4a321e;
        border-left: 4px solid #4a321e;
        border-bottom: 4px solid #130a04;
        border-right: 4px solid #130a04;
        padding: 1.25rem;
        width: 160px;
        box-shadow: 4px 4px 0px #000000;
        transition: all 0.15s ease;
    }

    .lamp-grid {
        width: 52px;
        height: 52px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3px;
        background: #1c130b;
        padding: 3px;
        margin-bottom: 0.75rem;
        border: 2px solid #130a04;
    }

    .lamp-cell {
        background: #3e2817;
        transition: background 0.1s ease;
    }

    .lamp-lit {
        background: #78350f;
        border-top-color: #fbbf24;
        border-left-color: #fbbf24;
        box-shadow:
            4px 4px 0px #000000,
            0 0 35px rgba(251, 191, 36, 0.6);
    }

    .lamp-lit .lamp-cell {
        background: #fbbf24;
        box-shadow: inset 0 0 6px #d97706;
    }

    .lamp-name {
        font-family: var(--font-display);
        font-size: 0.92rem;
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 0.03em;
        margin-bottom: 0.25rem;
    }

    .sim-footer {
        margin-top: 1.25rem;
        background: rgba(0, 0, 0, 0.4);
        border-top: 2px solid #253147;
        border-left: 2px solid #253147;
        border-bottom: 2px solid #0b0f17;
        border-right: 2px solid #0b0f17;
        padding: 0.85rem 1.15rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-size: 0.9rem;
    }

    .lore-tag {
        font-family: var(--font-display);
        font-weight: 700;
        color: var(--illini-orange);
        white-space: nowrap;
        letter-spacing: 0.04em;
    }

    .lore-text {
        color: var(--text-secondary);
        margin: 0;
    }

    @media (max-width: 680px) {
        .circuit-board {
            flex-direction: column;
            gap: 1.75rem;
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
