import type { Metadata } from "next";
import { PatientFaqEngine } from "@/components/faq/PatientFaqEngine";
import { Footer } from "@/components/layout/Footer";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.patientFaq,
  description: pageDescriptions.patientFaq,
  path: "/patient-faq",
  keywords: pageKeywords.patientFaq,
});

export default function PatientFaqPage() {
  return (
    <>
      <div className="bg-white pb-24 pt-28">
        <SiteContainer>
          <header className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/50">
              Patient FAQ
            </p>
            <h1
              id="patient-faq-heading"
              className="mt-3 text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl lg:text-6xl"
            >
              Answers at a glance
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-charcoal/80 lg:text-xl">
              Search common questions about private consultations, insurance, hospitals, and
              recovery. If we don&apos;t have the answer here, you can search Google or contact the
              practice directly.
            </p>
          </header>

          <div className="mt-14 lg:mt-16">
            <PatientFaqEngine />
          </div>
        </SiteContainer>
      </div>
      <Footer />
    </>
  );
}
