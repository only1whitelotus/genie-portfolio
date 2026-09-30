import { Link, useParams, type MetaFunction } from "react-router";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { films } from "../data/content";
import { Artwork, imageSource } from "../components/image";
import { FilmPlayer } from "../components/film-player";
import { TextLink } from "../components/shell";
import { seo } from "../lib/seo";

export const meta: MetaFunction = ({ params }) => {
  const f = films.find((f) => f.slug === params.slug);
  return f
    ? seo(
        `${f.client} — ${f.category}`,
        f.description,
        `/films/${f.slug}`,
        imageSource(f.poster),
      )
    : seo("Film not found", "Explore the screening room.", "/404");
};
export default function Film() {
  const { slug } = useParams();
  const film = films.find((f) => f.slug === slug);
  if (!film) throw new Response("Film not found", { status: 404 });
  const next = films[(films.indexOf(film) + 1) % films.length];
  return (
    <main id="main" className="film-detail">
      <header className="film-detail-header section-pad">
        <Link className="back-link mono" to="/films">
          <ArrowLeft size={16} />
          THE SCREENING ROOM
        </Link>
        <div>
          <p className="eyebrow">
            {film.client} / {film.category}
          </p>
          <h1>{film.title}</h1>
        </div>
      </header>
      <div className="cinema-player">
        {film.file ? (
          <FilmPlayer
            key={film.slug}
            file={film.file}
            poster={film.poster}
            label={`${film.client} — ${film.category}`}
          />
        ) : (
          <a
            className="external-film"
            href={film.external}
            target="_blank"
            rel="noreferrer"
          >
            <Artwork
              src={film.poster}
              alt={`${film.client} film poster`}
              priority
            />
            <span className="external-film-cta">
              <Play fill="currentColor" />
              Watch on Instagram <ArrowUpRight size={18} />
            </span>
          </a>
        )}
      </div>
      <section className="film-notes section-pad">
        <div>
          <p className="eyebrow">ABOUT THE FILM</p>
          <p>{film.description}</p>
          {film.file && (
            <p className="film-access-note">
              Original film with audio. Playback starts when you press play.
            </p>
          )}
        </div>
        <dl className="film-credits">
          {film.credits.map((c) => (
            <div key={c.label}>
              <dt>{c.label}</dt>
              <dd>{c.value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <nav className="film-next section-pad" aria-label="More films">
        <TextLink to="/films">All films</TextLink>
        <TextLink to={`/films/${next.slug}`}>Next: {next.client}</TextLink>
      </nav>
    </main>
  );
}
