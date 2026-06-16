import Link from "next/link";

type BackNavButtonProps = {
  href: string;
  ariaLabel: string;
  /** `dark` = light page (charcoal icon). `light` = dark/image hero (white icon). */
  theme?: "dark" | "light";
  className?: string;
};

const themeStyles = {
  dark: "border-charcoal/15 bg-neutral-50 text-charcoal hover:border-charcoal/30 hover:bg-white",
  light:
    "border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/15",
} as const;

export function BackNavButton({
  href,
  ariaLabel,
  theme = "dark",
  className = "",
}: BackNavButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center border transition ${themeStyles[theme]} ${className}`.trim()}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="text-current"
      >
        <path
          d="M11 4L6 9L11 14"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    </Link>
  );
}

type TextBackLinkProps = {
  href: string;
  children: React.ReactNode;
  theme?: "dark" | "light";
  className?: string;
};

export function TextBackLink({
  href,
  children,
  theme = "dark",
  className = "",
}: TextBackLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-block text-xs font-medium uppercase tracking-[0.22em] transition-colors ${
        theme === "light"
          ? "text-white/75 hover:text-white"
          : "text-charcoal/55 hover:text-charcoal"
      } ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
