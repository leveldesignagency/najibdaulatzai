"use client";

import Link from "next/link";
import { useEffect, useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { Button } from "@/components/ui/Button";
import type { PatientFaq } from "@/lib/patient-faq-content";
import {
  buildGoogleSiteSearchUrl,
  buildGoogleWebSearchUrl,
  faqBrowseCategories,
  faqCategoryLabels,
  faqSuggestedQueries,
  getAllSearchableFaqs,
  getFaqTypeaheadSuggestions,
  searchFaqs,
  type FaqCategory,
  type SearchableFaq,
} from "@/lib/patient-faq-search";
import { siteConfig } from "@/lib/site-config";

function FaqAnswer({ faq }: { faq: PatientFaq }) {
  return (
    <>
      {faq.answer.map((paragraph) => {
        if (faq.id === "patient-reviews") {
          const linkText = "Testimonials page";
          const linkIndex = paragraph.indexOf(linkText);

          if (linkIndex === -1) {
            return (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            );
          }

          return (
            <p key={paragraph} className="leading-relaxed">
              {paragraph.slice(0, linkIndex)}
              <Link
                href="/testimonials"
                className="font-medium text-charcoal underline-offset-4 hover:underline"
              >
                {linkText}
              </Link>
              {paragraph.slice(linkIndex + linkText.length)}
            </p>
          );
        }

        return (
          <p key={paragraph} className="leading-relaxed">
            {paragraph}
          </p>
        );
      })}
    </>
  );
}

function FaqResultCard({
  faq,
  defaultOpen = false,
}: {
  faq: SearchableFaq;
  defaultOpen?: boolean;
}) {
  return (
    <details
      open={defaultOpen}
      className="group overflow-hidden border border-charcoal/10 bg-white shadow-sm transition-shadow open:shadow-md"
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5 text-left font-medium text-charcoal transition-colors hover:bg-neutral-50 [&::-webkit-details-marker]:hidden sm:px-8 sm:py-6">
        <span className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/45">
            {faqCategoryLabels[faq.category]}
          </span>
          <span className="text-lg leading-snug sm:text-xl">{faq.question}</span>
        </span>
        <span
          className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/70 transition-transform duration-300 group-open:rotate-45"
          aria-hidden="true"
        >
          +
        </span>
      </summary>
      <div className="space-y-4 border-t border-charcoal/8 px-6 py-5 text-base leading-relaxed text-charcoal/85 sm:px-8 sm:py-6 sm:text-lg">
        <FaqAnswer faq={faq} />
      </div>
    </details>
  );
}

function FaqSearchInput({
  query,
  onQueryChange,
  suggestions,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  suggestions: SearchableFaq[];
}) {
  const listboxId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const trimmedQuery = query.trim();
  const showStaticSuggestions = isOpen && !trimmedQuery;
  const showFaqSuggestions = isOpen && trimmedQuery.length > 0 && suggestions.length > 0;
  const showDropdown = showStaticSuggestions || showFaqSuggestions;

  const optionCount = showStaticSuggestions
    ? faqSuggestedQueries.length
    : showFaqSuggestions
      ? suggestions.length
      : 0;

  useEffect(() => {
    setActiveIndex(-1);
  }, [query, suggestions.length]);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  function selectSuggestion(value: string) {
    onQueryChange(value);
    setIsOpen(false);
    setActiveIndex(-1);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!showDropdown || optionCount === 0) {
      if (event.key === "Escape") setIsOpen(false);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % optionCount);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index <= 0 ? optionCount - 1 : index - 1));
      return;
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      if (showStaticSuggestions) {
        selectSuggestion(faqSuggestedQueries[activeIndex] ?? "");
      } else {
        selectSuggestion(suggestions[activeIndex]?.question ?? "");
      }
      return;
    }

    if (event.key === "Escape") {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  }

  return (
    <div ref={containerRef} className="relative mt-8">
      <label htmlFor="faq-search" className="block">
        <span className="sr-only">Search patient FAQs</span>
        <input
          id="faq-search"
          type="search"
          role="combobox"
          value={query}
          onChange={(event) => {
            onQueryChange(event.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="e.g. How quickly can I be seen privately?"
          className="w-full border border-charcoal/15 bg-white px-5 py-4 text-base text-charcoal outline-none ring-charcoal/20 transition placeholder:text-charcoal/40 focus:border-charcoal/35 focus:ring-2 sm:px-6 sm:py-5 sm:text-lg"
          autoComplete="off"
          spellCheck
          aria-autocomplete="list"
          aria-expanded={showDropdown}
          aria-controls={showDropdown ? listboxId : undefined}
          aria-activedescendant={
            showDropdown && activeIndex >= 0
              ? `${listboxId}-option-${activeIndex}`
              : undefined
          }
        />
      </label>

      {showDropdown ? (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="Suggested questions"
          className="absolute z-20 mt-1 max-h-72 w-full overflow-y-auto border border-charcoal/15 bg-white shadow-lg"
        >
          {showStaticSuggestions
            ? faqSuggestedQueries.map((suggestion, index) => (
                <li key={suggestion} role="presentation">
                  <button
                    id={`${listboxId}-option-${index}`}
                    type="button"
                    role="option"
                    aria-selected={activeIndex === index}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => selectSuggestion(suggestion)}
                    className={`block w-full px-5 py-3 text-left text-sm leading-snug transition sm:text-base ${
                      activeIndex === index
                        ? "bg-charcoal text-white"
                        : "text-charcoal/80 hover:bg-neutral-50 hover:text-charcoal"
                    }`}
                  >
                    {suggestion}
                  </button>
                </li>
              ))
            : null}

          {showFaqSuggestions
            ? suggestions.map((faq, index) => (
                <li key={faq.id} role="presentation">
                  <button
                    id={`${listboxId}-option-${index}`}
                    type="button"
                    role="option"
                    aria-selected={activeIndex === index}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => selectSuggestion(faq.question)}
                    className={`block w-full px-5 py-3 text-left transition ${
                      activeIndex === index
                        ? "bg-charcoal text-white"
                        : "text-charcoal/80 hover:bg-neutral-50 hover:text-charcoal"
                    }`}
                  >
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-inherit opacity-60">
                      {faqCategoryLabels[faq.category]}
                    </span>
                    <span className="mt-1 block text-sm leading-snug sm:text-base">
                      {faq.question}
                    </span>
                  </button>
                </li>
              ))
            : null}
        </ul>
      ) : null}

      {isOpen && trimmedQuery.length > 0 && suggestions.length === 0 ? (
        <p className="absolute z-20 mt-1 w-full border border-charcoal/15 bg-white px-5 py-3 text-sm text-charcoal/60 shadow-lg">
          No matching questions. Try different words or browse all answers below.
        </p>
      ) : null}
    </div>
  );
}

