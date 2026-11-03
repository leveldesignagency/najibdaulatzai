import { Button } from "@/components/ui/Button";

type LocationBookingButtonProps = {
  label: string;
  href: string;
  theme?: "light" | "dark";
};

export function LocationBookingButton({
  label,
  href,
  theme = "light",
}: LocationBookingButtonProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  return (
    <Button
      href={href}
      variant={theme === "dark" ? "outline-light" : "outline-dark"}
      className="min-w-[140px]"
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {label}
    </Button>
  );
}
