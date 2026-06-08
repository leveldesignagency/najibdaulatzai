import { getProcedureImage } from "../procedure-images";
import type { ProcedureDetailPage } from "./types";

const haemorrhoidsImage = getProcedureImage("haemorrhoids");

export const haemorrhoidsPage: ProcedureDetailPage = {
  slug: "haemorrhoids",
  specialtySlug: "proctology",
  title: "Haemorrhoids",
  navLabel: "Haemorrhoids",
  metaTitle: "Haemorrhoids Treatment London & Hertfordshire | Mr Najib Daulatzai",
  metaDescription:
    "Expert haemorrhoids (piles) treatment with Mr Najib Daulatzai: banding, sclerotherapy, and surgery. Private and NHS care in London and Hertfordshire.",
  heroImage: haemorrhoidsImage.src,
  heroImageAlt: haemorrhoidsImage.alt,
  heroImageCopyright: haemorrhoidsImage.copyrightNotice,
  heroImageObjectPosition: haemorrhoidsImage.objectPosition,
  whatAreHeading: "What are haemorrhoids?",
  whatAreIntro: [
    "Haemorrhoids (also known as piles) are swollen blood vessels in and around the rectum and anus. They are extremely common and can cause bleeding, discomfort, itching, and prolapse. Many patients suffer in silence for years before seeking help, but effective treatments are available.",
    "Mr Daulatzai offers a full range of treatments tailored to the severity of your condition, from minimally invasive outpatient procedures such as banding and injection sclerotherapy, through to surgical haemorrhoidectomy for more advanced cases. The goal is always to resolve your symptoms with the least invasive approach possible and a swift return to normal life.",
  ],
  faqIds: ["gp-referral-private", "first-consultation", "time-off-work"],
  sections: [
    {
      heading: "Understanding the condition",
      paragraphs: [
        "Inside the anal canal, a network of small blood vessels acts as a cushion to help continence. When these vessels become enlarged or slip downward, haemorrhoids develop. They may occur inside the anal canal (internal haemorrhoids) or under the skin around the anus (external haemorrhoids). Some patients have both.",
        "Haemorrhoids are not usually dangerous, but they can significantly affect comfort, confidence, and quality of life. Symptoms are often attributed to other causes or dismissed as minor, which delays effective treatment. Specialist assessment ensures the correct diagnosis and rules out other important conditions that can cause similar symptoms, including anal fissure, fistula, or bowel pathology.",
        "As a consultant colorectal and general surgeon, I provide confidential, evidence-based care for haemorrhoids through both NHS and private practice across London and Hertfordshire. Every consultation focuses on your symptoms, your goals, and a clear plan tailored to you.",
      ],
    },
    {
      heading: "Symptoms and when to seek help",
      paragraphs: [
        "Common symptoms include bright red bleeding on the toilet paper or in the pan, a feeling of prolapse or lump at the anus, itching, mucus discharge, soreness, and incomplete emptying after bowel movements. Pain is more often associated with a thrombosed external haemorrhoid or an accompanying anal fissure than with uncomplicated internal piles.",
        "You should arrange specialist review if you have rectal bleeding for the first time, if symptoms persist despite simple measures, or if prolapse is affecting daily life. Bleeding from the back passage should never be ignored, even when you suspect haemorrhoids, because similar symptoms can occasionally indicate more serious disease. I will advise on whether investigation such as examination under anaesthesia or colonoscopy is appropriate in your situation.",
      ],
    },
    {
      heading: "Grading and assessment",
      paragraphs: [
        "Internal haemorrhoids are often classified by degree of prolapse. Early grades may bleed without prolapsing; more advanced grades prolapse with bowel movements and may require manual reduction or remain permanently externalised. This grading helps guide treatment selection.",
        "Assessment includes a careful history, examination, and discussion of bowel habit, diet, and lifestyle. In the clinic, proctoscopy allows direct visualisation of the anal canal. I explain findings clearly and outline options in plain language so you can make an informed choice without pressure.",
      ],
    },
    {
      heading: "Conservative and outpatient treatment",
      paragraphs: [
        "Many patients improve with optimisation of bowel habit, adequate fluid intake, dietary fibre, avoiding prolonged straining, and establishing a regular routine. Topical treatments from your pharmacist or GP may relieve irritation whilst these measures take effect.",
        "When symptoms persist, outpatient procedures are often highly effective. Rubber band ligation places a small band above the haemorrhoid to interrupt its blood supply, causing it to shrink over several days. Injection sclerotherapy involves injecting a sclerosant into the haemorrhoid tissue. Both are usually performed during a clinic visit with minimal disruption to normal activity.",
        "Outpatient treatment is particularly suitable for bleeding or prolapse that has not responded to lifestyle change. I match the technique to the size and position of the haemorrhoids and discuss expected discomfort, success rates, and the small risk of recurrence.",
      ],
    },
    {
      heading: "Surgical treatment",
      paragraphs: [
        "Surgical haemorrhoidectomy may be recommended for larger, recurrent, or thrombosed haemorrhoids that are not suitable for outpatient therapy. The operation removes the symptomatic haemorrhoidal tissue. Stapled haemorrhoidopexy (PPH) is an alternative for selected patients with circumferential prolapse, lifting prolapsing tissue back into the anal canal.",
        "I discuss the benefits, limitations, and recovery profile of each surgical option before you decide. My approach emphasises precise tissue handling and careful post-operative support to reduce pain and promote healing. Surgery is usually performed as a day case or short stay, depending on the extent of the procedure and your general health.",
      ],
    },
    {
      heading: "Recovery and follow-up",
      paragraphs: [
        "Recovery after outpatient banding is typically quick, with some tightness or discomfort for a few days. After surgery, discomfort is expected during the first week or two; I provide structured advice on pain relief, bathing, bowel habit, and return to work. Most patients see a meaningful improvement in bleeding and prolapse once healing is underway.",
        "Follow-up is arranged to monitor progress and address any concerns during recovery. If symptoms recur, further treatment can be planned. My team remains accessible if you need advice between appointments.",
      ],
    },
    {
      heading: "Risks and realistic expectations",
      paragraphs: [
        "All treatments carry some risk. Outpatient banding may cause discomfort, bleeding, or rarely ulceration; serious complications are uncommon. Surgical procedures carry risks including bleeding, infection, and temporary difficulty with urination. I discuss these openly before treatment so you know what to expect.",
        "The aim of treatment is durable symptom relief rather than a guarantee that haemorrhoids will never return. Lifestyle measures remain important after successful treatment. Realistic expectations and clear follow-up help most patients achieve a lasting improvement in quality of life.",
      ],
    },
    {
      heading: "Your consultation",
      paragraphs: [
        "If you are troubled by symptoms suggestive of haemorrhoids, specialist assessment is the right next step. Appointments are available through NHS referral and private practice. Your first consultation allows full discussion of symptoms, examination where appropriate, and agreement of a personalised treatment plan.",
        "Contact my team to arrange a consultation at a location convenient for you. Early, expert care often resolves symptoms with simple measures or outpatient treatment, avoiding the need for more extensive surgery later.",
      ],
    },
  ],
};
