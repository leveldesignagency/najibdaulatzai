import { SiteContainer } from "@/components/layout/SiteContainer";
import { AboutParallaxImage } from "@/components/sections/AboutParallaxImage";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="overflow-hidden bg-white py-20 lg:py-28"
    >
      <SiteContainer className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal variant="fade-right">
          <div>
            <SectionHeading id="about-heading">About Najib</SectionHeading>

            <blockquote className="mt-10 text-lg leading-relaxed text-charcoal/85 lg:text-xl">
              &ldquo;Every patient deserves the highest standard of medical care,
              delivered with compassion and respect. My mission is to ensure each
              individual receives personalised, tailored care that makes them feel
              heard, valued, and supported throughout their healthcare
              journey.&rdquo;
            </blockquote>

            <p className="mt-8 text-base font-medium text-charcoal">
              Mr Najib Daulatzai
            </p>

            <div className="mt-4">
              <Image
                src="/images/signature.svg"
                alt="Signature of Mr Najib Daulatzai"
                width={220}
                height={72}
                className="h-14 w-auto opacity-90"
              />
            </div>

            <div className="mt-10">
              <Button href="/about" variant="dark">
                Read More
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-left" delay={120}>
          <AboutParallaxImage />
        </ScrollReveal>
      </SiteContainer>
    </section>
  );
}
