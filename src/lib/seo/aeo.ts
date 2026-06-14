/**
 * Answer Engine Optimization (AEO) content, concise Q&A pairs for FAQ schema,
 * voice search, and AI answer engines. Complements patient-faq-content.ts with
 * broader discovery queries.
 */
export type AeoFaqItem = {
  id: string;
  question: string;
  answer: string;
  topics: readonly string[];
};

export const homepageAeoFaqs: AeoFaqItem[] = [
  {
    id: "who-is-najib-daulatzai",
    question: "Who is Mr Najib Daulatzai?",
    answer:
      "Mr Najib Daulatzai is a consultant colorectal and general surgeon practising in London and Hertfordshire. He is multi-platform trained on the da Vinci Xi and da Vinci 5 robotic systems and holds an NHS consultant post at West Hertfordshire Teaching Hospitals NHS Trust. Private consultations are at Spire Bushey Hospital, HCA The Wellington Hospital, and HCA Golders Green Outpatients.",
    topics: ["surgeon", "credentials", "locations"],
  },
  {
    id: "what-does-colorectal-surgeon-do",
    question: "What does a colorectal surgeon do?",
    answer:
      "A colorectal surgeon treats conditions of the colon, rectum, and anus, including bowel cancer, inflammatory bowel disease, diverticular disease, haemorrhoids, anal fissures, and rectal prolapse. They also perform colonoscopy, hernia repair, and minimally invasive or robotic bowel surgery.",
    topics: ["specialty", "procedures"],
  },
  {
    id: "robotic-vs-laparoscopic",
    question: "What is the difference between robotic and laparoscopic colorectal surgery?",
    answer:
      "Both are minimally invasive techniques using small incisions. Robotic surgery uses the da Vinci surgical system, giving enhanced 3D vision and precise instrument control, particularly valuable for complex pelvic and rectal procedures. Laparoscopic surgery uses hand-held instruments. Mr Daulatzai offers both, selecting the best approach for each patient.",
    topics: ["robotic surgery", "minimally invasive"],
  },
  {
    id: "how-to-book",
    question: "How do I book a consultation with Mr Najib Daulatzai?",
    answer:
      "Contact the practice by phone on +44 7733 897972 or email info@ndaulatzai.com. Private patients can typically be seen within one week. Correspondence address: Mr Najib Daulatzai, Spire Bushey Hospital, Heathbourne Road, Bushey WD23 1RD.",
    topics: ["booking", "contact"],
  },
  {
    id: "insurance-accepted",
    question: "Which private medical insurers does Mr Najib Daulatzai accept?",
    answer:
      "Mr Najib Daulatzai is recognised by all major UK insurers including Bupa, AXA Health, Aviva, Vitality, WPA, and Healix. Self-funding patients are also welcome. Contact your insurer for authorisation before your appointment.",
    topics: ["insurance", "private care"],
  },
  {
    id: "nhs-private-both",
    question: "Does Mr Najib Daulatzai see NHS and private patients?",
    answer:
      "Yes. Mr Najib Daulatzai holds an NHS consultant post at West Hertfordshire Teaching Hospitals NHS Trust in Watford and also sees private patients at Spire Bushey, HCA Wellington, and HCA Golders Green.",
    topics: ["NHS", "private care"],
  },
  {
    id: "languages-spoken",
    question: "Which languages does Mr Najib Daulatzai speak?",
    answer:
      "Mr Najib Daulatzai consults in English, Pashto, and Farsi, and welcomes patients from all backgrounds.",
    topics: ["languages", "consultation"],
  },
  {
    id: "colorectal-surgeon-near-watford",
    question: "Who is the colorectal surgeon at Watford General Hospital?",
    answer:
      "Mr Najib Daulatzai is a consultant colorectal and general surgeon at West Hertfordshire Teaching Hospitals NHS Trust, based at Watford General Hospital (Vicarage Road, Watford WD18 0HB). NHS referrals are made via e-RS to the trust colorectal service.",
    topics: ["NHS", "Watford", "local"],
  },
];

export const gpReferralAeoFaqs: AeoFaqItem[] = [
  {
    id: "ers-referral",
    question: "How do GPs refer patients to Mr Najib Daulatzai on the NHS?",
    answer:
      "NHS referrals are made via the NHS e-Referral Service (e-RS) to West Hertfordshire Teaching Hospitals NHS Trust. Referrals for colorectal, general surgical, and endoscopic conditions are accepted.",
    topics: ["GP referral", "NHS", "e-RS"],
  },
  {
    id: "private-referral-route",
    question: "How do GPs refer patients privately to Mr Najib Daulatzai?",
    answer:
      "Private referrals can be sent directly to the practice secretary with a referral letter outlining the clinical indication, relevant history, and investigations. The secretary will arrange an appointment at the patient's preferred private hospital.",
    topics: ["GP referral", "private care"],
  },
  {
    id: "conditions-accepted",
    question: "Which conditions can be referred to Mr Najib Daulatzai?",
    answer:
      "Referrals are accepted for colorectal conditions (bowel cancer, IBD, diverticular disease, rectal prolapse), proctological conditions (haemorrhoids, fissures, fistulas, pilonidal disease), hernias, and endoscopic procedures (colonoscopy, sigmoidoscopy). Emergency and elective referrals are both accepted.",
    topics: ["referral", "conditions"],
  },
];

