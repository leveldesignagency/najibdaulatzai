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

export function trackPageView(url: string) {
  if (!isGaConfigured() || typeof window === "undefined" || !window.gtag) return;

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean | undefined>,
) {
  if (!isGaConfigured() || typeof window === "undefined" || !window.gtag) return;

  const cleaned = Object.fromEntries(
    Object.entries(params ?? {}).filter(([, value]) => value !== undefined),
  );

  window.gtag("event", eventName, cleaned);
}
