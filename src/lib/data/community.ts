// Edit community content here. Null URLs render as text, never dead links.
export const meeting = { day: 'Tuesdays', time: '7:00–8:00 PM', location: 'ECEB', room: 'Room announced in Discord about 30 minutes before the meeting.' };
export const pastMeetings: { date: string; title: string; summary: string }[] = [];
export const faqs = [
    { id: 'about', category: 'Community', question: 'What is Illini Redstone Computing?', answer: 'We are students at the University of Illinois Urbana-Champaign exploring computer architecture and logic design through Minecraft, redstone circuitry, mods, and tooling.' },
    { id: 'join', category: 'Community', question: 'Who can join?', answer: 'We welcome anyone interested in redstone and Minecraft. You do not have to be an ECE student to join us.' },
    { id: 'discord', category: 'Community', question: 'How can I connect with the club?', answer: 'Join our Discord to discuss redstone, share builds, and get help with projects.', href: '/discord', label: 'Join Discord' },
    { id: 'meetings', category: 'Meetings', question: 'When and where do you meet?', answer: `General meetings are on ${meeting.day}, ${meeting.time}, in ${meeting.location}. ${meeting.room}`, href: '/about/meetings', label: 'Meeting details' },
    { id: 'experience', category: 'Getting started', question: 'Do I need redstone experience?', answer: '[Add experience requirements and how beginners can get involved.]', placeholder: true },
    { id: 'bring', category: 'Meetings', question: 'What should I bring to a meeting?', answer: '[Add what to bring and any setup to complete beforehand.]', placeholder: true },
    { id: 'mods', category: 'Getting started', question: 'Which Minecraft version and mods do you use?', answer: '[Add the supported Minecraft version, modpack, and setup instructions.]', placeholder: true },
    { id: 'dues', category: 'Community', question: 'Are there membership dues or registration steps?', answer: '[Add dues, registration requirements, or confirmation that none are required.]', placeholder: true },
];
export const socials = [
    { name: 'Discord', description: 'Talk redstone, share builds, and find meeting room announcements.', href: '/discord', label: 'Join the server', accent: 'var(--color-discord)' },
    { name: 'Instagram', description: 'Find Illini Redstone Computing on Instagram.', href: 'https://www.instagram.com/illini_computing/', label: '@illini_computing', accent: 'var(--color-instagram)' },
    { name: 'Email', description: '[Add the club email address and what to contact us about.]', href: null, label: 'Email address to be added', accent: 'var(--color-illini-orange)' },
];
export const resources = [
    { name: 'Getting started', description: 'Visit our guides and tutorials.', href: '/guides' },
    { name: 'Modpack & tooling', description: 'Visit the modpack and tooling guide.', href: '/guides/modpack' },
    { name: 'Club repository', description: '[Add the club GitHub organization or repository.]', href: null },
];
export type Member = { name: string; role: string; bio: string; skinImage?: string; href?: string };
// Replace with public member information approved for the site. Add/remove entries as needed.
// Optional skinImage: local URL to a rendered skin image, e.g. /members/name.png.
// Put images in static/members. Omit skinImage to show a placeholder; no external skin service is used.
export const members: Member[] = [
    { name: '[Member name]', role: '[Role / title]', bio: '[Add a short introduction, interests, or current project.]' },
    { name: '[Member name]', role: '[Role / title]', bio: '[Add a short introduction, interests, or current project.]' },
    { name: '[Member name]', role: '[Role / title]', bio: '[Add a short introduction, interests, or current project.]' },
];
