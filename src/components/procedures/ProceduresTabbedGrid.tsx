"use client";

import { ProcedureCard } from "@/components/procedures/ProcedureCard";
import { RoboticMinimallyInvasivePanel } from "@/components/procedures/RoboticMinimallyInvasivePanel";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import {
  getProcedureSpecialtyHref,
  procedureSpecialties,
  type ProcedureSpecialtySlug,
} from "@/lib/procedures";

type ProceduresTabbedGridProps = {
  activeSlug: ProcedureSpecialtySlug;
};

export function ProceduresTabbedGrid({ activeSlug }: ProceduresTabbedGridProps) {
  const activeSpecialty =
    procedureSpecialties.find((specialty) => specialty.slug === activeSlug) ??
    procedureSpecialties[0];

  if (activeSpecialty.slug === "robotic-minimally-invasive") {
    return <RoboticMinimallyInvasivePanel />;
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {activeSpecialty.cards.map((card, index) => (
          <ScrollReveal
            key={card.slug}
            variant={index % 2 === 0 ? "fade-up" : "scale-up"}
            delay={scrollStagger(index, 75, 60)}
          >
            <ProcedureCard card={card} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal variant="fade-up" delay={200}>
        <div className="mt-8">
          <Button
            href={getProcedureSpecialtyHref(activeSpecialty.slug)}
            variant="dark"
          >
            Read Full {activeSpecialty.pageTitle} Guide
          </Button>
        </div>
      </ScrollReveal>
    </div>
  );
}
