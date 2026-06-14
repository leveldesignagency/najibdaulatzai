import {
  buildGoogleMapsEmbedUrl,
  buildGoogleMapsSearchUrl,
} from "@/lib/google-maps-embed";

type LocationMapEmbedProps = {
  mapTitle: string;
  mapQuery: string;
  theme?: "light" | "dark";
};

const iframeHeights =
  "h-[180px] w-full border-0 sm:h-[200px] lg:h-[220px]";

export function LocationMapEmbed({
  mapTitle,
  mapQuery,
  theme = "light",
}: LocationMapEmbedProps) {
  const isDark = theme === "dark";
  const mapsSearchUrl = buildGoogleMapsSearchUrl(mapQuery);

  return (
    <div className="flex h-full flex-col">
      <iframe
        title={mapTitle}
        src={buildGoogleMapsEmbedUrl(mapQuery)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={`${iframeHeights} ${
          isDark ? "grayscale-[20%] invert-[5%]" : ""
        }`}
        allowFullScreen
      />
      <a
        href={mapsSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-2 text-[0.6875rem] font-medium uppercase tracking-[0.18em] underline-offset-2 hover:underline ${
          isDark ? "text-white/70 hover:text-white" : "text-charcoal/60 hover:text-charcoal"
        }`}
      >
        Open in Google Maps
      </a>
    </div>
  );
}
