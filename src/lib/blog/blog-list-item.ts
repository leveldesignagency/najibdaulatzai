import { getArticleExcerpt } from "./excerpt";
import type { BlogPost } from "./types";

/** Serializable post for the blog index (client filtering) */
export type BlogListItem = {
  slug: string;
  title: string;
  seoDescription: string;
  category: BlogPost["category"];
  image: BlogPost["image"];
  publishedAt: string;
  excerpt: string;
  content: string;
};

export function toBlogListItem(post: BlogPost): BlogListItem {
  return {
    slug: post.slug,
    title: post.title,
    seoDescription: post.seoDescription,
    category: post.category,
    image: post.image,
    publishedAt: post.publishedAt.toISOString(),
    excerpt: getArticleExcerpt(post.content),
    content: post.content,
  };
}

export function listItemToBlogPost(item: BlogListItem): BlogPost {
  return {
    slug: item.slug,
    title: item.title,
    seoDescription: item.seoDescription,
    category: item.category,
    image: item.image,
    publishedAt: new Date(item.publishedAt),
    content: item.content,
  };
}

export function getYearsFromPosts(posts: BlogListItem[]): number[] {
  const years = new Set(
    posts.map((post) => new Date(post.publishedAt).getFullYear()),
  );
  return [...years].sort((a, b) => b - a);
}
