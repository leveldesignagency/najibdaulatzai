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
import { TextBackLink } from "@/components/ui/BackNavButton";
import { colorectalSections } from "@/lib/procedures/colorectal-content";
import { endoscopySections } from "@/lib/procedures/endoscopy-content";
import { herniaSections } from "@/lib/procedures/hernia-content";
import { proctologySections } from "@/lib/procedures/proctology-content";
import {
  getProcedureSpecialty,
  getProceduresTabHref,
  isProcedureGuidePage,
  procedureSpecialties,
  type ProcedureGuideSpecialtySlug,
  type ProcedureSpecialtySlug,
} from "@/lib/procedures";
import {
  getProcedureDetailPage,
  procedureDetailSlugs,
} from "@/lib/procedures/procedure-pages";
import { publicRobots } from "@/lib/seo/robots";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const sectionMap: Record<
  Exclude<ProcedureSpecialtySlug, "robotic-minimally-invasive">,
  { heading: string; paragraphs: string[] }[]
> = {
  colorectal: colorectalSections,
  hernia: herniaSections,
  proctology: proctologySections,
  endoscopy: endoscopySections,
};

export function generateStaticParams() {
  return [
    ...procedureSpecialties
      .filter((specialty) => specialty.guidePage !== false)
      .map((specialty) => ({ slug: specialty.slug })),
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
      robots: publicRobots,
    };
  }

  const specialty = getProcedureSpecialty(slug);

  if (!specialty || specialty.guidePage === false) {
    return { title: "Procedures" };
  }

  return {
    title: specialty.metaTitle,
    description: specialty.metaDescription,
    alternates: { canonical: `/procedures/${specialty.slug}` },
    robots: publicRobots,
  };
}

export default async function ProcedureSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getProcedureDetailPage(slug);

  if (detail) {
    return <ProcedureDetailView page={detail} />;
  }

  if (!isProcedureGuidePage(slug)) {
    notFound();
  }

  const specialty = getProcedureSpecialty(slug);

  if (!specialty) {
    notFound();
  }

  const sections =
    sectionMap[specialty.slug as Exclude<ProcedureSpecialtySlug, "robotic-minimally-invasive">];

  return (
    <ProceduresPageShell>
      <TextBackLink href={getProceduresTabHref(specialty.slug)}>
        Back to procedures
      </TextBackLink>

      <div className="mt-8">
        <SectionHeading id="specialty-heading">{specialty.pageTitle}</SectionHeading>
      </div>

      <div className="mt-8">
        <ProcedureTabNav activeSlug={specialty.slug} />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {specialty.cards.map((card) => (
          <ProcedureCard key={card.slug} card={card} />
        ))}
      </div>

      <div className="mt-16 border-t border-charcoal/10 pt-16">
        <SpecialtyArticle specialty={specialty} sections={sections} />
        <ProcedureFaqSection specialtySlug={specialty.slug as ProcedureGuideSpecialtySlug} />
      </div>
    </ProceduresPageShell>
  );
}
