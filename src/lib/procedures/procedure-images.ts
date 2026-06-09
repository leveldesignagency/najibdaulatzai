import type { ProcedureSnippetSlug } from "./procedure-snippets";
import { getImageObjectPosition } from "@/lib/get-image-object-position";

const PROCEDURE_IMAGE_DIR = "/images/procedures";

export const intuitiveSurgicalImageCredit =
  "Copyright © 2026 Intuitive Surgical Operations, Inc.";

/** Procedures whose content mentions robotic / da Vinci surgery, Intuitive press images allowed */
export const roboticProcedureSlugs = new Set<ProcedureSnippetSlug>([
  "rectal-prolapse",
  "colorectal-cancer",
  "inflammatory-bowel-disease",
  "pouch-surgery",
  "diverticular-disease",
  "inguinal-hernias",
  "appendicectomy",
]);

export type ProcedureImage = {
  src: string;
  alt: string;
  copyrightNotice?: string;
  /** CSS object-position for card/hero crop, e.g. "center 70%" */
  objectPosition?: string;
};

type ProcedureImageAsset = ProcedureImage & {
  intuitive?: boolean;
};

const intuitiveCredit = intuitiveSurgicalImageCredit;

/** Images in public/images/procedures, intuitive assets credited per press resource terms */
const procedureImageAssets = {
  daVinciConsoleOr: {
    src: `${PROCEDURE_IMAGE_DIR}/da-vinci-5-console-or.jpg`,
    alt: "da Vinci surgical system console in an operating room",
    intuitive: true,
    copyrightNotice: intuitiveCredit,
  },
  intuitiveVisionCart: {
    src: `${PROCEDURE_IMAGE_DIR}/intuitive-vision-cart.jpg`,
    alt: "Surgical team with da Vinci vision cart in the operating room",
    intuitive: true,
    copyrightNotice: intuitiveCredit,
  },
  intuitiveSurgeonConsole: {
    src: `${PROCEDURE_IMAGE_DIR}/intuitive-surgeon-console.jpg`,
    alt: "Surgeon at the da Vinci surgeon console during robotic surgery",
    intuitive: true,
    copyrightNotice: intuitiveCredit,
  },
  doctorsPreparing: {
    src: `${PROCEDURE_IMAGE_DIR}/doctors-preparing-operation.jpg`,
    alt: "Surgical team preparing for an operation in hospital",
  },
  doctorsSurgicalProcedure: {
    src: `${PROCEDURE_IMAGE_DIR}/doctors-surgical-procedure.jpg`,
    alt: "Surgeons performing a surgical procedure on a patient in the operating room",
  },
  groupSurgeonsOr1: {
    src: `${PROCEDURE_IMAGE_DIR}/group-surgeons-or-1.jpg`,
    alt: "Surgical team performing a procedure in the operating room",
  },
  nursePreparing: {
    src: `${PROCEDURE_IMAGE_DIR}/nurse-preparing-operation.jpg`,
    alt: "Nurse and surgeon preparing for an operation",
  },
  seriousOperation: {
    src: `${PROCEDURE_IMAGE_DIR}/serious-operation-darkness.jpg`,
    alt: "Surgeons performing a focused operation in theatre",
  },
  surgeonTeamOr: {
    src: `${PROCEDURE_IMAGE_DIR}/surgeon-team-or.jpg`,
    alt: "Surgical team at work in the operating room",
  },
  surgeryOr: {
    src: `${PROCEDURE_IMAGE_DIR}/surgery-or.jpg`,
    alt: "Surgeons performing minimally invasive surgery in the operating room",
  },
  surgeryOr1: {
    src: `${PROCEDURE_IMAGE_DIR}/surgery-or-1.jpg`,
    alt: "Surgeons performing laparoscopic surgery in the operating room",
  },
  surgeryOr2: {
    src: `${PROCEDURE_IMAGE_DIR}/surgery-or-2.jpg`,
    alt: "Surgical team during a minimally invasive operation",
  },
  surgeryOr4: {
    src: `${PROCEDURE_IMAGE_DIR}/surgery-or-4.jpg`,
    alt: "Surgeons performing an operation in a hospital operating room",
  },
  surgeryTeamFocus: {
    src: `${PROCEDURE_IMAGE_DIR}/surgery-team-focus.jpg`,
    alt: "Surgeon team working together during an operation",
  },
  surgeryTheater: {
    src: `${PROCEDURE_IMAGE_DIR}/surgery-theater.jpg`,
    alt: "Surgeons performing colorectal surgery in a modern operating theatre",
  },
  surgeryTheater1: {
    src: `${PROCEDURE_IMAGE_DIR}/surgery-theater-1.jpg`,
    alt: "Surgical team in a hospital operating theatre",
  },
  surgeryTheater2: {
    src: `${PROCEDURE_IMAGE_DIR}/surgery-theater-2.jpg`,
    alt: "Surgeons performing an abdominal operation in theatre",
  },
  surgicalProcedure: {
    src: `${PROCEDURE_IMAGE_DIR}/surgical-procedure.jpg`,
    alt: "Doctor performing a surgical procedure",
  },
} as const satisfies Record<string, ProcedureImageAsset>;

