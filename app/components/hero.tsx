import { useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowDown, ArrowUpRight, Braces, Frame, Play } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Artwork } from "./image";
import { usePreferences } from "./preferences";

gsap.registerPlugin(useGSAP);
const modes = [
  {
    name: "Design",
    note: "Identity, with intention.",
    src: "ecoloop-main.png",
    alt: "Ecoloop brand identity",
    project: "Ecoloop",
    to: "/project/ecoloop",
    icon: Frame,
  },
  {
    name: "Film",
    note: "Every frame, a feeling.",
    src: "thumbnails/reck1.jpeg",
    alt: "A frame from the Reckless Era collection film",
    project: "Reckless Era",
    to: "/films/reckless-era",
    icon: Play,
  },
  {
    name: "Code",
    note: "Ideas you can interact with.",
    src: "thumbnails/fbl.png",
    alt: "Fantasy BUSA League interface",
    project: "Fantasy BUSA League",
    to: "/project/fbl",
    icon: Braces,
  },
];
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const { reduced } = usePreferences();
  const [active, setActive] = useState(0);
  const current = modes[active];
  const { contextSafe } = useGSAP(
    () => {
      if (reduced) return;
      gsap.fromTo(
        ".hero-word",
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
        },
      );
      gsap.fromTo(
        ".hero-stage",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          delay: 0.2,
          ease: "power3.out",
          clearProps: "all",
        },
      );
    },
    { scope: root, dependencies: [reduced], revertOnUpdate: true },
  );
  useGSAP(
    () => {
      if (!reduced)
        gsap.fromTo(
          ".stage-art",
          { opacity: 0.2, scale: 1.06 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
            clearProps: "all",
          },
        );
    },
    { scope: root, dependencies: [active, reduced], revertOnUpdate: true },
  );
  function move(event: React.PointerEvent) {
    contextSafe(() => {
      if (reduced || event.pointerType !== "mouse") return;
      const rect = event.currentTarget.getBoundingClientRect();
      gsap.to(frame.current, {
        rotateY: ((event.clientX - rect.left) / rect.width - 0.5) * 11,
        rotateX: -((event.clientY - rect.top) / rect.height - 0.5) * 9,
        duration: 0.7,
        ease: "power2.out",
        overwrite: "auto",
      });
    })();
  }
  function reset() {
    contextSafe(() =>
      gsap.to(frame.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.9,
        ease: "power3.out",
        overwrite: "auto",
      }),
    )();
  }
  return (
    <section
      ref={root}
      className="hero section-pad"
      aria-labelledby="hero-title"
    >
      <div className="hero-topline mono">
        <span>AKINOLA AKINJIDE — THE CREATIVE GENIE</span>
        <span className="hero-edition">INDEPENDENT / MULTIDISCIPLINARY</span>
      </div>
      <div className="hero-composition">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span className="hero-word">Ideas,</span>
            <span className="hero-word">
              made <em>real.</em>
            </span>
          </h1>
          <p>
            I connect design, film and code
            <br className="desktop-break" /> to make things worth experiencing.
          </p>
          <Link className="hero-cta" to="/work" viewTransition>
            Explore my work{" "}
            <span>
              <ArrowUpRight size={22} />
            </span>
          </Link>
        </div>
        <div
          className={`hero-stage stage-${current.name.toLowerCase()}`}
          onPointerMove={move}
          onPointerLeave={reset}
        >
          <div className="stage-orbit" aria-hidden="true" />
          <span className="stage-coordinate mono" aria-hidden="true">
            FIG. 0{active + 1} / THE LIVING STUDIO
          </span>
          <div ref={frame} className="spatial-frame">
            <div className="frame-bar">
              <span className="frame-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span className="mono">{current.project}</span>
              <ArrowUpRight size={12} />
            </div>
            <Link
              to={current.to}
              viewTransition
              className="stage-image"
              aria-label={`Explore ${current.project}`}
            >
              <Artwork
                key={active}
                className="stage-art"
                src={current.src}
                alt={current.alt}
                priority
                sizes="(max-width: 700px) 90vw, 46vw"
              />
              {active === 1 && (
                <span className="stage-play" aria-hidden="true">
                  <Play fill="currentColor" size={22} />
                </span>
              )}
            </Link>
            <div className="frame-caption">
              <span>{current.note}</span>
              <span className="mono">0{active + 1} / 03</span>
            </div>
          </div>
          <div
            className="stage-controls"
            aria-label="Explore creative disciplines"
          >
            {modes.map((mode, i) => (
              <button
                key={mode.name}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
              >
                <mode.icon size={15} />
                {mode.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#selected" className="scroll-cue mono">
          <ArrowDown size={15} />
          Scroll to discover
        </a>
        <span className="mono">
          A curious mind.
          <br />
          An open canvas.
        </span>
        <span className="hero-signature" aria-hidden="true">
          g.
        </span>
      </div>
    </section>
  );
}
