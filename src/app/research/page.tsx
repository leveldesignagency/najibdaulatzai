import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { ResearchPageClient } from "@/components/research/ResearchPageClient";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.research,
  description: pageDescriptions.research,
  path: "/research",
  keywords: pageKeywords.research,
});

export default function ResearchPage() {
  return (
    <>
      <PageShell>
        <ResearchPageClient />
      </PageShell>
      <Footer />
    </>
  );
}
