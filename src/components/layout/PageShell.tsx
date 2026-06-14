import type { ReactNode } from "react";
import { SiteContainer } from "@/components/layout/SiteContainer";

type PageBackground = "white" | "neutral-50" | "neutral-100";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: PageBackground;
  /** When true, children manage their own horizontal containers. */
  bare?: boolean;
  /** When false, omit top padding (e.g. below a page hero). */
  headerOffset?: boolean;
};

const backgroundClasses: Record<PageBackground, string> = {
  white: "bg-white",
  "neutral-50": "bg-neutral-50",
  "neutral-100": "bg-neutral-100",
};

export function PageShell({
  children,
  className = "",
  containerClassName = "",
  background = "white",
  bare = false,
  headerOffset = true,
}: PageShellProps) {
  return (
    <div
      className={`${backgroundClasses[background]} pb-20 ${headerOffset ? "pt-28" : ""} ${className}`.trim()}
    >
      {bare ? children : (
        <SiteContainer className={containerClassName}>{children}</SiteContainer>
      )}
    </div>
  );
}
