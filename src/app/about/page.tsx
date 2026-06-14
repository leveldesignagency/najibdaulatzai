import type { Metadata } from "next";
import { AboutBioSection } from "@/components/about/AboutBioSection";
import { CredentialsSection } from "@/components/about/CredentialsSection";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { AboutValuesSection } from "@/components/about/AboutValuesSection";
import { InsurancesSection } from "@/components/about/InsurancesSection";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { BookCtaSection } from "@/components/sections/BookCtaSection";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.about,
  description: pageDescriptions.about,
  path: "/about",
  keywords: pageKeywords.about,
});

export default function AboutPage() {
  return (
    <>
      <PageShell>
        <AboutBioSection />
        <CredentialsSection />
      </PageShell>
      <InsurancesSection />
      <AboutValuesSection />
      <BookCtaSection />
      <Footer includeBookCta={false} />
    </>
  );
}
