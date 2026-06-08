import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProcedureFaqSection } from "@/components/faq/ProcedureFaqSection";
import { ProcedureCard } from "@/components/procedures/ProcedureCard";
import { ProcedureDetailView } from "@/components/procedures/ProcedureDetailView";
import { ProcedureTabNav } from "@/components/procedures/ProcedureTabNav";
import {
  ProceduresPageShell,
  SpecialtyArticle,
} from "@/components/procedures/SpecialtyArticle";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { additionalSections } from "@/lib/procedures/additional-content";
import { colorectalSections } from "@/lib/procedures/colorectal-content";
import { endoscopySections } from "@/lib/procedures/endoscopy-content";
import { herniaSections } from "@/lib/procedures/hernia-content";
import { proctologySections } from "@/lib/procedures/proctology-content";
import {
  getProcedureSpecialty,
  procedureSpecialties,
  type ProcedureSpecialtySlug,
} from "@/lib/procedures";
import {
  getProcedureDetailPage,
  procedureDetailSlugs,
} from "@/lib/procedures/procedure-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const sectionMap: Record<
  ProcedureSpecialtySlug,
  { heading: string; paragraphs: string[] }[]
> = {
  proctology: proctologySections,
  colorectal: colorectalSections,
  hernia: herniaSections,
  endoscopy: endoscopySections,
  additional: additionalSections,
};

export function generateStaticParams() {
  return [
    ...procedureSpecialties.map((specialty) => ({ slug: specialty.slug })),
    ...procedureDetailSlugs.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getProcedureDetailPage(slug);

  if (detail) {
    return {
      title: { absolute: detail.metaTitle },
      description: detail.metaDescription,
      alternates: { canonical: `/procedures/${detail.slug}` },
    };
  }

  const specialty = getProcedureSpecialty(slug);

  if (!specialty) {
    return { title: "Procedures" };
  }

  return {
    title: specialty.metaTitle,
    description: specialty.metaDescription,
    alternates: { canonical: `/procedures/${specialty.slug}` },
  };
}

export default async function ProcedureSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getProcedureDetailPage(slug);

  if (detail) {
    return <ProcedureDetailView page={detail} />;
  }

  const specialty = getProcedureSpecialty(slug);

  if (!specialty) {
    notFound();
  }

  const sections = sectionMap[specialty.slug];

  return (
    <ProceduresPageShell title="Procedures">
      <div className="mt-6">
        <SectionHeading id="specialty-heading">{specialty.pageTitle}</SectionHeading>
      </div>

      <div className="mt-10">
        <ProcedureTabNav activeSlug={specialty.slug} />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {specialty.cards.map((card) => (
          <ProcedureCard key={card.slug} card={card} />
        ))}
      </div>

      <div className="mt-16 border-t border-charcoal/10 pt-16">
        <SpecialtyArticle specialty={specialty} sections={sections} />
        <ProcedureFaqSection specialtySlug={specialty.slug} />
      </div>
    </ProceduresPageShell>
  );
}
