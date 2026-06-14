import { FocalImage } from "@/components/ui/FocalImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutBioParagraphs } from "@/lib/about-content";

export function AboutBioSection() {
  return (
    <section aria-labelledby="about-us-heading">
      <SectionHeading id="about-us-heading">About Najib</SectionHeading>

      <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <figure className="relative aspect-[5/6] w-full overflow-hidden sm:mx-auto sm:max-w-md lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[22rem] lg:max-w-none">
          <FocalImage
            src="/about main.jpg"
            alt="Mr Najib Daulatzai, consultant colorectal and general surgeon in London and Hertfordshire"
            fill
            focalPoint="30% 50%"
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 45vw"
            priority
          />
        </figure>

        <div className="space-y-5 text-base leading-relaxed text-charcoal/85 sm:space-y-6 lg:text-lg lg:leading-relaxed">
          {aboutBioParagraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 40)}
              {...(index === 0 ? { "data-speakable": "summary" } : {})}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
