import Image from "next/image";
import type { insuranceProviders } from "@/lib/about-content";

type Provider = (typeof insuranceProviders)[number];

type InsurerLogoItemProps = {
  provider: Provider;
  variant?: "default" | "onDark";
  size?: "row" | "marquee" | "strip" | "featured";
  spread?: boolean;
  decorative?: boolean;
};

export function InsurerLogoItem({
  provider,
  variant = "default",
  size = "row",
  spread = false,
  decorative = false,
}: InsurerLogoItemProps) {
  const isWide = provider.width / provider.height > 1.25;
  const heightClass =
    size === "featured"
      ? "h-20 sm:h-24"
      : size === "strip"
        ? "h-16 sm:h-20"
        : size === "marquee"
          ? "h-11 sm:h-12"
          : "h-14 sm:h-16";
  const wideMax =
    size === "featured"
      ? spread
        ? "max-w-none"
        : "max-w-[8rem] sm:max-w-[10rem]"
      : size === "strip"
        ? "max-w-[7rem] sm:max-w-[8.5rem]"
        : size === "marquee"
          ? "max-w-[5rem] sm:max-w-[5.75rem]"
          : "max-w-[5.75rem] sm:max-w-[6.75rem]";
  const squareMax =
    size === "featured"
      ? spread
        ? "max-w-none"
        : "max-w-24 sm:max-w-28"
      : size === "strip"
        ? "max-w-20 sm:max-w-24"
        : "max-w-16";

  return (
    <li
      className={`flex ${heightClass} items-center ${
        spread ? "min-w-0 flex-1 justify-center px-1 sm:px-2" : "shrink-0"
      } ${isWide ? wideMax : squareMax}`}
      title={provider.name}
      aria-hidden={decorative || undefined}
    >
      <Image
        src={provider.logo}
        alt={decorative ? "" : `${provider.name} logo`}
        width={provider.width}
        height={provider.height}
        className={`h-full w-auto max-w-full object-contain ${
          variant === "onDark" ? "brightness-0 invert opacity-85" : ""
        }`}
      />
    </li>
  );
}
