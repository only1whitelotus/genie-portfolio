import { useRef, useState } from "react";
import { Link, useParams, type MetaFunction } from "react-router";
import { ArrowLeft, RotateCcw, Play, Shuffle } from "lucide-react";
import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { experiments } from "../data/content";
import { Artwork } from "../components/image";
import { usePreferences } from "../components/preferences";
import { seo } from "../lib/seo";

gsap.registerPlugin(useGSAP);
export const meta: MetaFunction = ({ params }) => {
  const e = experiments.find((e) => e.slug === params.slug);
  return e
    ? seo(e.name, e.description, `/lab/${e.slug}`)
    : seo("Experiment not found", "Explore the lab.", "/404");
};

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (v: number) => void;
}) {
  return (
    <label className="range-control">
      <span>
        {label}
        <output>
          {value}
          {unit}
        </output>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}
function TypePlay() {
  const [text, setText] = useState("Hello.");
  const [weight, setWeight] = useState(600);
  const [size, setSize] = useState(110);
  const [tracking, setTracking] = useState(-5);
  const [invert, setInvert] = useState(false);
  return (
    <div className="experiment-workbench">
      <div
        className={`type-canvas ${invert ? "type-inverted" : ""}`}
        style={
          {
            "--type-size": `${size}px`,
            "--type-weight": weight,
            "--type-tracking": `${tracking / 100}em`,
          } as React.CSSProperties
        }
      >
        <span className="canvas-label mono">
          MANROPE VARIABLE / LIVE SPECIMEN
        </span>
        <p>{text || "Hello."}</p>
        <span className="canvas-footer mono">
          {weight} WEIGHT · {size} PX · {tracking / 100} EM
        </span>
      </div>
      <div className="experiment-controls">
        <label className="text-control">
          Your words
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={24}
            placeholder="Hello."
          />
        </label>
        <Slider
          label="Weight"
          value={weight}
          min={200}
          max={800}
          step={10}
          onChange={setWeight}
        />
        <Slider
          label="Size"
          value={size}
          min={40}
          max={190}
          onChange={setSize}
          unit="px"
        />
        <Slider
          label="Letter spacing"
          value={tracking}
          min={-8}
          max={15}
          onChange={setTracking}
        />
        <button
          className="outline-button"
          onClick={() => setInvert(!invert)}
          aria-pressed={invert}
        >
          Invert colors
        </button>
        <button
          className="reset-button"
          onClick={() => {
            setText("Hello.");
            setWeight(600);
            setSize(110);
            setTracking(-5);
            setInvert(false);
          }}
        >
          <RotateCcw size={16} />
          Reset specimen
        </button>
      </div>
    </div>
  );
}
const curves = [
  {
    value: "none",
    label: "Linear",
    note: "A steady pace, from start to finish.",
  },
  {
    value: "power3.out",
    label: "Ease out",
    note: "Quick to respond, soft on arrival.",
  },
  {
    value: "power3.inOut",
    label: "Ease in / out",
    note: "A gentle start and a gentle finish.",
  },
  {
    value: "elastic.out(1,0.4)",
    label: "Spring",
    note: "A little overshoot gives the movement a playful finish.",
  },
];
function MotionStudy() {
  const root = useRef<HTMLDivElement>(null);
  const lane = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(1.6);
  const [ease, setEase] = useState("power3.out");
  const [message, setMessage] = useState("Ready when you are.");
  const { reduced } = usePreferences();
  const { contextSafe } = useGSAP({ scope: root });
  useGSAP(
    () => {
      if (reduced) {
        gsap.killTweensOf(".motion-ball");
        gsap.set(".motion-ball", { x: 0 });
      }
    },
    { scope: root, dependencies: [reduced] },
  );
  function play() {
    contextSafe(() => {
      gsap.killTweensOf(".motion-ball");
      setMessage(
        reduced ? "End position shown. Reduced motion is on." : "Playing…",
      );
      gsap.fromTo(
        ".motion-ball",
        { x: 0 },
        {
          x: Math.max(0, (lane.current?.clientWidth || 100) - 64),
          duration: reduced ? 0 : duration,
          ease,
          onComplete: () => {
            if (!reduced)
              setMessage("Landed. Change the timing and try again.");
          },
        },
      );
    })();
  }
  const reset = contextSafe(() => {
    gsap.killTweensOf(".motion-ball");
    gsap.set(".motion-ball", { x: 0 });
    setDuration(1.6);
    setEase("power3.out");
    setMessage("Ready when you are.");
  });
  return (
    <div ref={root} className="experiment-workbench">
      <div className="motion-canvas">
        <span className="canvas-label mono">ONE JOURNEY / MANY FEELINGS</span>
        <div ref={lane} className="motion-lane">
          <div className="motion-track" />
          <div className="motion-ball" />
          <span className="lane-start mono">A</span>
          <span className="lane-end mono">B</span>
        </div>
        <p className="canvas-footer mono" role="status">
          {message}
        </p>
      </div>
      <div className="experiment-controls">
        <fieldset className="curve-choices">
          <legend>How should it move?</legend>
          {curves.map((c) => (
            <label key={c.value}>
              <input
                type="radio"
                name="curve"
                value={c.value}
                checked={ease === c.value}
                onChange={() => setEase(c.value)}
              />
              {c.label}
            </label>
          ))}
        </fieldset>
        <p className="control-note">
          {curves.find((c) => c.value === ease)?.note}
        </p>
        <Slider
          label="Duration"
          value={duration}
          min={0.3}
          max={3}
          step={0.1}
          onChange={setDuration}
          unit="s"
        />
        <button className="button" onClick={play}>
          <Play size={16} fill="currentColor" />
          {reduced ? "Show end position" : "Play movement"}
        </button>
        <button className="reset-button" onClick={reset}>
          <RotateCcw size={16} />
          Reset movement
        </button>
      </div>
    </div>
  );
}
const tiles = [
  { id: "ecoloop", src: "ecoloop-main.png", label: "Ecoloop" },
  { id: "rex", src: "rex/hero-signage.png", label: "Rex Sartorial" },
  { id: "foodify", src: "foodify/1.png", label: "Foodify" },
  { id: "film", src: "thumbnails/reck1.jpeg", label: "Reckless Era" },
];
function LivingLayout() {
  const [layout, setLayout] = useState("grid");
  const [items, setItems] = useState(tiles);
  const { reduced } = usePreferences();
  return (
    <div className="layout-workbench">
      <div className="layout-toolbar">
        <fieldset>
          <legend className="sr-only">Choose a layout</legend>
          {["grid", "stack", "editorial"].map((value) => (
            <label key={value} className={layout === value ? "selected" : ""}>
              <input
                className="sr-only"
                type="radio"
                name="layout"
                value={value}
                checked={layout === value}
                onChange={() => setLayout(value)}
              />
              {value}
            </label>
          ))}
        </fieldset>
        <button
          className="outline-button"
          onClick={() => setItems([...items.slice(1), items[0]])}
        >
          <Shuffle size={16} />
          Reorder
        </button>
        <button
          className="reset-button"
          onClick={() => {
            setItems(tiles);
            setLayout("grid");
          }}
        >
          <RotateCcw size={16} />
          Reset
        </button>
      </div>
      <div className={`layout-canvas layout-${layout}`}>
        {items.map((item) => (
          <motion.figure
            key={item.id}
            layout={!reduced}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            <Artwork
              src={item.src}
              alt={item.label}
              sizes="(max-width: 700px) 80vw, 40vw"
            />
            <figcaption>{item.label}</figcaption>
          </motion.figure>
        ))}
      </div>
      <p className="control-note" role="status">
        {layout.charAt(0).toUpperCase() + layout.slice(1)} layout. First
        artwork: {items[0].label}.
      </p>
    </div>
  );
}
export default function Experiment() {
  const { slug } = useParams();
  const experiment = experiments.find((e) => e.slug === slug);
  if (!experiment) throw new Response("Experiment not found", { status: 404 });
  return (
    <main id="main" className="experiment-page">
      <header className="experiment-header section-pad">
        <Link className="back-link mono" to="/lab">
          <ArrowLeft size={16} />
          BACK TO THE LAB
        </Link>
        <p className="eyebrow">
          EXPERIMENT {experiment.number} / {experiment.discipline}
        </p>
        <h1>{experiment.name}</h1>
        <p>{experiment.description}</p>
      </header>
      <section
        className="experiment-body section-pad"
        aria-label={experiment.name}
      >
        {slug === "type-play" ? (
          <TypePlay />
        ) : slug === "motion-study" ? (
          <MotionStudy />
        ) : (
          <LivingLayout />
        )}
      </section>
      <div className="experiment-footnote section-pad">
        <p className="mono">BUILT TO EXPLORE</p>
        <p>
          {slug === "type-play"
            ? "A variable font contains a continuous range of weights. Use the sliders to see how weight, spacing and size change the character of the same words."
            : slug === "motion-study"
              ? "Easing changes how speed develops through an animation. The endpoints stay the same; the feeling changes with the timing."
              : "The artwork keeps its identity as the composition changes. Shared layout animation connects the old position to the new one."}
        </p>
      </div>
    </main>
  );
}
