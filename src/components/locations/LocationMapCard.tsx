import { LocationMapEmbed } from "@/components/locations/LocationMapEmbed";

type LocationMapCardProps = {
  name: string;
  lines: readonly string[];
  mapEmbed: string;
  mapQuery: string;
  mapTitle: string;
  theme?: "light" | "dark";
  showAddress?: boolean;
  showMap?: boolean;
  compact?: boolean;
  /** Stack map beneath address instead of beside it */
  mapLayout?: "beside" | "below";
  practiceType?: "nhs" | "private";
};

const practiceLabels = {
  nhs: "NHS Practice",
  private: "Private Practice",
} as const;

export function LocationMapCard({
  name,
  lines,
  mapEmbed,
  mapQuery,
  mapTitle,
  theme = "light",
  showAddress = true,
  showMap = true,
  compact = false,
  mapLayout = "beside",
  practiceType,
}: LocationMapCardProps) {
  const isDark = theme === "dark";
  const addressOnly = showAddress && !showMap;
  const stackMapBelow = mapLayout === "below" && showAddress && showMap;
  const shellPadding = compact
    ? "p-4 lg:p-5"
    : isDark
      ? "p-6 backdrop-blur-sm lg:p-8"
      : "p-6 lg:p-8";
  const gridGap = compact ? "gap-4 lg:gap-5" : "gap-6 lg:gap-8";
  const mapMinHeight = compact
    ? "min-h-[140px] sm:min-h-[155px] lg:min-h-[170px]"
    : stackMapBelow
      ? "min-h-[160px] sm:min-h-[180px]"
      : "min-h-[180px] sm:min-h-[200px] lg:min-h-[220px]";

  const layoutClass = stackMapBelow
    ? "flex flex-col gap-5"
    : showAddress && showMap
      ? `grid ${gridGap} lg:grid-cols-[1fr_1.15fr] lg:items-stretch`
      : "grid gap-4";

  return (
    <article
      className={`${layoutClass} ${
        isDark
          ? `h-full border border-white/10 bg-white/5 ${shellPadding}`
          : `border border-charcoal/10 bg-neutral-50 ${shellPadding}`
      }`}
    >
      {showAddress ? (
        <div>
          {practiceType ? (
            <p
              className={`inline-block px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.28em] ${
                practiceType === "nhs"
                  ? isDark
                    ? "bg-[#005EB8] text-white"
                    : "bg-[#005EB8] text-white"
                  : isDark
                    ? "border border-white/35 bg-white/10 text-white"
                    : "border border-charcoal/20 bg-white text-charcoal"
              }`}
            >
              {practiceLabels[practiceType]}
            </p>
          ) : null}
          <h3
            className={`font-medium leading-snug ${
              practiceType ? "mt-4" : ""
            } ${
              compact || !addressOnly
                ? "text-lg lg:text-xl"
                : "text-xl lg:text-2xl"
            } ${isDark ? "text-white" : "text-charcoal"}`}
          >
            {name}
          </h3>
          <address
            className={`space-y-0.5 not-italic leading-relaxed ${
              compact ? "mt-2 text-sm lg:text-[0.9375rem]" : "mt-4 text-base"
            } ${isDark ? "text-white/80" : "text-charcoal/80"}`}
          >
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
        </div>
      ) : null}

      {showMap ? (
        <div className={`${showAddress && !stackMapBelow ? undefined : "space-y-3"} ${stackMapBelow ? "mt-auto" : ""}`}>
          {!showAddress ? (
            <h3
              className={`text-lg font-medium leading-snug lg:text-xl ${
                isDark ? "text-white" : "text-charcoal"
              }`}
            >
              {name}
            </h3>
          ) : null}
          <div
            className={`overflow-hidden border ${mapMinHeight} ${
              isDark
                ? "rounded-sm border-white/10 shadow-2xl shadow-black/20"
                : "border-charcoal/10"
            }`}
          >
            <LocationMapEmbed mapQuery={mapQuery} mapTitle={mapTitle} theme={theme} />
          </div>
        </div>
      ) : null}
    </article>
  );
}
