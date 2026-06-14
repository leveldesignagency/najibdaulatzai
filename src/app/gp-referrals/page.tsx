import type { Metadata } from "next";
import { GpReferralsContent } from "@/components/gp-referrals/GpReferralsContent";
import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
import { FaqPageJsonLd } from "@/components/seo/FaqPageJsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { gpReferralAeoFaqs } from "@/lib/seo/aeo";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.gpReferrals,
  description: pageDescriptions.gpReferrals,
  path: "/gp-referrals",
  keywords: pageKeywords.gpReferrals,
});

export default function GpReferralsPage() {
  return (
    <>
      <FaqPageJsonLd
        items={gpReferralAeoFaqs}
        id={`${siteConfig.url}/gp-referrals#faq`}
        url={`${siteConfig.url}/gp-referrals`}
      />
      <PageShell>
        <SectionHeading id="gp-referrals-heading">GP Referrals</SectionHeading>
        <div className="mt-10 sm:mt-14">
          <GpReferralsContent />
        </div>
      </PageShell>
      <Footer />
    </>
  );
}
