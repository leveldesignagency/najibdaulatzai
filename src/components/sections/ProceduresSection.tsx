import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function ProceduresSection() {
  return (
    <section
      id="procedures"
      aria-labelledby="procedures-heading"
      className="grid min-h-[70vh] lg:grid-cols-2"
    >
      <div className="flex items-center bg-charcoal px-6 py-20 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-xl">
          <h2
            id="procedures-heading"
            className="text-4xl font-light tracking-tight text-white lg:text-5xl"
          >
            Procedures
          </h2>
          <div className="mt-4 h-px w-24 bg-white/80" aria-hidden="true" />
          <p className="mt-10 text-lg leading-relaxed text-white/85 lg:text-xl">
            We provide a range of surgical procedures through both the NHS and
            private practice, all aimed at giving you the best possible
            treatment.
          </p>
          <div className="mt-10">
            <Button href="/procedures" variant="light">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="relative min-h-[50vh] lg:min-h-full">
        <Image
          src="/images/procedures-robotic-surgery.png"
          alt="Mr Najib Daulatzai seated beside da Vinci robotic surgical systems used for advanced colorectal procedures"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
