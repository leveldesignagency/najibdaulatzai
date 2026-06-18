/**
 * Compress large JPG/PNG assets for faster mobile loading.
 * Run: node scripts/optimize-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

async function optimizeInPlace(file, maxWidth, quality) {
  const tmp = `${file}.tmp.jpg`;
  await sharp(file)
    .rotate()
    .resize(maxWidth, null, { withoutEnlargement: true, fit: "inside" })
    .jpeg({ quality, mozjpeg: true })
    .toFile(tmp);
  fs.renameSync(tmp, file);
  console.log(`${path.basename(file)}: ${(fs.statSync(file).size / 1024).toFixed(0)}KB`);
}

async function exportMobileHero() {
  const source =
    ["public/mobile hero.png", "public/images/images/mobile hero.png"].find(
      (path) => fs.existsSync(path),
    ) ?? null;
  if (!source) return;

  if (source !== "public/images/images/mobile hero.png") {
    fs.copyFileSync(source, "public/images/images/mobile hero.png");
  }

  await sharp(source)
    .rotate()
    .resize(1080, null, { withoutEnlargement: true, fit: "inside" })
    .webp({ quality: 78, effort: 4 })
    .toFile("public/images/images/mobile-hero-2026.webp");

  await sharp(source)
    .rotate()
    .resize(1080, null, { withoutEnlargement: true, fit: "inside" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile("public/images/images/mobile-hero.jpg");

  console.log("mobile-hero-2026.webp + mobile-hero.jpg updated");
}

await exportMobileHero();

async function exportSocialShareImages() {
  const src = "public/Social Share Najib.png";
  if (!fs.existsSync(src)) return;

  const out = "public/images/og";
  fs.mkdirSync(out, { recursive: true });

  await sharp(src)
    .rotate()
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(`${out}/social-share-najib.jpg`);

  await sharp(src)
    .rotate()
    .resize(1200, 1200, { fit: "cover", position: "centre" })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(`${out}/social-share-najib-profile.jpg`);

  await sharp(src)
    .rotate()
    .resize(1920, null, { withoutEnlargement: true, fit: "inside" })
    .jpeg({ quality: 85, mozjpeg: true })
    .toFile(`${out}/social-share-najib-wide.jpg`);

  console.log("social-share OG images updated in public/images/og/");
}

await exportSocialShareImages();
await optimizeInPlace("public/images/hero-consultation.jpg", 1920, 82);
await optimizeInPlace("public/images/procedures-home.jpg", 1600, 80);

for (const file of fs.readdirSync("public/images/procedures")) {
  if (!file.endsWith(".jpg")) continue;
  await optimizeInPlace(path.join("public/images/procedures", file), 1400, 76);
}
