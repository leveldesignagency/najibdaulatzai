"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getProceduresTabHref,
  procedureSpecialties,
  type ProcedureSpecialty,
} from "@/lib/procedures";

type ProcedureTabNavProps = {
  activeSlug?: string;
  variant?: "light" | "dark";
};

function TabLabel({ specialty }: { specialty: ProcedureSpecialty }) {
  if (specialty.shortLabel) {
    return (
      <>
        <span className="lg:hidden">{specialty.shortLabel}</span>
        <span className="hidden lg:inline">{specialty.label}</span>
      </>
    );
  }

  return specialty.label;
}

const tabLayout =
  "min-h-[3rem] w-full flex-1 border-b px-2 py-3 text-center text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.1em] transition-colors last:border-b-0 sm:min-w-[33.333%] sm:border-b-0 sm:border-r sm:px-3 sm:py-3.5 sm:text-xs sm:last:border-r-0 lg:min-w-0 lg:tracking-[0.12em]";

export function ProcedureTabNav({
  activeSlug,
  variant = "light",
}: ProcedureTabNavProps) {
  const pathname = usePathname();
  const isDark = variant === "dark";

  return (
    <nav
      aria-label="Procedure specialties"
      className={`flex w-full flex-col overflow-hidden sm:flex-row sm:flex-wrap lg:flex-nowrap ${
        isDark ? "border-t border-white/25" : "border border-charcoal/15"
      }`}
    >
      {procedureSpecialties.map((specialty) => {
        const isActive =
          activeSlug === specialty.slug ||
          pathname === `/procedures/${specialty.slug}`;

        const activeClass = isDark
          ? "bg-white text-charcoal"
          : "bg-charcoal text-white";
        const inactiveClass = isDark
          ? "border-white/25 bg-charcoal/50 text-white hover:bg-white/15"
          : "border-charcoal/15 bg-white text-charcoal/75 hover:bg-neutral-50 hover:text-charcoal";

        return (
          <Link
            key={specialty.slug}
            href={getProceduresTabHref(specialty.slug)}
            className={`flex items-center justify-center ${tabLayout} ${
              isDark ? "border-r border-white/25 last:border-r-0" : "border-charcoal/15 sm:border-r"
            } ${isActive ? activeClass : inactiveClass}`}
            aria-current={isActive ? "page" : undefined}
          >
            <TabLabel specialty={specialty} />
          </Link>
        );
      })}
    </nav>
  );
}
