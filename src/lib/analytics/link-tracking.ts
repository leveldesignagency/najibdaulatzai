import { trackEvent } from "@/lib/analytics/gtag";

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

export function trackLinkClick(anchor: HTMLAnchorElement, pagePath: string) {
  const href = anchor.getAttribute("href") ?? "";
  const label = linkLabel(anchor);
  const fromFab = isFabLink(anchor);
  const base = {
    link_text: label,
    page_path: pagePath,
    link_url: href,
    ...(fromFab ? { source: "mobile_fab" } : {}),
  };

  if (href.startsWith("tel:")) {
    trackEvent("phone_click", base);
    return;
  }

  if (href.startsWith("mailto:")) {
    trackEvent("email_click", base);
    return;
  }

  if (/whatsapp|wa\.me/i.test(href)) {
    trackEvent("whatsapp_click", base);
    return;
  }

  const path = href.split("?")[0]?.split("#")[0] ?? href;

  if (path === "/contact" || path.endsWith("/contact")) {
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
