"use client";

import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  parseStoredConsent,
  saveCookiePreferences,
  type CookieConsentPreferences,
} from "@/lib/cookie-consent";

type CookieConsentContextValue = {
  preferences: CookieConsentPreferences | null;
  hasAnswered: boolean;
  functionalAllowed: boolean;
  analyticsAllowed: boolean;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (functional: boolean, analytics: boolean) => void;
  openPreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
}

type CookieConsentProviderProps = {
  children: ReactNode;
};

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [preferences, setPreferences] = useState<CookieConsentPreferences | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [draftFunctional, setDraftFunctional] = useState(false);
  const [draftAnalytics, setDraftAnalytics] = useState(false);

  useEffect(() => {
    const stored = parseStoredConsent(localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY));
    setPreferences(stored);
    setShowBanner(!stored);
    setHasHydrated(true);
  }, []);

  const applyPreferences = useCallback((next: CookieConsentPreferences) => {
    setPreferences(next);
    setShowBanner(false);
    setShowPreferences(false);
  }, []);

  const acceptAll = useCallback(() => {
    applyPreferences(saveCookiePreferences({ functional: true, analytics: true }));
  }, [applyPreferences]);

  const rejectNonEssential = useCallback(() => {
    applyPreferences(saveCookiePreferences({ functional: false, analytics: false }));
  }, [applyPreferences]);

  const savePreferences = useCallback(
    (functional: boolean, analytics: boolean) => {
      applyPreferences(saveCookiePreferences({ functional, analytics }));
    },
    [applyPreferences],
  );

  const openPreferences = useCallback(() => {
    setDraftFunctional(preferences?.functional ?? false);
    setDraftAnalytics(preferences?.analytics ?? false);
    setShowPreferences(true);
    setShowBanner(true);
  }, [preferences]);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      preferences,
      hasAnswered: preferences !== null,
      functionalAllowed: preferences?.functional ?? false,
      analyticsAllowed: preferences?.analytics ?? false,
      acceptAll,
      rejectNonEssential,
      savePreferences,
      openPreferences,
    }),
    [preferences, acceptAll, rejectNonEssential, savePreferences, openPreferences],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}

      {hasHydrated && showBanner ? (
        <div
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-charcoal/15 bg-white p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] sm:p-6"
        >
          <div className="mx-auto max-w-4xl">
            {!showPreferences ? (
              <>
                <h2
                  id="cookie-consent-title"
                  className="text-lg font-medium text-charcoal lg:text-xl"
                >
                  Cookies on this website
                </h2>
                <p
                  id="cookie-consent-description"
                  className="mt-3 text-sm leading-relaxed text-charcoal/80 lg:text-base"
                >
                  We use strictly necessary cookies to remember your choices. With your
                  permission, we load embedded Google Maps and privacy-friendly Vercel Web
                  Analytics to understand how the site is used. We do not use advertising
                  cookies. See our{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Privacy &amp; Cookies notice
                  </Link>{" "}
                  for more information.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="bg-charcoal px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-charcoal-dark"
                  >
                    Accept all
                  </button>
                  <button
                    type="button"
                    onClick={rejectNonEssential}
                    className="border border-charcoal/25 px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-charcoal transition hover:border-charcoal/50"
                  >
                    Reject non-essential
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setDraftFunctional(preferences?.functional ?? false);
                      setDraftAnalytics(preferences?.analytics ?? false);
                      setShowPreferences(true);
                    }}
                    className="border border-charcoal/25 px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-charcoal transition hover:border-charcoal/50"
                  >
                    Manage preferences
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-lg font-medium text-charcoal lg:text-xl">
                  Cookie preferences
                </h2>
                <ul className="mt-4 space-y-4 text-sm text-charcoal/85 lg:text-base">
                  <li className="flex items-start justify-between gap-4 border-b border-charcoal/10 pb-4">
                    <div>
                      <p className="font-medium text-charcoal">Strictly necessary</p>
                      <p className="mt-1 leading-relaxed">
                        Required to store your consent choice. Always active.
                      </p>
                    </div>
                    <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-charcoal/60">
                      Always on
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-4 border-b border-charcoal/10 pb-4">
                    <div>
                      <p className="font-medium text-charcoal">Functional</p>
                      <p className="mt-1 leading-relaxed">
                        Allows embedded Google Maps on location pages.
                      </p>
                    </div>
                    <label className="flex shrink-0 items-center gap-2">
                      <span className="sr-only">Functional cookies</span>
                      <input
                        type="checkbox"
                        checked={draftFunctional}
                        onChange={(event) => setDraftFunctional(event.target.checked)}
                        className="h-4 w-4 accent-charcoal"
                      />
                    </label>
                  </li>
                  <li className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-charcoal">Analytics</p>
                      <p className="mt-1 leading-relaxed">
                        Privacy-friendly Vercel Web Analytics to measure page views and
                        navigation. No advertising profiles.
                      </p>
                    </div>
                    <label className="flex shrink-0 items-center gap-2">
                      <span className="sr-only">Analytics cookies</span>
                      <input
                        type="checkbox"
                        checked={draftAnalytics}
                        onChange={(event) => setDraftAnalytics(event.target.checked)}
                        className="h-4 w-4 accent-charcoal"
                      />
                    </label>
                  </li>
                </ul>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => savePreferences(draftFunctional, draftAnalytics)}
                    className="bg-charcoal px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-charcoal-dark"
                  >
                    Save preferences
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowPreferences(false)}
                    className="border border-charcoal/25 px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-charcoal transition hover:border-charcoal/50"
                  >
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </CookieConsentContext.Provider>
  );
}
