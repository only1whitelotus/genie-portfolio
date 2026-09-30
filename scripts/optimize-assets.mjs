import sharp from "sharp";
import { readdir, mkdir, readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("public");
const manifest = {};
const previous = JSON.parse(
  await readFile("app/data/images.json", "utf8").catch((error) => {
    if (error.code === "ENOENT") return "{}";
    throw error;
  }),
);
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
    const isBrandMark = [
      "identity/genie-icon.png",
      "identity/genie-logo.png",
    ].includes(key);
    // Trim only transparent padding; preserve the supplied artwork and alpha.
    const input = isBrandMark
      ? await sharp(file).trim({ threshold: 1 }).toBuffer()
      : file;
    const metadata = await sharp(input).metadata();
    const targetWidths = isBrandMark
      ? key.endsWith("genie-icon.png")
        ? [48, 96, 192]
        : [160, 320, 640]
      : [480, 960, 1600];
    const widths = [
      ...new Set(targetWidths.map((w) => Math.min(w, metadata.width))),
    ];
    const sources = [];
    for (const width of widths) {
      const name = `${base}-${width}.webp`;
      await sharp(input)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 84, effort: 5, lossless: isBrandMark })
        .toFile(path.join(root, "media", name));
      sources.push({ width, src: `/media/${name}` });
    }
    manifest[key] = { width: metadata.width, height: metadata.height, sources };
  }
}
await mkdir(path.join(root, "media"), { recursive: true });
await mkdir("app/data", { recursive: true });
await walk(root);
const icon = await sharp(path.join(root, "identity/genie-icon.png"))
  .trim({ threshold: 1 })
  .toBuffer();
for (const size of [32, 64]) {
  await sharp(icon)
    .resize(size, size, { fit: "contain", background: "#00000000" })
    .png()
    .toFile(path.join(root, `media/genie-favicon-${size}.png`));
}
await sharp(icon)
  .resize(148, 148, { fit: "contain", background: "#121316" })
  .flatten({ background: "#121316" })
  .extend({ top: 16, bottom: 16, left: 16, right: 16, background: "#121316" })
  .png()
  .toFile(path.join(root, "media/genie-apple-touch.png"));
const generated = new Set(
  Object.values(manifest).flatMap((image) =>
    image.sources.map((source) => source.src),
  ),
);
let removed = 0;
for (const image of Object.values(previous)) {
  for (const { src } of image.sources) {
    // Only prune files produced by the previous image manifest, never films or originals.
    if (!generated.has(src) && /^\/media\/[^/]+\.webp$/.test(src)) {
      await rm(path.join(root, src.slice(1)), { force: true });
      removed++;
    }
  }
}
await writeFile(
  "app/data/images.json",
  JSON.stringify(manifest, null, 2) + "\n",
);
console.log(
  `Optimized ${Object.keys(manifest).length} images; removed ${removed} stale derivatives.`,
);
