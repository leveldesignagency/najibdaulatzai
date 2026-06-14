import Image, { type ImageProps } from "next/image";
import { getImageObjectPosition } from "@/lib/get-image-object-position";

export type FocalImageProps = ImageProps & {
  /** Explicit crop anchor; beats auto-detected focal point for this src. */
  focalPoint?: string | null;
};

export function FocalImage({
  src,
  focalPoint,
  className,
  style,
  quality = 75,
  ...props
}: FocalImageProps) {
  const srcKey = typeof src === "string" ? src : "";
  const objectPosition = getImageObjectPosition(srcKey, focalPoint);

  return (
    <Image
      src={src}
      quality={quality}
      className={className}
      style={objectPosition ? { ...style, objectPosition } : style}
      {...props}
    />
  );
}
