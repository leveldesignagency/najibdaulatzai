import { faqItems, nhsLocation, privateLocations, siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Mr Najib Daulatzai",
    url: siteConfig.url,
    image: `${siteConfig.url}/images/hero-consultation.png`,
    description: siteConfig.description,
    medicalSpecialty: ["Colorectal Surgery", "General Surgery"],
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "AdministrativeArea", name: "Hertfordshire" },
      { "@type": "City", name: "Watford" },
      { "@type": "City", name: "Bushey" },
      { "@type": "City", name: "Borehamwood" },
    ],
    knowsAbout: [
      "Colorectal surgery",
      "General surgery",
      "Robotic surgery",
      "Patient-centered care",
    ],
    worksFor: [
      {
        "@type": "Hospital",
        name: nhsLocation.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Vicarage Road",
          addressLocality: "Watford",
          postalCode: "WD18 0HB",
          addressCountry: "GB",
        },
      },
      ...privateLocations.map((location) => {
        const lineValues = [...location.lines];
        const locality =
          lineValues.find((line) =>
            ["London", "Bushey", "Borehamwood", "Elstree"].includes(line),
          ) ?? lineValues[lineValues.length - 2];

        return {
          "@type": "MedicalClinic",
          name: location.name,
          address: {
            "@type": "PostalAddress",
            streetAddress: location.lines[0],
            addressLocality: locality,
            postalCode: location.lines[location.lines.length - 1],
            addressCountry: "GB",
          },
        };
      }),
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.title,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-GB",
    publisher: {
      "@type": "Organization",
      name: "LEVEL DESIGN AGENCY LTD",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Mr Najib Daulatzai Colorectal & General Surgeon",
    url: siteConfig.url,
    description: siteConfig.description,
    areaServed: ["London", "Hertfordshire", "Watford", "Bushey", "Borehamwood"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressRegion: "Greater London",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.6565,
      longitude: -0.3903,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
