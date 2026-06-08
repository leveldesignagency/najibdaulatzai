import type { ReactNode } from "react";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
};

export function SiteContainer({ children, className = "" }: SiteContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-3 sm:px-4 md:px-5 lg:px-6 ${className}`}>
      {children}
    </div>
  );
}
