export type ResearchPublication = {
  category: string;
  journal: string;
  year: string;
  articleTitle: string;
  articleUrl?: string;
  citation: string;
  summary: string;
};

export const researchPublications: ResearchPublication[] = [
  {
    category: "COLORECTAL SURGERY",
    journal: "[Awaiting formal journal assignment]",
    year: "2026",
    articleTitle:
      "Implementation and Evaluation of a Postoperative Virtual Hospital Pathway for Elective Colorectal Surgery: A Propensity-Matched Analysis",
    citation:
      "Whelan H, Thapa B, Massias S, Reza L, Johnson N, Kinross J, Daulatzai N, Patel V. Implementation and Evaluation of a Postoperative Virtual Hospital Pathway for Elective Colorectal Surgery: A Propensity-Matched Analysis. doi: https://doi.org/10.64898/2026.05.20.26353655",
    summary:
      "A propensity-matched analysis evaluating the safety, feasibility, and patient outcomes of a structured virtual hospital pathway introduced following elective colorectal surgery.",
  },
  {
    category: "ROBOTIC SURGERY",
    journal: "Journal of Robotic Surgery",
    year: "2025",
    articleTitle:
      "Transitioning to da Vinci Xi for colorectal cancer surgery: a prospective cohort study of 102 cases from a UK centre with a structured robotic programme.",
    articleUrl: "https://pubmed.ncbi.nlm.nih.gov/41021138/",
    citation:
      "Massias S, Vadhwana B, Rad AA, Reza L, Franklyn J, Hollingshead J, Daulatzai N, Patel V. Transitioning to da Vinci Xi for colorectal cancer surgery: a prospective cohort study of 102 cases from a UK centre with a structured robotic programme. J Robot Surg. 2025 Sep 29;19(1):644. doi: 10.1007/s11701-025-02832-1. PMID: 41021138. Free PMC article.",
    summary:
      "A prospective cohort study of 102 consecutive cases reporting the outcomes and learning curve associated with transitioning a structured robotic colorectal cancer programme to the da Vinci Xi platform.",
  },
  {
    category: "COVID-19 & Cancer Services",
    journal: "British Journal of Surgery",
    year: "2020",
    articleTitle: "Colorectal Cancer services during the COVID-19 pandemic",
    citation:
      "Courtney A, Howell AM, Daulatzai N, Savva N, Warren O, Mills S, Rasheed S, Milind G, Tekkis N, Gardiner M, Dai T, Safar B, Efron JE, Darzi A, Kontovounisios C, Tekkis P. Colorectal Cancer services during the COVID-19 pandemic. Br J Surg. 2020; 107(8):e255-e256",
    summary:
      "Reports how colorectal cancer services adapted during the first wave of the COVID-19 pandemic and highlights the immediate challenges facing surgical cancer pathways.",
  },
  {
    category: "COVID-19 & Cancer Services",
    journal: "British Journal of Surgery",
    year: "2020",
    articleTitle:
      "The impact of the COVID-19 pandemic on colorectal cancer service provision",
    citation:
      "Courtney A, Howell AM, Daulatzai N, Savva N, Warren O, Mills S, Rasheed S, Milind G, Tekkis N, Gardiner M, Dai T, Safar B, Efron JE, Darzi A, Kontovounisios C, Tekkis P. The impact of the COVID-19 pandemic on colorectal cancer service provision. Br J Surg. 2020; 107(11):e521-e522",
    summary:
      "Examines the effect of the pandemic on the delivery of colorectal cancer care, including changes to referral patterns, treatment timelines, and service capacity.",
  },
  {
    category: "COVID-19 & Cancer Services",
    journal: "International Journal of Surgery Protocols",
    year: "2020",
    articleTitle:
      "CRC COVID: Colorectal cancer services during COVID-19 pandemic. Study protocol for service evaluation",
    citation:
      "Courtney A, Howell AM, Daulatzai N, Savva N, Warren O, Mills S, Rasheed S, Milind G, Tekkis N, Gardiner M, Dai T, Safar B, Efron JE, Darzi A, Kontovounisios C, Tekkis P. CRC COVID: Colorectal cancer services during COVID-19 pandemic. Study protocol for service evaluation. Int J Surg Protoc. 2020;23:15-19",
    summary:
      "Sets out the protocol for a multi-centre service evaluation studying how colorectal cancer pathways were maintained and modified during the pandemic.",
  },
  {
    category: "Crohn's Disease & Fistula",
    journal: "Colorectal Disease",
    year: "2015",
    articleTitle:
      "What role do bacteria play in persisting fistula formation in idiopathic and Crohn's anal fistula?",
    citation:
      "Tozer PJ, Rayment N, Hart AL, Daulatzai N, Murugananthan AU, Whelan K, Phillips RKS. What role do bacteria play in persisting fistula formation in idiopathic and Crohn's anal fistula? Colorectal Dis. 2015;17(3):235-41",
    summary:
      "Investigates the microbial environment in anal fistula tracts and whether bacterial colonisation contributes to persistence in Crohn's and idiopathic disease.",
  },
  {
    category: "Crohn's Disease & Wound Healing",
    journal: "British Journal of Surgery",
    year: "2015",
    articleTitle:
      "The Role of Dendritic and T-Cell function and migration in the development of cutaneous wound failure in Crohn's Disease",
    citation:
      "Daulatzai N, Hart AL, Slater RC, Bernardo-Ordiz D, Al-Hassi HO, Tozer P, Phillips RKS, Mann ER, Knight SC. The Role of Dendritic and T-Cell function and migration in the development of cutaneous wound failure in Crohn's Disease. BJS. 2015;102(S1):127-301",
    summary:
      "Explores how immune cell function and migration may explain why perineal and cutaneous wounds fail to heal in patients with Crohn's disease.",
  },
  {
    category: "Crohn's Disease & Wound Healing",
    journal: "British Journal of Surgery",
    year: "2015",
    articleTitle:
      "A randomised control study to assess the effect of digitation in the management of open perineal wounds",
    citation:
      "Daulatzai N, Slater RC, Robinson D, Mann ER, Hart AL, Sibbons P, Warusavitarne J, Phillips RKS. A randomised control study to assess the effect of digitation in the management of open perineal wounds. BJS. 2015;102(S1):127-301",
    summary:
      "Evaluates whether digitation improves healing of open perineal wounds, a common and difficult problem after colorectal surgery in Crohn's disease.",
  },
  {
    category: "Perianal Fistula & Imaging",
    journal: "Diseases of the Colon & Rectum",
    year: "2012",
    articleTitle:
      "A diagnostic accuracy meta-analysis of endoanal ultrasound and MRI for perianal fistula assessment",
    citation:
      "Siddiqui MR, Ashrafian H, Tozer P, Daulatzai N, Burling D, Hart A, Phillips RKS. A diagnostic accuracy meta-analysis of endoanal ultrasound and MRI for perianal fistula assessment. Dis Colon Rectum. 2012;55(5):576-85",
    summary:
      "Compares the diagnostic accuracy of endoanal ultrasound and MRI in mapping perianal fistulas to guide surgical planning and reduce recurrence.",
  },
  {
    category: "Perianal Fistula & Imaging",
    journal: "Gut",
    year: "2012",
    articleTitle:
      "A diagnostic accuracy meta-analysis of endoanal ultrasound and MRI for perianal fistula assessment (Gut abstract)",
    citation:
      "Siddiqui MR, Ashrafian H, Tozer P, Daulatzai N, Burling D, Hart A, Phillips RKS. A diagnostic accuracy meta-analysis of endoanal ultrasound and MRI for perianal fistula assessment. Gut. 2012;61:A233-A234",
    summary:
      "Conference presentation of a meta-analysis comparing imaging modalities used to assess complex perianal fistulas before surgery.",
  },
  {
    category: "Perianal Surgery",
    journal: "Colorectal Disease",
    year: "2018",
    articleTitle:
      "Extremely high fistulotomy: the 'razor-blade sphincter', incremental evolution of practice, and patient satisfaction",
    citation:
      "Daulatzai N, Totaro A, Adegbola S, Sahnan K, Phillips R, Tozer P. Extremely high fistulotomy: the 'razor-blade sphincter', incremental evolution of practice, and patient satisfaction. Colorectal Dis. 2018;20(S7):1-64",
    summary:
      "Reviews a refined fistulotomy technique for high trans-sphincteric fistulas and reports patient outcomes and satisfaction with this evolving approach.",
  },
  {
    category: "Perianal Surgery",
    journal: "Seminars in Colon & Rectal Surgery",
    year: "2009",
    articleTitle: "The role of fibrin glue in the management of fistula-in-ano",
    citation:
      "Daulatzai N, Buchanan G. The role of fibrin glue in the management of fistula-in-ano. Semin Colon Rectal Surg. 2009;20(1):38-42",
    summary:
      "Reviews the evidence for fibrin glue as a sphincter-preserving option in the treatment of anal fistulas.",
  },
  {
    category: "Colorectal Cancer",
    journal: "Colorectal Disease",
    year: "2017",
    articleTitle:
      "MRI nodal staging is not an indication for neoadjuvant radiotherapy for rectal cancer",
    citation:
      "David G, Daulatzai N, Nizar S, Tilney HS, Gudgeon AM. MRI nodal staging is not an indication for neoadjuvant radiotherapy for rectal cancer. Colorectal Dis. 2017;19(S4):4-13",
    summary:
      "Challenges the routine use of neoadjuvant radiotherapy based on MRI nodal staging alone and discusses patient selection for rectal cancer treatment.",
  },
  {
    category: "Colorectal Cancer",
    journal: "International Journal of Surgery",
    year: "2010",
    articleTitle:
      "The value of routine surveillance computerised tomography scan in colorectal cancer follow-up",
    citation:
      "Daulatzai N, Hosny S, Duraisingham S, Oshowo A, Mukhtar H, Ingham Clark C. The value of routine surveillance computerised tomography scan in colorectal cancer follow-up. Int J Surg. 2010;8(7):562",
    summary:
      "Assesses whether routine CT surveillance after colorectal cancer treatment detects recurrence earlier or changes patient outcomes.",
  },
  {
    category: "Colorectal Cancer",
    journal: "British Journal of Surgery",
    year: "2008",
    articleTitle:
      "The value of routine surveillance computerised tomography scan in colorectal cancer follow-up",
    citation:
      "Daulatzai N, Hosny S, Duraisingham S, Oshowo A, Mukhtar H, Ingham Clark C. The value of routine surveillance computerised tomography scan in colorectal cancer follow-up. ASGBI Abstracts 2008: Poster Presentations; BJS. 2008;95(S3):102",
    summary:
      "Poster presentation evaluating the role of scheduled CT scanning in detecting colorectal cancer recurrence after curative surgery.",
  },
  {
    category: "Perineal Surgery",
    journal: "International Journal of Surgery",
    year: "2012",
    articleTitle:
      "Factors associated with the development of the unhealed perineum following surgery",
    citation:
      "Ip B, Daulatzai N, Jones M, Williams G, Alexander H, Bassett P, Phillips RKS. Factors associated with the development of the unhealed perineum following surgery. Int J Surg. 2012;10(8):S28",
    summary:
      "Identifies clinical and surgical factors linked to failure of perineal wound healing after colorectal procedures.",
  },
  {
    category: "Tissue Engineering",
    journal: "International Journal of Surgery",
    year: "2010",
    articleTitle:
      "A novel nanocomposite polymer as a potential scaffold in attempts to tissue engineer small intestine",
    citation:
      "Daulatzai N, Darbyshire A, Loizidou M, Seifalian A, Winslet M. A novel nanocomposite polymer as a potential scaffold in attempts to tissue engineer small intestine. Int J Surg. 2010;8(7):531",
    summary:
      "Describes development of a biodegradable nanocomposite polymer scaffold and its potential for small intestine tissue engineering at University College London.",
  },
  {
    category: "Tissue Engineering",
    journal: "British Journal of Surgery",
    year: "2010",
    articleTitle:
      "Tissue engineering small intestine; an in-vitro study of epithelial cell growth on a novel nanocomposite polymer scaffold",
    citation:
      "Daulatzai N, Darbyshire A, Loizidou M, Seifalian A, Winslet M. Tissue engineering small intestine; an in-vitro study of epithelial cell growth on a novel nanocomposite polymer scaffold. BJS. 2010;97(S6):6",
    summary:
      "Reports in-vitro results showing epithelial cell growth on a novel polymer scaffold, supporting further development of tissue-engineered bowel.",
  },
  {
    category: "Immunology",
    journal: "Immunology",
    year: "2011",
    articleTitle:
      "Protective subunit of bacillus anthracis enhances human dendritic cell activation, reduces dendritic cell production of anti-inflammatory cytokines and enhances T-cell stimulation",
    citation:
      "Mann E, English N, Bernardo D, Al-Hassi H, Tee C, Daulatzai N, Landy J, Peake S, Williamson E, Knight S. Protective subunit of bacillus anthracis enhances human dendritic cell activation, reduces dendritic cell production of anti-inflammatory cytokines and enhances T-cell stimulation. Immunology. 2011;135:209",
    summary:
      "Studies how a bacterial protective antigen modulates dendritic cell activity and T-cell responses, with relevance to understanding immune regulation in inflammatory disease.",
  },
  {
    category: "Inflammatory Bowel Disease",
    journal: "Journal of Crohn's and Colitis",
    year: "2012",
    articleTitle: "P067 Dysregulation of human dendritic cell function in ulcerative colitis",
    citation:
      "Mann E, Bernardo D, Vallejo-Diez S, Peake S, Al-Hassi HO, Martinez-Abad B, Montalvillo E, Tee C, Landy J, Daulatzai N, Hart A, Nunez H, Fernandez Salazar L, Garrote JA, Arranz E, Knight S. P067 Dysregulation of human dendritic cell function in ulcerative colitis. J Crohns Colitis. 2012;6(Supplement 1):S37",
    summary:
      "Conference abstract examining altered dendritic cell behaviour in ulcerative colitis and its contribution to chronic intestinal inflammation.",
  },
  {
    category: "Inflammatory Bowel Disease",
    journal: "Journal of Crohn's and Colitis",
    year: "2012",
    articleTitle:
      "P021 Glucagon-like peptide-2 modulates the production of proinflammatory cytokine interferon-γ in human blood and intestinal dendritic cells a potential new therapy for Crohn's disease",
    citation:
      "Tee CT, Peake S, Bernardo D, Mann E, Landy J, Daulatzai N, Wallis K, Gabe SM, Knight S, Al Hassi HO. P021 Glucagon-like peptide-2 modulates the production of proinflammatory cytokine interferon-γ in human blood and intestinal dendritic cells a potential new therapy for Crohn's disease. J Crohns Colitis. 2012;6(Supplement 1):S19",
    summary:
      "Explores whether GLP-2 can reduce pro-inflammatory cytokine production in dendritic cells, suggesting a potential therapeutic pathway in Crohn's disease.",
  },
  {
    category: "Crohn's Disease & Fistula",
    journal: "Gut",
    year: "2011",
    articleTitle:
      "Dendritic cell homing and immune cell function in crohn's anal fistulae",
    citation:
      "Tozer P, Al-Hassi O, Rayment N, Bernardo Ordiz D, Murguranathan A, Daulatzai N, Ansari T, Whelan K, Phillips R, Knight S, Hart A. Dendritic cell homing and immune cell function in crohn's anal fistulae. Gut. 2011;60:A220-A221",
    summary:
      "Investigates immune cell trafficking and dendritic cell behaviour in Crohn's anal fistulas to better understand why these fistulas persist.",
  },
  {
    category: "Crohn's Disease & Fistula",
    journal: "Gut",
    year: "2011",
    articleTitle:
      "The rectal mucosa in patients with Crohn's anal fistulae harbours lower numbers of bifidobacteria, and the fistula tracts are devoid of a microbial ecosystem",
    citation:
      "Tozer P, Rayment N, Al-Hassi OH, Murguranathan A, Daulatzai N, Knight SC, Phillips RK, Whelan K, Hart AL. The rectal mucosa in patients with Crohn's anal fistulae harbours lower numbers of bifidobacteria, and the fistula tracts are devoid of a microbial ecosystem. Gut. 2011;60:A221-A221",
    summary:
      "Examines differences in gut microbiota between fistula tracts and rectal mucosa in Crohn's disease, suggesting an altered microbial environment in persistent fistula.",
  },
  {
    category: "Intestinal Failure",
    journal: "Gut",
    year: "2011",
    articleTitle:
      "8-year experience of enterocutaneous fistulae at a national intestinal failure centre",
    citation:
      "Rahbour G, Warusavitarne J, Gabe S, Hart A, Tozer P, Daulatzai N, Vaizey C. 8-year experience of enterocutaneous fistulae at a national intestinal failure centre. Gut. 2011;60:A90-A91",
    summary:
      "Summarises eight years of experience managing enterocutaneous fistulas at a specialist intestinal failure unit, reporting healing rates and treatment strategies.",
  },
  {
    category: "Intestinal Failure",
    journal: "Diseases of the Colon & Rectum",
    year: "2011",
    articleTitle:
      "Univariate and multivariate analysis examining factors associated with enterocutaneous fistula healing and development of a scoring system at a UK national intestinal failure center",
    citation:
      "Rahbour G, Gabe S, Warusavitarne J, Daulatzai N, Vaizey C. Univariate and multivariate analysis examining factors associated with enterocutaneous fistula healing and development of a scoring system at a UK national intestinal failure center. Dis Colon Rectum. 2011;54(5):E78-E79",
    summary:
      "Identifies predictors of healing in enterocutaneous fistula and proposes a scoring system to guide treatment at a national referral centre.",
  },
  {
    category: "Endoscopy & Crohn's Disease",
    journal: "Gastrointestinal Endoscopy",
    year: "2011",
    articleTitle:
      "SU1581 Endoscopic outcomes after Ileo-Caecal resection for Crohn's Disease: A prospective single tertiary centre study",
    citation:
      "Murugananthan A, Tripoli S, Daulatzai N, Kamm M, Arebi N. SU1581 Endoscopic outcomes after Ileo-Caecal resection for Crohn's Disease: A prospective single tertiary centre study. Gastrointest Endosc. 2011;73(4):AB311",
    summary:
      "Prospective study of endoscopic findings after ileocaecal resection for Crohn's disease, assessing recurrence and post-operative mucosal healing.",
  },
  {
    category: "Haemorrhoid Surgery",
    journal: "International Journal of Surgery",
    year: "2011",
    articleTitle:
      "Meta-analysis of the use of glyceryl trinitrate ointment after haemorrhoidectomy as an analgesic in promoting wound healing (Letter to editor)",
    citation:
      "Siddiqui MR, Daulatzai N. Meta-analysis of the use of glyceryl trinitrate ointment after haemorrhoidectomy as an analgesic in promoting wound healing (Letter to editor). Int J Surg. 2011;9(3):272",
    summary:
      "Letter discussing pooled evidence on glyceryl trinitrate ointment for pain relief and wound healing following haemorrhoidectomy.",
  },
  {
    category: "General Surgery",
    journal: "World Journal of Surgery",
    year: "2010",
    articleTitle:
      "CT-tube duodenocholangiostomy for the management of duodenal fistulae",
    citation:
      "Paluszkiewicz P, Dudek W, Daulatzai N, Stanislawek A, Hart CT. CT-tube duodenocholangiostomy for the management of duodenal fistulae. World J Surg. 2010;34(4):791-6",
    summary:
      "Describes a surgical technique using CT-guided tube drainage for managing complex duodenal fistulas.",
  },
  {
    category: "Patient Safety",
    journal: "Patient Safety in Surgery",
    year: "2014",
    articleTitle:
      "Surgical ward rounds in England: a trainee-led multi-centre study of current practice",
    citation:
      "Audit and Research Collaborative of Surgeons (SPARCS); Northwest Research Collaborative. Surgical ward rounds in England: a trainee-led multi-centre study of current practice. Patient Saf Surg. 2014;8(1):11",
    summary:
      "Multi-centre audit of how surgical ward rounds are conducted across England, identifying variation in practice and opportunities to improve patient safety.",
  },
  {
    category: "Systematic Review",
    journal: "Annals of The Royal College of Surgeons",
    year: "2009",
    articleTitle:
      "Systematic review of internal hernia formation following laparoscopic left nephrectomy",
    citation:
      "Cox R, Daulatzai N, Hrouda D, Buchanan G. Systematic review of internal hernia formation following laparoscopic left nephrectomy. Ann R Coll Surg Engl. 2009;91(8):667-669",
    summary:
      "Systematic review examining the incidence and prevention of internal hernias after laparoscopic nephrectomy.",
  },
  {
    category: "Oncology",
    journal: "Oncology News",
    year: "2008",
    articleTitle: "The pathogenesis and management of anal cancer",
    citation:
      "Daulatzai N, Winslet M. The pathogenesis and management of anal cancer. Oncology News. 2008;3(4):14-16",
    summary:
      "Review article covering the causes, diagnosis, and treatment options for anal cancer.",
  },
  {
    category: "Book Review",
    journal: "Injury",
    year: "2004",
    articleTitle: "Book review: Neurology fact finder",
    citation:
      "Daulatzai N. Book review; \"Neurology fact finder\"; Radcliffe Medical Press. Injury. 2004;36(2):355",
    summary:
      "Review of a medical reference text for neurology fact finding in clinical practice.",
  },
];
