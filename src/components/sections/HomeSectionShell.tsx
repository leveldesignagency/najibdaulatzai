import type { ReactNode } from "react";

type HomeSectionVariant = "light" | "muted" | "dark" | "plain";

type HomeSectionShellProps = {
  children: ReactNode;
  variant?: HomeSectionVariant;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
};

const variantClasses: Record<HomeSectionVariant, string> = {
  light: "home-section--light",
  muted: "home-section--muted",
  dark: "home-section--dark",
  plain: "bg-white",
};

const ambientClasses: Partial<Record<HomeSectionVariant, string>> = {
  light: "home-deco-ambient--light",
  muted: "home-deco-ambient--muted",
};

export function HomeSectionShell({
  children,
  variant = "light",
  className = "",
  id,
  "aria-labelledby": ariaLabelledBy,
}: HomeSectionShellProps) {
  const showAmbient = variant === "light" || variant === "muted";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`relative overflow-hidden py-20 lg:py-28 ${variantClasses[variant]} ${className}`.trim()}
    >
      {showAmbient ? (
        <div
          aria-hidden="true"
          className={`home-deco-ambient pointer-events-none absolute inset-0 hidden lg:block ${ambientClasses[variant] ?? ""}`}
        />
      ) : null}

      {variant === "dark" ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-0 hidden h-[26rem] w-[26rem] rounded-full bg-white/[0.045] blur-3xl lg:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.03)_48%,transparent_100%)] lg:block"
          />
        </>
      ) : null}

      <div className="relative z-10">{children}</div>
    </section>
  );
}