type ProcedureImageKey = keyof typeof procedureImageAssets;

/** One unique image per procedure; Intuitive/da Vinci assets only where content mentions robotics */
const procedureImageBySlug: Record<ProcedureSnippetSlug, ProcedureImageKey> = {
  haemorrhoids: "seriousOperation",
  "anal-fissures": "doctorsPreparing",
  "anal-fistulas": "surgicalProcedure",
  "pilonidal-disease": "nursePreparing",
  "rectal-prolapse": "surgeryTheater2",
  "colorectal-cancer": "intuitiveSurgeonConsole",
  "inflammatory-bowel-disease": "doctorsSurgicalProcedure",
  "pouch-surgery": "daVinciConsoleOr",
  "diverticular-disease": "surgeryOr2",
  "inguinal-hernias": "intuitiveVisionCart",
  "femoral-hernias": "surgeryOr1",
  "umbilical-hernias": "surgeryTheater",
  "incisional-hernias": "surgeryTheater1",
  "diagnostic-colonoscopy": "surgeonTeamOr",
  "surveillance-colonoscopy": "groupSurgeonsOr1",
  "therapeutic-colonoscopy": "surgeryOr4",
  "flexible-sigmoidoscopy": "surgeryTeamFocus",
  "stoma-formation-and-reversal": "surgeryOr",
  appendicectomy: "surgeryOr1",
};

/** Per-procedure crop tuning inside card/hero masks */
const procedureImageObjectPosition: Partial<
  Record<ProcedureSnippetSlug, string>
> = {
  "anal-fistulas": "center 72%",
  "colorectal-cancer": "center 68%",
  "pouch-surgery": "center 58%",
  appendicectomy: "center 32%",
};

function toProcedureImage(
  asset: ProcedureImageAsset,
  slug: ProcedureSnippetSlug,
): ProcedureImage {
  return {
    src: asset.src,
    alt: asset.alt,
    copyrightNotice: asset.copyrightNotice,
    objectPosition:
      procedureImageObjectPosition[slug] ?? getImageObjectPosition(asset.src),
  };
}

export function getProcedureImage(slug: ProcedureSnippetSlug): ProcedureImage {
  const key = procedureImageBySlug[slug];
  return toProcedureImage(procedureImageAssets[key], slug);
}

export function isRoboticProcedure(slug: ProcedureSnippetSlug): boolean {
  return roboticProcedureSlugs.has(slug);
}

// Ensure Intuitive press images are never assigned to non-robotic procedures
for (const [slug, key] of Object.entries(procedureImageBySlug) as [
  ProcedureSnippetSlug,
  ProcedureImageKey,
][]) {
  const asset = procedureImageAssets[key];
  if ("intuitive" in asset && asset.intuitive && !roboticProcedureSlugs.has(slug)) {
    throw new Error(
      `Intuitive Surgical image "${key}" assigned to non-robotic procedure "${slug}"`,
    );
  }
}
