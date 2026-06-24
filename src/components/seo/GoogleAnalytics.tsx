"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";
import { trackLinkClick } from "@/lib/analytics/link-tracking";
import {
  isGaConfigured,
  trackPageView,
  updateAnalyticsConsent,
} from "@/lib/analytics/gtag";

export function GoogleAnalytics() {
  const { analyticsAllowed } = useCookieConsent();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!isGaConfigured()) return;
    updateAnalyticsConsent(analyticsAllowed);
  }, [analyticsAllowed]);

  useEffect(() => {
    if (!isGaConfigured() || !analyticsAllowed) return;

    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    trackPageView(url);
  }, [analyticsAllowed, pathname, searchParams]);

  useEffect(() => {
    if (!isGaConfigured() || !analyticsAllowed) return;

    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      trackLinkClick(anchor, window.location.pathname);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [analyticsAllowed]);

  return null;
}
