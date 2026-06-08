import { blogAuthor } from "@/lib/blog/author";
import { siteConfig } from "@/lib/site-config";
import type { BlogPost } from "@/lib/blog/types";

type BlogPostJsonLdProps = {
  post: BlogPost;
};

export function BlogPostJsonLd({ post }: BlogPostJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    ...(post.image ? { image: `${siteConfig.url}${post.image.src}` } : {}),
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.publishedAt.toISOString(),
    dateModified: post.publishedAt.toISOString(),
    author: {
      "@type": "Person",
      name: blogAuthor.name,
      jobTitle: blogAuthor.role,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: "Mr Najib Daulatzai: Colorectal & General Surgery",
      url: siteConfig.url,
    },
    inLanguage: "en-GB",
    articleSection: post.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
