export const aboutBioParagraphs = [
  "I am a high-volume robotic surgeon and Lead for Colorectal Surgery at West Hertfordshire Teaching Hospitals NHS Trust, based at Watford General Hospital. I see and operate on private patients at Spire Bushey Hospital, HCA The Wellington Hospital and Cleveland Clinic London.",
  "Most of my major surgery is robotic. I am proficient and fully accredited on both the da Vinci and CMR Versius robotic platforms, and use robotic surgery for bowel and rectal cancer, diverticular disease, inflammatory bowel disease and hernia repair. Smaller incisions usually mean less pain, a shorter stay and a quicker return to normal life. All cancer and complex cases are reviewed at a multidisciplinary team (MDT) meeting with oncologists, radiologists, pathologists and gastroenterologists.",
  "I also treat common conditions that affect quality of life: haemorrhoids, anal fissures and fistulas, pilonidal disease and lumps such as lipomas and cysts, and I repair hernias using robotic or keyhole techniques. I also see patients with symptoms such as rectal bleeding, a change in bowel habit, abdominal pain, and anal pain or itching. As an accredited endoscopist, I can arrange prompt diagnostic and therapeutic colonoscopy where needed.",
  "In the NHS I lead the colorectal virtual hospital, which lets suitable patients recover safely at home after bowel surgery and has cut the average hospital stay by three days. I also introduced prehabilitation to the trust, so patients are fitter going into surgery, and I have published widely, including on robotic surgery and enhanced recovery after bowel surgery. I am also the trust's lead for the National Emergency Laparotomy Audit (NELA).",
  "I qualified from University College London and completed higher surgical training in the UK. I then held fellowships at St Mark's Hospital, the national bowel hospital, in complex colorectal cancer, intestinal failure and inflammatory bowel disease, and at Frimley Park Hospital in advanced laparoscopic and robotic colorectal surgery. I hold a Master's degree in Surgical Sciences from UCL and an MD (Research) degree from Imperial College London.",
] as const;

export const membershipOrganisations = [
  {
    name: "Royal College of Surgeons of England",
    shortName: "RCS England",
    logo: "/Logos/memberships/rcs.svg",
    width: 251,
    height: 98,
  },
  {
    name: "Association of Coloproctology of Great Britain and Ireland",
    shortName: "ACPGBI",
    logo: "/Logos/memberships/acpgbi.png",
    width: 325,
    height: 85,
  },
] as const;

export const credentialInstitutions = [
  {
    name: "University College London",
    shortName: "UCL",
    logo: "/Logos/credentials/ucl.svg",
    width: 280,
    height: 88,
  },
  {
    name: "Imperial College London",
    shortName: "Imperial College London",
    logo: "/imperiallogo.svg",
    width: 380,
    height: 80,
  },
  {
    name: "St Mark's Hospital",
    shortName: "St Mark's Hospital",
    logo: "/st-marks.jpg",
    width: 767,
    height: 767,
  },
  {
    name: "Royal College of Surgeons of England",
    shortName: "Royal College of Surgeons",
    logo: "/Logos/credentials/rcs.svg",
    width: 251,
    height: 98,
  },
] as const;

export const valuesIntro =
  "I am a consultant colorectal and general surgeon with a straightforward aim: to offer each patient clear advice, careful surgery, and support through recovery. Whether your care is NHS or private, my focus is on listening properly, explaining your options in plain language, and using robotic and minimally invasive techniques where they will benefit you most.";

export const aboutValues = [
  {
    title: "Patient-Centred Care",
    description:
      "I take time to understand your symptoms, concerns, and goals. Every consultation includes honest discussion of investigation and treatment options, so you can make informed decisions with confidence.",
  },
  {
    title: "Excellence in Robotic & Minimally Invasive Surgery",
    description:
      "I am multi-platform trained on the da Vinci Xi and da Vinci 5 systems and use advanced laparoscopic and robotic techniques routinely for colorectal and general surgical procedures, aiming for precise surgery and a faster return to normal life.",
  },
  {
    title: "Integrity & Transparency",
    description:
      "I explain diagnoses, risks, and likely outcomes clearly. There are no hidden steps in your pathway — you will know what to expect before, during, and after surgery.",
  },
  {
    title: "Team-Based Care",
    description:
      "Complex colorectal care works best as a team effort. I collaborate closely with gastroenterologists, oncologists, radiologists, anaesthetists, and specialist nurses across NHS and private pathways.",
  },
  {
    title: "Commitment to Recovery",
    description:
      "Surgery is only part of your journey. I plan operations with recovery in mind and provide structured follow-up, including stoma nurse support and coordinated cancer care where needed.",
  },
] as const;

export const selfPayFees = {
  newConsultation: 250,
  followUp: 180,
} as const;

export const selfPayLine =
  `Self-pay patients are welcome. New consultation £${selfPayFees.newConsultation}; follow-up £${selfPayFees.followUp}.`;

export const insuranceProviders = [
  {
    name: "Bupa",
    logo: "/images/images/__bupa.png",
    width: 120,
    height: 120,
  },
  {
    name: "Alliance Healthcare",
    logo: "/images/images/alliance-for-web-725x500.png",
    width: 180,
    height: 124,
  },
  {
    name: "WPA",
    logo: "/images/images/__wpa.png",
    width: 120,
    height: 120,
  },
  {
    name: "Aviva",
    logo: "/images/images/__aviva.png",
    width: 120,
    height: 120,
  },
  {
    name: "Vitality",
    logo: "/images/images/__vitality.png",
    width: 120,
    height: 120,
  },
  {
    name: "Healix",
    logo: "/images/images/__healix.png",
    width: 120,
    height: 120,
  },
  {
    name: "AXA",
    logo: "/images/images/__axa.png",
    width: 120,
    height: 120,
  },
] as const;
