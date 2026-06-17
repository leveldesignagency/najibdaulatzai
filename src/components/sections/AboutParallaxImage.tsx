import { ParallaxImage } from "@/components/ui/ParallaxImage";

const IMAGE_SRC = "/images/about-section.jpg";
const IMAGE_ALT =
  "Mr Najib Daulatzai in operating theatre wearing surgical cap, mask, and headlight during colorectal surgery";

export function AboutParallaxImage() {
  return (
    <ParallaxImage
      src={IMAGE_SRC}
      alt={IMAGE_ALT}
      aspect="portrait"
      priority
      withBackdrop={false}
      focalPoint="43.7% 38%"
      portraitWidth="94%"
      portraitMaxWidth="28rem"
      imageBleed="0%"
    />
  );
}
