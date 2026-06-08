import { Footer } from "@/components/layout/Footer";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { Button } from "@/components/ui/Button";
import { procedureSlug } from "@/lib/procedures/slug";
import type { ProcedureSpecialty } from "@/lib/procedures";

type SpecialtyArticleProps = {
  specialty: ProcedureSpecialty;
  sections: { heading: string; id?: string; paragraphs: string[] }[];
};

export function SpecialtyArticle({ specialty, sections }: SpecialtyArticleProps) {
  return (
    <article className="prose prose-charcoal max-w-none">
      <p className="text-lg leading-relaxed text-charcoal/85">{specialty.intro}</p>

      {sections.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2
            id={section.id ?? procedureSlug(section.heading)}
            className="border-l-[3px] border-charcoal pl-4 text-2xl tracking-tight text-charcoal lg:text-3xl"
          >
            {section.heading}
          </h2>
          <div className="mt-6 space-y-4">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-charcoal/85 lg:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-14 flex flex-wrap gap-4">
        <Button href="/contact" variant="dark">
          Book a Consultation
        </Button>
        <Button href="/procedures" variant="outline-dark">
          All Procedures
        </Button>
      </div>
    </article>
  );
}

export function ProceduresPageShell({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <div className="bg-white pb-20 pt-28">
        <SiteContainer>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-charcoal/50">
            {title}
          </p>
          {children}
        </SiteContainer>
      </div>
      <Footer />
    </>
  );
}

export function SpecialtyCardGrid({
  specialty,
}: {
  specialty: ProcedureSpecialty;
}) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      {specialty.cards.map((card) => (
        <div
          key={card.title}
          id={card.slug}
          className="scroll-mt-32"
        >
          <div className="relative min-h-[180px] overflow-hidden bg-charcoal">
            <div className="absolute inset-0 bg-charcoal/50" />
            <div className="relative flex min-h-[180px] items-center justify-center p-6">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

