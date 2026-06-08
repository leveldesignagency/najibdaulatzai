"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export function CookieSettingsButton() {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-xs uppercase tracking-[0.28em] text-white/85 transition hover:text-white"
    >
      Cookie settings
    </button>
  );
}
