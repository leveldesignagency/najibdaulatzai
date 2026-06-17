import Link from "next/link";
import type { ResearchPublication } from "@/lib/research-publications";

const AUTHOR_NAME = "Daulatzai N";

function HighlightAuthorCitation({ citation }: { citation: string }) {
  const parts = citation.split(new RegExp(`(${AUTHOR_NAME})`, "g"));

  return (
    <>
      {parts.map((part, index) =>
        part === AUTHOR_NAME ? (
          <strong key={`${part}-${index}`} className="font-semibold text-charcoal">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

export function ResearchPublicationCard({
  publication,
}: {
  publication: ResearchPublication;
}) {
  const title = publication.articleUrl ? (
    <Link
      href={publication.articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-charcoal-dark"
    >
      {publication.articleTitle}
    </Link>
  ) : (
    publication.articleTitle
  );

  return (
    <article className="border border-charcoal/10 bg-neutral-50 p-6 lg:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-charcoal/50">
        {publication.category}
      </p>
      <p className="mt-2 text-sm font-medium text-charcoal/60">
        {publication.journal} · {publication.year}
      </p>
      <h3 className="mt-4 text-lg font-semibold leading-snug text-charcoal lg:text-xl">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
        <HighlightAuthorCitation citation={publication.citation} />
      </p>
      <p className="mt-4 text-base leading-relaxed text-charcoal/85">
        {publication.summary}
      </p>
    </article>
  );
}
