"use client";

import { FocalImage } from "@/components/ui/FocalImage";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ProceduresHeroNav } from "@/components/procedures/ProceduresHeroNav";
import { ProceduresTabbedGrid } from "@/components/procedures/ProceduresTabbedGrid";
import {
  minimallyInvasiveSectionId,
  procedureSpecialtyMap,
  type ProcedureSpecialtySlug,
} from "@/lib/procedures";

const heroImage = {
  src: "/images/procedures-home.jpg",
  alt: "Mr Najib Daulatzai beside da Vinci robotic surgical systems used for advanced colorectal procedures",
} as const;

function resolveSpecialtyFromHash(hash: string): ProcedureSpecialtySlug | null {
  const slug = hash.replace(/^#/, "");
  if (slug in procedureSpecialtyMap) {
    return slug as ProcedureSpecialtySlug;
  }
  if (slug === minimallyInvasiveSectionId) {
    return "robotic-minimally-invasive";
  }
  return null;
}

function resolveScrollTargetFromHash(hash: string): string | null {
  const slug = hash.replace(/^#/, "");
  if (slug === minimallyInvasiveSectionId) {
    return minimallyInvasiveSectionId;
  }
  if (slug in procedureSpecialtyMap) {
    return slug;
  }
  return null;
}

function scrollToHashTarget() {
  const scrollId = resolveScrollTargetFromHash(window.location.hash);
  if (!scrollId) return;

  document.getElementById(scrollId)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function ProceduresPageContent() {
  const [activeSpecialty, setActiveSpecialty] =
    useState<ProcedureSpecialtySlug>("colorectal");

  const handleSpecialtyChange = useCallback((slug: ProcedureSpecialtySlug) => {
    setActiveSpecialty(slug);
    window.history.replaceState(null, "", `#${slug}`);
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useLayoutEffect(() => {
    const slug = resolveSpecialtyFromHash(window.location.hash);
    if (slug) {
      setActiveSpecialty(slug);
    }
  }, []);

  useEffect(() => {
    const applyHash = () => {
      const slug = resolveSpecialtyFromHash(window.location.hash);
      if (slug) {
        setActiveSpecialty(slug);
      }
    };

    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  useEffect(() => {
    const slug = resolveSpecialtyFromHash(window.location.hash);
    if (!slug) return;

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(scrollToHashTarget);
    });
    const timeout = window.setTimeout(scrollToHashTarget, 150);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [activeSpecialty]);

  return (
    <>
      <header className="relative w-full overflow-hidden bg-charcoal">
        <div className="absolute inset-0">
          <FocalImage
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            focalPoint="32% 34%"
            className="object-cover max-sm:scale-100 max-sm:translate-y-0 sm:scale-[1.08] sm:translate-y-8"
            sizes="100vw"
            quality={75}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/20 to-charcoal/5"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 flex flex-col">
          <SiteContainer className="flex min-h-[54vh] flex-col justify-end pb-5 pt-28 sm:min-h-[44vh] sm:pb-8">
            <h1
              id="procedures-heading"
              className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Procedures
            </h1>
          </SiteContainer>

          <ProceduresHeroNav
            activeSpecialty={activeSpecialty}
            onSpecialtyChange={handleSpecialtyChange}
          />
        </div>
      </header>

      <div className="bg-white pb-20">
        <SiteContainer>
          <div
            id={activeSpecialty}
            className="scroll-mt-28 pt-16 lg:pt-20"
          >
            <ProceduresTabbedGrid activeSlug={activeSpecialty} />
          </div>
        </SiteContainer>
      </div>
    </>
  );
}
