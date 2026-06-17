export const testimonialsIntro =
  "Read verified patient reviews from Doctify, Top Doctors, and iWantGreatCare. I am proud to be rated 5 stars by my patients across all platforms.";

export const testimonialsTrustBar =
  "Rated 5.0 stars across Doctify, Top Doctors and iWantGreatCare by verified patients.";

export type ReviewPlatform = "Doctify" | "Top Doctors" | "iWantGreatCare";

export type Testimonial = {
  quote: string;
  dateLabel: string;
  platform: ReviewPlatform;
};

export const reviewPlatforms = [
  {
    name: "Doctify",
    href: "https://www.doctify.com/uk/specialist/najib-daulatzai",
    logo: "/Doctify/Doctify_id_nBjMIyP_3.svg",
    width: 120,
    height: 31,
  },
  {
    name: "Top Doctors",
    href: "https://www.topdoctors.co.uk/doctor/najib-daulatzai",
    logo: "/Top_Doctors_LATAM/Top_Doctors_LATAM_idAZcpxChC_2.svg",
    width: 200,
    height: 33,
  },
  {
    name: "iWantGreatCare",
    href: "https://www.iwantgreatcare.org/doctors/mr-najib-daulatzai",
    logo: "/IWantGreatCare/IWantGreatCare_idY_eO4wUB_1.svg",
    width: 228,
    height: 23,
  },
] as const;

export const testimonials: Testimonial[] = [
  {
    quote:
      "The experience I had with Najib Daulatzai was excellent, prompt, informed, personable. Everything worked as it was meant to and when I had a question, it was resolved. The actual procedure was smooth with very little pain or difficulty afterwards.",
    dateLabel: "May 2026",
    platform: "Top Doctors",
  },
  {
    quote:
      "Very knowledgeable and explained the procedure very well. Great bedside manner.",
    dateLabel: "May 2026",
    platform: "Top Doctors",
  },
  {
    quote:
      "The Robotic surgery with the Intuitive Xi robot is truly fantastic and THEN to be discharged very safely into the care of a very professional virtual Ward at home is AMAZING; thank you",
    dateLabel: "March 2026",
    platform: "Doctify",
  },
  {
    quote:
      "My experience both with Mr Daulatzai and Bushey Spire Hospital was exemplary",
    dateLabel: "March 2026",
    platform: "Top Doctors",
  },
  {
    quote:
      "I had a very positive experience with Mr Daulatzai. He was welcoming, professional, and incredibly reassuring throughout the entire process. He took the time to explain everything clearly and made me feel comfortable and confident in my care. I'm very grateful for his support and would highly recommend him.",
    dateLabel: "March 2026",
    platform: "Top Doctors",
  },
  {
    quote:
      "I went to see Mr Daulatzai for a bowel issue, having seen 2 other specialists in the past. He gained my trust very quickly and thankfully, with the advice and treatment he has given me, I am now symptom free for the first time in 4 years. I am very grateful to him and his excellent team",
    dateLabel: "March 2026",
    platform: "Top Doctors",
  },
  {
    quote:
      "I'm very thankful for everything he has done. He is very knowledgeable and explains things very concisely and simply.",
    dateLabel: "March 2026",
    platform: "Doctify",
  },
  {
    quote:
      "Very clear explanation of next steps to recovery, delivered in a professional manner. It was a joy to have Mr Daulatzai as my consultant and surgeon. I would strongly recommend him to others and will definitely be going back later in the year! Thanks for everything you have done for me :)",
    dateLabel: "February 2026",
    platform: "Doctify",
  },
  {
    quote:
      "I can never thank Mr Daulatzai and the whole team of NHS staff enough for the treatment I have received. The bowel screening programme has potentially saved my life. From day one everything was clearly explained to me with all options discussed. The time, care and thoughtfulness has been outstanding and I couldn't have hoped for more. Thank you all so much. I will be forever grateful.",
    dateLabel: "February 2026",
    platform: "Doctify",
  },
  {
    quote:
      "Mr. Daulatzai has been caring for me for over 4 years, and I could not have asked for better care and consideration. He has been absolutely wonderful through the bad and the good, always shares clear info and clear steps in what is a complex journey. I really appreciate the gentle but confident manner.",
    dateLabel: "February 2026",
    platform: "Top Doctors",
  },
];
