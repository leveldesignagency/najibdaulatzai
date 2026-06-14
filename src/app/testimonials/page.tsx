import type { Metadata } from "next";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { Footer } from "@/components/layout/Footer";
import { SiteContainer } from "@/components/layout/SiteContainer";
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
      <div className="bg-neutral-100 pb-20 pt-28">
        <SiteContainer>
          <SectionHeading id="testimonials-heading">Testimonials</SectionHeading>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-charcoal/85 lg:text-xl">
            {testimonialsIntro}
          </p>

          <TestimonialTrustBar />
          <ReviewPlatformLinks />
          <TestimonialGrid items={testimonials} />

          <div className="mt-14 flex flex-wrap gap-4">
            <Button href="/contact" variant="dark">
              Get in Touch
            </Button>
            <Button href="/about" variant="outline-dark">
              About Mr Daulatzai
            </Button>
          </div>
        </SiteContainer>
      </div>
      <Footer />
    </>
  );
}
