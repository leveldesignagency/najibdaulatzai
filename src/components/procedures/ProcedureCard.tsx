import { FocalImage } from "@/components/ui/FocalImage";
import Link from "next/link";
import type { ProcedureCard as ProcedureCardType } from "@/lib/procedures";

type ProcedureCardProps = {
  card: ProcedureCardType;
};

export function ProcedureCard({ card }: ProcedureCardProps) {
  return (
    <Link
      href={card.href}
      className="procedure-card group relative block min-h-[220px] overflow-hidden sm:min-h-[260px] lg:min-h-[280px]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <FocalImage
          src={card.image}
          alt={card.imageAlt}
          fill
          focalPoint={card.imageObjectPosition}
          className="procedure-card-image object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="absolute inset-0 bg-charcoal/45 transition-colors duration-300 group-hover:bg-charcoal/55" />

      <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center gap-3 p-6 sm:min-h-[260px] lg:min-h-[280px]">
        <h3 className="text-center text-2xl font-semibold text-white sm:text-3xl">
          {card.title}
        </h3>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View full guide
        </span>
      </div>
    </Link>
  );
}
