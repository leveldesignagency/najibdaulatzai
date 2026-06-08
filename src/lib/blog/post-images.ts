import { BLOG_PUBLICATION_ORDER, type BlogSlug } from "./schedule";
import type { BlogPostImage } from "./types";

const BLOG_IMAGE_DIR = "/images/blog";

/** File extension per article number (1–20), mix of jpg and png as supplied */
const blogArticleImageFiles: Record<number, string> = {
  1: "1.jpg",
  2: "2.jpg",
  3: "3.png",
  4: "4.jpg",
  5: "5.jpg",
  6: "6.jpg",
  7: "7.jpg",
  8: "8.jpg",
  9: "9.jpg",
  10: "10.jpg",
  11: "11.jpg",
  12: "12.jpg",
  13: "13.jpg",
  14: "14.jpg",
  15: "15.png",
  16: "16.png",
  17: "17.jpg",
  18: "18.jpg",
  19: "19.jpg",
  20: "20.jpg",
};

const blogArticleImageMeta: Record<
  BlogSlug,
  { alt: string; objectPosition?: string }
> = {
  "what-are-haemorrhoids-and-when-do-you-need-surgery": {
    alt: "Consultant colorectal surgeon discussing haemorrhoid treatment options",
  },
  "rectal-bleeding-when-to-see-a-specialist": {
    alt: "Specialist endoscopy and assessment for rectal bleeding",
  },
  "bowel-cancer-symptoms-when-to-act": {
    alt: "Colorectal cancer surgery in a modern operating theatre",
  },
  "choosing-a-colorectal-surgeon-london": {
    alt: "Mr Najib Daulatzai in consultation with a patient",
  },
  "what-is-diverticular-disease": {
    alt: "Minimally invasive surgery for diverticular disease",
  },
  "crohns-disease-and-surgery": {
    alt: "Specialist care for inflammatory bowel disease",
  },
  "ulcerative-colitis-when-is-surgery-right": {
    alt: "Consultant surgeon discussing ileal pouch surgery",
  },
  "anal-fistula-why-does-it-recur": {
    alt: "Specialist assessment for complex anal fistula",
  },
  "what-is-a-j-pouch": {
    alt: "Ileal pouch surgery consultation",
  },
  "hernia-symptoms-when-to-have-repair": {
    alt: "Mr Najib Daulatzai in the operating theatre during minimally invasive surgery",
  },
  "what-happens-during-a-colonoscopy": {
    alt: "Diagnostic colonoscopy in a private hospital setting",
  },
  "robotic-bowel-surgery-london": {
    alt: "Mr Najib Daulatzai with the da Vinci robotic surgical system in theatre",
    objectPosition: "center 22%",
  },
  "recovering-from-bowel-surgery": {
    alt: "Mr Najib Daulatzai in the operating theatre during colorectal surgery",
  },
  "what-is-anterior-resection-recovery": {
    alt: "Robotic rectal cancer surgery",
  },
  "laparoscopic-versus-robotic-surgery": {
    alt: "Robotic and laparoscopic surgical technology",
  },
  "what-is-a-stoma-is-it-permanent": {
    alt: "Stoma care and colorectal surgery support",
  },
  "nhs-versus-private-colorectal-surgery": {
    alt: "Private and NHS colorectal surgical consultation",
  },
  "private-colonoscopy-london": {
    alt: "Private colonoscopy procedure",
  },
  "do-i-need-a-referral-to-see-a-private-surgeon": {
    alt: "Booking a private consultation with a colorectal surgeon",
  },
  "private-colorectal-surgery-cost-uk": {
    alt: "Mr Najib Daulatzai in the operating theatre with advanced surgical technology",
  },
};

function articleImageForNumber(
  articleNumber: number,
  meta: { alt: string; objectPosition?: string },
): BlogPostImage {
  const file = blogArticleImageFiles[articleNumber];
  return {
    src: `${BLOG_IMAGE_DIR}/${file}`,
    alt: meta.alt,
    ...(meta.objectPosition ? { objectPosition: meta.objectPosition } : {}),
  };
}

/** Featured image per article, numbered 1–20 in publication order */
export const blogPostImages: Record<string, BlogPostImage> = Object.fromEntries(
  BLOG_PUBLICATION_ORDER.map((slug, index) => [
    slug,
    articleImageForNumber(index + 1, blogArticleImageMeta[slug]),
  ]),
);

export function getBlogPostImage(slug: string): BlogPostImage | null {
  return blogPostImages[slug] ?? null;
}
