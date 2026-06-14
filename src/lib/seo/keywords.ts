/** Core brand and entity keywords */
export const brandKeywords = [
  "Mr Najib Daulatzai",
  "Najib Daulatzai",
  "N Daulatzai",
  "ndsurgeon",
  "ndsurgeon.com",
] as const;

/** Geographic and local SEO keywords */
export const geoKeywords = [
  "colorectal surgeon London",
  "colorectal surgeon Hertfordshire",
  "private colorectal surgeon London",
  "private colorectal surgeon Hertfordshire",
  "general surgeon London",
  "general surgeon Hertfordshire",
  "colorectal surgeon Watford",
  "colorectal surgeon Bushey",
  "colorectal surgeon Harrow",
  "colorectal surgeon Golders Green",
  "colorectal surgeon North West London",
  "colorectal surgeon North London",
  "NHS colorectal surgeon Watford",
  "NHS colorectal surgeon Hertfordshire",
  "Spire Bushey Hospital surgeon",
  "Spire Bushey colorectal surgeon",
  "HCA Wellington Hospital surgeon",
  "HCA Wellington colorectal surgeon",
  "HCA Golders Green surgeon",
  "Watford General Hospital colorectal surgeon",
  "West Hertfordshire Teaching Hospitals surgeon",
] as const;

/** Specialty and procedure keywords */
export const specialtyKeywords = [
  "colorectal surgery",
  "general surgery",
  "proctology",
  "proctologist London",
  "bowel surgeon London",
  "rectal surgeon London",
  "colon surgeon London",
  "hernia surgeon London",
  "endoscopy London",
  "colonoscopy London",
  "robotic colorectal surgery",
  "robotic bowel surgery",
  "da Vinci colorectal surgeon",
  "minimally invasive colorectal surgery",
  "laparoscopic colorectal surgery",
  "keyhole bowel surgery",
  "robotic hernia repair",
  "laparoscopic hernia repair",
] as const;

/** Condition-specific long-tail keywords */
export const conditionKeywords = [
  "haemorrhoids treatment London",
  "piles treatment London",
  "anal fissure surgeon London",
  "anal fistula surgery London",
  "pilonidal disease surgery London",
  "rectal prolapse surgery London",
  "colorectal cancer surgery London",
  "bowel cancer surgeon London",
  "rectal cancer surgery London",
  "Crohn's disease surgery London",
  "ulcerative colitis surgery London",
  "IBD surgeon London",
  "J-pouch surgery London",
  "ileal pouch surgery London",
  "diverticular disease surgery London",
  "diverticulitis surgery London",
  "inguinal hernia repair London",
  "femoral hernia repair London",
  "umbilical hernia repair London",
  "incisional hernia repair London",
  "abdominal wall reconstruction London",
  "diagnostic colonoscopy London",
  "private colonoscopy London",
  "polypectomy London",
  "flexible sigmoidoscopy London",
  "stoma reversal London",
  "appendicectomy London",
  "appendix surgery London",
] as const;

/** Private care, insurance, and referrer keywords */
export const privateCareKeywords = [
  "private colorectal consultation London",
  "self-pay colorectal surgeon",
  "Bupa colorectal surgeon",
  "AXA colorectal surgeon",
  "Aviva colorectal surgeon",
  "Vitality colorectal surgeon",
  "WPA colorectal surgeon",
  "Healix colorectal surgeon",
  "GP referral colorectal surgeon",
  "e-RS colorectal referral",
  "NHS e-Referral colorectal",
  "private surgical consultation Hertfordshire",
] as const;

/** AEO / voice-search / AI query phrases */
export const aeoQueryKeywords = [
  "who is the best colorectal surgeon in London",
  "colorectal surgeon near me London",
  "colorectal surgeon near me Hertfordshire",
  "colorectal surgeon Watford",
  "private colorectal surgeon Bushey",
  "robotic colorectal surgeon London",
  "da Vinci colorectal surgeon Hertfordshire",
  "how to book a private colorectal surgeon",
  "do I need a GP referral for private surgery",
  "what is robotic colorectal surgery",
  "private colonoscopy London",
  "piles treatment London",
  "hernia surgeon London private",
  "how long is recovery after bowel surgery",
  "where does Mr Daulatzai operate",
  "Mr Najib Daulatzai reviews",
  "colorectal surgeon Doctify London",
] as const;

/** Homepage, broadest keyword set */
export const homeKeywords = [
  ...brandKeywords,
  ...geoKeywords,
  ...specialtyKeywords,
  ...conditionKeywords.slice(0, 12),
  ...privateCareKeywords.slice(0, 6),
  ...aeoQueryKeywords.slice(0, 4),
] as const;

/** Page-specific keyword bundles */
export const pageKeywords = {
  about: [...brandKeywords, ...geoKeywords.slice(0, 8), "consultant colorectal surgeon", "fellowship trained colorectal surgeon"],
  procedures: [...specialtyKeywords, ...conditionKeywords],
  roboticSurgery: [
    ...brandKeywords,
    "robotic colorectal surgery London",
    "da Vinci surgeon London",
    "da Vinci colorectal surgery",
    "robotic bowel resection",
    "robotic rectal cancer surgery",
    "robotic pelvic surgery",
    "Intuitive da Vinci surgeon",
    ...geoKeywords.slice(0, 6),
  ],
  testimonials: [...brandKeywords, "colorectal surgeon reviews", "Doctify colorectal surgeon", "Top Doctors colorectal surgeon", ...geoKeywords.slice(0, 4)],
  research: [...brandKeywords, "colorectal surgery research", "colorectal publications", "surgical research Watford"],
  contact: [...brandKeywords, "book colorectal surgeon", "private consultation London", ...geoKeywords.slice(0, 10)],
  gpReferrals: [...brandKeywords, "GP referral colorectal", "e-RS referral", "NHS colorectal referral Watford", "private referral secretary"],
  patientFaq: [...brandKeywords, ...privateCareKeywords, ...aeoQueryKeywords],
  blog: [...brandKeywords, ...specialtyKeywords, "colorectal health articles", "patient information bowel surgery"],
  privacy: [...brandKeywords, "privacy policy", "cookie policy"],
} as const;
