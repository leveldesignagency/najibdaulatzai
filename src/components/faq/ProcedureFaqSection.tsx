import { FaqAccordion } from "@/components/faq/FaqAccordion";
import {
  getFaqsByIds,
  procedureSpecialtyFaqIds,
} from "@/lib/patient-faq-content";
import type { ProcedureSpecialtySlug } from "@/lib/procedures";

type ProcedureFaqSectionProps = {
  specialtySlug: ProcedureSpecialtySlug;
};

export function ProcedureFaqSection({ specialtySlug }: ProcedureFaqSectionProps) {
  const faqs = getFaqsByIds(procedureSpecialtyFaqIds[specialtySlug]);

  return (
    <section
      aria-labelledby={`${specialtySlug}-faq-heading`}
      className="mt-16 border-t border-charcoal/10 pt-14"
    >
      <h2
        id={`${specialtySlug}-faq-heading`}
        className="text-xl font-semibold tracking-tight text-charcoal sm:text-2xl"
      >
        Frequently asked questions
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-charcoal/70">
        Common questions about {specialtySlug === "additional" ? "these procedures" : "this area of care"}.
        {" "}
        <a href="/patient-faq" className="font-medium text-charcoal underline-offset-4 hover:underline">
          View all patient FAQs
        </a>
      </p>
      <div className="mt-8 max-w-3xl">
        <FaqAccordion faqs={faqs} variant="compact" />
      </div>
    </section>
  );
}
