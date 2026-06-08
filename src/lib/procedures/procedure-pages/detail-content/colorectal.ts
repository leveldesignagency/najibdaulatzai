import type { ProcedureDetailSection } from "../types";

export const colorectalProcedureSections: Record<
  string,
  readonly ProcedureDetailSection[]
> = {
  "colorectal-cancer": [
    {
      heading: "Symptoms and when to seek help",
      paragraphs: [
        "Colorectal cancer may cause a change in bowel habit (persistent diarrhoea or constipation), rectal bleeding, abdominal pain or bloating, unexplained weight loss, tiredness from anaemia, or a feeling that the bowel does not empty completely. Many symptoms are non-specific, which is why investigation is important when they persist.",
        "You should seek prompt assessment for new rectal bleeding, a sustained change in bowel habit lasting three weeks or more, unexplained iron-deficiency anaemia, or symptoms suggestive of bowel obstruction. Early diagnosis improves treatment options and long-term outcomes.",
        "If you have been diagnosed with colorectal cancer, surgical management is planned within a multidisciplinary team (MDT) alongside oncology, radiology, and specialist nursing colleagues.",
      ],
    },
    {
      heading: "Surgical management and MDT care",
      paragraphs: [
        "Mr Daulatzai has specialist expertise in the surgical management of colorectal cancer, including robotic and laparoscopic resections of the colon and rectum. Operations are tailored to tumour site and stage and may include right or left hemicolectomy, sigmoid colectomy, anterior resection, low anterior resection, abdominoperineal resection (APR), or total/subtotal colectomy in selected cases.",
        "Robotic surgery offers superior visualisation in the pelvis, enhanced precision, reduced blood loss, and often faster recovery compared with open surgery, allowing any further treatment to begin sooner when required.",
        "Before surgery, staging investigations and MDT discussion ensure the recommended operation fits your overall treatment plan. I explain expected hospital stay, recovery milestones, stoma formation if needed, and coordination with oncology where adjuvant therapy is advised.",
      ],
    },
    {
      heading: "Recovery and follow-up",
      paragraphs: [
        "Recovery after colorectal cancer surgery depends on the procedure performed and your general health. Minimally invasive approaches typically support earlier mobilisation and shorter hospital stay. I provide structured advice on diet, stoma care if applicable, pain management, and return to activity.",
        "Long-term follow-up is coordinated with the MDT and may include surveillance imaging, colonoscopy, and oncology review. Clear communication throughout treatment helps you understand each stage of your pathway.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "If you have a colorectal cancer diagnosis or concerning symptoms requiring specialist review, timely assessment is essential. Appointments are available through NHS referral and private practice.",
        "Contact my team to arrange a consultation and discuss your personalised surgical and MDT treatment plan.",
      ],
    },
  ],
  "inflammatory-bowel-disease": [
    {
      heading: "Symptoms and when surgery may be needed",
      paragraphs: [
        "Inflammatory bowel disease (IBD), including Crohn's disease and ulcerative colitis, causes chronic inflammation of the digestive tract. Symptoms may include diarrhoea, rectal bleeding, abdominal pain, weight loss, fatigue, and extraintestinal manifestations. Medical therapy is the mainstay of treatment for most patients.",
        "Surgery is considered when disease is refractory to medication, when complications arise (stricture, abscess, fistula, perforation, haemorrhage, dysplasia or cancer), or in selected cases to improve quality of life. The timing of surgery is planned carefully with your gastroenterologist within an MDT framework.",
      ],
    },
    {
      heading: "Surgical options",
      paragraphs: [
        "Mr Daulatzai has specialist expertise in the surgical management of IBD, with advanced fellowship training at St Mark's Hospital London. Options include colectomy with ileal pouch-anal anastomosis (restorative proctocolectomy) for suitable patients with ulcerative colitis, colectomy with end ileostomy in urgent or selected settings, strictureplasty and bowel resection for Crohn's disease to preserve bowel length, and surgery for complications including abscess, fistula, and perforation.",
        "Minimally invasive and robotic techniques are used where appropriate. I explain staged procedures, temporary stoma if required, expected recovery, and long-term functional outcomes before surgery.",
        "Close collaboration with gastroenterology ensures surgical decisions are made with full understanding of your medical history and treatment goals.",
      ],
    },
    {
      heading: "Recovery and long-term care",
      paragraphs: [
        "Recovery after IBD surgery varies with the extent of resection and whether a stoma is formed. Specialist stoma nurses support appliance management and confidence during recovery. For pouch surgery, function develops over time and requires structured follow-up.",
        "Long-term surveillance and medical management continue in partnership with your gastroenterology team. My aim is to restore quality of life with a clear, supported pathway from consultation through to recovery.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "If you are considering surgery for IBD or have been advised to see a colorectal surgeon, specialist assessment clarifies options and timing. Appointments are available through NHS referral and private practice.",
        "Contact my team to arrange a consultation and discuss your personalised surgical plan.",
      ],
    },
  ],
  "pouch-surgery": [
    {
      heading: "Who may benefit from pouch surgery",
      paragraphs: [
        "Ileal pouch-anal anastomosis (IPAA, or J-pouch) is most commonly performed for ulcerative colitis or familial adenomatous polyposis (FAP) when removal of the colon and rectum is required but a permanent stoma is to be avoided. A pouch is fashioned from the small bowel and connected to the anal canal, allowing bowel continuity without a permanent bag.",
        "Suitability depends on anal sphincter function, previous treatments, urgency of surgery, and overall fitness. Assessment includes detailed discussion of expectations regarding frequency of bowel movements, continence, and quality of life after pouch formation.",
      ],
    },
    {
      heading: "The surgical pathway",
      paragraphs: [
        "Mr Daulatzai performs pouch surgery using robotic techniques where appropriate, with training at St Mark's Hospital London, a leading centre for pouch surgery and intestinal failure. Pouch formation is typically performed in two or three stages depending on clinical circumstances, often with a temporary ileostomy to protect the pouch while it heals.",
        "I guide you through each stage with clear, personalised advice: initial colectomy, pouch construction, and subsequent ileostomy reversal when conditions are appropriate. For patients with existing pouch complications, specialist evaluation and revision options are discussed in detail.",
        "Expected recovery between stages, diet progression, and follow-up arrangements are explained before each operation so you can plan with confidence.",
      ],
    },
    {
      heading: "Recovery and pouch function",
      paragraphs: [
        "Pouch function evolves over months. Early recovery focuses on healing and stoma management if a temporary ileostomy is in place. I provide structured follow-up to monitor adaptation, address pouchitis or other concerns, and coordinate care with specialist nursing teams.",
        "Realistic expectations about bowel frequency, dietary adjustment, and long-term surveillance are discussed from the outset.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "Pouch surgery is a major but life-changing option for selected patients with ulcerative colitis or FAP. Specialist assessment is essential before proceeding. Appointments are available through NHS referral and private practice.",
        "Contact my team to arrange a consultation and discuss whether pouch surgery is appropriate for you.",
      ],
    },
  ],
  "diverticular-disease": [
    {
      heading: "Symptoms and when to seek help",
      paragraphs: [
        "Many people with diverticulosis (pockets in the colon wall) have no symptoms. Diverticulitis occurs when these pouches become inflamed or infected, causing left-sided abdominal pain (often lower left), fever, change in bowel habit, and sometimes nausea. Complicated disease may present with abscess, perforation, fistula, obstruction, or persistent bleeding.",
        "Seek urgent review for severe abdominal pain with fever, inability to tolerate fluids, or symptoms suggesting obstruction. Elective specialist assessment is appropriate for recurrent diverticulitis, persistent symptoms despite treatment, or complications identified on imaging.",
      ],
    },
    {
      heading: "Medical and surgical management",
      paragraphs: [
        "Uncomplicated acute diverticulitis is often managed with antibiotics and supportive care in the first instance. Surgery is considered for recurrent episodes affecting quality of life, complicated disease (abscess not suitable for drainage alone, fistula, stricture), or when malignancy must be excluded.",
        "Mr Daulatzai manages the full spectrum of diverticular disease. Where surgery is required, robotic or laparoscopic sigmoid colectomy is performed wherever possible, offering significantly faster recovery than open surgery. I discuss timing of surgery, stoma formation if needed, and restoration of bowel continuity.",
      ],
    },
    {
      heading: "Recovery and follow-up",
      paragraphs: [
        "Recovery after elective minimally invasive colectomy typically involves a short hospital stay and gradual return to normal diet and activity. I provide advice on wound care, diet progression, and when to resume work and exercise.",
        "Follow-up ensures healing is progressing and addresses any concerns during recovery. The goal is durable symptom relief with the least disruptive surgical pathway for your circumstances.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "If you have recurrent diverticulitis or complicated diverticular disease, specialist assessment clarifies whether surgery is appropriate and when. Appointments are available through NHS referral and private practice.",
        "Contact my team to arrange a consultation and personalised treatment plan.",
      ],
    },
  ],
};
