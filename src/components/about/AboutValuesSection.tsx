import { FocalImage } from "@/components/ui/FocalImage";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutValues, valuesIntro } from "@/lib/about-content";

export function AboutValuesSection() {
  return (
    <section
      aria-labelledby="about-values-heading"
      className="bg-charcoal py-20 text-white lg:py-28"
    >
      <SiteContainer className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16">
        <div className="flex flex-col">
          <SectionHeading id="about-values-heading" theme="light">
            Values
          </SectionHeading>
          <p className="mt-10 text-lg leading-relaxed text-white/85 lg:text-xl">
            {valuesIntro}
          </p>
          <div className="relative mt-10 aspect-[4/5] w-full overflow-hidden bg-charcoal-dark lg:aspect-auto lg:min-h-[240px] lg:flex-1">
            <FocalImage
              src="/images/about secondary.jpg"
              alt="Mr Najib Daulatzai, consultant colorectal surgeon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
          </div>
        </div>

        <div className="flex flex-col">
          {aboutValues.map((value, index) => (
            <article
              key={value.title}
              className={`py-8 ${index > 0 ? "border-t border-white/20" : ""}`}
            >
              <h3 className="text-xl font-semibold tracking-tight text-white lg:text-2xl">
                {value.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/80 lg:text-lg">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
