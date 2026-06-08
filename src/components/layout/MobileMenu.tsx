"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLinks, siteConfig } from "@/lib/site-config";
import { HomeIcon } from "./HomeIcon";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed inset-0 z-[90] bg-charcoal/30 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[110] flex w-[min(100%,28rem)] max-w-md flex-col bg-charcoal shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } ${open ? "visible" : "invisible"}`}
        aria-hidden={!open}
        aria-label="Site navigation"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/50">
            Menu
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center text-white transition hover:bg-white/10"
          >
            <span className="relative block h-4 w-5">
              <span className="absolute left-0 top-2 block h-0.5 w-5 rotate-45 bg-current" />
              <span className="absolute left-0 top-2 block h-0.5 w-5 -rotate-45 bg-current" />
            </span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          <ul>
            {menuLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              const showHomeIcon = "icon" in link && link.icon === "home";

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`group flex items-center justify-between px-6 py-5 text-lg font-medium uppercase tracking-[0.08em] transition-colors ${
                      active
                        ? "bg-white/50 text-white"
                        : "text-white/85 hover:bg-white/25 hover:text-white"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{link.label}</span>
                    {showHomeIcon ? (
                      <HomeIcon
                        className={`h-6 w-6 shrink-0 ${
                          active
                            ? "text-white"
                            : "text-white/40 group-hover:text-white/80"
                        }`}
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-white/10 px-6 py-6">
          <a
            href={siteConfig.phoneHref}
            onClick={onClose}
            className="block text-lg font-medium tracking-wide text-white transition-colors hover:text-white/80"
          >
            {siteConfig.phone}
          </a>
        </div>
      </aside>
    </>
  );
}