export function PatientFaqEngine() {
  const allFaqs = useMemo(() => getAllSearchableFaqs(), []);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategory>("all");

  const typeaheadSuggestions = useMemo(
    () => getFaqTypeaheadSuggestions(allFaqs, query, 6),
    [allFaqs, query],
  );

  const results = useMemo(
    () => searchFaqs(allFaqs, query, category),
    [allFaqs, query, category],
  );

  const hasQuery = query.trim().length > 0;
  const noLocalMatch = hasQuery && results.length === 0;
  const trimmedQuery = query.trim();

  return (
    <div className="space-y-12 lg:space-y-16">
      <section
        aria-labelledby="faq-search-heading"
        className="border border-charcoal/10 bg-neutral-50 px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/50">
              Ask a question
            </p>
            <h2
              id="faq-search-heading"
              className="mt-3 text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl lg:text-4xl"
            >
              Search our patient answers
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/75 sm:text-lg">
              Type a question about appointments, insurance, hospitals, surgery, or recovery.
              We&apos;ll search answers from this website first.
            </p>

            <FaqSearchInput
              query={query}
              onQueryChange={setQuery}
              suggestions={typeaheadSuggestions}
            />
          </div>

          <div className="lg:pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/50">
              Suggested questions
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:mt-5">
              {faqSuggestedQueries.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => setQuery(suggestion)}
                  className="border border-charcoal/12 bg-white px-4 py-3 text-left text-sm leading-snug text-charcoal/75 transition hover:border-charcoal/30 hover:text-charcoal"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="FAQ categories" className="flex flex-wrap gap-2">
        <CategoryButton
          label="All topics"
          active={category === "all"}
          onClick={() => setCategory("all")}
        />
        {faqBrowseCategories.map((value) => (
          <CategoryButton
            key={value}
            label={faqCategoryLabels[value]}
            active={category === value}
            onClick={() => setCategory(value)}
          />
        ))}
      </section>

      {noLocalMatch ? (
        <section
          aria-labelledby="faq-no-match-heading"
          className="border border-charcoal/10 bg-white px-6 py-10 sm:px-10 sm:py-12"
        >
          <h2 id="faq-no-match-heading" className="text-2xl font-semibold text-charcoal sm:text-3xl">
            No matching answer on this site
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
            We couldn&apos;t find an answer to &ldquo;{trimmedQuery}&rdquo; in our FAQ library.
            You can search Google for information on this website, search the wider web for general
            medical guidance, or contact the practice directly for personal advice.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={buildGoogleSiteSearchUrl(trimmedQuery)}
              variant="dark"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0 whitespace-normal text-center"
            >
              Search Google on ndsurgeon.com
            </Button>
            <Button
              href={buildGoogleWebSearchUrl(trimmedQuery)}
              variant="outline-dark"
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0 whitespace-normal text-center"
            >
              Search Google for general info
            </Button>
            <Button href="/contact" variant="outline-dark" className="min-w-0">
              Contact the practice
            </Button>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-charcoal/60">
            Google results are for general information only and do not replace advice from your GP
            or specialist. For questions about your care, please call{" "}
            <a href={siteConfig.phoneHref} className="font-medium text-charcoal underline-offset-4 hover:underline">
              {siteConfig.phone}
            </a>{" "}
            or email{" "}
            <a href={siteConfig.emailHref} className="font-medium text-charcoal underline-offset-4 hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      ) : (
        <section aria-labelledby="faq-results-heading">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 id="faq-results-heading" className="text-2xl font-semibold text-charcoal sm:text-3xl">
                {hasQuery ? "Best matches" : "Browse all answers"}
              </h2>
              <p className="mt-2 text-sm text-charcoal/60 sm:text-base">
                {results.length} {results.length === 1 ? "answer" : "answers"}
                {hasQuery ? ` for “${trimmedQuery}”` : " available"}
              </p>
            </div>

            {hasQuery ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="self-start text-sm font-medium uppercase tracking-[0.18em] text-charcoal/70 underline-offset-4 hover:text-charcoal hover:underline"
              >
                Clear search
              </button>
            ) : null}
          </div>

          <div className="mt-8 space-y-4 lg:space-y-5">
            {results.map((faq, index) => (
              <FaqResultCard key={faq.id} faq={faq} defaultOpen={hasQuery && index === 0} />
            ))}
          </div>
        </section>
      )}

      <section
        aria-labelledby="faq-google-fallback-heading"
        className="grid gap-8 border border-charcoal/10 bg-charcoal px-6 py-10 text-white sm:px-10 sm:py-12 lg:grid-cols-[1.2fr_1fr] lg:items-center"
      >
        <div>
          <h2 id="faq-google-fallback-heading" className="text-2xl font-semibold sm:text-3xl">
            Still looking for an answer?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
            If your question isn&apos;t covered above, search Google for pages on this website or
            broader patient information. For personal clinical advice, contact the practice.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button
            href={buildGoogleSiteSearchUrl(hasQuery ? trimmedQuery : "Mr Najib Daulatzai patient FAQ")}
            variant="light"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 whitespace-normal text-center"
          >
            Search this website on Google
          </Button>
          <Button
            href={buildGoogleWebSearchUrl(hasQuery ? trimmedQuery : "colorectal surgery patient questions")}
            variant="outline-light"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-0 whitespace-normal text-center"
          >
            Search Google for general answers
          </Button>
          <Button href="/contact" variant="outline-light" className="min-w-0">
            Book or enquire
          </Button>
        </div>
      </section>
    </div>
  );
}

function CategoryButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition sm:text-sm ${
        active
          ? "border-charcoal bg-charcoal text-white"
          : "border-charcoal/15 bg-white text-charcoal/75 hover:border-charcoal/35 hover:text-charcoal"
      }`}
    >
      {label}
    </button>
  );
}
