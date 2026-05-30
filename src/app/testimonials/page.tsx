import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Patient testimonials for Mr Najib Daulatzai, consultant colorectal and general surgeon.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <PlaceholderPage
      title="Testimonials"
      description="Patient testimonials will appear here."
    />
  );
}
