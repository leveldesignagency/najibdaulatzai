import { Button } from "@/components/ui/Button";

type LocationBookingButtonProps = {
  label: string;
  href: string;
  locationName: string;
  theme?: "light" | "dark";
};

export function LocationBookingButton({
  label,
  href,
  locationName,
  theme = "light",
}: LocationBookingButtonProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const analyticsAction = isExternal ? "book_online" : "enquire";

  return (
    <Button
      href={href}
      variant={theme === "dark" ? "outline-light" : "outline-dark"}
      className="min-w-[140px]"
      data-analytics-action={analyticsAction}
      data-analytics-location={locationName}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {label}
    </Button>
  );
}
