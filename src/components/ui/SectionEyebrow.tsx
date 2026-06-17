import { homeTypography } from "@/lib/home-typography";

type SectionEyebrowProps = {
  theme?: "light" | "dark";
  children: string;
  className?: string;
};

export function SectionEyebrow({
  theme = "dark",
  children,
  className = "",
}: SectionEyebrowProps) {
  const tone = theme === "light" ? homeTypography.eyebrowLight : homeTypography.eyebrowDark;

  return (
    <p className={`${homeTypography.eyebrow} ${tone} ${className}`.trim()}>{children}</p>
  );
}
