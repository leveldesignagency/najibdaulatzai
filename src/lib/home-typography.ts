/** Shared homepage typography — keep section copy on these scales. */
export const homeTypography = {
  /** Eyebrow above section headings */
  eyebrow:
    "text-[0.6875rem] font-semibold uppercase tracking-[0.22em] sm:text-xs sm:tracking-[0.2em]",
  eyebrowDark: "text-charcoal/45",
  eyebrowLight: "text-white/55",
  /** Value cards in Our Values — eyebrow scale +3px */
  valueTitle:
    "text-[0.875rem] font-semibold uppercase tracking-[0.22em] sm:text-[0.9375rem] sm:tracking-[0.2em]",
  /** Intro / lead paragraph under headings */
  lead: "text-base leading-relaxed sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-[1.65]",
  leadDark: "text-charcoal/80",
  leadLight: "text-white/85",
  /** Pull quotes and emphasis blocks */
  quote: "text-lg leading-relaxed sm:text-xl sm:leading-relaxed lg:text-[1.35rem] lg:leading-[1.65]",
  quoteDark: "text-charcoal/85",
  /** Attribution / meta lines */
  meta: "text-sm font-medium sm:text-base",
  metaDark: "text-charcoal",
  metaLight: "text-white/90",
} as const;
