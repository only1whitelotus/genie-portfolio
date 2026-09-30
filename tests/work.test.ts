import test from "node:test";
import assert from "node:assert/strict";
import { projects, films } from "../app/data/content.ts";
import { selectWork, workFilter, workHref } from "../app/lib/work.ts";

test("discipline filters preserve the full catalogue and separate films from code", () => {
  assert.equal(
    selectWork(projects, films, "all").total,
    projects.length + films.length,
  );
  assert.equal(
    selectWork(projects, films, "design").projects.length,
    projects.length,
  );
  assert.equal(selectWork(projects, films, "film").projects.length, 0);
  assert.equal(selectWork(projects, films, "film").films.length, films.length);
  const code = selectWork(projects, films, "code");
  assert.ok(code.projects.length > 0);
  assert.ok(code.projects.every((project) => project.discipline === "Code"));
  assert.equal(code.films.length, 0);
  assert.equal(workFilter("unknown"), "all");
});

test("search matches client names and skills across words, case and accents", () => {
  assert.deepEqual(
    selectWork(projects, films, "all", "  ÉCOLOOP   brand ").projects.map(
      (p) => p.slug,
    ),
    ["ecoloop"],
  );
  assert.equal(selectWork(projects, films, "film", "reckless").films.length, 3);
  assert.equal(selectWork(projects, films, "code", "reckless").total, 0);
  assert.equal(selectWork(projects, films, "all", "zzzz no match").total, 0);
  assert.equal(
    selectWork(projects, films, "all", "   ").total,
    projects.length + films.length,
  );
});

test("filter links retain searches and encode reserved URL characters", () => {
  const href = workHref("film", "direction & edit");
  const url = new URL(href, "https://example.com");
  assert.equal(url.searchParams.get("type"), "film");
  assert.equal(url.searchParams.get("q"), "direction & edit");
  assert.equal(workHref("all"), "/work");
  assert.equal(workHref("all", "  "), "/work");
});
