import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
        className="flex items-center bg-charcoal px-3 py-20 sm:px-4 md:px-5 lg:px-6 lg:py-28"
      >
        <div className="mx-auto max-w-xl">
          <SectionHeading id="procedures-heading" theme="light">
            Procedures
          </SectionHeading>
          <p className="mt-10 text-lg leading-relaxed text-white/85 lg:text-xl">
            We provide a range of surgical procedures through both the NHS and
            private practice, all aimed at giving you the best possible
            treatment.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/procedures" variant="light">
              All procedures
            </Button>
            <Button href="/robotic-surgery" variant="outline-light">
              Robotic surgery
            </Button>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fade-left" delay={120} className="relative min-h-[50vh] lg:min-h-full">
        <Image
          src="/images/procedures-home.jpg"
          alt="Mr Najib Daulatzai seated beside da Vinci robotic surgical systems used for advanced colorectal procedures"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </ScrollReveal>
    </section>
  );
}
