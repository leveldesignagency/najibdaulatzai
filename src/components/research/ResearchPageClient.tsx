"use client";

import { useMemo, useState } from "react";
import { ResearchPublicationCard } from "@/components/research/ResearchPublicationCard";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { researchIntro } from "@/lib/research-content";
import {
  researchPublications,
  type ResearchPublication,
} from "@/lib/research-publications";

const publicationYears = [
  ...new Set(researchPublications.map((publication) => publication.year)),
].sort((a, b) => Number(b) - Number(a));

function matchesQuery(publication: ResearchPublication, query: string) {
  const haystack = [
    publication.category,
    publication.journal,
    publication.year,
    publication.articleTitle,
    publication.citation,
    publication.summary,
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

type ResearchFilterCardProps = {
  query: string;
  selectedYear: string;
  onQueryChange: (value: string) => void;
  onYearChange: (value: string) => void;
  resultCount: number;
};

function ResearchFilterCard({
  query,
  selectedYear,
  onQueryChange,
  onYearChange,
  resultCount,
}: ResearchFilterCardProps) {
  const hasActiveFilters = query.trim().length > 0 || selectedYear !== "all";

  return (
    <aside className="rounded-sm border border-charcoal/10 bg-neutral-50/80 p-5 sm:p-6">
      <h2 className="text-lg font-semibold tracking-tight text-charcoal sm:text-xl">
        Find publications
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
        Search by title, journal, topic, or filter by publication year.
      </p>

      <div className="mt-5">
        <label
          htmlFor="research-search"
          className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/55"
        >
          Search
        </label>
        <div className="relative mt-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-charcoal/40"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
            <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
          <input
            id="research-search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Title, journal, topic…"
            className="w-full rounded-sm border border-charcoal/15 bg-white py-2.5 pl-10 pr-4 text-base text-charcoal placeholder:text-charcoal/45 focus:border-charcoal/30 focus:outline-none focus:ring-2 focus:ring-charcoal/10"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="research-year"
          className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/55"
        >
          Year
        </label>
        <select
          id="research-year"
          value={selectedYear}
          onChange={(event) => onYearChange(event.target.value)}
          className="mt-2 w-full rounded-sm border border-charcoal/15 bg-white px-4 py-2.5 text-base text-charcoal focus:border-charcoal/30 focus:outline-none focus:ring-2 focus:ring-charcoal/10"
        >
          <option value="all">All years</option>
          {publicationYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-5 border-t border-charcoal/10 pt-4 text-sm text-charcoal/60">
        {hasActiveFilters
          ? `${resultCount} publication${resultCount === 1 ? "" : "s"} found`
          : `${resultCount} publications`}
      </p>
    </aside>
  );
}

export function ResearchPageClient() {
  const [query, setQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    return researchPublications.filter((publication) => {
      if (selectedYear !== "all" && publication.year !== selectedYear) {
        return false;
      }

      if (trimmed && !matchesQuery(publication, trimmed)) {
        return false;
      }

      return true;
    });
  }, [query, selectedYear]);

  return (
    <>
      <ScrollReveal variant="blur-up">
        <SectionHeading id="research-heading">Research</SectionHeading>
      </ScrollReveal>

      <div className="mt-10 grid items-start gap-8 md:grid-cols-2 md:gap-10 lg:gap-12 sm:mt-14">
        <ScrollReveal variant="fade-up" delay={80}>
          <p className="text-base leading-relaxed text-charcoal/85 sm:text-lg lg:text-xl">
            {researchIntro}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" delay={140}>
          <ResearchFilterCard
            query={query}
            selectedYear={selectedYear}
            onQueryChange={setQuery}
            onYearChange={setSelectedYear}
            resultCount={filtered.length}
          />
        </ScrollReveal>
      </div>

      <ScrollReveal variant="fade-up" delay={180}>
        <p className="mt-12 text-base leading-relaxed text-charcoal/85 sm:mt-16 sm:text-lg">
          The following represents a selection of my published research and
          peer-reviewed work.
        </p>
      </ScrollReveal>

      {filtered.length === 0 ? (
        <p className="mt-10 text-base text-charcoal/70">
          No publications match your search or selected year.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-2 lg:items-stretch">
          {filtered.map((publication, index) => (
            <ScrollReveal
              key={`${publication.year}-${publication.articleTitle}`}
              variant={index % 2 === 0 ? "fade-up" : "scale-up"}
              delay={scrollStagger(index, 90, 140)}
              className="h-full"
            >
              <ResearchPublicationCard publication={publication} />
            </ScrollReveal>
          ))}
        </div>
      )}

      <ScrollReveal variant="fade-up" delay={200}>
        <div className="mt-12 flex flex-wrap gap-4 sm:mt-14">
          <Button href="/contact" variant="dark">
            Get in Touch
          </Button>
          <Button href="/about" variant="outline-dark">
            About Mr Daulatzai
          </Button>
        </div>
      </ScrollReveal>
    </>
  );
}
