import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { projects, films, experiments } from "../app/data/content.ts";

test("published slugs are unique and legacy project URLs survive", () => {
  for (const group of [projects, films, experiments])
    assert.equal(new Set(group.map((item) => item.slug)).size, group.length);
  for (const slug of ["ecoloop", "fbl", "foodify", "rex", "chop-central"])
    assert.ok(projects.find((p) => p.slug === slug));
  assert.equal(new Set(films.map((f) => f.legacyId)).size, films.length);
});
test("every published artwork has responsive variants and all films have playback destinations", () => {
  const images = JSON.parse(readFileSync("app/data/images.json", "utf8"));
  const derivatives = new Set<string>();
  for (const [key, image] of Object.entries(images) as [
    string,
    { width: number; height: number; sources: { src: string }[] },
  ][]) {
    assert.ok(existsSync(`public/${key}`), `Missing editing source: ${key}`);
    assert.ok(image.width > 0 && image.height > 0);
    for (const variant of image.sources) {
      derivatives.add(variant.src);
      assert.ok(existsSync(`public${variant.src}`), `Missing ${variant.src}`);
    }
  }
  for (const file of readdirSync("public/media").filter((file) =>
    file.endsWith(".webp"),
  )) {
    assert.ok(
      derivatives.has(`/media/${file}`),
      `Untracked image derivative: ${file}`,
    );
  }
  const allImages = projects
    .flatMap((p) => [
      p.cover,
      ...p.chapters.flatMap((c) => c.images.map((i) => i.src)),
    ])
    .concat(films.map((f) => f.poster));
  for (const key of allImages) {
    assert.ok(images[key], `Missing image metadata: ${key}`);
    assert.ok(images[key].width > 0 && images[key].height > 0);
    for (const variant of images[key].sources)
      assert.ok(existsSync(`public${variant.src}`), `Missing ${variant.src}`);
  }
  for (const film of films) {
    assert.ok(film.credits.length);
    if (film.file) assert.ok(existsSync(`public/media/${film.file}.mp4`));
    else
      assert.match(
        film.external || "",
        /^https:\/\/www\.instagram\.com\/reel\//,
      );
  }
});
