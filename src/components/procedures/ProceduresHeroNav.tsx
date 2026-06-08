"use client";

import Link from "next/link";
import {
  proceduresHeroNavItems,
  type ProceduresHeroNavItem,
} from "@/lib/procedures/procedures-hero-nav";
import type { ProcedureSpecialtySlug } from "@/lib/procedures";

type ProceduresHeroNavProps = {
  activeSpecialty: ProcedureSpecialtySlug;
  onSpecialtyChange: (slug: ProcedureSpecialtySlug) => void;
  onScrollTarget: (targetId: string) => void;
};

const navButtonClass =
  "min-w-[50%] flex-1 border-r border-white/25 px-2 py-3.5 text-center text-[0.6rem] font-semibold uppercase leading-tight tracking-[0.12em] transition-colors last:border-r-0 sm:min-w-[33.333%] sm:px-3 sm:text-[0.65rem] md:min-w-0 md:text-xs lg:tracking-[0.14em]";

function NavLabel({ item }: { item: ProceduresHeroNavItem }) {
  if (item.kind === "scroll" && item.shortLabel) {
    return (
      <>
        <span className="md:hidden">{item.shortLabel}</span>
        <span className="hidden md:inline">{item.label}</span>
      </>
    );
  }

  return item.label;
}

export function ProceduresHeroNav({
  activeSpecialty,
  onSpecialtyChange,
  onScrollTarget,
}: ProceduresHeroNavProps) {
  return (
    <nav
      aria-label="Procedure categories"
      className="relative z-10 flex w-full flex-wrap border-t border-white/25 lg:flex-nowrap"
    >
      {proceduresHeroNavItems.map((item) => {
        if (item.kind === "specialty") {
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
              {item.label}
            </button>
          );
        }

        if (item.kind === "link") {
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${navButtonClass} bg-charcoal/50 text-white hover:bg-white/15`}
            >
              {item.label}
            </Link>
          );
        }

        return (
          <button
            key={item.targetId}
            type="button"
            onClick={() => onScrollTarget(item.targetId)}
            className={`${navButtonClass} bg-charcoal/50 text-white hover:bg-white/15`}
          >
            <NavLabel item={item} />
          </button>
        );
      })}
    </nav>
  );
}
