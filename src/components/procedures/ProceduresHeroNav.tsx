"use client";

import {
  proceduresHeroNavItems,
  type ProceduresHeroNavItem,
} from "@/lib/procedures/procedures-hero-nav";
import type { ProcedureSpecialtySlug } from "@/lib/procedures";

type ProceduresHeroNavProps = {
  activeSpecialty: ProcedureSpecialtySlug;
  onSpecialtyChange: (slug: ProcedureSpecialtySlug) => void;
};

const navButtonClass =
  "w-full border-b border-white/25 px-2 py-3.5 text-center text-xs font-semibold uppercase leading-snug tracking-[0.1em] transition-colors last:border-b-0 sm:min-w-[33.333%] sm:w-auto sm:flex-1 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-3 sm:text-sm md:min-w-0 lg:tracking-[0.12em]";

function NavLabel({ item }: { item: ProceduresHeroNavItem }) {
  if (item.shortLabel) {
    return (
      <>
        <span className="lg:hidden">{item.shortLabel}</span>
        <span className="hidden lg:inline">{item.label}</span>
      </>
    );
  }

  return item.label;
}

export function ProceduresHeroNav({
  activeSpecialty,
  onSpecialtyChange,
}: ProceduresHeroNavProps) {
  return (
    <nav
      aria-label="Procedure categories"
      className="relative z-10 flex w-full flex-col border-t border-white/25 sm:flex-row sm:flex-wrap lg:flex-nowrap"
    >
      {proceduresHeroNavItems.map((item) => {
        const isActive = activeSpecialty === item.slug;

        return (
          <button
            key={item.slug}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSpecialtyChange(item.slug)}
            className={`${navButtonClass} ${
              isActive
                ? "bg-white text-charcoal"
                : "bg-charcoal/50 text-white hover:bg-white/15"
            }`}
          >
            <NavLabel item={item} />
          </button>
        );
      })}
    </nav>
  );
}
