export const roboticSurgeryMainImage = {
  src: "/images/procedures-home.jpg",
  alt: "Mr Najib Daulatzai beside da Vinci robotic surgical systems used for robotic colorectal surgery in London",
} as const;

export const roboticSurgerySecondaryImage = {
  src: "/images/davinci.jpg",
  alt: "Mr Najib Daulatzai with the da Vinci robotic surgical system in theatre",
} as const;

export type RoboticSurgeryVideoConfig = {
  heading: string;
  caption?: string;
  /** YouTube video ID only (not full URL). Set via NEXT_PUBLIC_ROBOTIC_SURGERY_YOUTUBE_ID or here. */
  youtubeId: string;
  /** Optional self-hosted MP4 in /public (e.g. /video/da-vinci-5-promotional.mp4), takes precedence over YouTube */
  fileSrc?: string;
  posterSrc?: string;
  /** Required when using Intuitive Surgical press resources */
  copyrightNotice?: string;
};

export const roboticSurgeryVideo: RoboticSurgeryVideoConfig = {
  heading: "The da Vinci surgical system",
  caption:
    "An overview of the da Vinci platform used in robotic colorectal surgery. Mr Daulatzai performs surgeon-controlled robotic procedures using this system at leading London and Hertfordshire hospitals.",
  youtubeId: process.env.NEXT_PUBLIC_ROBOTIC_SURGERY_YOUTUBE_ID ?? "",
  fileSrc: "/video/da-vinci-5-promotional.mp4",
  posterSrc: "/images/da-vinci-5-console-lo-res.jpg",
  copyrightNotice: "Copyright © 2026 Intuitive Surgical Operations, Inc.",
};

export const roboticSurgeryIntro = {
  heading: "Robotic Colorectal Surgery in London",
  paragraphs: [
    "Mr Najib Daulatzai is a consultant colorectal and general surgeon offering robotic colorectal surgery in London and Hertfordshire through NHS and private practice. Robotic surgery combines the precision of minimally invasive techniques with enhanced three-dimensional vision and instrument control, particularly valuable for complex operations deep in the pelvis.",
    "Patients seeking robotic colorectal surgery in London benefit from smaller incisions, reduced blood loss, and typically a faster return to everyday activities compared with traditional open surgery, with care planned individually around diagnosis, fitness, and treatment goals.",
  ],
} as const;

export const whatIsRoboticSurgery = {
  heading: "What is robotic colorectal surgery?",
  paragraphs: [
    "Robotic colorectal surgery is performed using a surgeon-controlled robotic platform. The surgeon sits at a console and guides instruments inside the abdomen through small ports, while a high-definition camera provides magnified, three-dimensional views of the operative field.",
    "Unlike open surgery, which requires a larger abdominal incision, robotic and laparoscopic approaches work through keyhole access. Robotic systems add wristed instrument movement and stable retraction, which can improve precision during demanding colorectal procedures such as rectal cancer resection or ileal pouch surgery.",
  ],
} as const;

export const daVinciSection = {
  heading: "The da Vinci surgical system",
  paragraphs: [
    "Mr Daulatzai performs robotic colorectal surgery using the da Vinci surgical system, an established platform used in leading centres across London and internationally. The system translates the surgeon's hand movements into precise, scaled motions at the instrument tip, with tremor filtration and improved ergonomics during longer operations.",
    "For colorectal patients, these capabilities are especially relevant when operating in the narrow pelvis, where clear visualisation and fine tissue handling support oncological outcomes and nerve preservation where appropriate.",
  ],
} as const;

export const benefitsSection = {
  heading: "Benefits of robotic colorectal surgery",
  items: [
    "Enhanced three-dimensional visualisation, including deep pelvic surgery",
    "Greater instrument precision and control compared with standard laparoscopy in selected cases",
    "Smaller incisions, less post-operative pain, and reduced scarring",
    "Lower blood loss and often a shorter hospital stay",
    "Faster recovery, supporting an earlier return to work and adjuvant treatment when needed",
    "Minimised handling of abdominal tissues compared with open surgery",
  ],
} as const;

export const trainingSection = {
  heading: "Experience and training",
  paragraphs: [
    "Mr Daulatzai completed advanced fellowship training, specialising in robotic and laparoscopic colorectal surgery, and undertook further subspecialty training in complex colorectal cancer, intestinal failure, and inflammatory bowel disease.",
    "He performs robotic colorectal surgery within multidisciplinary teams for cancer and benign disease, with private consultations and operations at leading London and Hertfordshire hospitals.",
  ],
} as const;

export type RoboticProcedureLink = {
  title: string;
  description: string;
  href: string;
};

/** Colorectal and related procedures commonly performed with robotic assistance */
export const roboticProcedureLinks: RoboticProcedureLink[] = [
  {
    title: "Colorectal cancer",
    description:
      "Robotic and laparoscopic resections of the colon and rectum within MDT care, with superior pelvic visualisation where appropriate.",
    href: "/procedures/colorectal-cancer",
  },
  {
    title: "Inflammatory bowel disease",
    description:
      "Surgical management of Crohn's disease and ulcerative colitis, including minimally invasive and robotic techniques when suitable.",
    href: "/procedures/inflammatory-bowel-disease",
  },
  {
    title: "Pouch surgery",
    description:
      "Ileal pouch-anal anastomosis (J-pouch) using robotic techniques for selected patients, developed through advanced fellowship training.",
    href: "/procedures/pouch-surgery",
  },
  {
    title: "Diverticular disease",
    description:
      "Elective and complex diverticular surgery, including robotic or laparoscopic sigmoid colectomy where possible.",
    href: "/procedures/diverticular-disease",
  },
  {
    title: "Rectal prolapse",
    description:
      "Abdominal and perineal repair options, including minimally invasive robotic or laparoscopic approaches for suitable patients.",
    href: "/procedures/rectal-prolapse",
  },
  {
    title: "Inguinal hernia",
    description:
      "Robotic hernia repair offering precision and a rapid recovery for many patients.",
    href: "/procedures/inguinal-hernias",
  },
];

export const ctaParagraph =
  "If you are considering robotic colorectal surgery in London or Hertfordshire, book a consultation to discuss whether a robotic approach is appropriate for your condition.";
