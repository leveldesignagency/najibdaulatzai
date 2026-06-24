import { SiteContainer } from "@/components/layout/SiteContainer";
import { AboutParallaxImage } from "@/components/sections/AboutParallaxImage";
import { HomeSectionShell } from "@/components/sections/HomeSectionShell";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignaturePlaceholder } from "@/components/ui/SignaturePlaceholder";
import { homeTypography } from "@/lib/home-typography";

export function AboutSection() {
  return (
    <HomeSectionShell id="about" aria-labelledby="about-heading" variant="light">
      <div className="home-section-divider mx-auto mb-0 hidden max-w-5xl lg:mb-0 lg:block" aria-hidden="true" />

      <SiteContainer className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20 lg:pt-4">
        <ScrollReveal variant="fade-right">
          <div className="max-md:text-center">
            <SectionEyebrow>Consultant surgeon</SectionEyebrow>
            <SectionHeading id="about-heading" mobileCenter className="mt-3 lg:mt-4">
              About Najib
            </SectionHeading>

            <blockquote
              className={`mt-8 lg:mt-10 ${homeTypography.quote} ${homeTypography.quoteDark}`}
            >
              &ldquo;Every patient deserves the highest standard of medical care,
              delivered with compassion and respect. My mission is to ensure each
              individual receives personalised, tailored care that makes them feel
              heard, valued, and supported throughout their healthcare
              journey.&rdquo;
            </blockquote>

            <ScrollReveal variant="fade-up" delay={140}>
              <p className={`mt-8 ${homeTypography.meta} ${homeTypography.metaDark}`}>
                Mr Najib Daulatzai
              </p>
            </ScrollReveal>

            <ScrollReveal variant="scale-up" delay={200}>
              <div className="mt-4 max-md:flex max-md:justify-center">
                <SignaturePlaceholder />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={260}>
              <div className="mt-10 max-md:flex max-md:justify-center">
                <Button href="/about" variant="dark">
                  Read More
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-left" delay={120}>
          <AboutParallaxImage />
        </ScrollReveal>
      </SiteContainer>
    </HomeSectionShell>
  );
}
