/**
 * Scans public/images and writes focal points for object-position CSS.
 * Uses smartcrop saliency (skin, edges, saturation) to centre faces or main subjects.
 *
 * Usage: npm run focal-points
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createCanvas, loadImage } from "canvas";
import smartcrop from "smartcrop";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const OUTPUT = path.join(ROOT, "src", "lib", "image-focal-points.ts");

const canvasFactory = (width, height) => createCanvas(width, height);
const imageOperations = smartcrop._canvasImageOperations(canvasFactory);

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const SKIP_PREFIXES = ["/video/"];

function toPublicPath(absolutePath) {
  const relative = path.relative(path.join(ROOT, "public"), absolutePath);
  return `/${relative.split(path.sep).join("/")}`;
}

function formatFocalPoint(xPercent, yPercent) {
  return `${xPercent.toFixed(1)}% ${yPercent.toFixed(1)}%`;
}

function cropToFocalPoint(crop, width, height) {
  const cx = ((crop.x + crop.width / 2) / width) * 100;
  const cy = ((crop.y + crop.height / 2) / height) * 100;
  return formatFocalPoint(
    Math.min(100, Math.max(0, cx)),
    Math.min(100, Math.max(0, cy)),
  );
}

async function walkImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walkImages(fullPath)));
      continue;
    }

    const ext = path.extname(entry.name).toLowerCase();
    if (!IMAGE_EXTENSIONS.has(ext)) continue;

    const publicPath = toPublicPath(fullPath);
    if (SKIP_PREFIXES.some((prefix) => publicPath.startsWith(prefix))) continue;

    files.push(fullPath);
  }

  return files.sort();
}

async function detectFocalPoint(filePath) {
  const img = await loadImage(filePath);
  const result = await smartcrop.crop(img, {
    width: Math.min(img.width, 320),
    height: Math.min(img.height, 320),
    ruleOfThirds: true,
    skinWeight: 2.4,
    canvasFactory,
    imageOperations,
  });

  return {
    objectPosition: cropToFocalPoint(result.topCrop, img.width, img.height),
    method: "subject",
  };
}

async function main() {
  const files = await walkImages(PUBLIC_DIR);
  const focalPoints = {};
  const methods = {};

  console.log(`Analyzing ${files.length} images…`);

  for (const filePath of files) {
    const publicPath = toPublicPath(filePath);
    try {
      const result = await detectFocalPoint(filePath);
      focalPoints[publicPath] = result.objectPosition;
      methods[publicPath] = result.method;
      console.log(`${publicPath} → ${result.objectPosition}`);
    } catch (error) {
      focalPoints[publicPath] = "center";
      methods[publicPath] = "fallback";
      console.warn(`fallback ${publicPath}`, error.message);
    }
  }

  const fileContents = `/**
 * Auto-generated focal points for cropped images.
 * Regenerate: npm run focal-points
 */
export type ImageFocalMethod = "face" | "face-primary" | "subject" | "fallback" | "manual";

export const imageFocalPoints = ${JSON.stringify(focalPoints, null, 2)} as const;

export const imageFocalMethods = ${JSON.stringify(methods, null, 2)} as const;

export type ImageFocalPath = keyof typeof imageFocalPoints;
`;

  await fs.writeFile(OUTPUT, fileContents, "utf8");
  console.log(`\nWrote ${OUTPUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
