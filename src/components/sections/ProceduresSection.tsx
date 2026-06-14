import { FocalImage } from "@/components/ui/FocalImage";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProceduresSection() {
  return (
    <section
      id="procedures"
      aria-labelledby="procedures-heading"
      className="relative min-h-[70vh] overflow-x-clip"
    >
      <div
        className="absolute inset-y-0 left-0 hidden w-1/2 bg-charcoal lg:block"
        aria-hidden="true"
      />

      <ScrollReveal
        variant="fade-left"
        delay={120}
        className="relative min-h-[50vh] lg:absolute lg:inset-y-0 lg:right-0 lg:min-h-full lg:w-1/2"
      >
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

      <SiteContainer className="relative z-10 bg-charcoal py-20 lg:bg-transparent lg:py-28">
        <div className="grid items-center lg:min-h-[calc(70vh-10rem)] lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="fade-right">
            <div className="max-w-xl max-md:mx-auto max-md:text-center">
              <SectionHeading id="procedures-heading" theme="light" mobileCenter>
                Procedures
              </SectionHeading>
              <p className="mt-8 text-base leading-relaxed text-white/85 sm:mt-10 sm:text-lg lg:text-xl">
                We provide a range of surgical procedures through both the NHS and
                private practice, all aimed at giving you the best possible
                treatment.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 sm:mt-10 max-md:justify-center">
                <Button href="/procedures" variant="light">
                  All procedures
                </Button>
                <Button href="/robotic-surgery" variant="outline-light">
                  Robotic surgery
                </Button>
              </div>
            </div>
          </ScrollReveal>
          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </SiteContainer>
    </section>
  );
}
