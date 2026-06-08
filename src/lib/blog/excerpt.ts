/** First paragraph(s) from article markdown for card previews */
export function getArticleExcerpt(markdown: string, maxLength = 155): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const parts: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("##")) continue;
    if (trimmed.startsWith("•") || trimmed.startsWith("- ")) continue;
    parts.push(trimmed);
    if (parts.join(" ").length >= maxLength) break;
  }

  let text = parts.join(" ").replace(/\s+/g, " ").trim();
  if (!text) return "";

  if (text.length <= maxLength) return text;

  let truncated = text.slice(0, maxLength).trimEnd();
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > maxLength * 0.55) {
    truncated = truncated.slice(0, lastSpace);
  }

  return `${truncated}…`;
}
