"use client";

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

export function BlogArticleFilters({
  years,
  value,
  onChange,
  resultCount,
  totalCount,
}: BlogArticleFiltersProps) {
  const update = (patch: Partial<BlogFilterState>) => onChange({ ...value, ...patch });

  const yearOptions = [
    { value: "all", label: "All years" },
    ...years.map((year) => ({ value: String(year), label: String(year) })),
  ];

  const sortOptions = [
    { value: "newest", label: "Newest first" },
    { value: "oldest", label: "Oldest first" },
  ] as const;

  return (
    <div>
      <div className="flex flex-nowrap items-center gap-2 sm:gap-3">
        <input
          id="blog-search"
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

export function hasActiveBlogFilters(state: BlogFilterState): boolean {
  return (
    state.search.trim().length > 0 ||
    state.category !== "all" ||
    state.year !== "all" ||
    state.sort !== "newest"
  );
}
