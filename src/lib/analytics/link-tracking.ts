import { trackEvent } from "@/lib/analytics/gtag";
import { spireBusheyBookingUrl } from "@/lib/site-config";

function linkLabel(anchor: HTMLAnchorElement) {
  return (
    anchor.getAttribute("aria-label")?.trim() ||
    anchor.textContent?.replace(/\s+/g, " ").trim().slice(0, 80) ||
    "unknown"
  );
}

function isFabLink(anchor: HTMLAnchorElement) {
  return Boolean(anchor.closest('[data-analytics-context="mobile-fab"]'));
}

function analyticsContext(anchor: HTMLAnchorElement) {
  return (
    anchor.getAttribute("data-analytics-context") ||
    anchor.closest("[data-analytics-context]")?.getAttribute("data-analytics-context") ||
    undefined
  );
}

function cleanPath(href: string) {
  return href.split("?")[0]?.split("#")[0] ?? href;
}

function isSpireBookingUrl(href: string) {
  return (
    href.startsWith(spireBusheyBookingUrl) ||
    /appointments\.spirehealthcare\.com/i.test(href)
  );
}

function isEnquireLabel(label: string) {
  return /enquire|inquire|get in touch/i.test(label);
}

/**
 * Delegated click tracking for interest / lead signals.
 * Events to mark as conversions in GA4 (Admin → Events → Mark as key event):
 * - book_online_click
 * - enquire_click
 * - phone_click
 * - email_click
 * - whatsapp_click
 */
export function trackLinkClick(anchor: HTMLAnchorElement, pagePath: string) {
  const href = anchor.getAttribute("href") ?? "";
  const label = linkLabel(anchor);
  const fromFab = isFabLink(anchor);
  const context = analyticsContext(anchor);
  const action = anchor.getAttribute("data-analytics-action") ?? undefined;
  const locationName =
    anchor.getAttribute("data-analytics-location") ?? undefined;

  const base = {
    link_text: label,
    page_path: pagePath,
    link_url: href,
    ...(fromFab ? { source: "mobile_fab" } : {}),
    ...(context ? { context } : {}),
    ...(locationName ? { location_name: locationName } : {}),
  };

  if (href.startsWith("tel:") || action === "phone") {
    trackEvent("phone_click", base);
    return;
  }

  if (href.startsWith("mailto:") || action === "email") {
    trackEvent("email_click", base);
    return;
  }

  if (/whatsapp|wa\.me/i.test(href) || action === "whatsapp") {
    trackEvent("whatsapp_click", base);
    return;
  }

  if (action === "book_online" || isSpireBookingUrl(href)) {
    trackEvent("book_online_click", {
      ...base,
      booking_provider: "spire",
      location_name: locationName || "Spire Bushey Hospital",
    });
    return;
  }

  const path = cleanPath(href);
  const isContactPath = path === "/contact" || path.endsWith("/contact");

  if (action === "enquire" || (isContactPath && isEnquireLabel(label))) {
    trackEvent("enquire_click", {
      ...base,
      cta_type: "enquire",
    });
    return;
  }

  if (isContactPath) {
    trackEvent("cta_click", {
      ...base,
      cta_type: "book_contact",
    });
    return;
  }

  if (anchor.target === "_blank" && href.startsWith("http")) {
    trackEvent("outbound_click", base);
  }
}
