"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getProcedureSpecialtyHref,
  procedureSpecialties,
} from "@/lib/procedures";

type ProcedureTabNavProps = {
  activeSlug?: string;
};

export function ProcedureTabNav({ activeSlug }: ProcedureTabNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Procedure specialties"
      className="grid grid-cols-2 overflow-hidden rounded-sm sm:grid-cols-3 lg:grid-cols-5"
    >
      {procedureSpecialties.map((specialty) => {
        const isActive =
          activeSlug === specialty.slug ||
          (pathname === "/procedures" && activeSlug === specialty.slug) ||
          pathname === `/procedures/${specialty.slug}`;

        return (
          <Link
            key={specialty.slug}
            href={getProcedureSpecialtyHref(specialty.slug)}
            className={`px-3 py-4 text-center text-xs font-semibold uppercase leading-snug tracking-[0.12em] transition-colors sm:px-3 sm:text-sm lg:px-4 lg:tracking-[0.16em] ${
              isActive
                ? "bg-neutral-100 text-charcoal"
                : "bg-charcoal text-white hover:bg-charcoal-dark"
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {specialty.shortLabel ? (
              <>
                <span className="lg:hidden">{specialty.shortLabel}</span>
                <span className="hidden lg:inline">{specialty.label}</span>
              </>
            ) : (
              specialty.label
            )}
          </Link>
        );
      })}
    </nav>
  );
}
