import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticleLayout } from "@/components/blog/BlogArticleLayout";
import { Footer } from "@/components/layout/Footer";
import {
  getAllBlogSlugs,
  getBlogPost,
  getBlogPostForMetadata,
} from "@/lib/blog/get-posts";
import { absolutePageTitle } from "@/lib/page-titles";
import { publicRobots, privatePreviewRobots } from "@/lib/seo/robots";
import { siteConfig } from "@/lib/site-config";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 86400;

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostForMetadata(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  if (!post.isPublished) {
    return {
      title: absolutePageTitle(post.title),
      robots: privatePreviewRobots,
    };
  }

  return {
    title: absolutePageTitle(post.title),
    description: post.seoDescription,
    alternates: { canonical: `/blog/${slug}` },
    robots: publicRobots,
    openGraph: {
      title: post.title,
      description: post.seoDescription,
      url: `${siteConfig.url}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt.toISOString(),
      authors: ["Mr Najib Daulatzai"],
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="bg-white">
        <BlogArticleLayout post={post} />
      </div>
      <Footer />
    </>
  );
}
