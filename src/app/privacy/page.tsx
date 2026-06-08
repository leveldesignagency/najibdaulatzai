import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { privacyIntro, privacySections } from "@/lib/privacy-content";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.privacy,
  description: pageDescriptions.privacy,
  path: "/privacy",
  keywords: pageKeywords.privacy,
});

export default function PrivacyPage() {
  return (
    <>
      <div className="bg-white pb-20 pt-28">
        <SiteContainer>
          <SectionHeading id="privacy-heading">Privacy &amp; Cookies</SectionHeading>
          <div className="prose prose-charcoal mt-14 max-w-3xl">
            <p className="text-base leading-relaxed text-charcoal/85 lg:text-lg">
              {privacyIntro}
            </p>
            {privacySections.map((section) => (
              <section key={section.title} className="mt-10">
                <h2 className="text-xl font-medium text-charcoal lg:text-2xl">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-4 text-base leading-relaxed text-charcoal/85 lg:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </SiteContainer>
      </div>
      <Footer />
    </>
  );
}
