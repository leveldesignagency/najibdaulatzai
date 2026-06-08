import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  theme?: "light" | "dark";
  children: ReactNode;
};

export function SectionHeading({
  id,
  theme = "dark",
  children,
}: SectionHeadingProps) {
  const borderColor = theme === "light" ? "border-white/80" : "border-charcoal";
  const textColor = theme === "light" ? "text-white" : "text-charcoal";

  return (
    <h2
      id={id}
      className={`border-l-[3px] ${borderColor} pl-4 text-4xl tracking-tight ${textColor} lg:pl-5 lg:text-5xl`}
    >
      {children}
    </h2>
  );
}
