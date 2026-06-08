import { patientFaqs } from "@/lib/patient-faq-content";
import { procedurePageConfigs } from "@/lib/procedures/procedure-pages/config";
import { aeoFaqsToSchema, getAllAeoFaqs } from "@/lib/seo/aeo";
import { locationToSchemaGeo, practiceLocations, servedAreas } from "@/lib/seo/geo";
import { faqItems, menuLinks, siteConfig } from "@/lib/site-config";

const organizationId = `${siteConfig.url}/#medical-organization`;
const physicianId = `${siteConfig.url}/#physician`;
const websiteId = `${siteConfig.url}/#website`;

function formatFaqAnswer(answer: readonly string[]) {
  return answer.join("\n\n");
}

export function JsonLd() {
  const medicalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": organizationId,
    name: "Mr Najib Daulatzai: Colorectal & General Surgery",
    alternateName: ["Najib Daulatzai Colorectal Surgery", "ndsurgeon"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/Logos/Najib_Daulatzai_Logo.svg`,
    image: `${siteConfig.url}/images/hero-consultation.jpg`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: servedAreas.map((name) => ({ "@type": "City", name })),
    medicalSpecialty: [
      "Colorectal Surgery",
      "General Surgery",
      "Proctology",
      "Endoscopy",
    ],
    availableService: procedurePageConfigs.map((config) => ({
      "@type": "MedicalProcedure",
      name: config.title,
      url: `${siteConfig.url}/procedures/${config.slug}`,
    })),
    location: practiceLocations.map(locationToSchemaGeo),
    employee: { "@id": physicianId },
    sameAs: [siteConfig.url],
  };

  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": physicianId,
    name: "Mr Najib Daulatzai",
    givenName: "Najib",
    familyName: "Daulatzai",
    honorificPrefix: "Mr",
    url: siteConfig.url,
    image: `${siteConfig.url}/images/hero-consultation.jpg`,
    description: siteConfig.description,
    jobTitle: "Consultant Colorectal and General Surgeon",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    medicalSpecialty: [
      "Colorectal Surgery",
      "General Surgery",
      "Proctology",
      "Robotic Surgery",
    ],
    memberOf: { "@id": organizationId },
    worksFor: practiceLocations.map(locationToSchemaGeo),
    areaServed: servedAreas.map((name) => ({ "@type": "City", name })),
    knowsAbout: [
      "Colorectal surgery",
      "General surgery",
      "Robotic colorectal surgery",
      "da Vinci surgical system",
      "Minimally invasive surgery",
      "Laparoscopic surgery",
      "Colonoscopy",
      "Bowel cancer surgery",
      "Rectal cancer surgery",
      "Inflammatory bowel disease",
      "Haemorrhoids",
      "Anal fistula",
      "Hernia repair",
      "Proctology",
      "Patient-centered care",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Medical qualification",
        name: "Consultant Colorectal and General Surgeon",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-GB",
    publisher: { "@id": organizationId },
    about: { "@id": physicianId },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/procedures?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Site navigation",
    itemListElement: menuLinks.map((link, index) => ({
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: link.label,
      url: `${siteConfig.url}${link.href === "/" ? "" : link.href}`,
    })),
  };

  const proceduresItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Surgical procedures",
    itemListElement: procedurePageConfigs.map((config, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: config.title,
      url: `${siteConfig.url}/procedures/${config.slug}`,
    })),
  };

  const homepageWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "en-GB",
    isPartOf: { "@id": websiteId },
    about: { "@id": physicianId },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable='summary']"],
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/hero-consultation.jpg`,
    },
  };

  const homepageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const aeoFaqSchema = {
    ...aeoFaqsToSchema(getAllAeoFaqs()),
    "@id": `${siteConfig.url}/#aeo-faq`,
  };

  const patientFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/patient-faq#faq`,
    url: `${siteConfig.url}/patient-faq`,
    mainEntity: patientFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: formatFaqAnswer(item.answer),
      },
    })),
  };

  const roboticSurgeryPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${siteConfig.url}/robotic-surgery#webpage`,
    url: `${siteConfig.url}/robotic-surgery`,
    name: "Robotic Colorectal Surgery London",
    description:
      "Robotic colorectal surgery in London with Mr Najib Daulatzai using the da Vinci surgical system for bowel, rectal cancer, and pelvic procedures.",
    inLanguage: "en-GB",
    about: {
      "@type": "MedicalProcedure",
      name: "Robotic colorectal surgery",
      procedureType: "Surgical",
    },
    mainEntity: { "@id": physicianId },
    specialty: "Colorectal Surgery",
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact#webpage`,
    url: `${siteConfig.url}/contact`,
    name: "Contact Mr Najib Daulatzai",
    description: "Book a private or NHS surgical consultation in London and Hertfordshire.",
    inLanguage: "en-GB",
    mainEntity: { "@id": physicianId },
  };

  const gpReferralsPageSchema = {
    "@context": "https://schema.org",
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
  };

  const schemas = [
    medicalOrganizationSchema,
    physicianSchema,
    websiteSchema,
    siteNavigationSchema,
    proceduresItemListSchema,
    homepageWebPageSchema,
    homepageFaqSchema,
    aeoFaqSchema,
    patientFaqSchema,
    roboticSurgeryPageSchema,
    contactPageSchema,
    gpReferralsPageSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`jsonld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
