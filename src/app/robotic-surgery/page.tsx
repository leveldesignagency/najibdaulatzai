import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { RoboticSurgeryContent } from "@/components/robotic-surgery/RoboticSurgeryContent";
import { pageTitles } from "@/lib/page-titles";
import { pageDescriptions } from "@/lib/page-descriptions";
import { buildPageMetadata } from "@/lib/seo/build-page-metadata";
import { pageKeywords } from "@/lib/seo/keywords";

export const metadata: Metadata = buildPageMetadata({
  title: pageTitles.roboticSurgery,
  description: pageDescriptions.roboticSurgery,
  path: "/robotic-surgery",
  keywords: pageKeywords.roboticSurgery,
  ogImage: "/images/davinci/da-vinci-5-console.jpg",
  ogImageAlt: "da Vinci robotic surgical console used for colorectal surgery",
});

export default function RoboticSurgeryPage() {
  return (
    <>
      <div className="bg-white pb-20 pt-28">
        <SiteContainer className="lg:pt-4">
          <RoboticSurgeryContent />
        </SiteContainer>
      </div>
      <Footer />
    </>
  );
}
