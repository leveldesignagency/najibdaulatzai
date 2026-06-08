export type BlogCategory =
  | "Condition-led"
  | "Procedure-led"
  | "Decision & comparison";

export type BlogPostImage = {
  src: string;
  alt: string;
  /** CSS object-position when cover crop needs adjustment (e.g. "center 22%") */
  objectPosition?: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  seoDescription: string;
  category: BlogCategory;
};

export type BlogPost = BlogPostMeta & {
  image: BlogPostImage | null;
  publishedAt: Date;
  content: string;
};
