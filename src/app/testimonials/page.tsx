import type { Metadata } from "next";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import { ReviewPlatformLinks } from "@/components/testimonials/ReviewPlatformLinks";
import { TestimonialGrid } from "@/components/testimonials/TestimonialGrid";
import { TestimonialTrustBar } from "@/components/testimonials/TestimonialTrustBar";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials, testimonialsIntro } from "@/lib/testimonials-content";
import { testimonialsAeoFaqs } from "@/lib/seo/aeo";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.testimonials,
  description: pageDescriptions.testimonials,
  path: "/testimonials",
  keywords: pageKeywords.testimonials,
});

export default function TestimonialsPage() {
  return (
    <>
      <FaqPageJsonLd
        items={testimonialsAeoFaqs}
        id={`${siteConfig.url}/testimonials#faq`}
        url={`${siteConfig.url}/testimonials`}
      />
      <PageShell background="neutral-100">
        <SectionHeading id="testimonials-heading">Testimonials</SectionHeading>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-charcoal/85 sm:mt-10 sm:text-lg lg:text-xl">
          {testimonialsIntro}
        </p>

        <TestimonialTrustBar />
        <ReviewPlatformLinks />
        <TestimonialGrid items={testimonials} />

        <div className="mt-12 flex flex-wrap gap-4 sm:mt-14">
          <Button href="/contact" variant="dark">
            Get in Touch
          </Button>
          <Button href="/about" variant="outline-dark">
            About Mr Daulatzai
          </Button>
        </div>
      </PageShell>
      <Footer />
    </>
  );
}
