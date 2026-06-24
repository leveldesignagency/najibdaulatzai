"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";
import { trackLinkClick } from "@/lib/analytics/link-tracking";
import {
  isGaConfigured,
  trackPageView,
  updateAnalyticsConsent,
} from "@/lib/analytics/gtag";

export function GoogleAnalytics() {
  const { analyticsAllowed, hasHydrated } = useCookieConsent();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialPageViewSent = useRef(false);

  useEffect(() => {
    if (!isGaConfigured() || !hasHydrated) return;
    updateAnalyticsConsent(analyticsAllowed);
  }, [analyticsAllowed, hasHydrated]);

  useEffect(() => {
    if (!isGaConfigured() || !hasHydrated || !analyticsAllowed) return;

    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    if (pathname === "/" && !initialPageViewSent.current) {
      initialPageViewSent.current = true;
      return;
    }

    trackPageView(url);
  }, [analyticsAllowed, hasHydrated, pathname, searchParams]);

  useEffect(() => {
    if (!isGaConfigured() || !hasHydrated || !analyticsAllowed) return;

    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      trackLinkClick(anchor, window.location.pathname);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [analyticsAllowed, hasHydrated]);

  return null;
}
