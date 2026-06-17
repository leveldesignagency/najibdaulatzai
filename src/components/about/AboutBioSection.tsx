import { FocalImage } from "@/components/ui/FocalImage";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { scrollStagger } from "@/lib/scroll-stagger";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutBioParagraphs } from "@/lib/about-content";

export function AboutBioSection() {
  return (
    <section aria-labelledby="about-us-heading">
      <ScrollReveal variant="blur-up">
        <SectionHeading id="about-us-heading">About Najib</SectionHeading>
      </ScrollReveal>

      <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <ScrollReveal variant="scale-up" delay={120}>
          <figure className="relative aspect-[3/4] w-full overflow-hidden lg:aspect-[4/5] lg:min-h-[20rem] lg:max-w-none">
            <FocalImage
              src="/about main.jpg"
              alt="Mr Najib Daulatzai, consultant colorectal and general surgeon in London and Hertfordshire"
              fill
              focalPoint="55% 45%"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
              priority
            />
          </figure>
        </ScrollReveal>

        <div className="space-y-5 text-base leading-relaxed text-charcoal/85 sm:space-y-6 lg:text-lg lg:leading-relaxed">
          {aboutBioParagraphs.map((paragraph, index) => (
            <ScrollReveal
              key={paragraph.slice(0, 40)}
              variant="fade-up"
              delay={scrollStagger(index, 70, 160)}
            >
              <p {...(index === 0 ? { "data-speakable": "summary" } : {})}>
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
