import { nhsLocation, privateLocations, siteConfig } from "../site-config";

export type GeoLocation = {
  id: string;
  name: string;
  type: "Hospital" | "MedicalClinic";
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: "GB";
  latitude: number;
  longitude: number;
  serves: readonly string[];
};

/** Verified coordinates for structured data and geo meta tags */
export const practiceLocations: GeoLocation[] = [
  {
    id: "watford-general",
    name: nhsLocation.name,
    type: "Hospital",
    streetAddress: "Vicarage Road",
    addressLocality: "Watford",
    postalCode: "WD18 0HB",
    addressCountry: "GB",
    latitude: 51.6565,
    longitude: -0.3903,
    serves: ["Watford", "Hertfordshire", "St Albans", "Rickmansworth", "Hemel Hempstead"],
  },
  {
    id: "spire-bushey",
    name: "Spire Bushey Hospital",
    type: "MedicalClinic",
    streetAddress: "Heathbourne Road",
    addressLocality: "Bushey",
    postalCode: "WD23 1RD",
    addressCountry: "GB",
    latitude: 51.6434,
    longitude: -0.3608,
    serves: ["Bushey", "Watford", "Harrow", "Hertfordshire", "North West London"],
  },
  {
    id: "hca-wellington",
    name: "HCA The Wellington Hospital",
    type: "MedicalClinic",
    streetAddress: "8A Wellington Place",
    addressLocality: "London",
    postalCode: "NW8 9LE",
    addressCountry: "GB",
    latitude: 51.5312,
    longitude: -0.1734,
    serves: ["London", "Marylebone", "St John's Wood", "North West London"],
  },
  {
    id: "hca-golders-green",
    name: "HCA Golders Green Outpatients",
    type: "MedicalClinic",
    streetAddress: "296 Golders Green Road",
    addressLocality: "London",
    postalCode: "NW11 9PY",
    addressCountry: "GB",
    latitude: 51.5724,
    longitude: -0.1941,
    serves: ["Golders Green", "Hendon", "Harrow", "North London", "North West London"],
  },
];

export const primaryGeoRegion = {
  region: "GB-LND",
  placename: "London, Hertfordshire",
  latitude: 51.6565,
  longitude: -0.3903,
} as const;

export function getGeoMetaTags(path = "/") {
  const isLondonFocused =
    path.includes("contact") ||
    path.includes("robotic") ||
    path.includes("blog");

  return {
    "geo.region": isLondonFocused ? "GB-LND" : "GB-HRT",
    "geo.placename": isLondonFocused
      ? "London, North West London"
      : "Hertfordshire, Watford, London",
    "geo.position": `${primaryGeoRegion.latitude};${primaryGeoRegion.longitude}`,
    ICBM: `${primaryGeoRegion.latitude}, ${primaryGeoRegion.longitude}`,
    "DC.title": `${siteConfig.name}, Robotic, Colorectal and General Surgeon`,
  };
}

export function locationToSchemaGeo(location: GeoLocation) {
  return {
    "@type": location.type,
    name: location.name,
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.latitude,
      longitude: location.longitude,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.addressLocality,
      postalCode: location.postalCode,
      addressCountry: location.addressCountry,
    },
    areaServed: location.serves.map((name) => ({ "@type": "City", name })),
  };
}

/** Map private location config rows to geo entities by name */
export function getPrivateLocationGeo(name: string) {
  return practiceLocations.find((location) => location.name === name);
}

export const servedAreas = [
  "London",
  "North London",
  "North West London",
  "Hertfordshire",
  "Watford",
  "Bushey",
  "Borehamwood",
  "Harrow",
  "Golders Green",
  "Hendon",
  "St Albans",
  "Rickmansworth",
  "Hemel Hempstead",
] as const;

/** Re-export for llms.txt and schema builders */
export { privateLocations, nhsLocation };
