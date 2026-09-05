export interface ClubInfo {
    name: string;
    acronym: string;
    tagline: string;
    description: string;
    university: string;
    rsoStatus: string;
    discordUrl: string;
    githubUrl: string;
    email: string;
    serverIp: string;
    minecraftVersion: string;
}

export const clubInfo: ClubInfo = {
    name: "Illini Redstone Computing",
    acronym: "IRC",
    tagline:
        "Designing digital logic, ALUs, and complete computer processors inside Minecraft.",
    description:
        "Illini Redstone Computing is an official Registered Student Organization at the University of Illinois Urbana-Champaign. We bring students together across Computer Science, Electrical Engineering, and all majors to design real-world logic systems, sequential circuits, and custom CPUs using Minecraft redstone.",
    university: "University of Illinois Urbana-Champaign",
    rsoStatus: "Official UIUC Registered Student Organization",
    discordUrl: "https://discord.gg/redstone", // Replace with your active permanent server invite
    githubUrl: "https://github.com/IlliniRedstoneComputing",
    email: "illini.redstone@gmail.com",
    serverIp: "mc.illiniredstone.org",
    minecraftVersion: "Java Edition 1.21+",
};

export interface Pillar {
    icon: string;
    title: string;
    description: string;
}

export const clubPillars: Pillar[] = [
    {
        icon: "⚡",
        title: "Hardware You Can Walk Inside",
        description:
            "Forget flat circuit diagrams. In Minecraft, you physically walk inside your register files, observe signal propagation tick-by-tick, and debug buses in 3D.",
    },
    {
        icon: "🎓",
        title: "Zero Prior Experience Required",
        description:
            "Whether you are an ECE senior taking computer architecture or an incoming freshman who has never placed a repeater, our workshops teach you from the ground up.",
    },
    {
        icon: "🖥️",
        title: "Collaborative Build Server",
        description:
            "Build alongside peers on our high-performance Minecraft server configured with Redstone optimization mods, plots, and schematic sharing tools.",
    },
    {
        icon: "🧩",
        title: "Real Computer Engineering Concepts",
        description:
            "We build full ALUs, carry-lookahead adders, dual-read RAM, pipelined instruction fetch, and custom assembly instruction sets.",
    },
];
