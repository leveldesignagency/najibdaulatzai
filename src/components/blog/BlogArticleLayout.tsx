import { FocalImage } from "@/components/ui/FocalImage";
import { BlogArticleBackLink } from "@/components/blog/BlogArticleBackLink";
import { BlogAuthorCard } from "@/components/blog/BlogAuthorCard";
import { BlogPostJsonLd } from "@/components/blog/BlogPostJsonLd";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { Button } from "@/components/ui/Button";
import { formatPublicationDate } from "@/lib/blog/schedule";
import { renderBlogMarkdown } from "@/lib/blog/parse-markdown";
import { blogAuthor } from "@/lib/blog/author";
import type { BlogPost } from "@/lib/blog/types";

type BlogArticleLayoutProps = {
  post: BlogPost;
};

export function BlogArticleLayout({ post }: BlogArticleLayoutProps) {
  return (
    <article>
      <BlogPostJsonLd post={post} />

      <SiteContainer className="max-w-3xl pb-20 pt-28">
        <BlogArticleBackLink />

        <p className="mt-8 text-xs font-medium uppercase tracking-[0.28em] text-charcoal/55">
          {post.category}
        </p>

        <h1 className="mt-3 border-l-[3px] border-charcoal pl-4 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:pl-5 lg:text-5xl">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-charcoal/70">
          <span className="font-medium text-charcoal">{blogAuthor.name}</span>
          <time dateTime={post.publishedAt.toISOString().slice(0, 10)}>
            {formatPublicationDate(post.publishedAt)}
          </time>
        </div>

        {post.image ? (
          <figure className="relative mt-10 aspect-[16/5] w-full overflow-hidden rounded-sm border border-charcoal/10 bg-neutral-100">
            <FocalImage
              src={post.image.src}
              alt={post.image.alt}
              fill
              priority
              focalPoint={post.image.objectPosition}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </figure>
        ) : null}

        <BlogAuthorCard />

        <div className="mt-12">{renderBlogMarkdown(post.content)}</div>

        <div className="mt-14 border-t border-charcoal/10 pt-10">
          <p className="text-base leading-relaxed text-charcoal/85 lg:text-lg">
            If you would like to discuss your symptoms or treatment options, please contact us
            to book a consultation.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="dark">
              Book a consultation
            </Button>
          </div>
        </div>
      </SiteContainer>
    </article>
  );
}
