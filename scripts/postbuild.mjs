import {
  readFile,
  writeFile,
  copyFile,
  readdir,
  rm,
  cp,
} from "node:fs/promises";
import path from "node:path";

const root = path.resolve("build/client");
await cp("public/media", path.join(root, "media"), { recursive: true });
await copyFile("public/favicon.svg", path.join(root, "favicon.svg"));
const images = JSON.parse(await readFile("app/data/images.json", "utf8"));
// Keep source media in git for editing; publish only browser-ready derivatives.
for (const source of Object.keys(images))
  await rm(path.join(root, source), { force: true });
await rm(path.join(root, "videos"), { recursive: true, force: true });
await copyFile(path.join(root, "404/index.html"), path.join(root, "404.html"));
await rm(path.join(root, "__spa-fallback.html"), { force: true });
const routes = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === "assets" || entry.name === "media") continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.name === "index.html") {
      const route = "/" + path.relative(root, dir).replaceAll(path.sep, "/");
      if (route === "/404" || route.startsWith("/category/")) continue;
      routes.push(route);
    }
  }
}
await walk(root);
const urls = routes
  .sort()
  .map(
    (route) =>
      `  <url><loc>https://creativegenie.vercel.app${route}</loc></url>`,
  )
  .join("\n");
await writeFile(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
await writeFile(
  path.join(root, "robots.txt"),
  "User-agent: *\nAllow: /\n\nSitemap: https://creativegenie.vercel.app/sitemap.xml\n",
);
console.log(
  `Postbuild: ${routes.length} public routes, custom 404, sitemap and optimized media.`,
);
