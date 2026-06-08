import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { ResearchPublicationCard } from "@/components/research/ResearchPublicationCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { researchIntro } from "@/lib/research-content";
import { researchPublications } from "@/lib/research-publications";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.research,
  description: pageDescriptions.research,
  path: "/research",
  keywords: pageKeywords.research,
});

export default function ResearchPage() {
  return (
    <>
      <div className="bg-white pb-20 pt-28">
        <SiteContainer>
          <SectionHeading id="research-heading">Research</SectionHeading>

          <div className="mt-14 max-w-4xl">
            <p className="text-lg leading-relaxed text-charcoal/85 lg:text-xl">
              {researchIntro}
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {researchPublications.map((publication, index) => (
              <ResearchPublicationCard
                key={`${index}-${publication.citation.slice(0, 48)}`}
                publication={publication}
              />
            ))}
          </div>

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
