export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "G-S48PMZ3L3C";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function isGaConfigured() {
  return GA_MEASUREMENT_ID.length > 0;
}

export function ensureGtag() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
}

export function updateAnalyticsConsent(granted: boolean) {
  if (!isGaConfigured()) return;

  ensureGtag();
  window.gtag!("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
  });

  if (granted) {
    window.gtag!("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: false,
    });
  }
}

export function trackPageView(url: string) {
  if (!isGaConfigured()) return;

  ensureGtag();
  window.gtag!("event", "page_view", {
    page_path: url,
  });
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (!isGaConfigured()) return;

  ensureGtag();

  const cleaned = Object.fromEntries(
    Object.entries(params ?? {}).filter(([, value]) => value !== undefined),
  );

  window.gtag!("event", eventName, cleaned);
}
