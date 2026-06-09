import { FocalImage } from "@/components/ui/FocalImage";
import Link from "next/link";
import { DaVinciGallery } from "@/components/robotic-surgery/DaVinciGallery";
import { RoboticSurgeryVideo } from "@/components/robotic-surgery/RoboticSurgeryVideo";
import { BackNavButton } from "@/components/ui/BackNavButton";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  benefitsSection,
  ctaParagraph,
  daVinciSection,
  locationsNote,
  roboticProcedureLinks,
  roboticSurgeryIntro,
  roboticSurgeryMainImage,
  roboticSurgerySecondaryImage,
  roboticSurgeryVideo,
  trainingSection,
  whatIsRoboticSurgery,
} from "@/lib/robotic-surgery-content";

const bodyClass = "text-base leading-relaxed text-charcoal/85 lg:text-lg";

const sectionHeadingClass =
  "border-l-[3px] border-charcoal pl-4 text-2xl font-semibold tracking-tight text-charcoal lg:pl-5 lg:text-3xl";

function ProseBlock({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <div className={`space-y-5 ${bodyClass}`}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)}>{paragraph}</p>
      ))}
    </div>
  );
}

export function RoboticSurgeryContent() {
  return (
    <div className="w-full">
      <header>
        <ScrollReveal variant="fade-in">
          <BackNavButton
            href="/procedures"
            ariaLabel="Back to procedures"
            theme="dark"
          />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={80}>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
            {roboticSurgeryIntro.heading}
          </h1>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={160}>
          <p className={`mt-8 max-w-3xl ${bodyClass}`}>
            {roboticSurgeryIntro.paragraphs[0]}
          </p>
        </ScrollReveal>
      </header>

      <section
        className="mt-14 grid items-start gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-14"
        aria-label="Introduction to robotic surgery"
      >
        <ScrollReveal variant="fade-right">
          <ProseBlock paragraphs={roboticSurgeryIntro.paragraphs.slice(1)} />
        </ScrollReveal>

        <ScrollReveal variant="fade-left" delay={120}>
          <figure className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 lg:aspect-[5/4]">
            <FocalImage
              src={roboticSurgeryMainImage.src}
              alt={roboticSurgeryMainImage.alt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
        </ScrollReveal>
      </section>

      <section className="mt-16 lg:mt-20" aria-labelledby="what-is-robotic-heading">
        <ScrollReveal variant="fade-up">
          <h2 id="what-is-robotic-heading" className={sectionHeadingClass}>
            {whatIsRoboticSurgery.heading}
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="fade-up" delay={100} className="mt-8 max-w-4xl">
          <ProseBlock paragraphs={whatIsRoboticSurgery.paragraphs} />
        </ScrollReveal>
      </section>

      <section
        className="mt-16 grid items-center gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-14"
        aria-labelledby="davinci-heading"
      >
        <ScrollReveal variant="fade-right" className="order-2 lg:order-1">
          <figure className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
            <FocalImage
              src={roboticSurgerySecondaryImage.src}
              alt={roboticSurgerySecondaryImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>
        </ScrollReveal>

        <ScrollReveal variant="fade-left" delay={120} className="order-1 lg:order-2">
          <h2 id="davinci-heading" className={sectionHeadingClass}>
            {daVinciSection.heading}
          </h2>
          <div className="mt-8">
            <ProseBlock paragraphs={daVinciSection.paragraphs} />
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal variant="fade-up" className="mt-16 lg:mt-20">
        <RoboticSurgeryVideo video={roboticSurgeryVideo} />
      </ScrollReveal>

      <section className="mt-16 lg:mt-20" aria-labelledby="benefits-heading">
        <ScrollReveal variant="fade-up">
          <h2 id="benefits-heading" className={sectionHeadingClass}>
            {benefitsSection.heading}
          </h2>
        </ScrollReveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {benefitsSection.items.map((item, index) => (
            <ScrollReveal key={item} variant="fade-up" delay={index * 80}>
              <li className="flex h-full gap-4 border border-charcoal/10 bg-neutral-50 p-5 lg:p-6">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center bg-charcoal text-sm font-semibold text-white"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <p className={`${bodyClass} text-charcoal/90`}>{item}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </section>

      <section
        className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-14"
        aria-labelledby="training-heading"
      >
        <ScrollReveal variant="fade-right">
          <h2 id="training-heading" className={sectionHeadingClass}>
            {trainingSection.heading}
          </h2>
          <div className="mt-8">
            <ProseBlock paragraphs={trainingSection.paragraphs} />
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-left" delay={120}>
          <aside className="border border-charcoal/10 bg-charcoal p-6 text-white lg:p-8">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/65">
              Where surgery takes place
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/90 lg:text-lg">
              {locationsNote}
            </p>
          </aside>
        </ScrollReveal>
      </section>

      <section className="mt-16 lg:mt-20" aria-labelledby="robotic-procedures-heading">
        <ScrollReveal variant="fade-up">
          <h2 id="robotic-procedures-heading" className={sectionHeadingClass}>
            Robotic colorectal procedures
          </h2>
          <p className={`mt-4 max-w-3xl ${bodyClass} text-charcoal/80`}>
            Explore individual procedure guides for conditions commonly treated with
            robotic or minimally invasive surgery.
          </p>
        </ScrollReveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {roboticProcedureLinks.map((procedure, index) => (
            <ScrollReveal key={procedure.href} variant="fade-up" delay={index * 90}>
              <li>
                <Link
                  href={procedure.href}
                  className="group flex h-full flex-col border border-charcoal/10 bg-neutral-50 p-6 transition hover:border-charcoal/25 hover:bg-white hover:shadow-md lg:p-7"
                >
                  <h3 className="text-lg font-semibold text-charcoal group-hover:text-charcoal-dark lg:text-xl">
                    {procedure.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75 lg:text-base">
                    {procedure.description}
                  </p>
                  <span className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-charcoal/60 group-hover:text-charcoal">
                    Read more →
                  </span>
                </Link>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </section>

      <DaVinciGallery />

      <ScrollReveal variant="fade-up">
        <section
          className="mt-16 border border-charcoal/10 bg-neutral-50 p-8 lg:mt-20 lg:p-12"
          aria-label="Book a consultation"
        >
          <p className={`max-w-3xl ${bodyClass}`}>{ctaParagraph}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="dark">
              Book a consultation
            </Button>
            <Button href="/procedures" variant="outline-dark">
              All procedures
            </Button>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
