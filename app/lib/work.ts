import type { Film, Project } from "../data/content.ts";

export const workFilters = ["all", "design", "film", "code"] as const;
export type WorkFilter = (typeof workFilters)[number];

export function workFilter(value: string | null): WorkFilter {
  return workFilters.includes(value as WorkFilter)
    ? (value as WorkFilter)
    : "all";
}

function searchable(value: string) {
  return value.normalize("NFKD").replace(/\p{M}/gu, "").toLowerCase();
}

export function selectWork(
  projects: Project[],
  films: Film[],
  filter: WorkFilter,
  query = "",
) {
  const words = searchable(query).trim().split(/\s+/).filter(Boolean);
  const matches = (parts: string[]) => {
    const text = searchable(parts.join(" "));
    return words.every((word) => text.includes(word));
  };
  const visibleProjects = projects.filter((project) => {
    if (
      filter === "film" ||
      (filter === "code" && project.discipline !== "Code")
    )
      return false;
    return matches([
      project.name,
      project.line,
      project.discipline,
      project.role,
      project.tools,
      project.introduction,
      ...project.tags,
      ...project.deliverables,
    ]);
  });
  const visibleFilms =
    filter === "all" || filter === "film"
      ? films.filter((film) =>
          matches([
            film.client,
            film.title,
            film.category,
            film.description,
            ...film.credits.flatMap((credit) => [credit.label, credit.value]),
          ]),
        )
      : [];
  return {
    projects: visibleProjects,
    films: visibleFilms,
    total: visibleProjects.length + visibleFilms.length,
  };
}

export function workHref(filter: WorkFilter, query = "") {
  const params = new URLSearchParams();
  if (filter !== "all") params.set("type", filter);
  if (query.trim()) params.set("q", query.trim());
  return `/work${params.size ? `?${params}` : ""}`;
}
