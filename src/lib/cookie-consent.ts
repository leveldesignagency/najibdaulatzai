export const COOKIE_CONSENT_STORAGE_KEY = "nd-cookie-consent";
export const COOKIE_CONSENT_VERSION = 2;

export type CookieConsentPreferences = {
  version: number;
  essential: true;
  functional: boolean;
  analytics: boolean;
  updatedAt: string;
};

export const defaultCookiePreferences: CookieConsentPreferences = {
  version: COOKIE_CONSENT_VERSION,
  essential: true,
  functional: false,
  analytics: false,
  updatedAt: "",
};

export function parseStoredConsent(raw: string | null): CookieConsentPreferences | null {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as CookieConsentPreferences;
    if (parsed.version !== COOKIE_CONSENT_VERSION || parsed.essential !== true) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveCookiePreferences(
  preferences: Omit<CookieConsentPreferences, "version" | "essential" | "updatedAt">,
): CookieConsentPreferences {
  const stored: CookieConsentPreferences = {
    version: COOKIE_CONSENT_VERSION,
    essential: true,
    functional: preferences.functional,
    analytics: preferences.analytics,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(stored));
  return stored;
}
