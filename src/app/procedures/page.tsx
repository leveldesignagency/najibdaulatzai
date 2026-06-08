import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { ProceduresPageContent } from "@/components/procedures/ProceduresPageContent";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.procedures,
  description: pageDescriptions.procedures,
  path: "/procedures",
  keywords: pageKeywords.procedures,
});

export default function ProceduresPage() {
  return (
    <>
      <ProceduresPageContent />
      <Footer />
    </>
  );
}
