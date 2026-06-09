import { FocalImage } from "@/components/ui/FocalImage";
import Link from "next/link";
import { minimallyInvasiveSurgery } from "@/lib/procedures";

const bodyClass = "text-base leading-relaxed text-charcoal/85 lg:text-lg";

export function MinimallyInvasiveSection() {
  const { title, paragraphs, image, roboticSurgeryLink } =
    minimallyInvasiveSurgery;

  return (
    <section
      id="minimally-invasive"
      className="mt-16 rounded-sm bg-neutral-50 px-6 py-12 sm:px-10 sm:py-14 lg:mt-20 lg:px-12 lg:py-16 scroll-mt-28"
      aria-labelledby="minimally-invasive-heading"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-14 xl:gap-16">
        <div className="max-w-xl">
          <h3
            id="minimally-invasive-heading"
            className="border-l-[3px] border-charcoal pl-4 text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl lg:pl-5 lg:text-4xl"
          >
            {title}
          </h3>

          <div className={`mt-8 space-y-5 ${bodyClass}`}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-8">
            <Link
              href={roboticSurgeryLink.href}
              className="inline-flex items-center gap-2 text-base font-medium text-charcoal underline-offset-4 transition hover:text-charcoal-dark hover:underline lg:text-lg"
            >
              {roboticSurgeryLink.label}
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>

        <figure className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto lg:max-w-lg">
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200 shadow-sm">
            <FocalImage
              src={image.src}
              alt={image.alt}
              fill
              focalPoint={image.objectPosition}
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>
          {image.copyrightNotice ? (
            <figcaption className="mt-3 text-[11px] leading-snug text-charcoal/55">
              {image.copyrightNotice}
            </figcaption>
          ) : null}
        </figure>
      </div>
    </section>
  );
}
