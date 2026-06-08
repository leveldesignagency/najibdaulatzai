import type { ProcedureDetailSection } from "../types";

export const endoscopyProcedureSections: Record<
  string,
  readonly ProcedureDetailSection[]
> = {
  "diagnostic-colonoscopy": [
    {
      heading: "When a diagnostic colonoscopy is recommended",
      paragraphs: [
        "Diagnostic colonoscopy is the most accurate investigation for evaluating the lining of the large bowel. It is recommended for persistent rectal bleeding, a sustained change in bowel habit, unexplained abdominal pain, iron-deficiency anaemia, positive faecal immunochemical test (FIT), or to investigate abnormalities seen on imaging.",
        "Mr Daulatzai is an accredited endoscopist and performs colonoscopies in a comfortable setting. The procedure is carried out under sedation so you are relaxed throughout. Results and next steps are discussed with you on the same day where possible.",
      ],
    },
    {
      heading: "Preparation and what to expect",
      paragraphs: [
        "Thorough bowel preparation is essential for a high-quality examination. You will receive clear instructions on dietary modification and laxatives before your appointment. Good preparation improves detection of polyps and small lesions and reduces the need for repeat examinations.",
        "On the day, nursing staff guide you through admission and consent. I review your medical history, explain the procedure again, and answer questions before sedation and examination begin. Suspicious areas can be biopsied during the procedure for laboratory analysis.",
        "You must arrange for a responsible adult to escort you home after sedation and avoid driving, signing legal documents, or operating machinery for 24 hours.",
      ],
    },
    {
      heading: "After your colonoscopy",
      paragraphs: [
        "You receive a summary of findings and preliminary advice before discharge. If biopsies are taken, results are reviewed when available and follow-up arranged if further treatment or surveillance is needed.",
        "Serious complications are uncommon but include bleeding or perforation; I discuss these risks before the procedure. Most patients feel back to normal within 24 hours aside from mild bloating or wind.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "If you have symptoms requiring bowel investigation, specialist assessment ensures the right test at the right time. Appointments are available through NHS referral and private practice across London and Hertfordshire.",
        "Contact my team to arrange a consultation and colonoscopy booking.",
      ],
    },
  ],
  "surveillance-colonoscopy": [
    {
      heading: "Who needs surveillance colonoscopy",
      paragraphs: [
        "Surveillance colonoscopy is recommended for patients at increased risk of colorectal cancer or advanced polyps. This includes personal history of polyps or colorectal cancer, certain family histories, longstanding inflammatory bowel disease involving the colon, and some inherited conditions.",
        "Mr Daulatzai provides personalised surveillance programmes tailored to your individual risk profile, in line with national guidelines. Continuity of care with the same consultant endoscopist ensures consistency and thorough comparison of findings over time.",
      ],
    },
    {
      heading: "Surveillance intervals and findings",
      paragraphs: [
        "The interval between colonoscopies depends on polyp type, number, size, histology, completeness of previous examination, and family history. I explain the rationale for each recommended interval and adjust the plan if new findings arise.",
        "When polyps or suspicious areas are identified, treatment or closer follow-up is arranged without delay. High-quality bowel preparation remains essential for effective surveillance.",
      ],
    },
    {
      heading: "Preparation and aftercare",
      paragraphs: [
        "You receive the same detailed preparation instructions as for diagnostic colonoscopy. Sedation is available for comfort. Findings are documented clearly and shared with you and your GP to maintain continuity of care across your surveillance programme.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "If you are due for surveillance colonoscopy or unsure of your follow-up interval, specialist review ensures appropriate timing. Appointments are available through NHS referral and private practice.",
        "Contact my team to arrange surveillance within a structured, guideline-based programme.",
      ],
    },
  ],
  "therapeutic-colonoscopy": [
    {
      heading: "What can be treated during colonoscopy",
      paragraphs: [
        "Therapeutic colonoscopy allows treatment at the time of examination, most commonly removal of bowel polyps (polypectomy). Treating polyps when they are found reduces the need for a separate procedure and lowers the long-term risk of colorectal cancer.",
        "Mr Daulatzai is experienced in therapeutic techniques including standard snare polypectomy and, for larger lesions, endoscopic mucosal resection (EMR) where appropriate. Technique is selected based on polyp size, shape, and location to maximise complete removal safely.",
      ],
    },
    {
      heading: "Procedure and recovery",
      paragraphs: [
        "Therapeutic procedures are performed under sedation with the same bowel preparation as diagnostic colonoscopy. I discuss findings and any treatment performed with you in full on the same day, including histology results when biopsies or removed tissue are sent for analysis.",
        "After polypectomy, you may be advised to avoid certain medications temporarily and to watch for signs of bleeding or pain. Most patients recover quickly; I provide clear aftercare instructions and arrange follow-up surveillance based on polyp pathology.",
      ],
    },
    {
      heading: "Risks and follow-up",
      paragraphs: [
        "Polypectomy carries a small risk of bleeding or perforation, which I discuss before the procedure. Post-polypectomy surveillance intervals depend on the number, size, and type of polyps removed, in line with national guidance.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "If you have polyps requiring removal or have been advised to undergo therapeutic colonoscopy, specialist care ensures safe, complete treatment. Appointments are available through NHS referral and private practice.",
        "Contact my team to arrange a consultation and procedure.",
      ],
    },
  ],
  "flexible-sigmoidoscopy": [
    {
      heading: "When flexible sigmoidoscopy is used",
      paragraphs: [
        "Flexible sigmoidoscopy examines the rectum and sigmoid colon, the lower part of the large bowel. It is used to investigate rectal bleeding, a change in bowel habit localised to the lower bowel, or as part of bowel cancer screening in selected pathways.",
        "The procedure is generally well tolerated without sedation, though sedation is available if you prefer. It may be used as a first-line investigation before full colonoscopy, or when symptoms and clinical findings suggest the problem lies in the lower bowel.",
      ],
    },
    {
      heading: "What to expect",
      paragraphs: [
        "Preparation is simpler than for full colonoscopy and typically involves an enema or limited bowel preparation on the day. The examination takes a shorter time than colonoscopy and usually allows return to normal activity the same day.",
        "If the examination identifies a condition requiring evaluation of the entire colon, such as multiple polyps or unexplained findings, colonoscopy may be arranged. I advise on the most suitable investigation based on your symptoms and clinical assessment.",
      ],
    },
    {
      heading: "After the procedure",
      paragraphs: [
        "Findings are discussed with you immediately after the examination. Biopsies can be taken if needed. Follow-up depends on results and may include surveillance or further investigation.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "If you have lower bowel symptoms requiring investigation, flexible sigmoidoscopy may be an appropriate first step. Appointments are available through NHS referral and private practice.",
        "Contact my team to arrange a consultation and discuss the most suitable investigation for you.",
      ],
    },
  ],
};
