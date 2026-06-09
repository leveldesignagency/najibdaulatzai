import { imageFocalPoints, type ImageFocalPath } from "@/lib/image-focal-points";

/** Manual overrides that beat auto-detected focal points. */
const manualFocalOverrides: Partial<Record<string, string>> = {
  "/images/procedures-home.jpg": "28% 42%",
};

export function getImageObjectPosition(
  src: string,
  override?: string | null,
): string | undefined {
  if (override) return override;

  const manual = manualFocalOverrides[src];
  if (manual) return manual;

  if (src in imageFocalPoints) {
    return imageFocalPoints[src as ImageFocalPath];
  }

  return undefined;
}

export function imageObjectPositionStyle(
  src: string,
  override?: string | null,
): { objectPosition?: string } | undefined {
  const objectPosition = getImageObjectPosition(src, override);
  return objectPosition ? { objectPosition } : undefined;
}
