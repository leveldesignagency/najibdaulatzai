export type PatientFaq = {
  id: string;
  question: string;
  answer: readonly string[];
};

export const patientFaqs: PatientFaq[] = [
  {
    id: "gp-referral-private",
    question: "Do I need a GP referral to see Mr Daulatzai privately?",
    answer: [
      "A GP referral is not strictly required for a private consultation, though it is strongly recommended. A referral letter provides important background clinical information and ensures continuity of your care between your GP and specialist. If you would like to self-refer, please contact the secretary directly and we will be happy to assist.",
    ],
  },
  {
    id: "how-quickly-seen",
    question: "How quickly can I be seen?",
    answer: [
      "Private patients can typically be seen within one week. Please contact the secretary directly to check current availability.",
    ],
  },
  {
    id: "which-hospitals",
    question: "Which hospitals does Mr Daulatzai operate at?",
    answer: [
      "Mr Daulatzai performs surgery at Spire Bushey Hospital, HCA The Wellington Hospital in London, and HCA Golders Green Outpatients. His NHS practice is based at West Hertfordshire Teaching Hospitals NHS Trust, Watford General Hospital.",
    ],
  },
  {
    id: "private-insurance",
    question: "Does Mr Daulatzai accept private medical insurance?",
    answer: [
      "Yes. Mr Daulatzai is recognised by all major insurers including Bupa, AXA Health, Aviva, Vitality, WPA, and Healix. Please contact your insurer in advance to confirm your policy covers the proposed consultation and treatment, and to obtain an authorisation number before your appointment.",
    ],
  },
  {
    id: "self-funding",
    question: "What if I don't have private medical insurance?",
    answer: [
      "Self-funding patients are very welcome. Transparent pricing is available on request. Please contact the secretary for details of consultation and procedure fees.",
    ],
  },
  {
    id: "first-consultation",
    question: "What happens at my first consultation?",
    answer: [
      "Your first appointment will typically last 30 to 45 minutes. Mr Daulatzai will take a full history, review any relevant investigations, and examine you where appropriate. He will explain your diagnosis and all available treatment options clearly, and involve you fully in any decisions about your care. There is no obligation to proceed with any treatment at the initial consultation.",
    ],
  },
  {
    id: "colonoscopy-prep",
    question: "How do I prepare for a colonoscopy?",
    answer: [
      "You will receive detailed written instructions prior to your procedure. In general, you will be asked to follow a low-residue diet for one to two days beforehand and to take a bowel preparation solution to clear the bowel. You will need to arrange for someone to drive you home following the procedure if sedation is used. Full pre-procedure instructions will be provided by the clinical team.",
    ],
  },
  {
    id: "time-off-work",
    question: "How long will I need off work after surgery?",
    answer: [
      "Recovery times vary depending on the procedure. As a general guide:",
      "•  Minor procedures (haemorrhoid banding, anal procedures): one to three days.",
      "•  Robotic or laparoscopic bowel surgery: two to four weeks, depending on the nature of the operation and your occupation.",
      "•  Open surgery: four to six weeks.",
      "Mr Daulatzai will give you personalised guidance on expected recovery at your consultation and again before your procedure.",
    ],
  },
  {
    id: "stoma",
    question: "Will I need a stoma after bowel surgery?",
    answer: [
      "Not all bowel operations require a stoma. Where a stoma is a possibility, this will be discussed with you in detail before surgery. In many cases a stoma is temporary and can be reversed at a later date once healing is complete. Mr Daulatzai will always explain clearly whether a stoma is anticipated and what the plan will be.",
    ],
  },
  {
    id: "patient-reviews",
    question: "Where can I read patient reviews?",
    answer: [
      "You can read verified patient reviews on Doctify, Top Doctors, and iWantGreatCare using the links on our Testimonials page.",
    ],
  },
];

export const patientFaqMap = Object.fromEntries(
  patientFaqs.map((faq) => [faq.id, faq]),
) as Record<string, PatientFaq>;

/** Three relevant FAQs per procedure specialty page */
export const procedureSpecialtyFaqIds: Record<
  import("@/lib/procedures").ProcedureGuideSpecialtySlug,
  readonly string[]
> = {
  proctology: ["gp-referral-private", "first-consultation", "time-off-work"],
  colorectal: ["stoma", "time-off-work", "how-quickly-seen"],
  hernia: ["time-off-work", "private-insurance", "first-consultation"],
  endoscopy: ["colonoscopy-prep", "first-consultation", "how-quickly-seen"],
};

export function getFaqsByIds(ids: readonly string[]): PatientFaq[] {
  return ids
    .map((id) => patientFaqMap[id])
    .filter((faq): faq is PatientFaq => faq !== undefined);
}
