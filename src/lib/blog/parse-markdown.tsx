import Link from "next/link";
import type { ReactNode } from "react";

type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

function parseBlocks(markdown: string): Block[] {
  const blocks: Block[] = [];
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let paragraphLines: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    const text = paragraphLines.join(" ").trim();
    if (text) blocks.push({ type: "paragraph", text });
    paragraphLines = [];
  };

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: "list", items: [...listItems] });
      listItems = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "heading", text: trimmed.slice(3).trim() });
      continue;
    }

    if (trimmed.startsWith("•") || trimmed.startsWith("- ")) {
      flushParagraph();
      const item = trimmed.replace(/^[-•]\s*/, "").trim();
      if (item) listItems.push(item);
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushList();
      continue;
    }

    flushList();
    paragraphLines.push(trimmed);
  }

  flushParagraph();
  flushList();
  return blocks;
}

function renderInlineMarkdown(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let partIndex = 0;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const label = match[1];
    const href = match[2];
    const isExternal = href.startsWith("http://") || href.startsWith("https://");
    const className =
      "font-medium text-charcoal underline decoration-charcoal/30 underline-offset-4 transition-colors hover:decoration-charcoal";

    if (isExternal) {
      nodes.push(
        <a
          key={`${keyPrefix}-a-${partIndex}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {label}
        </a>,
      );
    } else {
      nodes.push(
        <Link
          key={`${keyPrefix}-a-${partIndex}`}
          href={href}
          className={className}
        >
          {label}
        </Link>,
      );
    }

    lastIndex = match.index + match[0].length;
    partIndex += 1;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}

export function renderBlogMarkdown(markdown: string): ReactNode[] {
  return parseBlocks(markdown).map((block, index) => {
    if (block.type === "heading") {
      return (
        <h2
          key={`h-${index}`}
          className="mt-12 border-l-[3px] border-charcoal pl-4 text-xl font-semibold tracking-tight text-charcoal first:mt-0 lg:text-2xl"
        >
          {block.text}
        </h2>
      );
    }

    if (block.type === "list") {
      return (
        <ul
          key={`ul-${index}`}
          className="mt-6 list-disc space-y-2 pl-6 text-base leading-relaxed text-charcoal/85 lg:text-lg"
        >
          {block.items.map((item, itemIndex) => (
            <li key={`${index}-${itemIndex}-${item.slice(0, 24)}`}>
              {renderInlineMarkdown(item, `li-${index}-${itemIndex}`)}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p
        key={`p-${index}`}
        className="mt-6 text-base leading-relaxed text-charcoal/85 lg:text-lg"
      >
        {renderInlineMarkdown(block.text, `p-${index}`)}
      </p>
    );
  });
}
