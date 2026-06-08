import Image from "next/image";
import Link from "next/link";
import { NewestRibbon } from "@/components/blog/NewestRibbon";
import { getArticleExcerpt } from "@/lib/blog/excerpt";
import { formatPublicationDate } from "@/lib/blog/schedule";
import type { BlogPost } from "@/lib/blog/types";

type BlogPostCardProps = {
  post: BlogPost;
  variant?: "featured-stack" | "featured-small" | "grid";
  isNewest?: boolean;
};

const cardLinkClass =
  "group block h-full outline-offset-4 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-charcoal";

const coverImageClass = "object-cover transition duration-500 group-hover:scale-[1.03]";

function coverImageStyle(post: BlogPost) {
  if (!post.image?.objectPosition) return undefined;
  return { objectPosition: post.image.objectPosition };
}

type CardMediaProps = {
  post: BlogPost;
  aspectClass: string;
  sizes: string;
  priority?: boolean;
  isNewest?: boolean;
};

function BlogPostCardMedia({ post, aspectClass, sizes, priority, isNewest }: CardMediaProps) {
  if (!post.image) return null;

  return (
    <div className={`relative w-full shrink-0 overflow-hidden bg-neutral-100 ${aspectClass}`}>
      {isNewest ? <NewestRibbon /> : null}
      <Image
        src={post.image.src}
        alt={post.image.alt}
        fill
        priority={priority}
        className={coverImageClass}
        style={coverImageStyle(post)}
        sizes={sizes}
      />
    </div>
  );
}

export function BlogPostCard({ post, variant = "grid", isNewest = false }: BlogPostCardProps) {
  const href = `/blog/${post.slug}`;
  const dateLabel = formatPublicationDate(post.publishedAt);

  if (variant === "featured-stack") {
    return (
      <Link href={href} className={cardLinkClass}>
        <article className="relative flex h-full flex-col overflow-hidden border border-charcoal/10 bg-white transition group-hover:border-charcoal/25 group-hover:shadow-md">
          {isNewest && !post.image ? <NewestRibbon /> : null}
          <BlogPostCardMedia
            post={post}
            aspectClass="aspect-[2.2/1]"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            isNewest={isNewest}
          />
          <div className="flex flex-1 flex-col p-5">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-charcoal/55">
              {post.category}
            </p>
            <h2 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-charcoal transition group-hover:text-charcoal-dark lg:text-xl">
              {post.title}
            </h2>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-charcoal/75">
              {getArticleExcerpt(post.content) || post.seoDescription}
            </p>
            <span className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/70 transition group-hover:text-charcoal">
              Read more
            </span>
            <time
              dateTime={post.publishedAt.toISOString().slice(0, 10)}
              className="mt-auto pt-3 text-xs text-charcoal/60"
            >
              {dateLabel}
            </time>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "featured-small") {
    const excerpt = getArticleExcerpt(post.content);

    return (
      <Link href={href} className={cardLinkClass}>
        <article className="relative flex h-full min-h-0 flex-col overflow-hidden border border-charcoal/10 bg-white transition group-hover:border-charcoal/25 group-hover:shadow-md">
          {isNewest && !post.image ? <NewestRibbon /> : null}
          <BlogPostCardMedia
            post={post}
            aspectClass="aspect-[2.2/1]"
            sizes="(max-width: 1024px) 100vw, 33vw"
            isNewest={isNewest}
          />
          <div className="flex flex-1 flex-col p-5">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-charcoal/55">
              {post.category}
            </p>
            <h2 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-charcoal transition group-hover:text-charcoal-dark lg:text-xl">
              {post.title}
            </h2>
            {excerpt ? (
              <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-charcoal/75">
                {excerpt}
              </p>
            ) : null}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-1">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition group-hover:text-charcoal-dark">
                Read more
              </span>
              <time dateTime={post.publishedAt.toISOString().slice(0, 10)} className="text-xs text-charcoal/60">
                {dateLabel}
              </time>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={href} className={cardLinkClass}>
      <article className="relative flex h-full flex-col overflow-hidden border border-charcoal/10 bg-white transition group-hover:border-charcoal/20 group-hover:shadow-md">
        {isNewest && !post.image ? <NewestRibbon /> : null}
        <BlogPostCardMedia
          post={post}
          aspectClass="aspect-[4/3]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          isNewest={isNewest}
        />
        <div className="flex flex-1 flex-col p-5">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-charcoal/55">
            {post.category}
          </p>
          <h2 className="mt-2 text-lg font-semibold leading-snug text-charcoal transition group-hover:text-charcoal-dark">
            {post.title}
          </h2>
          <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-charcoal/75">
            {post.seoDescription}
          </p>
          <time
            dateTime={post.publishedAt.toISOString().slice(0, 10)}
            className="mt-4 text-xs text-charcoal/60"
          >
            {dateLabel}
          </time>
        </div>
      </article>
    </Link>
  );
}
