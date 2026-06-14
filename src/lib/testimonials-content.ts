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
      "Mr Daulatzai was very informative about my condition at the time of first consultation and fully explained the procedure that would be undertaken and the immediate after effects of same. I could not have asked for anything more pre-surgery.",
    dateLabel: "March 2025",
    platform: "Doctify",
  },
  {
    quote:
      "A caring excellent consultant who made you feel confident in every aspect of the surgery you would have. Excellent aftercare also.",
    dateLabel: "January 2025",
    platform: "Top Doctors",
  },
  {
    quote:
      "I was addressed very courteously. My condition was explained clearly, and all my questions were answered. I was examined, and an enlarged hernia bulge was noted. The consultant assured me he would do his best to get an early appointment, given my worsening condition.",
    dateLabel: "November 2024",
    platform: "iWantGreatCare",
  },
  {
    quote:
      "He is one of the best surgeon I ever met and he is very professional in his job, I am so glad that he was my Doctor. Thank you so much for all of that and help and support me during my procedures.",
    dateLabel: "October 2024",
    platform: "Doctify",
  },
  {
    quote:
      "Mr Najib Daulatzai is an exceptional doctor, highly knowledgeable, professional, and compassionate. I felt comfortable discussing my concerns with him, and he took the time to listen and address all my questions. I highly recommend.",
    dateLabel: "September 2024",
    platform: "Top Doctors",
  },
  {
    quote:
      "I am very happy that he was recommended to me. From the first consultation to the aftercare following my surgery, he has been very diligent and understanding. Very skilled surgeon. Also, his secretary and team are very helpful. Would recommend him without hesitation",
    dateLabel: "2024",
    platform: "Doctify",
  },
  {
    quote:
      "I can never thank Mr Daulatzai and the whole team of NHS staff enough for the treatment I have received. The bowel screening programme has potentially saved my life. From day one everything was clearly explained to me with all options discussed. The time, care and thoughtfulness has been outstanding and I couldn't have hoped for more. Thank you all so much. I will be forever grateful.",
    dateLabel: "2024",
    platform: "Doctify",
  },
  {
    quote:
      "Mr Daulatzai was wonderful in his professionalism and technical ability in treating my mother. His level of care, compassion and commitment are nothing I've seen in a clinician before. Truly exceptional",
    dateLabel: "September 2023",
    platform: "iWantGreatCare",
  },
];
