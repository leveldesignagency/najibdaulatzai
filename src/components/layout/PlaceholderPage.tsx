import { Footer } from "@/components/layout/Footer";
import { SiteContainer } from "@/components/layout/SiteContainer";
import { Button } from "@/components/ui/Button";

export function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <div className="relative min-h-[50vh] bg-charcoal pb-20 pt-28">
        <SiteContainer className="max-w-3xl text-center">
          <h1 className="text-4xl tracking-tight text-white lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80">{description}</p>
          <p className="mx-auto mt-8 max-w-2xl text-sm text-white/60">
            This page is coming soon. Content will be added in the next phase of
            the build.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button href="/" variant="light">
              Home
            </Button>
            <Button href="/contact" variant="outline-light">
              Contact
            </Button>
          </div>
        </SiteContainer>
      </div>
      <Footer />
    </>
  );
}
