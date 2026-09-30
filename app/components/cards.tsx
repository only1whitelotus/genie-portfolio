import { Link } from "react-router";
import { ArrowUpRight, Play } from "lucide-react";
import type { Project, Film } from "../data/content";
import { Artwork } from "./image";

export function ProjectCard({
  project,
  index = 0,
  className = "",
}: {
  project: Project;
  index?: number;
  className?: string;
}) {
  return (
    <Link
      to={`/project/${project.slug}`}
      viewTransition
      className={`project-card ${className}`}
      style={{ "--project-color": project.color } as React.CSSProperties}
    >
      <div
        className={`project-art project-art-${project.slug}`}
        style={{ viewTransitionName: `art-${project.slug}` }}
      >
        <Artwork src={project.cover} alt={project.coverAlt} />
        <span className="card-open" aria-hidden="true">
          <ArrowUpRight size={24} />
        </span>
        <span className="project-number mono" aria-hidden="true">
          0{index + 1}
        </span>
      </div>
      <div className="project-card-label">
        <div>
          <h3>{project.name}</h3>
          <p>{project.tags.join(" / ")}</p>
        </div>
        <ArrowUpRight size={23} />
      </div>
    </Link>
  );
}
export function FilmCard({ film, index = 0 }: { film: Film; index?: number }) {
  return (
    <Link to={`/films/${film.slug}`} viewTransition className="film-card">
      <div className="film-card-image">
        <Artwork src={film.poster} alt={`${film.client} — ${film.category}`} />
        <span className="film-play" aria-hidden="true">
          <Play size={22} fill="currentColor" />
        </span>
        <span className="film-index mono">
          {String(index + 1).padStart(2, "0")} /{" "}
          {film.external ? "INSTAGRAM" : "FILM"}
        </span>
      </div>
      <div className="film-card-label">
        <div>
          <p className="mono">{film.category}</p>
          <h3>{film.client}</h3>
        </div>
        <ArrowUpRight size={23} />
      </div>
    </Link>
  );
}
