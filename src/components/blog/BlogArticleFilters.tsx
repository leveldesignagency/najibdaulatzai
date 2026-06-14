"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { createPortal } from "react-dom";
import { FilterDropdown } from "@/components/ui/FilterDropdown";
import {
  blogCategoryFilterOptions,
  type BlogCategoryFilter,
} from "@/lib/blog/categories";

export type BlogSortOrder = "newest" | "oldest";

export type BlogFilterState = {
  search: string;
  category: BlogCategoryFilter;
  year: string;
  sort: BlogSortOrder;
};

type BlogArticleFiltersProps = {
  years: number[];
  value: BlogFilterState;
  onChange: (next: BlogFilterState) => void;
  resultCount: number;
  totalCount: number;
};

const fieldClass =
  "h-11 min-w-0 border border-charcoal/15 bg-white px-3 text-sm text-charcoal outline-none transition placeholder:text-charcoal/45 focus:border-charcoal/40";

const iconButtonClass =
  "flex h-11 w-11 shrink-0 items-center justify-center text-charcoal/70 transition hover:bg-neutral-50 hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-charcoal/40";

function SearchIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="8.75" cy="8.75" r="5.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13 13L17.25 17.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

function FilterIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M3 4.5H17M6 10H14M8.5 15.5H11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function BlogArticleFilters({
  years,
  value,
  onChange,
  resultCount,
  totalCount,
}: BlogArticleFiltersProps) {
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalTitleId = useId();
  const update = (patch: Partial<BlogFilterState>) => onChange({ ...value, ...patch });

  const yearOptions = [
    { value: "all", label: "All years" },
    ...years.map((year) => ({ value: String(year), label: String(year) })),
  ];

  const sortOptions = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
  ] as const;

  const filterOptionsActive = hasActiveBlogFilterOptions(value);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!filtersModalOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFiltersModalOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [filtersModalOpen]);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchInputRef.current?.blur();
  };

  const clearFilterOptions = () => {
    update({ category: "all", year: "all", sort: "newest" });
  };

  const filterFields = (
    <>
      <FilterDropdown
        label="Topic"
        value={value.category}
        options={blogCategoryFilterOptions}
        onChange={(next) => update({ category: next as BlogCategoryFilter })}
        className="w-full"
      />

      <FilterDropdown
        label="Year"
        value={value.year}
        options={yearOptions}
        onChange={(next) => update({ year: next })}
        className="w-full"
      />

      <FilterDropdown
        label="Date"
        value={value.sort}
        options={sortOptions}
        onChange={(next) => update({ sort: next as BlogSortOrder })}
        className="w-full"
      />
    </>
  );

  const filtersModal =
    filtersModalOpen && mounted
      ? createPortal(
          <>
            <button
              type="button"
              aria-label="Close filters"
              className="fixed inset-0 z-[100] bg-charcoal/40 sm:hidden"
              onClick={() => setFiltersModalOpen(false)}
            />

            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby={modalTitleId}
              className="fixed inset-x-0 bottom-0 z-[110] max-h-[85vh] overflow-y-auto bg-white shadow-2xl sm:hidden"
            >
              <div className="flex items-center justify-between border-b border-charcoal/10 px-4 py-4">
                <h2
                  id={modalTitleId}
                  className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal"
                >
                  Filter articles
                </h2>
                <button
                  type="button"
                  onClick={() => setFiltersModalOpen(false)}
                  aria-label="Close filters"
                  className="flex h-10 w-10 items-center justify-center text-charcoal transition hover:bg-neutral-100"
                >
                  <span className="relative block h-4 w-4">
                    <span className="absolute left-0 top-2 block h-0.5 w-4 rotate-45 bg-current" />
                    <span className="absolute left-0 top-2 block h-0.5 w-4 -rotate-45 bg-current" />
                  </span>
                </button>
              </div>

              <div className="flex flex-col gap-4 p-4">
                {filterFields}

                <div className="flex flex-col gap-2 pt-2">
                  {filterOptionsActive ? (
                    <button
                      type="button"
                      onClick={clearFilterOptions}
                      className="h-11 border border-charcoal/15 px-4 text-sm font-medium text-charcoal transition hover:border-charcoal/30"
                    >
                      Clear filters
                    </button>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => setFiltersModalOpen(false)}
                    className="h-11 bg-charcoal px-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-charcoal-dark"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <div>
      <form
        onSubmit={handleSearchSubmit}
        className="relative sm:hidden"
      >
        <input
          ref={searchInputRef}
          id="blog-search"
          type="search"
          value={value.search}
          onChange={(event) => update({ search: event.target.value })}
          placeholder="Search"
          aria-label="Search articles"
          autoComplete="off"
          enterKeyHint="search"
          className={`w-full pr-[5.5rem] ${fieldClass}`}
        />

        <div className="absolute inset-y-0 right-0 flex items-center">
          <span className="h-5 w-px bg-charcoal/15" aria-hidden="true" />
          <button
            type="button"
            aria-label="Open filters"
            aria-expanded={filtersModalOpen}
            aria-haspopup="dialog"
            onClick={() => setFiltersModalOpen(true)}
            className={`${iconButtonClass} relative`}
          >
            <FilterIcon />
            {filterOptionsActive ? (
              <span
                aria-hidden="true"
                className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-charcoal"
              />
            ) : null}
          </button>
          <button
            type="submit"
            aria-label="Search articles"
            className={iconButtonClass}
          >
            <SearchIcon />
          </button>
        </div>
      </form>

      <div className="hidden flex-nowrap items-center gap-2 sm:flex sm:gap-3">
        <input
          type="search"
          value={value.search}
          onChange={(event) => update({ search: event.target.value })}
          placeholder="Search"
          aria-label="Search articles"
          autoComplete="off"
          className={`min-w-[7.5rem] flex-[1.4] ${fieldClass}`}
        />

        <FilterDropdown
          label="Topic"
          value={value.category}
          options={blogCategoryFilterOptions}
          onChange={(next) => update({ category: next as BlogCategoryFilter })}
          className="w-[8.25rem] shrink-0 sm:w-[9.5rem]"
        />

        <FilterDropdown
          label="Year"
          value={value.year}
          options={yearOptions}
          onChange={(next) => update({ year: next })}
          className="w-[6.25rem] shrink-0 sm:w-[7rem]"
        />

        <FilterDropdown
          label="Date"
          value={value.sort}
          options={sortOptions}
          onChange={(next) => update({ sort: next as BlogSortOrder })}
          className="w-[7.5rem] shrink-0 sm:w-[8.5rem]"
        />
      </div>

      {filtersModal}

      <p className="mt-2 text-xs text-charcoal/60" aria-live="polite">
        Showing {resultCount} of {totalCount} articles
      </p>
    </div>
  );
}

export const defaultBlogFilterState: BlogFilterState = {
  search: "",
  category: "all",
  year: "all",
  sort: "newest",
};

export function hasActiveBlogFilterOptions(state: BlogFilterState): boolean {
  return state.category !== "all" || state.year !== "all" || state.sort !== "newest";
}

export function hasActiveBlogFilters(state: BlogFilterState): boolean {
  return state.search.trim().length > 0 || hasActiveBlogFilterOptions(state);
}
