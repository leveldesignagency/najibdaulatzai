"use client";

import { useMemo, useState } from "react";
import {
  BlogArticleFilters,
  defaultBlogFilterState,
  hasActiveBlogFilters,
} from "@/components/blog/BlogArticleFilters";
import { BlogIndexLayout } from "@/components/blog/BlogIndexLayout";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { listItemToBlogPost, type BlogListItem } from "@/lib/blog/blog-list-item";

type BlogIndexClientProps = {
  posts: BlogListItem[];
};

function filterAndSortPosts(posts: BlogListItem[], filters: typeof defaultBlogFilterState) {
  const query = filters.search.trim().toLowerCase();

  let filtered = posts.filter((post) => {
    if (filters.category !== "all" && post.category !== filters.category) {
      return false;
    }

    if (filters.year !== "all") {
      const year = new Date(post.publishedAt).getFullYear();
      if (String(year) !== filters.year) return false;
    }

    if (!query) return true;

    const haystack = [post.title, post.excerpt, post.seoDescription, post.category]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });

  filtered = [...filtered].sort((a, b) => {
    const diff =
      new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    return filters.sort === "oldest" ? diff : -diff;
  });

  return filtered;
}

export function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [filters, setFilters] = useState(defaultBlogFilterState);
  const years = useMemo(() => {
    const unique = new Set(
      posts.map((post) => new Date(post.publishedAt).getFullYear()),
    );
    return [...unique].sort((a, b) => b - a);
  }, [posts]);

  const filteredItems = useMemo(
    () => filterAndSortPosts(posts, filters),
    [posts, filters],
  );

  const filteredPosts = useMemo(
    () => filteredItems.map(listItemToBlogPost),
    [filteredItems],
  );

  const filtersActive = hasActiveBlogFilters(filters);
  const newestSlug = posts[0]?.slug;

  return (
    <SiteContainer className="pb-12 pt-32 lg:pt-36">
      <header>
        <SectionHeading id="blog-heading">Clinical Articles</SectionHeading>
        <div className="mt-5">
          <BlogArticleFilters
            years={years}
            value={filters}
            onChange={setFilters}
            resultCount={filteredPosts.length}
            totalCount={posts.length}
          />
        </div>
      </header>

      <BlogIndexLayout
        posts={filteredPosts}
        showFeaturedLayout={!filtersActive}
        newestSlug={newestSlug}
      />
    </SiteContainer>
  );
}
