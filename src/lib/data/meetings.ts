export interface MeetingSchedule {
    day: string;
    time: string;
    location: string;
    room: string;
    semester: string;
    note: string;
    virtualOption?: string;
}

export const currentSchedule: MeetingSchedule = {
    day: "Every Thursday",
    time: "6:00 PM - 7:30 PM CST",
    location: "Siebel Center for Computer Science",
    room: "Room 1404",
    semester: "Academic Year 2025 - 2026",
    note: "Meetings alternate between 30-minute structured workshops and collaborative open build server time.",
    virtualOption: "Streamed live on Discord for remote members",
};

export interface WorkshopTrack {
    step: number;
    title: string;
    badge: string;
    summary: string;
    topics: string[];
}

export const workshopTracks: WorkshopTrack[] = [
    {
        step: 1,
        title: "Redstone Fundamentals & Logic Gates",
        badge: "Beginner",
        summary:
            "Learn how redstone dust, repeaters, comparators, and torches map directly to Boolean logic.",
        topics: [
            "Signal strength & delay ticks",
            "AND, OR, NOT, and XOR gates",
            "Buses and wire compression techniques",
        ],
    },
    {
        step: 2,
        title: "Arithmetic Logic Units (ALU)",
        badge: "Intermediate",
        summary:
            "Design circuitry that can calculate addition, subtraction, bitshifts, and logical operations.",
        topics: [
            "Half & Full adders",
            "Ripple-carry vs. Carry-Lookahead",
            "Two's complement subtraction & zero flags",
        ],
    },
    {
        step: 3,
        title: "Latches, Registers & Memory",
        badge: "Intermediate",
        summary:
            "Build sequential circuits that store state, read/write memory addresses, and hold program data.",
        topics: [
            "RS-NOR latches and D-Flip-Flops",
            "Register files and dual-port read",
            "RAM matrices and decoder addressing",
        ],
    },
    {
        step: 4,
        title: "Control Units & Instruction Sets",
        badge: "Advanced",
        summary:
            "How an opcode moves data across buses and tells the computer what operation to perform next.",
        topics: [
            "Custom ISA (Instruction Set Architecture)",
            "Program counter (PC) & jump branching",
            "Instruction decoding logic",
        ],
    },
    {
        step: 5,
        title: "Full CPU Assembly & Displays",
        badge: "Advanced",
        summary:
            "Putting it all together: a functional processor with screen output capable of running games and programs.",
        topics: [
            "Pipelined CPU architecture",
            "Piston/lamp 7-segment & pixel displays",
            "Writing custom assembly programs",
        ],
    },
];

export interface FaqItem {
    question: string;
    answer: string;
}

export const clubFaqs: FaqItem[] = [
    {
        question:
            "Do I need to be a Computer Science or Computer Engineering major?",
        answer: "Not at all! We have members from CS, ECE, Mechanical Engineering, Physics, Math, Business, and beyond. If you enjoy building things, solving puzzles, or playing Minecraft, you are in the right place.",
    },
    {
        question: "What if I have never used redstone before?",
        answer: "That is completely fine! We run dedicated starter workshops at the beginning of each semester and provide hands-on mentorship. You will be building working logic gates in your first hour.",
    },
    {
        question: "What version of Minecraft does the club use?",
        answer: "We use Minecraft Java Edition (1.21+). Our dedicated server runs optimization tools (Carpet Mod, Lithium) configured for precise redstone tick-debugging and worldedit plots.",
    },
    {
        question: "What should I bring to meetings?",
        answer: "Bring a laptop with Minecraft Java Edition installed, a mouse (building redstone with a trackpad is tough!), and your charger. If you do not have a laptop or Minecraft account, you can pair up with another member.",
    },
    {
        question: "Are there membership dues or fees?",
        answer: "No! Illini Redstone Computing is completely free to join. All meetings, workshops, and access to the server are open to any UIUC student.",
    },
    {
        question: "How do I join?",
        answer: "The easiest way to join is to hop into our Discord server and show up to any weekly meeting! You do not need to fill out an application.",
    },
];
