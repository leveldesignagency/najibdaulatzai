import { blogAuthor } from "@/lib/blog/author";
import { defaultOgImage, seoEntityIds, toSchemaImageObject } from "@/lib/seo/entity";
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
    ...(post.image
      ? { image: `${siteConfig.url}${post.image.src}` }
      : { image: toSchemaImageObject(defaultOgImage) }),
    url: `${siteConfig.url}/articles/${post.slug}`,
    datePublished: post.publishedAt.toISOString(),
    dateModified: post.publishedAt.toISOString(),
    author: {
      "@type": "Physician",
      "@id": seoEntityIds.physician,
      name: blogAuthor.name,
      jobTitle: blogAuthor.role,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "MedicalOrganization",
      "@id": seoEntityIds.organization,
      name: "Mr Najib Daulatzai: Robotic, Colorectal & General Surgery",
      url: siteConfig.url,
    },
    inLanguage: "en-GB",
    articleSection: post.category,
    about: { "@id": seoEntityIds.physician },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
