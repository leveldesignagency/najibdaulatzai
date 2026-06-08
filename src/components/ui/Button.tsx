import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "light" | "dark" | "outline-light" | "outline-dark";

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsLink = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  light:
    "border-white bg-white text-charcoal hover:text-charcoal after:bg-charcoal/10",
  dark: "border-charcoal bg-charcoal text-white hover:text-white after:bg-white/20",
  "outline-light":
    "border-white bg-transparent text-white hover:text-white after:bg-white/20",
  "outline-dark":
    "border-charcoal bg-transparent text-charcoal hover:text-charcoal after:bg-charcoal/10",
};

const baseStyles =
  "btn-4 relative inline-flex min-w-[160px] items-center justify-center overflow-hidden border px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-300 no-underline";

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "dark",
    className = "",
    ...rest
  } = props;

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    const { href, ...linkProps } = rest;
    const isNativeLink =
      href.startsWith("tel:") ||
      href.startsWith("mailto:") ||
      href.startsWith("http://") ||
      href.startsWith("https://");

    if (isNativeLink) {
      return (
        <a href={href} className={classes} {...linkProps}>
          <span className="relative z-20">{children}</span>
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkProps}>
        <span className="relative z-20">{children}</span>
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      <span className="relative z-20">{children}</span>
    </button>
  );
}
