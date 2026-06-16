import Link from "next/link";
import { getProceduresTabHref, procedureSpecialtyMap } from "@/lib/procedures";
import { getProcedurePagesBySpecialty } from "@/lib/procedures/procedure-pages";
import type { ProcedureDetailPage } from "@/lib/procedures/procedure-pages/types";

type ProcedureHeroNavProps = {
  page: ProcedureDetailPage;
};

const tabClass =
  "flex min-h-[3rem] min-w-[50%] flex-1 items-center justify-center border-b border-r border-white/25 px-2 py-3 text-center text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.1em] transition-colors last:border-b-0 last:border-r-0 sm:min-w-0 sm:border-b-0 sm:px-3 sm:py-3.5 sm:text-xs lg:tracking-[0.12em]";

export function ProcedureHeroNav({ page }: ProcedureHeroNavProps) {
  const siblings = getProcedurePagesBySpecialty(page.specialtySlug);
  const specialtyLabel =
    procedureSpecialtyMap[page.specialtySlug]?.label ?? "Procedures";

  return (
    <nav
      aria-label={`${page.title} related procedures`}
      className="relative z-10 flex w-full flex-col overflow-hidden border-t border-white/25 sm:flex-row sm:flex-wrap lg:flex-nowrap"
    >
      <Link
        href={getProceduresTabHref(page.specialtySlug)}
        className={`${tabClass} bg-charcoal/35 text-white/80 hover:bg-white/15 hover:text-white`}
      >
        {specialtyLabel}
      </Link>

      {siblings.map((sibling) => {
        const isActive = sibling.slug === page.slug;

        return (
          <Link
            key={sibling.slug}
            href={`/procedures/${sibling.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`${tabClass} ${
              isActive
                ? "bg-white text-charcoal"
                : "bg-charcoal/50 text-white hover:bg-white/15"
            }`}
          >
            {sibling.navLabel}
          </Link>
        );
      })}
    </nav>
  );
}
