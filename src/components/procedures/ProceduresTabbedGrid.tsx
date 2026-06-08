"use client";

import { ProcedureCard } from "@/components/procedures/ProcedureCard";
import { Button } from "@/components/ui/Button";
import { procedureSpecialties, type ProcedureSpecialtySlug } from "@/lib/procedures";

type ProceduresTabbedGridProps = {
  activeSlug: ProcedureSpecialtySlug;
};

export function ProceduresTabbedGrid({ activeSlug }: ProceduresTabbedGridProps) {
  const activeSpecialty =
    procedureSpecialties.find((specialty) => specialty.slug === activeSlug) ??
    procedureSpecialties[0];

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {activeSpecialty.cards.map((card) => (
          <ProcedureCard key={card.slug} card={card} />
        ))}
      </div>

      <div className="mt-8">
        <Button href={`/procedures/${activeSpecialty.slug}`} variant="dark">
          Read Full {activeSpecialty.pageTitle} Guide
        </Button>
      </div>
    </div>
  );
}
