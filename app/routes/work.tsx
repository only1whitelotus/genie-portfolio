import { useRef } from "react";
import { Link, useSearchParams } from "react-router";
import { Search, X } from "lucide-react";
import { ProjectCard, FilmCard } from "../components/cards";
import { ContactBand, TextLink } from "../components/shell";
import { projects, films } from "../data/content";
import { seo } from "../lib/seo";
import { selectWork, workFilter, workHref, type WorkFilter } from "../lib/work";

export const meta = () =>
  seo(
    "Selected work",
    "Brand identities and digital products by Akinola Akinjide. Explore Ecoloop, Fantasy BUSA League, Rex Sartorial, Foodify and Chop Central.",
    "/work",
  );
export default function Work() {
  const [params, setParams] = useSearchParams();
  const search = useRef<HTMLInputElement>(null);
  const filter = workFilter(params.get("type"));
  const query = params.get("q") || "";
  const visible = selectWork(projects, films, filter, query);
  const filters: { value: WorkFilter; label: string }[] = [
    { value: "all", label: "All work" },
    { value: "design", label: "Brand & product" },
    { value: "film", label: "Film & motion" },
    { value: "code", label: "Development" },
  ];
  function updateSearch(value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set("q", value);
    else next.delete("q");
    void setParams(next, { replace: true, preventScrollReset: true });
  }
  return (
    <main id="main">
      <section className="page-intro section-pad light-section">
        <p className="eyebrow">DESIGN / FILM / CODE</p>
        <h1>
          Made with
          <br />
          <em>intention.</em>
        </h1>
        <div className="intro-bottom">
          <p>
            From the first sketch to the final interaction.
            <br />A closer look at a few things I’ve made.
          </p>
          <TextLink to="/films">Enter the screening room</TextLink>
        </div>
      </section>
      <section
        className="work-index light-section section-pad"
        aria-label="Project collection"
      >
        <div className="work-toolbar">
          <div
            className="work-search"
            role="search"
            aria-label="Search selected work"
          >
            <Search size={19} aria-hidden="true" />
            <label className="sr-only" htmlFor="work-search">
              Search projects and films
            </label>
            <input
              ref={search}
              id="work-search"
              type="search"
              value={query}
              onChange={(event) => updateSearch(event.target.value)}
              placeholder="Search a project, skill or client…"
              maxLength={100}
              autoComplete="off"
              aria-controls="work-results"
            />
            {query && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => {
                  updateSearch("");
                  search.current?.focus();
                }}
              >
                <X size={17} />
              </button>
            )}
          </div>
          <p
            className="work-result-count mono"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {visible.total} {visible.total === 1 ? "result" : "results"}
            {query.trim() ? ` for “${query.trim()}”` : " to explore"}
          </p>
        </div>
        <nav className="filter-bar" aria-label="Filter work">
          {filters.map(({ value, label }) => (
            <Link
              key={value}
              to={workHref(value, query)}
              preventScrollReset
              viewTransition
              aria-current={filter === value ? "page" : undefined}
            >
              {label}
              <sup>{selectWork(projects, films, value, query).total}</sup>
            </Link>
          ))}
        </nav>
        <div id="work-results" className="work-grid">
          {visible.projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={projects.indexOf(project)}
            />
          ))}
          {visible.films.map((film, i) => (
            <FilmCard key={film.slug} film={film} index={i} />
          ))}
          {visible.total === 0 && (
            <div className="work-empty">
              <p className="eyebrow">A DIFFERENT WAY IN</p>
              <h2>No work matches just yet.</h2>
              <p>
                Try a client, a skill such as design or motion, or explore the
                full collection.
              </p>
              <button
                className="text-link"
                onClick={() => {
                  void setParams(
                    {},
                    { replace: true, preventScrollReset: true },
                  );
                  search.current?.focus();
                }}
              >
                Clear search and filters <X size={17} />
              </button>
            </div>
          )}
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
