"use client";

import { useCookieConsent } from "@/components/cookies/CookieConsentProvider";

type LocationMapEmbedProps = {
  mapEmbed: string;
  mapTitle: string;
  mapQuery: string;
  theme?: "light" | "dark";
};

export function LocationMapEmbed({
  mapEmbed,
  mapTitle,
  mapQuery,
  theme = "light",
}: LocationMapEmbedProps) {
  const { functionalAllowed, openPreferences } = useCookieConsent();
  const isDark = theme === "dark";

  if (!functionalAllowed) {
    return (
      <div
        className={`flex h-full min-h-[180px] flex-col items-center justify-center gap-4 p-6 text-center sm:min-h-[200px] lg:min-h-[220px] ${
          isDark ? "bg-white/5 text-white/85" : "bg-neutral-100 text-charcoal/80"
        }`}
      >
        <p className="max-w-sm text-sm leading-relaxed">
          Map embeds use functional cookies from Google. Enable functional cookies to view
          the map here, or open the location in Google Maps.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={openPreferences}
            className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] ${
              isDark
                ? "bg-white text-charcoal hover:bg-white/90"
                : "bg-charcoal text-white hover:bg-charcoal-dark"
            }`}
          >
            Cookie settings
          </button>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`border px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] ${
              isDark
                ? "border-white/30 text-white hover:border-white/60"
                : "border-charcoal/25 text-charcoal hover:border-charcoal/50"
            }`}
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    );
  }

  return (
    <iframe
      title={mapTitle}
      src={mapEmbed}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className={`h-full min-h-[180px] w-full border-0 sm:min-h-[200px] lg:min-h-[220px] ${
        isDark ? "grayscale-[20%] invert-[5%]" : ""
      }`}
      allowFullScreen
    />
  );
}
