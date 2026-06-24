import Image from "next/image";
import { insuranceProviders } from "@/lib/about-content";
import { InsurerLogoItem } from "@/components/shared/InsurerLogoItem";

type InsurerLogoGridProps = {
  className?: string;
  /** Single tight row — used on the contact page and homepage hero. */
  layout?: "grid" | "row";
  logoSize?: "row" | "strip" | "featured";
  spread?: boolean;
  variant?: "default" | "onDark";
};

export function InsurerLogoGrid({
  className = "",
  layout = "grid",
  logoSize = "row",
  spread = false,
  variant = "default",
}: InsurerLogoGridProps) {
  if (layout === "row") {
    return (
      <ul
        className={`flex w-full flex-nowrap items-center ${
          spread ? "justify-between gap-3 sm:gap-4" : "gap-2 sm:gap-3"
        } ${className}`.trim()}
      >
        {insuranceProviders.map((provider) => (
          <InsurerLogoItem
            key={provider.name}
            provider={provider}
            variant={variant}
            size={logoSize}
            spread={spread}
          />
        ))}
      </ul>
    );
  }

  return (
    <ul
      className={`grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6 ${className}`.trim()}
    >
      {insuranceProviders.map((provider) => (
        <li
          key={provider.name}
          className="flex h-16 items-center justify-center sm:h-20"
        >
          <Image
            src={provider.logo}
            alt={`${provider.name} logo`}
            width={provider.width}
            height={provider.height}
            className={`max-h-full w-auto max-w-[140px] object-contain sm:max-w-[160px] ${
              variant === "onDark" ? "brightness-0 invert opacity-85" : ""
            }`}
          />
        </li>
      ))}
    </ul>
  );
}
