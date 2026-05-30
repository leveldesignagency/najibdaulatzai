import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="overflow-hidden bg-white py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <h2
            id="about-heading"
            className="text-4xl font-light tracking-tight text-charcoal lg:text-5xl"
          >
            About Najib
          </h2>
          <div className="mt-4 h-px w-24 bg-charcoal" aria-hidden="true" />

          <blockquote className="mt-10 text-lg leading-relaxed text-charcoal/85 lg:text-xl">
            &ldquo;Every patient deserves the highest standard of medical care,
            delivered with compassion and respect. My mission is to ensure each
            individual receives personalised, tailored care that makes them feel
            heard, valued, and supported throughout their healthcare
            journey.&rdquo;
          </blockquote>

          <p className="mt-8 text-base font-medium text-charcoal">Mr Najib Daulatzai</p>

          <div className="mt-4">
            <Image
              src="/images/signature.svg"
              alt="Signature of Mr Najib Daulatzai"
              width={180}
              height={60}
              className="h-12 w-auto opacity-90"
            />
          </div>

          <div className="mt-10">
            <Button href="/about" variant="dark">
              Read More
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-full bg-neutral-100 lg:max-w-none">
            <Image
              src="/images/about-operating-theatre.png"
              alt="Mr Najib Daulatzai in operating theatre wearing surgical cap, mask, and headlight during colorectal surgery"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 80vw, 40vw"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent via-transparent to-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
