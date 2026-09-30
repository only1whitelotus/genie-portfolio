import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import { experiments } from "../data/content";
import { ContactBand } from "../components/shell";
import { seo } from "../lib/seo";

export const meta = () =>
  seo(
    "The lab",
    "Interactive typography, motion and layout experiments. A small playground by The Creative Genie, built to be explored.",
    "/lab",
  );
export default function Lab() {
  return (
    <main id="main">
      <section className="page-intro section-pad lab-intro">
        <p className="eyebrow">OPEN EXPERIMENTS / ALWAYS CURIOUS</p>
        <h1>
          What happens
          <br />
          if we <em>try?</em>
        </h1>
        <div className="intro-bottom">
          <p>
            A small playground for type, timing and interaction.
            <br />
            Everything here is yours to play with.
          </p>
          <span className="mono">
            03 EXPERIMENTS
            <br />
            NO RIGHT ANSWERS.
          </span>
        </div>
      </section>
      <section
        className="lab-index section-pad"
        aria-label="Interactive experiments"
      >
        {experiments.map((e, i) => (
          <Link
            key={e.slug}
            to={`/lab/${e.slug}`}
            viewTransition
            className={`lab-row experiment-${i}`}
          >
            <div className="lab-row-art" aria-hidden="true">
              {i === 0 ? (
                <span className="type-sample">Aa</span>
              ) : i === 1 ? (
                <span className="motion-sample">
                  <i />
                  <i />
                  <i />
                </span>
              ) : (
                <span className="layout-sample">
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              )}
            </div>
            <div className="lab-row-copy">
              <p className="eyebrow">
                {e.number} / {e.discipline}
              </p>
              <h2>{e.name}</h2>
              <p>{e.description}</p>
              <span className="text-link">
                Try the experiment
                <ArrowUpRight />
              </span>
            </div>
          </Link>
        ))}
      </section>
      <ContactBand />
    </main>
  );
}
