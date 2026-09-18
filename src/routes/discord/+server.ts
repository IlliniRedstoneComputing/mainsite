import type { RequestHandler } from "./$types";

const DISCORD_INVITE_LINK = "https://discord.gg/3XwGbCXmwq"; // Replace with your actual Discord invite link

export const GET: RequestHandler = req => {
    return new Response(null, {
        status: 302,
        headers: {
            Location: DISCORD_INVITE_LINK,
        },
    });
};

// Returns a positive hex hash of a string using a simple hashing algorithm
function simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash).toString(16); // Convert to hex
}
