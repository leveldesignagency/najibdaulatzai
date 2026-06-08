import fs from "fs";
import path from "path";
import { getBlogPostImage } from "./post-images";
import { blogPostsMeta } from "./posts-meta";
import {
  getPublicationDateForSlug,
  getPublicationIndex,
  isPostPublished,
} from "./schedule";
import type { BlogPost } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function readPostBody(slug: string): string {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  return fs.readFileSync(filePath, "utf8").trim();
}

export function getBlogPost(slug: string, now = new Date()): BlogPost | null {
  const meta = blogPostsMeta.find((post) => post.slug === slug);
  if (!meta) return null;

  const publishedAt = getPublicationDateForSlug(slug, now);
  if (!publishedAt || !isPostPublished(publishedAt, now)) return null;

  return {
    ...meta,
    image: getBlogPostImage(slug),
    publishedAt,
    content: readPostBody(slug),
  };
}

export function getAllBlogPosts(now = new Date()): BlogPost[] {
  return blogPostsMeta
    .map((meta) => getBlogPost(meta.slug, now))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

export function getAllBlogSlugs(): string[] {
  return blogPostsMeta.map((post) => post.slug);
}

export function getBlogSlugsForStaticGeneration(now = new Date()): string[] {
  return getAllBlogSlugs().filter((slug) => {
    const publishedAt = getPublicationDateForSlug(slug, now);
    return publishedAt !== null && isPostPublished(publishedAt, now);
  });
}

export function getBlogPostForMetadata(slug: string, now = new Date()) {
  const meta = blogPostsMeta.find((post) => post.slug === slug);
  if (!meta) return null;
  const publishedAt = getPublicationDateForSlug(slug, now);
  if (!publishedAt) return null;
  return { ...meta, publishedAt, isPublished: isPostPublished(publishedAt, now) };
}

export { getPublicationIndex };
