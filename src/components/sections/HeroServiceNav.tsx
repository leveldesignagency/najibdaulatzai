import Link from "next/link";
import { heroServices } from "@/lib/hero-services";

const linkClass =
  "flex min-h-[48px] min-w-[50%] flex-1 items-center justify-center border-b border-r border-white/35 bg-transparent px-3 py-3.5 text-center text-[0.65rem] font-semibold uppercase leading-tight tracking-[0.14em] text-white transition-colors hover:bg-white/20 focus-visible:bg-white/20 focus-visible:outline-none sm:min-w-[33.333%] sm:px-4 sm:text-xs md:px-5 lg:min-w-0 lg:border-b-0 [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r sm:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(5n)]:border-r-0";

export function HeroServiceNav() {
  return (
    <nav
      aria-label="Surgical services"
      className="hero-content-in hero-content-in--delay-2 ml-auto w-full max-w-2xl sm:max-w-3xl lg:mr-[2%]"
    >
      <div className="flex w-full flex-wrap overflow-hidden border border-white/35 lg:flex-nowrap">
        {heroServices.map((service) => (
          <Link key={service.label} href={service.href} className={linkClass}>
            {service.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
