import type { Metadata } from "next";

/** Default for all public marketing pages. */
export const publicRobots: NonNullable<Metadata["robots"]> = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

/** Login / unpublished preview pages only. */
export const privatePreviewRobots: NonNullable<Metadata["robots"]> = {
  index: false,
  follow: false,
};
