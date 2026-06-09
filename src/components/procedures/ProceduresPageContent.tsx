"use client";

import { FocalImage } from "@/components/ui/FocalImage";
import { useCallback, useEffect, useState } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { MinimallyInvasiveSection } from "@/components/procedures/MinimallyInvasiveSection";
import { ProceduresHeroNav } from "@/components/procedures/ProceduresHeroNav";
import { ProceduresTabbedGrid } from "@/components/procedures/ProceduresTabbedGrid";
import type { ProcedureSpecialtySlug } from "@/lib/procedures";

const heroImage = {
  src: "/images/procedures-home.jpg",
  alt: "Mr Najib Daulatzai beside da Vinci robotic surgical systems used for advanced colorectal procedures",
} as const;

export function ProceduresPageContent() {
  const [activeSpecialty, setActiveSpecialty] =
    useState<ProcedureSpecialtySlug>("proctology");

  const scrollToId = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleSpecialtyChange = useCallback((slug: ProcedureSpecialtySlug) => {
    setActiveSpecialty(slug);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === "minimally-invasive") {
      scrollToId(hash);
    }
  }, [scrollToId]);

  return (
    <>
      <header className="relative flex min-h-[48vh] w-full flex-col overflow-hidden bg-charcoal sm:min-h-[52vh]">
        <FocalImage
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          className="object-cover scale-[1.08] translate-y-6 sm:translate-y-8"
          sizes="100vw"
          quality={75}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/20 to-charcoal/5"
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-[48vh] w-full flex-col justify-end sm:min-h-[52vh]">
          <SiteContainer className="pt-28">
            <h1
              id="procedures-heading"
              className="max-w-3xl pb-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Procedures
            </h1>
          </SiteContainer>

          <ProceduresHeroNav
            activeSpecialty={activeSpecialty}
            onSpecialtyChange={handleSpecialtyChange}
            onScrollTarget={scrollToId}
          />
        </div>
      </header>

      <div className="bg-white pb-20">
        <SiteContainer>
          <div id="procedures-grid" className="scroll-mt-28 pt-16 lg:pt-20">
            <ProceduresTabbedGrid activeSlug={activeSpecialty} />
          </div>

          <MinimallyInvasiveSection />
        </SiteContainer>
      </div>
    </>
  );
}
