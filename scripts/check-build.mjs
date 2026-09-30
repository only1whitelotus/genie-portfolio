import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { gzipSync } from "node:zlib";
const root = path.resolve("build/client");
const pages = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || ["media", "assets"].includes(entry.name))
      continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name === "index.html") pages.push(file);
  }
}
await walk(root);
assert.equal(pages.length, 26, "Every declared route must produce HTML");
for (const file of pages) {
  const html = await readFile(file, "utf8");
  assert.ok(html.includes("<h1"), `${file} has a crawlable heading`);
  assert.match(html, /<title>[^<]+<\/title>/);
  assert.match(
    html,
    /rel="canonical" href="https:\/\/creativegenie\.vercel\.app/,
  );
  const ids = new Set(
    [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
  );
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(
      ids.has(decodeURIComponent(match[1])),
      `${file} references missing section #${match[1]}`,
    );
  }
  for (const match of html.matchAll(/(?:src|href)="(\/(?!\/)[^"?#]*)/g)) {
    const url = match[1];
    if (url === "/api/contact") continue;
    let target = path.join(root, decodeURIComponent(url));
    let info = await stat(target).catch(() => null);
    if (info?.isDirectory()) {
      target = path.join(target, "index.html");
      info = await stat(target).catch(() => null);
    }
    assert.ok(info, `${file} references missing ${url}`);
  }
}
assert.ok(
  (await readFile(path.join(root, "404.html"), "utf8")).includes(
    "OFF THE CANVAS",
  ),
);
const homeHtml = await readFile(path.join(root, "index.html"), "utf8");
const loaded = new Set(
  [...homeHtml.matchAll(/(?:src|href)="(\/assets\/[^" ]+\.js)"/g)].map(
    (match) => match[1].slice(1),
  ),
);
assert.ok(loaded.size > 5, "Homepage module preloads must be measurable");
assert.equal(
  await stat(path.join(root, "videos")).catch(() => null),
  null,
  "Original films must not be deployed",
);
assert.equal(
  await stat(path.join(root, "ecoloop-main.png")).catch(() => null),
  null,
  "Original PNGs must not be deployed",
);
let gzipBytes = 0;
for (const file of loaded)
  gzipBytes += gzipSync(await readFile(path.join(root, file))).byteLength;
assert.ok(
  gzipBytes < 250000,
  `Initial JS budget exceeded: ${gzipBytes} bytes gzip`,
);
console.log(
  `Verified ${pages.length} prerendered pages, internal links/media/section anchors, canonical metadata, 404, and homepage JS: ${(gzipBytes / 1000).toFixed(1)} KB gzip.`,
);
