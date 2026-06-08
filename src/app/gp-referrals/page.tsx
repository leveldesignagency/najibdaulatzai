import type { Metadata } from "next";
import { GpReferralsContent } from "@/components/gp-referrals/GpReferralsContent";
import { Footer } from "@/components/layout/Footer";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageDescriptions } from "@/lib/page-descriptions";
import { pageTitles } from "@/lib/page-titles";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.gpReferrals,
  description: pageDescriptions.gpReferrals,
  path: "/gp-referrals",
  keywords: pageKeywords.gpReferrals,
});

export default function GpReferralsPage() {
  return (
    <>
      <div className="bg-white pb-20 pt-28">
        <SiteContainer>
          <SectionHeading id="gp-referrals-heading">GP Referrals</SectionHeading>
          <div className="mt-14">
            <GpReferralsContent />
          </div>
        </SiteContainer>
      </div>
      <Footer />
    </>
  );
}
