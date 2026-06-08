import Image from "next/image";

const LOGO_SRC = "/Logos/Najib_Daulatzai_Logo.svg";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

export function Logo({ className = "", inverted = false }: LogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Najib Daulatzai"
      width={699}
      height={137}
      priority
      className={`h-8 w-auto md:h-10 ${inverted ? "brightness-0 invert" : ""} ${className}`.trim()}
    />
  );
}
