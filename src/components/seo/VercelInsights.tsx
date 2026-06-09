"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { usePathname } from "next/navigation";
import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

/**
 * Vercel Speed Insights, always active (performance monitoring, no advertising cookies).
 * Vercel Web Analytics, loaded only when the user opts in via cookie preferences.
 * Both are free on Vercel Hobby plan.
 */
export function VercelInsights() {
  const pathname = usePathname();
  const { preferences } = useCookieConsent();

  if (pathname === "/login") {
    return null;
  }

  return (
    <>
      <SpeedInsights />
      {preferences?.analytics ? <Analytics /> : null}
    </>
  );
}
