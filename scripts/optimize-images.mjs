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
  const source = "public/images/images/mobile hero.png";
  if (!fs.existsSync(source)) return;

  await sharp(source)
    .rotate()
    .resize(1080, null, { withoutEnlargement: true, fit: "inside" })
    .webp({ quality: 78, effort: 4 })
    .toFile("public/images/images/mobile-hero.webp");

  await sharp(source)
    .rotate()
    .resize(1080, null, { withoutEnlargement: true, fit: "inside" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile("public/images/images/mobile-hero.jpg");

  console.log("mobile-hero.webp + mobile-hero.jpg updated");
}

await exportMobileHero();
await optimizeInPlace("public/images/hero-consultation.jpg", 1920, 82);
await optimizeInPlace("public/images/procedures-home.jpg", 1600, 80);

for (const file of fs.readdirSync("public/images/procedures")) {
  if (!file.endsWith(".jpg")) continue;
  await optimizeInPlace(path.join("public/images/procedures", file), 1400, 76);
}
