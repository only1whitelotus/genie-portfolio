import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { usePreferences } from "../components/preferences";
import { Link } from "react-router";
import { ArrowUpRight, Play, ArrowDownRight } from "lucide-react";
import { Hero } from "../components/hero";
import { ProjectCard } from "../components/cards";
import { Artwork } from "../components/image";
import { ContactBand, TextLink } from "../components/shell";
import { projects, experiments } from "../data/content";
import { seo, siteUrl } from "../lib/seo";

export const meta = () =>
  seo(
    "home",
    "The living studio of Akinola Akinjide. Explore brand identities, films and digital products at the intersection of design, film and code.",
  );
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {
  const root = useRef<HTMLElement>(null);
  const { reduced } = usePreferences();
  useGSAP(
    () => {
      if (reduced) return;
      gsap.to(".practice-asterisk", {
        rotate: 180,
        ease: "none",
        scrollTrigger: {
          trigger: ".practice-section",
          start: "top 85%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
      gsap.utils
        .toArray<HTMLElement>(".practice-row")
        .forEach((row) =>
          gsap.fromTo(
            row,
            { "--row-progress": 0 },
            {
              "--row-progress": 1,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                end: "top 45%",
                scrub: true,
              },
            },
          ),
        );
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true },
  );
  return (
    <main id="main" ref={root}>
      <Hero />
      <div id="work" />
      <section
        id="selected"
        className="selected-section light-section section-pad"
        aria-labelledby="selected-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / A selection of what I do</p>
            <h2 id="selected-title">
              Good ideas.
              <br />
              Real things.
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              Different mediums.
              <br />
              The same attention to detail.
            </p>
            <TextLink to="/work">
              All selected work <sup>05</sup>
            </TextLink>
          </div>
        </div>
        <div className="selected-grid">
          <ProjectCard project={projects[0]} index={0} />
          <ProjectCard project={projects[1]} index={1} />
        </div>
        <div className="selected-caption mono">
          <span>IDENTITIES YOU CAN RECOGNIZE.</span>
          <span>EXPERIENCES YOU CAN USE.</span>
          <ArrowDownRight size={20} />
        </div>
      </section>
      <section
        className="film-feature section-pad"
        aria-labelledby="film-title"
      >
        <div className="film-feature-intro">
          <p className="eyebrow">02 / Moving pictures</p>
          <h2 id="film-title">
            Make them
            <br />
            <em>feel</em> something.
          </h2>
          <p>
            A moment, a rhythm, a point of view.
            <br />
            Stories shaped one frame at a time.
          </p>
          <TextLink to="/films">Enter the screening room</TextLink>
        </div>
        <Link
          className="film-feature-art"
          to="/films/reckless-era"
          viewTransition
          aria-label="Watch Reckless Era collection launch"
        >
          <Artwork
            src="thumbnails/reck1.jpeg"
            alt="A smiling model wearing Reckless Era in a frame from the collection film"
            sizes="(max-width: 800px) 100vw, 60vw"
          />
          <span className="feature-play">
            <Play size={30} fill="currentColor" />
          </span>
          <span className="film-feature-caption">
            <span>Reckless Era</span>
            <span className="mono">
              DIRECTION + EDIT <ArrowUpRight size={15} />
            </span>
          </span>
        </Link>
      </section>
      <section
        id="expertise"
        className="practice-section light-section section-pad"
        aria-labelledby="practice-title"
      >
        <div className="practice-intro">
          <p className="eyebrow">03 / The way I see it</p>
          <h2 id="practice-title">
            The interesting
            <br />
            part is where
            <br />
            <span>things meet.</span>
          </h2>
          <span className="practice-asterisk" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="practice-list">
          {[
            [
              "01",
              "Design",
              "Give an idea a language.",
              "Identity systems, art direction and interfaces with a clear point of view.",
            ],
            [
              "02",
              "Film",
              "Give it a feeling.",
              "Direction, editing and motion that make the story land.",
            ],
            [
              "03",
              "Code",
              "Give it a life.",
              "Responsive products and interactions, built to be used.",
            ],
          ].map(([n, title, lead, text]) => (
            <div className="practice-row" key={n}>
              <span className="mono">{n}</span>
              <div>
                <h3>
                  {title}
                  <ArrowUpRight size={22} />
                </h3>
                <p>
                  <strong>{lead}</strong> {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="lab-teaser section-pad" aria-labelledby="lab-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / Curiosity, left open</p>
            <h2 id="lab-title">
              A little room
              <br />
              to play.
            </h2>
          </div>
          <div className="section-heading-aside">
            <p>
              Small experiments.
              <br />
              Go on. Touch something.
            </p>
            <TextLink to="/lab">Open the lab</TextLink>
          </div>
        </div>
        <div className="lab-preview-grid">
          {experiments.map((experiment, i) => (
            <Link
              key={experiment.slug}
              className={`experiment-card experiment-${i}`}
              to={`/lab/${experiment.slug}`}
              viewTransition
            >
              <div className="experiment-art" aria-hidden="true">
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
              <div className="experiment-card-info">
                <div>
                  <span className="mono">
                    {experiment.number} / {experiment.discipline}
                  </span>
                  <h3>{experiment.name}</h3>
                </div>
                <ArrowUpRight size={25} />
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section
        id="about"
        className="about-teaser light-section section-pad"
        aria-labelledby="about-title"
      >
        <div className="about-teaser-photo">
          <Artwork
            src="profile.png"
            alt="Akinola Akinjide, The Creative Genie"
          />
          <span className="photo-note mono">THE PERSON BEHIND THE PIXELS.</span>
        </div>
        <div className="about-teaser-copy">
          <p className="eyebrow">05 / Hello, I’m Akinjide</p>
          <h2 id="about-title">
            One person.
            <br />A few different
            <br />
            <span>ways of seeing.</span>
          </h2>
          <p>
            I’m a designer, filmmaker and developer. I like taking an idea
            seriously enough to find the right way to bring it to life, even
            when that means moving between disciplines.
          </p>
          <TextLink to="/about">A little more about me</TextLink>
        </div>
      </section>
      <ContactBand />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Akinola Akinjide",
            alternateName: "The Creative Genie",
            url: siteUrl,
            jobTitle: "Designer, Filmmaker & Developer",
            sameAs: [
              "https://www.behance.net/whitelotus9",
              "https://github.com/only1whitelotus",
              "https://www.linkedin.com/in/only1whitelotus",
            ],
          }),
        }}
      />
    </main>
  );
}
