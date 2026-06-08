/** Publication order: priority articles first, then remaining by client document order */
export const BLOG_PUBLICATION_ORDER = [
  "what-are-haemorrhoids-and-when-do-you-need-surgery",
  "rectal-bleeding-when-to-see-a-specialist",
  "bowel-cancer-symptoms-when-to-act",
  "choosing-a-colorectal-surgeon-london",
  "what-is-diverticular-disease",
  "crohns-disease-and-surgery",
  "ulcerative-colitis-when-is-surgery-right",
  "anal-fistula-why-does-it-recur",
  "what-is-a-j-pouch",
  "hernia-symptoms-when-to-have-repair",
  "what-happens-during-a-colonoscopy",
  "robotic-bowel-surgery-london",
  "recovering-from-bowel-surgery",
  "what-is-anterior-resection-recovery",
  "laparoscopic-versus-robotic-surgery",
  "what-is-a-stoma-is-it-permanent",
  "nhs-versus-private-colorectal-surgery",
  "private-colonoscopy-london",
  "do-i-need-a-referral-to-see-a-private-surgeon",
  "private-colorectal-surgery-cost-uk",
] as const;

export type BlogSlug = (typeof BLOG_PUBLICATION_ORDER)[number];

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const WEEKS_BETWEEN_POSTS = 14;

/**
 * Publication dates are derived from position in BLOG_PUBLICATION_ORDER (not from file edits).
 * - Last entry in the list = “today” on each deploy/build (always the Newest ribbon + top featured slot).
 * - Earlier entries = stepped back 14 days each.
 * - Editing an article’s .md does not change its date or slot; add a new slug at the end for a new “latest”.
 */
/** Latest post anchors to “today”; earlier posts are spaced 14 days apart */
export function getPublicationDateForIndex(index: number, anchorEnd = new Date()): Date {
  const end = new Date(anchorEnd);
  end.setHours(12, 0, 0, 0);
  const totalSpan = (BLOG_PUBLICATION_ORDER.length - 1) * WEEKS_BETWEEN_POSTS * MS_PER_DAY;
  const startMs = end.getTime() - totalSpan;
  return new Date(startMs + index * WEEKS_BETWEEN_POSTS * MS_PER_DAY);
}

export function getPublicationIndex(slug: string): number {
  const index = BLOG_PUBLICATION_ORDER.indexOf(slug as BlogSlug);
  return index === -1 ? -1 : index;
}

export function getPublicationDateForSlug(slug: string, anchorEnd = new Date()): Date | null {
  const index = getPublicationIndex(slug);
  if (index === -1) return null;
  return getPublicationDateForIndex(index, anchorEnd);
}

export function isPostPublished(publishedAt: Date, now = new Date()): boolean {
  const endOfToday = new Date(now);
  endOfToday.setHours(23, 59, 59, 999);
  return publishedAt.getTime() <= endOfToday.getTime();
}

export function formatPublicationDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
