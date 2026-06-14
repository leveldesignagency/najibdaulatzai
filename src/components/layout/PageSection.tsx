import type { ReactNode } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";

type PageSectionBackground = "white" | "charcoal" | "neutral-100";

type PageSectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: PageSectionBackground;
  border?: boolean;
  id?: string;
  "aria-labelledby"?: string;
};

const backgroundClasses: Record<PageSectionBackground, string> = {
  white: "bg-white",
  charcoal: "bg-charcoal text-white",
  "neutral-100": "bg-neutral-100",
};

export function PageSection({
  children,
  className = "",
  containerClassName = "",
  background = "white",
  border = true,
  id,
  "aria-labelledby": ariaLabelledBy,
}: PageSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`${backgroundClasses[background]} ${border ? "border-t border-charcoal/10" : ""} py-20 lg:py-28 ${className}`.trim()}
    >
      <SiteContainer className={containerClassName}>{children}</SiteContainer>
    </section>
  );
}
