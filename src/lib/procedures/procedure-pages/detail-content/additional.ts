import type { ProcedureDetailSection } from "../types";

export const additionalProcedureSections: Record<
  string,
  readonly ProcedureDetailSection[]
> = {
  "stoma-formation-and-reversal": [
    {
      heading: "When stoma surgery is needed",
      paragraphs: [
        "A stoma is a surgically created opening on the abdominal wall that diverts bowel contents into an external bag. It may be formed during emergency surgery for obstruction, perforation, or severe infection, or as a planned part of colorectal resection for cancer, inflammatory bowel disease, or complex diverticular disease.",
        "Temporary stomas (most commonly ileostomy) protect a downstream join while it heals. Reversal surgery restores bowel continuity once healing is complete and clinical conditions are appropriate. Permanent stomas are required when the rectum or anal canal cannot be preserved safely.",
      ],
    },
    {
      heading: "Stoma formation and specialist support",
      paragraphs: [
        "Mr Daulatzai performs both ileostomy and colostomy formation as part of planned and emergency colorectal procedures. Before surgery, stoma site marking and discussion with specialist stoma nurses help ensure practical, comfortable appliance fit and confidence with stoma care from the early post-operative period.",
        "I explain expected stoma function, appliance management, diet, and lifestyle adjustment. Close liaison with stoma care teams continues through recovery.",
      ],
    },
    {
      heading: "Stoma reversal",
      paragraphs: [
        "Reversal is considered when the original indication has resolved, nutritional status is adequate, and imaging or examination confirms it is safe to restore continuity. I explain timing, the reversal operation, expected recovery, and realistic expectations regarding bowel function after reversal.",
        "Not all temporary stomas can or should be reversed; suitability is assessed individually with clear discussion of benefits and risks.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "If you are facing stoma surgery or considering reversal, specialist assessment and nurse support are essential. Appointments are available through NHS referral and private practice across London and Hertfordshire.",
        "Contact my team to discuss your stoma pathway and planned care.",
      ],
    },
  ],
  appendicectomy: [
    {
      heading: "Symptoms and when to seek help",
      paragraphs: [
        "Acute appendicitis typically presents with abdominal pain that often begins near the umbilicus and migrates to the lower right abdomen, accompanied by nausea, reduced appetite, and sometimes fever. Pain may worsen with movement or coughing.",
        "Appendicitis requires prompt medical assessment. Delay increases the risk of perforation and abscess formation. Seek urgent review if you have worsening abdominal pain with fever, vomiting, or inability to tolerate fluids.",
      ],
    },
    {
      heading: "Surgical treatment",
      paragraphs: [
        "Appendicectomy is the surgical removal of the appendix, most commonly performed as an emergency for acute appendicitis. Mr Daulatzai performs appendicectomy using robotic and laparoscopic minimally invasive approaches, resulting in less post-operative pain, a shorter hospital stay, and faster return to normal activities compared with open surgery.",
        "Diagnosis is confirmed through clinical assessment and often imaging such as ultrasound or CT. When surgery is indicated, minimally invasive removal allows smaller incisions and quicker recovery. I discuss the operation, hospital stay, and return to work or study before proceeding where time allows in urgent settings.",
      ],
    },
    {
      heading: "Recovery and follow-up",
      paragraphs: [
        "Most patients after laparoscopic appendicectomy return home within 24 hours and resume normal activities within one to two weeks, depending on the severity of infection and type of work. I provide guidance on wound care, pain management, and signs of complication to watch for at home.",
        "If the appendix has perforated, recovery may take longer and antibiotics may continue after discharge. Follow-up ensures complete recovery.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "Suspected appendicitis requires urgent assessment. For planned or follow-up surgical review after appendicitis, appointments are available through NHS referral and private practice.",
        "Contact my team for emergency or elective surgical assessment as appropriate to your situation.",
      ],
    },
  ],
};
