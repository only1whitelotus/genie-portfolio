import { ArrowUpRight } from "lucide-react";
import { Artwork, imageSource } from "../components/image";
import { ContactBand } from "../components/shell";
import { socialLinks } from "../data/content";
import { seo } from "../lib/seo";

export const meta = () =>
  seo(
    "About Akinjide",
    "Meet Akinola Akinjide, The Creative Genie: a multidisciplinary designer, filmmaker and developer connecting ideas across mediums.",
    "/about",
    imageSource("identity/genies-face.jpeg"),
  );
export default function About() {
  return (
    <main id="main">
      <section className="about-header section-pad light-section">
        <div>
          <p className="eyebrow">AKINOLA AKINJIDE / THE CREATIVE GENIE</p>
          <h1>
            Curiosity
            <br />
            is the
            <br />
            <em>constant.</em>
          </h1>
        </div>
        <div className="about-portrait">
          <Artwork
            src="identity/genies-face.jpeg"
            alt="Portrait of Akinola Akinjide wearing round sunglasses and a burgundy cardigan"
            priority
            sizes="(max-width: 760px) 88vw, 45vw"
          />
          <span className="mono">HELLO, I’M AKINJIDE.</span>
        </div>
      </section>
      <section className="about-story light-section section-pad">
        <p className="eyebrow">A LITTLE CONTEXT</p>
        <div>
          <h2>
            I like an idea that asks me
            <br />
            to learn something new.
          </h2>
          <p>
            I work across visual identity, filmmaking and software. Sometimes an
            idea needs a strong mark. Sometimes it needs a story. Sometimes it
            needs a product you can actually use.
          </p>
          <p>
            Moving between those worlds gives me more ways to solve a problem. I
            can think about how something looks, how it feels in motion and how
            it works when someone puts it to use.
          </p>
          <p>
            This portfolio is built around that overlap. The work is the
            evidence; the experiments are where the next ideas begin.
          </p>
        </div>
      </section>
      <section className="about-process section-pad">
        <p className="eyebrow">HOW I WORK</p>
        <div className="process-grid">
          {[
            [
              "01",
              "Find the point.",
              "Understand what needs to be said, who it is for and what a useful outcome looks like.",
            ],
            [
              "02",
              "Give it form.",
              "Explore the direction, build the visual language and make something concrete enough to react to.",
            ],
            [
              "03",
              "Make it work.",
              "Test the details in their real context, refine the experience and carry the idea through to delivery.",
            ],
          ].map(([n, title, body]) => (
            <article key={n}>
              <span className="mono">{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="elsewhere light-section section-pad">
        <h2>
          Elsewhere
          <br />
          on the internet.
        </h2>
        <div>
          {socialLinks.map((s) => (
            <a href={s.href} key={s.label} target="_blank" rel="noreferrer">
              {s.label}
              <ArrowUpRight />
            </a>
          ))}
          <a
            href="https://drive.google.com/drive/folders/1-n_6FIrqUOfvWUQgJmepnYtKQOTHpniw"
            target="_blank"
            rel="noreferrer"
          >
            Résumé & resources
            <ArrowUpRight />
          </a>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
