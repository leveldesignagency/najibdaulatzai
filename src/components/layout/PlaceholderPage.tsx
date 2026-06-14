import { Footer } from "@/components/layout/Footer";
import { PageShell } from "@/components/layout/PageShell";
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
      <PageShell
        className="min-h-[50vh] !bg-charcoal"
        containerClassName="max-w-3xl text-center"
      >
        <h1 className="text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
          {description}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-sm text-white/60 sm:mt-8">
          This page is coming soon. Content will be added in the next phase of
          the build.
        </p>
        <div className="mt-8 flex justify-center gap-4 sm:mt-10">
          <Button href="/" variant="light">
            Home
          </Button>
          <Button href="/contact" variant="outline-light">
            Contact
          </Button>
        </div>
      </PageShell>
      <Footer />
    </>
  );
}
