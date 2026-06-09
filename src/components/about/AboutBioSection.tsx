import { FocalImage } from "@/components/ui/FocalImage";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutBioParagraphs } from "@/lib/about-content";

export function AboutBioSection() {
  return (
    <section aria-labelledby="about-us-heading">
      <SectionHeading id="about-us-heading">About Najib</SectionHeading>

      <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <div className="relative aspect-[5/6] w-full max-w-md overflow-hidden bg-neutral-100 lg:aspect-auto lg:h-full lg:max-w-none">
          <FocalImage
            src="/about main.jpg"
            alt="Mr Najib Daulatzai, consultant colorectal and general surgeon in London and Hertfordshire"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 45vw"
            priority
          />
        </div>

        <div className="space-y-6 text-base leading-relaxed text-charcoal/85 lg:text-lg lg:leading-relaxed">
          {aboutBioParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
