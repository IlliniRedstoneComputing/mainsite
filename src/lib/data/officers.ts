export interface Officer {
    id: string;
    name: string;
    role: string;
    major: string;
    year: string;
    minecraftIgn: string;
    discordHandle?: string;
    bio: string;
    favoriteRedstoneBuild?: string;
}

export const executiveBoard: Officer[] = [
    {
        id: "president",
        name: "Alex Chen",
        role: "President & Founder",
        major: "Computer Engineering",
        year: "Class of 2026",
        minecraftIgn: "RedstoneCrafter",
        discordHandle: "@alexc_redstone",
        bio: "Passionate about digital logic synthesis and high-speed ripple-carry adders. Leads executive operations and university RSO relations.",
        favoriteRedstoneBuild:
            "Pipelined 8-bit RISC microcomputer with 64 bytes of piston RAM",
    },
    {
        id: "vice-president",
        name: "Maya Patel",
        role: "Vice President",
        major: "Computer Science",
        year: "Class of 2027",
        minecraftIgn: "ByteSiren",
        discordHandle: "@mayap_cs",
        bio: "Oversees meeting logistics, semester workshop curricula, and builds bridges between software programmers and redstone architecture.",
        favoriteRedstoneBuild:
            "Dual-read register file with 2-tick access time",
    },
    {
        id: "tech-lead",
        name: "David Zhao",
        role: "Technical & Architecture Lead",
        major: "Electrical & Computer Engineering",
        year: "Class of 2026",
        minecraftIgn: "LogicMatrix",
        discordHandle: "@davidz_logic",
        bio: "Directs large-scale server collaborative projects, custom instruction set architecture (ISA) specs, and microcode ROM designs.",
        favoriteRedstoneBuild:
            "Carry-lookahead adder tree running in 4 redstone ticks",
    },
    {
        id: "treasurer",
        name: "Samantha Lee",
        role: "Treasurer",
        major: "Systems Engineering",
        year: "Class of 2027",
        minecraftIgn: "CircuitCraft",
        discordHandle: "@samlee_uiuc",
        bio: "Manages RSO funding, campus event reservations, and server infrastructure costs so our multiplayer servers stay fast and responsive.",
        favoriteRedstoneBuild:
            "Seven-segment display with instant piston-tape ROM",
    },
    {
        id: "workshops-lead",
        name: "Ethan Miller",
        role: "Workshop Director",
        major: "Computer Science + Mathematics",
        year: "Class of 2028",
        minecraftIgn: "TorchTitan",
        discordHandle: "@ethanm_math",
        bio: "Designs beginner-friendly tutorials, logic gate worksheets, and hands-on exercises so anyone can start building circuits right away.",
        favoriteRedstoneBuild: "Compact 4-bit synchronous binary counter",
    },
    {
        id: "community-lead",
        name: "Jordan Brooks",
        role: "Community & Outreach Lead",
        major: "Information Sciences",
        year: "Class of 2027",
        minecraftIgn: "BlockEngineer",
        discordHandle: "@jordan_brooks",
        bio: "Manages club Discord announcements, Quad Day recruitment, flyer campaigns, and Minecraft server mini-games and showcases.",
        favoriteRedstoneBuild:
            "Self-sorting automated hopper warehouse with inventory indicators",
    },
];
