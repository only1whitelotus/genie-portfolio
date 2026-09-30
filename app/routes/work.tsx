import { Link, useSearchParams } from "react-router";
import { ProjectCard, FilmCard } from "../components/cards";
import { ContactBand, TextLink } from "../components/shell";
import { projects, films } from "../data/content";
import { seo } from "../lib/seo";

export const meta = () =>
  seo(
    "Selected work",
    "Brand identities and digital products by Akinola Akinjide. Explore Ecoloop, Fantasy BUSA League, Rex Sartorial, Foodify and Chop Central.",
    "/work",
  );
export default function Work() {
  const [params] = useSearchParams();
  const filter = ["design", "film", "code"].includes(params.get("type") || "")
    ? params.get("type")
    : "all";
  const visible = projects.filter(
    (p) =>
      filter === "all" ||
      filter === "design" ||
      p.discipline.toLowerCase() === filter,
  );
  const visibleFilms = filter === "all" || filter === "film" ? films : [];
  const filters = [
    { value: "all", label: "All work", count: projects.length + films.length },
    { value: "design", label: "Brand & product", count: projects.length },
    { value: "film", label: "Film & motion", count: films.length },
    {
      value: "code",
      label: "Development",
      count: projects.filter((p) => p.discipline === "Code").length,
    },
  ];
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
        <nav className="filter-bar" aria-label="Filter work">
          {filters.map(({ value, label, count }) => (
            <Link
              key={value}
              to={value === "all" ? "/work" : `/work?type=${value}`}
              preventScrollReset
              viewTransition
              aria-current={filter === value ? "page" : undefined}
            >
              {label}
              <sup>{count}</sup>
            </Link>
          ))}
        </nav>
        <p className="sr-only" role="status">
          {visible.length + visibleFilms.length} projects shown
        </p>
        <div className="work-grid">
          {visible.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={projects.indexOf(project)}
            />
          ))}
          {visibleFilms.map((film, i) => (
            <FilmCard key={film.slug} film={film} index={i} />
          ))}
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
