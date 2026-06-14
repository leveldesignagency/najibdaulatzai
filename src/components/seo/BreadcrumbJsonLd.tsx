import {
  breadcrumbSchema,
  jsonLdScript,
  type BreadcrumbItem,
} from "@/lib/seo/schema-helpers";

type BreadcrumbJsonLdProps = {
  items: readonly BreadcrumbItem[];
};

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumbSchema(items)) }}
    />
  );
}
