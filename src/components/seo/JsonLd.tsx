import { patientFaqs } from "@/lib/patient-faq-content";
import { procedurePageConfigs } from "@/lib/procedures/procedure-pages/config";
import { reviewPlatforms } from "@/lib/testimonials-content";
import {
  conditionAeoFaqs,
  getAllAeoFaqs,
  homepageAeoFaqs,
} from "@/lib/seo/aeo";
import {
  defaultOgImage,
  organizationAlternateNames,
  organizationName,
  physicianCredentials,
  physicianKnowsAbout,
  physicianLanguages,
  physicianProfileImage,
  physicianSameAs,
  physicianWideImage,
  seoEntityIds,
  siteLogoImage,
  toSchemaImageObject,
} from "@/lib/seo/entity";
import { locationToSchemaGeo, practiceLocations, servedAreas } from "@/lib/seo/geo";
import { faqItems, menuLinks, siteConfig } from "@/lib/site-config";

function formatFaqAnswer(answer: readonly string[]) {
  return answer.join("\n\n");
}

export function JsonLd() {
  const discoveryFaqs = getAllAeoFaqs().filter((item) =>
    [...homepageAeoFaqs, ...conditionAeoFaqs].some((entry) => entry.id === item.id),
  );

  const graph = [
    {
      "@type": "MedicalOrganization",
      "@id": seoEntityIds.organization,
      name: organizationName,
      alternateName: [...organizationAlternateNames],
      url: siteConfig.url,
      logo: toSchemaImageObject(siteLogoImage),
      image: [
        toSchemaImageObject(defaultOgImage),
        toSchemaImageObject(physicianProfileImage),
        toSchemaImageObject(physicianWideImage),
      ],
      description: siteConfig.description,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: servedAreas.map((name) => ({ "@type": "City", name })),
      medicalSpecialty: [
        "Colorectal Surgery",
        "General Surgery",
        "Proctology",
        "Endoscopy",
        "Robotic Surgery",
      ],
      availableService: procedurePageConfigs.map((config) => ({
        "@type": "MedicalProcedure",
        name: config.title,
        url: `${siteConfig.url}/procedures/${config.slug}`,
      })),
      location: practiceLocations.map(locationToSchemaGeo),
      employee: { "@id": seoEntityIds.physician },
      sameAs: [...physicianSameAs],
    },
    {
      "@type": "Physician",
      "@id": seoEntityIds.physician,
      name: "Mr Najib Daulatzai",
      givenName: "Najib",
      familyName: "Daulatzai",
      honorificPrefix: "Mr",
      url: siteConfig.url,
      image: [
        toSchemaImageObject(physicianProfileImage),
        toSchemaImageObject(physicianWideImage),
        toSchemaImageObject(defaultOgImage),
      ],
      description: siteConfig.description,
      jobTitle: "Consultant Robotic, Colorectal and General Surgeon",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      medicalSpecialty: [
        "Colorectal Surgery",
        "General Surgery",
        "Proctology",
        "Robotic Surgery",
      ],
      memberOf: { "@id": seoEntityIds.organization },
      worksFor: practiceLocations.map(locationToSchemaGeo),
      areaServed: servedAreas.map((name) => ({ "@type": "City", name })),
      knowsAbout: [...physicianKnowsAbout],
      knowsLanguage: [...physicianLanguages],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University College London" },
        { "@type": "CollegeOrUniversity", name: "Imperial College London" },
      ],
      hasCredential: physicianCredentials.map((credential) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: credential.category,
        name: credential.name,
      })),
      sameAs: [...physicianSameAs],
    },
    {
      "@type": "WebSite",
      "@id": seoEntityIds.website,
      name: siteConfig.title,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en-GB",
      publisher: { "@id": seoEntityIds.organization },
      about: { "@id": seoEntityIds.physician },
      image: toSchemaImageObject(defaultOgImage),
    },
    {
      "@type": "ItemList",
      name: "Site navigation",
      itemListElement: menuLinks.map((link, index) => ({
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: link.label,
        url: `${siteConfig.url}${link.href === "/" ? "" : link.href}`,
      })),
    },
    {
      "@type": "ItemList",
      name: "Surgical procedures",
      itemListElement: procedurePageConfigs.map((config, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: config.title,
        url: `${siteConfig.url}/procedures/${config.slug}`,
      })),
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: "en-GB",
      isPartOf: { "@id": seoEntityIds.website },
      about: { "@id": seoEntityIds.physician },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", "[data-speakable='summary']"],
      },
      primaryImageOfPage: toSchemaImageObject(defaultOgImage),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      url: siteConfig.url,
      inLanguage: "en-GB",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#aeo-faq`,
      url: siteConfig.url,
      inLanguage: "en-GB",
      mainEntity: discoveryFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/patient-faq#faq`,
      url: `${siteConfig.url}/patient-faq`,
      inLanguage: "en-GB",
      mainEntity: patientFaqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: formatFaqAnswer(item.answer),
        },
      })),
    },
    {
      "@type": "MedicalWebPage",
      "@id": `${siteConfig.url}/robotic-surgery#webpage`,
      url: `${siteConfig.url}/robotic-surgery`,
      name: "Robotic Colorectal Surgery London",
      description:
        "Robotic colorectal surgery in London with Mr Najib Daulatzai using the da Vinci Xi and da Vinci 5 systems for bowel, rectal cancer, and pelvic procedures.",
      inLanguage: "en-GB",
      about: {
        "@type": "MedicalProcedure",
        name: "Robotic colorectal surgery",
        procedureType: "Surgical",
      },
      mainEntity: { "@id": seoEntityIds.physician },
      specialty: "Colorectal Surgery",
    },
    {
      "@type": "ContactPage",
      "@id": `${siteConfig.url}/contact#webpage`,
      url: `${siteConfig.url}/contact`,
      name: "Contact Mr Najib Daulatzai",
      description:
        "Book a private or NHS surgical consultation in London and Hertfordshire.",
      inLanguage: "en-GB",
      mainEntity: { "@id": seoEntityIds.physician },
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/gp-referrals#webpage`,
      url: `${siteConfig.url}/gp-referrals`,
      name: "GP Referrals",
      description:
        "Refer patients to Mr Najib Daulatzai via NHS e-RS or private referral to the practice secretary.",
      inLanguage: "en-GB",
      audience: {
        "@type": "MedicalAudience",
        audienceType: "Clinician",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteConfig.url}/about#webpage`,
      url: `${siteConfig.url}/about`,
      name: "About Mr Najib Daulatzai",
      description:
        "Consultant colorectal and general surgeon in London and Hertfordshire with robotic and minimally invasive expertise.",
      inLanguage: "en-GB",
      mainEntity: { "@id": seoEntityIds.physician },
      primaryImageOfPage: toSchemaImageObject(physicianProfileImage),
    },
    {
      "@type": "CollectionPage",
      "@id": `${siteConfig.url}/testimonials#webpage`,
      url: `${siteConfig.url}/testimonials`,
      name: "Patient Testimonials",
      description:
        "Verified patient reviews for Mr Najib Daulatzai on Doctify, Top Doctors, and iWantGreatCare.",
      inLanguage: "en-GB",
      about: { "@id": seoEntityIds.physician },
      significantLink: reviewPlatforms.map((platform) => platform.href),
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
