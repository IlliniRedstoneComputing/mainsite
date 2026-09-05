/**
 * Central Analytics & QR Flyer Attribution Utility for Illini Redstone Computing
 *
 * Designed to capture QR code flyer campaigns (e.g. /qr/quad-day, /qr/siebel-lobby)
 * and persist attribution so that conversion actions (e.g., clicking Join Discord)
 * can be linked back to physical flyer locations.
 */

export interface AttributionData {
    campaign: string;
    source?: string;
    medium?: string;
    timestamp: number;
    landingPath: string;
}

const STORAGE_KEY = "irc_attribution";

/**
 * Persist campaign information when arriving via QR code or referral link.
 */
export function recordCampaignVisit(
    campaign: string,
    source: string = "flyer_qr",
): void {
    if (typeof window === "undefined") return;

    const attribution: AttributionData = {
        campaign,
        source,
        medium: "qr_flyer",
        timestamp: Date.now(),
        landingPath: window.location.pathname,
    };

    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
    } catch (e) {
        // Ignore storage quota or disabled storage in private browsing
    }

    trackEvent("flyer_qr_scanned", {
        campaign,
        source,
        url: window.location.href,
        referrer: document.referrer || "direct",
    });
}

/**
 * Retrieve current active attribution data.
 */
export function getAttribution(): AttributionData | null {
    if (typeof window === "undefined") return null;

    try {
        const stored =
            window.sessionStorage.getItem(STORAGE_KEY) ||
            window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
    } catch (e) {
        return null;
    }
    return null;
}

/**
 * Central event dispatch.
 * Easily integrates with Google Analytics 4, Plausible, Umami, PostHog, or custom webhooks.
 */
export function trackEvent(
    eventName: string,
    properties: Record<string, unknown> = {},
): void {
    if (typeof window === "undefined") return;

    const attribution = getAttribution();
    const payload = {
        event: eventName,
        timestamp: new Date().toISOString(),
        attribution: attribution?.campaign || "organic",
        ...properties,
    };

    // Development logging
    console.log(
        `%c[IRC Analytics]%c ${eventName}`,
        "color: #ff2d46; font-weight: bold",
        "color: inherit",
        payload,
    );

    // Google Analytics 4 hook (if loaded in app.html or GTM)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (typeof win.gtag === "function") {
        win.gtag("event", eventName, payload);
    }

    // Plausible hook (if plausible script is included)
    if (typeof win.plausible === "function") {
        win.plausible(eventName, { props: payload });
    }

    // Umami hook (if umami script is included)
    if (win.umami && typeof win.umami.track === "function") {
        win.umami.track(eventName, payload);
    }
}
