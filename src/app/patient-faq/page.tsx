import type { Metadata } from "next";
import { PatientFaqEngine } from "@/components/faq/PatientFaqEngine";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
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
      <PageShell>
        <header className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-charcoal/50">
            Patient FAQ
          </p>
          <h1
            id="patient-faq-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-5xl"
          >
            Answers at a glance
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-charcoal/80 sm:mt-6 sm:text-lg lg:text-xl">
            Search common questions about private consultations, insurance, hospitals, and
            recovery. If we don&apos;t have the answer here, you can search Google or contact the
            practice directly.
          </p>
        </header>

        <div className="mt-10 sm:mt-14 lg:mt-16">
          <PatientFaqEngine />
        </div>
      </PageShell>
      <Footer />
    </>
  );
}
