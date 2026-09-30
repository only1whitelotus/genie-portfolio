import sharp from "sharp";
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public");
const manifest = {};
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (["media", "videos"].includes(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(file);
      continue;
    }
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const key = path.relative(root, file).replaceAll(path.sep, "/");
    const base = key.replace(/\.[^.]+$/, "").replaceAll("/", "-");
    const metadata = await sharp(file).metadata();
    const widths = [
      ...new Set([480, 960, 1600].map((w) => Math.min(w, metadata.width))),
    ];
    const sources = [];
    for (const width of widths) {
      const name = `${base}-${width}.webp`;
      await sharp(file)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 84, effort: 5 })
        .toFile(path.join(root, "media", name));
      sources.push({ width, src: `/media/${name}` });
    }
    manifest[key] = { width: metadata.width, height: metadata.height, sources };
  }
}
await mkdir(path.join(root, "media"), { recursive: true });
await mkdir("app/data", { recursive: true });
await walk(root);
await writeFile(
  "app/data/images.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log(
  `Optimized ${Object.keys(manifest).length} images into responsive WebP sources.`,
);
