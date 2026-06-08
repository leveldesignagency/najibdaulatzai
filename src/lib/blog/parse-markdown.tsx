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
          {block.items.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ul>
      );
    }

    return (
      <p
        key={`p-${index}`}
        className="mt-6 text-base leading-relaxed text-charcoal/85 lg:text-lg"
      >
        {block.text}
      </p>
    );
  });
}
