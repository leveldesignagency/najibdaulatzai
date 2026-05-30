import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "Procedures",
  description:
    "Surgical procedures offered by Mr Najib Daulatzai through NHS and private practice in London and Hertfordshire.",
  alternates: { canonical: "/procedures" },
};

export default function ProceduresPage() {
  return (
    <PlaceholderPage
      title="Procedures"
      description="Detailed procedure information will appear here."
    />
  );
}
