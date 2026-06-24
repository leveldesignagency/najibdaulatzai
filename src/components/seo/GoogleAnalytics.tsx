"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";
import { trackLinkClick } from "@/lib/analytics/link-tracking";
import { GA_MEASUREMENT_ID, isGaConfigured, trackPageView } from "@/lib/analytics/gtag";

export function GoogleAnalytics() {
  const { analyticsAllowed } = useCookieConsent();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const enabled = analyticsAllowed && isGaConfigured();

  useEffect(() => {
    if (!enabled) return;

    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;
    trackPageView(url);
  }, [enabled, pathname, searchParams]);

  useEffect(() => {
    if (!enabled) return;

    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      trackLinkClick(anchor, window.location.pathname);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            send_page_view: false
          });
        `}
      </Script>
    </>
  );
}
