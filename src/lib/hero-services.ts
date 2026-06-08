import { procedureSpecialties } from "./procedures";

/** Homepage hero service links */
export const heroServices = [
  ...procedureSpecialties.map((specialty) => ({
    label: specialty.label,
    href: `/procedures/${specialty.slug}`,
  })),
  { label: "ROBOTICS", href: "/robotic-surgery" },
] as const;