export const roboticSurgeryAeoFaqs: AeoFaqItem[] = [
  {
    id: "what-is-robotic-colorectal",
    question: "What is robotic colorectal surgery?",
    answer:
      "Robotic colorectal surgery uses the da Vinci surgical system to perform bowel and rectal operations through small incisions. The surgeon controls robotic instruments from a console, offering magnified 3D vision and precise movement, especially beneficial for rectal cancer, low pelvic dissection, and complex resections.",
    topics: ["robotic surgery", "da Vinci"],
  },
  {
    id: "benefits-robotic",
    question: "What are the benefits of robotic bowel surgery?",
    answer:
      "Robotic surgery may offer shorter hospital stays, less blood loss, and faster recovery compared with open surgery for suitable patients. It is particularly advantageous in the narrow pelvis where precision is critical, such as rectal cancer and complex colorectal resections.",
    topics: ["robotic surgery", "benefits"],
  },
  {
    id: "da-vinci-surgeon-london",
    question: "Where can I find a da Vinci colorectal surgeon in London?",
    answer:
      "Mr Najib Daulatzai performs robotic colorectal surgery at Spire Bushey Hospital, HCA The Wellington Hospital, and within his NHS practice at Watford General Hospital. Contact the practice to discuss whether robotic surgery is appropriate for your condition.",
    topics: ["robotic surgery", "London", "locations"],
  },
];

export const conditionAeoFaqs: AeoFaqItem[] = [
  {
    id: "when-see-colorectal-surgeon",
    question: "When should I see a colorectal surgeon?",
    answer:
      "You should seek colorectal assessment for persistent rectal bleeding, a change in bowel habit, unexplained abdominal pain, suspected bowel cancer, inflammatory bowel disease needing surgery, recurrent diverticular disease, or proctological symptoms such as painful piles, anal fissure, or fistula. GP or specialist referral is recommended for urgent symptoms.",
    topics: ["symptoms", "referral"],
  },
  {
    id: "private-colonoscopy-london",
    question: "Can I get a private colonoscopy in London with Mr Daulatzai?",
    answer:
      "Yes. Mr Najib Daulatzai performs diagnostic, surveillance, and therapeutic colonoscopy privately at Spire Bushey Hospital, HCA The Wellington Hospital, and HCA Golders Green Outpatients. Contact the practice on +44 7733 897972 or info@ndaulatzai.com to arrange assessment.",
    topics: ["colonoscopy", "private care", "London"],
  },
  {
    id: "haemorrhoids-treatment-options",
    question: "What treatments are available for haemorrhoids (piles)?",
    answer:
      "Haemorrhoid treatment ranges from dietary advice and topical care to office procedures such as rubber band ligation and sclerotherapy, and surgical options including haemorrhoidectomy for more severe or recurrent disease. Mr Daulatzai assesses each patient individually to recommend the most appropriate treatment.",
    topics: ["haemorrhoids", "proctology"],
  },
  {
    id: "hernia-repair-options",
    question: "Does Mr Daulatzai perform laparoscopic and robotic hernia repair?",
    answer:
      "Yes. Mr Daulatzai offers open, laparoscopic, and robotic hernia repair for inguinal, femoral, umbilical, and incisional hernias, tailoring the approach to hernia type, patient fitness, and previous surgery.",
    topics: ["hernia", "robotic surgery"],
  },
  {
    id: "bowel-cancer-surgery-recovery",
    question: "How long is recovery after colorectal cancer surgery?",
    answer:
      "Recovery depends on the operation performed and whether it is open, laparoscopic, or robotic. Many minimally invasive bowel resections allow hospital discharge within a few days, with return to normal activities over several weeks. Mr Daulatzai explains expected recovery timelines during your pre-operative consultation.",
    topics: ["bowel cancer", "recovery"],
  },
];

export const testimonialsAeoFaqs: AeoFaqItem[] = [
  {
    id: "patient-reviews-platforms",
    question: "Where can I read reviews of Mr Najib Daulatzai?",
    answer:
      "Verified patient reviews for Mr Najib Daulatzai are published on Doctify, Top Doctors, and iWantGreatCare. Selected reviews are also shown on the Testimonials page at ndsurgeon.com/testimonials.",
    topics: ["reviews", "testimonials"],
  },
  {
    id: "surgeon-rating",
    question: "How are Mr Najib Daulatzai's patient ratings?",
    answer:
      "Mr Najib Daulatzai is rated 5 stars by verified patients across Doctify, Top Doctors, and iWantGreatCare. Read full reviews on those platforms or visit ndsurgeon.com/testimonials.",
    topics: ["reviews", "rating"],
  },
];

/** Combined AEO FAQ set for global JSON-LD (deduplicated by id) */
export function getAllAeoFaqs(): AeoFaqItem[] {
  const all = [
    ...homepageAeoFaqs,
    ...gpReferralAeoFaqs,
    ...roboticSurgeryAeoFaqs,
    ...conditionAeoFaqs,
    ...testimonialsAeoFaqs,
  ];
  const seen = new Set<string>();
  return all.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

export function aeoFaqsToSchema(mainEntity: AeoFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mainEntity.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
