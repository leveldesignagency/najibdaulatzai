import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mr Najib Daulatzai to book an appointment at NHS or private practice locations in London and Hertfordshire.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact"
      description="Contact details and booking information will appear here."
    />
  );
}
