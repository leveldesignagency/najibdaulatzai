import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";
import { ContactPageHero } from "@/components/contact/ContactPageHero";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { Footer } from "@/components/layout/Footer";
import { SiteContainer } from "@/components/layout/SiteContainer";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.contact,
  description: pageDescriptions.contact,
  path: "/contact",
  keywords: pageKeywords.contact,
});

export default function ContactPage() {
  return (
    <>
      <ContactPageHero />
      <div className="bg-white pb-20">
        <SiteContainer className="pt-12 lg:pt-14">
          <ContactPageContent />
        </SiteContainer>
      </div>
      <Footer />
    </>
  );
}
