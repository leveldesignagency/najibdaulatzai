/** Standard Google Maps iframe embed URL from a free-text address query. */
export function buildGoogleMapsEmbedUrl(mapQuery: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
}

export function buildGoogleMapsSearchUrl(mapQuery: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
}
