import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { FilmCard } from "../components/cards";
import { ContactBand } from "../components/shell";
import { films } from "../data/content";
import { seo } from "../lib/seo";

export const meta = () =>
  seo(
    "The screening room",
    "Direction, editing and motion by Akinola Akinjide. Fashion films, collection launches, product visualizers and motion design.",
    "/films",
  );
export default function Films() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const film = films.find((f) => f.legacyId === hash.slice(1));
    if (film) void navigate(`/films/${film.slug}`, { replace: true });
  }, [hash, navigate]);
  return (
    <main id="main">
      <section className="page-intro section-pad film-intro">
        <p className="eyebrow">DIRECTION / EDIT / MOTION</p>
        <h1>
          The screening
          <br />
          <em>room.</em>
          <span className="title-dot" />
        </h1>
        <div className="intro-bottom">
          <p>
            Clothes, people, products and the stories between them.
            <br />
            Press play. Stay for a feeling.
          </p>
          <span className="mono">
            08 SELECTED FILMS
            <br />
            SOUND ON, WHEN YOU’RE READY.
          </span>
        </div>
      </section>
      <section className="film-index section-pad" aria-label="Film collection">
        <div className="film-grid">
          {films.map((film, i) => (
            <FilmCard key={film.slug} film={film} index={i} />
          ))}
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
