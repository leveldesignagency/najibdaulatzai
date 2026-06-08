import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  daVinciGallerySection,
  intuitivePressResourcesUrl,
  type DaVinciGalleryImage,
} from "@/lib/robotic-surgery-gallery";

const sectionHeadingClass =
  "border-l-[3px] border-charcoal pl-4 text-2xl font-semibold tracking-tight text-charcoal lg:pl-5 lg:text-3xl";

function CollageCell({ image }: { image: DaVinciGalleryImage }) {
  const isAnchor = image.collageClass.includes("row-span-2");
  const isWide = image.collageClass.includes("col-span-4");

  return (
    <a
      href={intuitivePressResourcesUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full w-full"
      aria-label={`${image.alt}, Intuitive Surgical press resources (opens in new tab)`}
    >
      <figure
        className={`relative h-full w-full overflow-hidden ${
          isAnchor ? "min-h-[220px] lg:min-h-[320px]" : isWide ? "min-h-[120px]" : "min-h-[140px]"
        }`}
        style={{ aspectRatio: isAnchor ? undefined : image.aspectRatio }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-contain p-2 transition-opacity duration-300 group-hover:opacity-85 sm:p-3"
          style={{ objectPosition: image.objectPosition ?? "center" }}
          sizes={
            isAnchor || isWide
              ? "(max-width: 1024px) 100vw, 960px"
              : "(max-width: 768px) 50vw, 25vw"
          }
        />
      </figure>
    </a>
  );
}

export function DaVinciGallery() {
  const { heading, intro, copyrightNotice, images } = daVinciGallerySection;

  return (
    <section
      className="mt-16 lg:mt-20"
      aria-labelledby="davinci-gallery-heading"
    >
      <ScrollReveal variant="fade-up">
        <h2 id="davinci-gallery-heading" className={sectionHeadingClass}>
          {heading}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-charcoal/80 lg:text-lg">
          {intro}
        </p>
      </ScrollReveal>

      <div
        className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-4"
        role="list"
        aria-label="da Vinci surgical system gallery"
      >
        {images.map((image, index) => (
          <ScrollReveal
            key={image.src}
            variant="fade-up"
            delay={index * 60}
            className={`h-full ${image.collageClass}`}
          >
            <CollageCell image={image} />
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal variant="fade-in" delay={120}>
        <p className="mt-5 text-[11px] leading-relaxed text-charcoal/55 lg:text-xs">
          {copyrightNotice}
          <span className="mt-0.5 block text-charcoal/45">
            Images courtesy of{" "}
            <a
              href={intuitivePressResourcesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-2 transition hover:text-charcoal/70 hover:underline"
            >
              Intuitive Surgical, Inc.
            </a>
          </span>
        </p>
      </ScrollReveal>
    </section>
  );
}
