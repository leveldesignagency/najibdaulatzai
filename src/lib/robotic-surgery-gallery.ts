export const intuitiveGalleryCredit =
  "Copyright © 2026 Intuitive Surgical Operations, Inc.";

/** Source site for da Vinci press imagery used in the gallery */
export const intuitivePressResourcesUrl = "https://www.intuitive.com/en-gb";

export type DaVinciGalleryImage = {
  src: string;
  alt: string;
  /** width / height, frames match image proportions to avoid cropping */
  aspectRatio: number;
  objectPosition?: string;
  /** Tailwind grid placement classes */
  collageClass: string;
};

/** Press imagery, excludes assets already used elsewhere on the site and ION content */
export const daVinciGallerySection = {
  heading: "The da Vinci surgical platform",
  intro:
    "Official Intuitive Surgical imagery of the da Vinci robotic system, the surgeon console, patient cart, and operating room configuration used for robotic colorectal surgery.",
  copyrightNotice: intuitiveGalleryCredit,
  images: [
    {
      src: "/images/davinci/da-vinci-5-console.jpg",
      alt: "da Vinci 5 surgeon console in a hospital operating room",
      aspectRatio: 1,
      collageClass: "col-span-2 row-span-2",
    },
    {
      src: "/images/davinci/da-vinci-5-system.jpg",
      alt: "Complete da Vinci 5 surgical system in an operating room configuration",
      aspectRatio: 2,
      collageClass: "col-span-1",
    },
    {
      src: "/images/davinci/da-vinci-5-patient-cart.jpg",
      alt: "da Vinci 5 patient cart with robotic instrument arms",
      aspectRatio: 1,
      collageClass: "col-span-1",
    },
    {
      src: "/images/davinci/da-vinci-5-tower.jpg",
      alt: "da Vinci 5 vision tower and system components in theatre",
      aspectRatio: 1,
      collageClass: "col-span-1",
    },
    {
      src: "/images/davinci/console-front.jpg",
      alt: "Front view of the da Vinci surgeon console",
      aspectRatio: 1600 / 1119,
      collageClass: "col-span-1",
    },
    {
      src: "/images/davinci/gen4-system-lineup.jpg",
      alt: "da Vinci Gen4 surgical system lineup with patient carts and surgeon console",
      aspectRatio: 8 / 3,
      collageClass: "col-span-2 lg:col-span-4",
    },
  ] satisfies DaVinciGalleryImage[],
} as const;
