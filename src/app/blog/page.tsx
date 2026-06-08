import type { Metadata } from "next";
import { BlogIndexClient } from "@/components/blog/BlogIndexClient";
import { Footer } from "@/components/layout/Footer";
import { toBlogListItem } from "@/lib/blog/blog-list-item";
import { getAllBlogPosts } from "@/lib/blog/get-posts";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.blog,
  description: pageDescriptions.blog,
  path: "/blog",
  keywords: pageKeywords.blog,
});

export const revalidate = 86400;

export default function BlogPage() {
  const posts = getAllBlogPosts().map(toBlogListItem);

  return (
    <>
      <div className="bg-neutral-50 pb-20">
        <BlogIndexClient posts={posts} />
      </div>
      <Footer />
    </>
  );
}
