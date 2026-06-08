"use client";

import Link from "next/link";
import type { PatientFaq } from "@/lib/patient-faq-content";

type FaqAccordionProps = {
  faqs: readonly PatientFaq[];
  /** Compact styling for procedure pages */
  variant?: "default" | "compact";
};

export function FaqAccordion({ faqs, variant = "default" }: FaqAccordionProps) {
  const isCompact = variant === "compact";

  return (
    <div className={isCompact ? "space-y-2" : "space-y-3"}>
      {faqs.map((faq) => (
        <details
          key={faq.id}
          className={`group overflow-hidden border border-charcoal/10 bg-neutral-50 transition-colors open:bg-white ${
            isCompact ? "rounded-sm" : "rounded-sm"
          }`}
        >
          <summary
            className={`flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-charcoal transition-colors hover:bg-neutral-100/80 [&::-webkit-details-marker]:hidden ${
              isCompact ? "px-4 py-3.5 text-sm sm:text-base" : "px-5 py-4 text-base sm:text-lg"
            }`}
          >
            <span className="text-left">{faq.question}</span>
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-charcoal/70 transition-transform duration-300 group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <div
            className={`border-t border-charcoal/8 leading-relaxed text-charcoal/85 ${
              isCompact ? "space-y-3 px-4 py-4 text-sm" : "space-y-4 px-5 py-5 text-base"
            }`}
          >
            {faq.answer.map((paragraph) => {
              if (faq.id === "patient-reviews") {
                const linkText = "Testimonials page";
                const linkIndex = paragraph.indexOf(linkText);

                if (linkIndex === -1) {
                  return <p key={paragraph}>{paragraph}</p>;
                }

                return (
                  <p key={paragraph}>
                    {paragraph.slice(0, linkIndex)}
                    <Link
                      href="/testimonials"
                      className="font-medium text-charcoal underline-offset-4 hover:underline"
                    >
                      {linkText}
                    </Link>
                    {paragraph.slice(linkIndex + linkText.length)}
                  </p>
                );
              }

              return <p key={paragraph}>{paragraph}</p>;
            })}
          </div>
        </details>
      ))}
    </div>
  );
}
