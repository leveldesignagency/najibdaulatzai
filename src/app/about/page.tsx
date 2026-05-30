import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Mr Najib Daulatzai, consultant colorectal and general surgeon serving London and Hertfordshire.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      title="About"
      description="Detailed information about Mr Najib Daulatzai will appear here."
    />
  );
}
