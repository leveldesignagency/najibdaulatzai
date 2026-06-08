import type { ResearchPublication } from "@/lib/research-publications";

export function ResearchPublicationCard({
  publication,
}: {
  publication: ResearchPublication;
}) {
  return (
    <article className="border border-charcoal/10 bg-neutral-50 p-6 lg:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal/50">
        {publication.category}
      </p>
      <p className="mt-2 text-sm font-medium text-charcoal/60">
        {publication.journal} · {publication.year}
      </p>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-charcoal lg:text-xl">
        {publication.articleTitle}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
        {publication.citation}
      </p>
      <p className="mt-4 text-base leading-relaxed text-charcoal/85">
        {publication.summary}
      </p>
    </article>
  );
}
