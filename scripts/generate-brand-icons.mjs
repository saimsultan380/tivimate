import sharp from "sharp";
import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");
const appDir = path.join(root, "app");
const sourceFull = path.join(publicDir, "logoo.png");

const BRAND_BG = { r: 255, g: 255, b: 255, alpha: 1 };

/** Make near-black background transparent while keeping logo colors. */
async function toTransparentPng(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const brightness = (r + g + b) / 3;
    // Treat near-black as background
    if (brightness < 18) {
      data[i + 3] = 0;
    }
  }

  return sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  })
    .trim({ threshold: 5 })
    .png()
    .toBuffer();
}

async function extractTiviMark(fullTransparent) {
  const { data, info } = await sharp(fullTransparent)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  let blueMaxX = 0;
  let blueMinX = w;
  let blueMinY = h;
  let blueMaxY = 0;

  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const i = (y * w + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a < 80) continue;
      // Bright sky-blue "tivi" letters
      if (r < 100 && g > 120 && g < 230 && b > 200 && b > g) {
        if (x > blueMaxX) blueMaxX = x;
        if (x < blueMinX) blueMinX = x;
        if (y < blueMinY) blueMinY = y;
        if (y > blueMaxY) blueMaxY = y;
      }
    }
  }

  const padX = 6;
  const padY = 8;
  const left = Math.max(0, blueMinX - padX);
  const top = Math.max(0, blueMinY - padY);
  const width = Math.min(w - left, blueMaxX - blueMinX + padX * 2);
  const height = Math.min(h - top, blueMaxY - blueMinY + padY * 2);

  return sharp(fullTransparent)
    .extract({ left, top, width, height })
    .png()
    .toBuffer();
}

async function writeSquareFromMark(markBuffer, size, outPath, padding = 0.12) {
  const inner = Math.round(size * (1 - padding * 2));
  const logo = await sharp(markBuffer)
    .resize(inner, inner, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BRAND_BG,
    },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

async function writeOgImage(markBuffer, outPath) {
  const width = 1200;
  const height = 630;
  const logoWidth = 520;

  const logo = await sharp(markBuffer)
    .resize(logoWidth, Math.round(logoWidth * 0.55), {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: BRAND_BG,
    },
  })
    .composite([{ input: logo, gravity: "centre" }])
    .png({ compressionLevel: 9 })
    .toFile(outPath);
}

await mkdir(publicDir, { recursive: true });

const fullTransparent = await toTransparentPng(sourceFull);
const tiviMark = await extractTiviMark(fullTransparent);

// Full transparent logo for header/footer
await sharp(fullTransparent)
  .png({ compressionLevel: 9 })
  .toFile(path.join(publicDir, "logo.png"));

// Tivi-only mark for icons / SERP
await sharp(tiviMark)
  .png({ compressionLevel: 9 })
  .toFile(path.join(publicDir, "logo-mark.png"));

await Promise.all([
  writeSquareFromMark(tiviMark, 16, path.join(publicDir, "favicon-16.png"), 0.08),
  writeSquareFromMark(tiviMark, 32, path.join(publicDir, "favicon-32.png"), 0.08),
  writeSquareFromMark(tiviMark, 48, path.join(publicDir, "favicon-48.png"), 0.08),
  writeSquareFromMark(tiviMark, 96, path.join(publicDir, "favicon-96.png"), 0.08),
  writeSquareFromMark(tiviMark, 180, path.join(publicDir, "apple-touch-icon.png"), 0.1),
  writeSquareFromMark(tiviMark, 192, path.join(publicDir, "icon-192.png"), 0.1),
  writeSquareFromMark(tiviMark, 512, path.join(publicDir, "icon-512.png"), 0.1),
  writeSquareFromMark(tiviMark, 512, path.join(publicDir, "logo-512.png"), 0.1),
  writeOgImage(tiviMark, path.join(publicDir, "og-image.png")),
]);

await copyFile(path.join(publicDir, "favicon-48.png"), path.join(appDir, "icon.png"));
await copyFile(path.join(publicDir, "apple-touch-icon.png"), path.join(appDir, "apple-icon.png"));

console.log("Brand icons generated from logoo.png (tivi mark for favicons).");
