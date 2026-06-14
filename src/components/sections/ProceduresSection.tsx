import { FocalImage } from "@/components/ui/FocalImage";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProceduresSection() {
  return (
    <section
      id="procedures"
      aria-labelledby="procedures-heading"
      className="grid min-h-[70vh] overflow-x-clip lg:grid-cols-2"
    >
      <ScrollReveal
        variant="fade-right"
        className="flex items-center bg-charcoal py-20 lg:py-28"
      >
        <SiteContainer>
          <div className="max-w-xl">
            <SectionHeading id="procedures-heading" theme="light">
              Procedures
            </SectionHeading>
            <p className="mt-8 text-base leading-relaxed text-white/85 sm:mt-10 sm:text-lg lg:text-xl">
            We provide a range of surgical procedures through both the NHS and
            private practice, all aimed at giving you the best possible
            treatment.
          </p>
            <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
              <Button href="/procedures" variant="light">
                All procedures
              </Button>
              <Button href="/robotic-surgery" variant="outline-light">
                Robotic surgery
              </Button>
            </div>
          </div>
        </SiteContainer>
      </ScrollReveal>

      <ScrollReveal variant="fade-left" delay={120} className="relative min-h-[50vh] lg:min-h-full">
        <FocalImage
          src="/images/procedures-home.jpg"
          alt="Mr Najib Daulatzai seated beside da Vinci robotic surgical systems used for advanced colorectal procedures"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          quality={75}
          loading="lazy"
        />
      </ScrollReveal>
    </section>
  );
}
