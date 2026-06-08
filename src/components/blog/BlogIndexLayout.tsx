import { BlogPostCard } from "@/components/blog/BlogPostCard";
import type { BlogPost } from "@/lib/blog/types";

type BlogIndexLayoutProps = {
  posts: BlogPost[];
  showFeaturedLayout?: boolean;
  /** Slug of the site-wide newest article (for the corner ribbon) */
  newestSlug?: string;
};

export function BlogIndexLayout({
  posts,
  showFeaturedLayout = true,
  newestSlug,
}: BlogIndexLayoutProps) {
  const isNewest = (slug: string) => Boolean(newestSlug && slug === newestSlug);
  const [first, second, third, fourth, ...rest] = posts;

  if (posts.length === 0) {
    return (
      <p className="mt-8 text-base text-charcoal/70">
        No articles match your filters. Try adjusting search or filters above.
      </p>
    );
  }

  if (!showFeaturedLayout) {
    return (
      <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <BlogPostCard post={post} variant="grid" isNewest={isNewest(post.slug)} />
          </li>
        ))}
      </ul>
    );
  }

  if (posts.length >= 4) {
    return (
      <>
        <section
          aria-label="Featured articles"
          className="mt-8 grid gap-6 lg:grid-cols-3 lg:grid-rows-2"
        >
          <div className="flex flex-col gap-6 lg:col-span-2 lg:row-span-2">
            <BlogPostCard post={first} variant="featured-stack" isNewest={isNewest(first.slug)} />
            <BlogPostCard post={second} variant="featured-stack" />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-1 lg:row-span-2">
            <div className="flex-1">
              <BlogPostCard post={third} variant="featured-small" isNewest={isNewest(third.slug)} />
            </div>
            <div className="flex-1">
              <BlogPostCard post={fourth} variant="featured-small" isNewest={isNewest(fourth.slug)} />
            </div>
          </div>
        </section>

        {rest.length > 0 ? (
            <section className="mt-10 lg:mt-12" aria-labelledby="more-articles-heading">
            <h2
              id="more-articles-heading"
              className="border-b border-charcoal/10 pb-4 text-sm font-medium uppercase tracking-[0.35em] text-charcoal/60"
            >
              More articles
            </h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <li key={post.slug}>
                  <BlogPostCard post={post} variant="grid" isNewest={isNewest(post.slug)} />
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </>
    );
  }

  if (posts.length === 3) {
    return (
      <section
        aria-label="Featured articles"
        className="mt-8 grid gap-6 lg:grid-cols-3"
      >
        <div className="flex flex-col gap-6 lg:col-span-2">
          <BlogPostCard post={first} variant="featured-stack" isNewest={isNewest(first.slug)} />
          <BlogPostCard post={second} variant="featured-stack" />
        </div>
        <BlogPostCard post={third} variant="featured-small" isNewest={isNewest(third.slug)} />
      </section>
    );
  }

  return (
    <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <li key={post.slug}>
          <BlogPostCard post={post} variant="grid" isNewest={isNewest(post.slug)} />
        </li>
      ))}
    </ul>
  );
}
