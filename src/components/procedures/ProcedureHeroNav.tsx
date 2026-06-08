import Link from "next/link";
import { getProcedurePagesBySpecialty } from "@/lib/procedures/procedure-pages";
import type { ProcedureDetailPage } from "@/lib/procedures/procedure-pages/types";

type ProcedureHeroNavProps = {
  page: ProcedureDetailPage;
};

export function ProcedureHeroNav({ page }: ProcedureHeroNavProps) {
  const siblings = getProcedurePagesBySpecialty(page.specialtySlug);

  return (
    <nav
      aria-label={`${page.title} related procedures`}
      className="relative z-10 flex w-full flex-wrap border-t border-white/25"
    >
      {siblings.map((sibling) => {
        const isActive = sibling.slug === page.slug;

        return (
          <Link
            key={sibling.slug}
            href={`/procedures/${sibling.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={`min-w-[50%] flex-1 border-r border-white/25 px-3 py-3.5 text-center text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.14em] transition-colors last:border-r-0 sm:min-w-0 sm:text-xs ${
              isActive
                ? "bg-white text-charcoal"
                : "bg-charcoal/50 text-white hover:bg-white/15"
            }`}
            style={{ borderRadius: 0 }}
          >
            {sibling.navLabel}
          </Link>
        );
      })}
    </nav>
  );
}
