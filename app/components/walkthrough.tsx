import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Artwork } from "./image";

const journeys = {
  fbl: [
    {
      title: "Your team",
      src: "Userhome.jpeg",
      text: "Start with the manager dashboard and the squad at the center of the experience.",
    },
    {
      title: "The next move",
      src: "Transfertab.jpeg",
      text: "Move into transfers to evaluate changes to the team.",
    },
    {
      title: "The wider game",
      src: "Statscenter.jpeg",
      text: "Use competition statistics to understand the players beyond your own squad.",
    },
  ],
  "chop-central": [
    {
      title: "At the counter",
      src: "thumbnails/chop-central.png",
      text: "The point of sale brings the menu and the current order into one working surface.",
    },
    {
      title: "Through the workflow",
      src: "c3.png",
      text: "Connected operational screens carry the work beyond order entry.",
    },
    {
      title: "Back to the overview",
      src: "c5.png",
      text: "Management views bring the restaurant’s recorded activity back into focus.",
    },
  ],
};
export function Walkthrough({ slug }: { slug: string }) {
  const [active, setActive] = useState(0);
  const steps = journeys[slug as keyof typeof journeys];
  if (!steps) return null;
  return (
    <section
      className="walkthrough section-pad"
      aria-label="Interface walkthrough"
    >
      <div className="walkthrough-heading">
        <p className="eyebrow">TAKE A CLOSER LOOK</p>
        <h2>
          Follow the
          <br />
          experience.
        </h2>
        <p>
          A guided look at the interface.
          <br />
          Select a step to explore the screens.
        </p>
        <div className="walkthrough-steps">
          {steps.map((step, i) => (
            <button
              key={step.title}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              <span className="mono">0{i + 1}</span>
              {step.title}
              <ArrowRight size={18} />
            </button>
          ))}
        </div>
      </div>
      <div className="walkthrough-screen">
        <Artwork
          key={steps[active].src}
          src={steps[active].src}
          alt={steps[active].title}
        />
        <p role="status">{steps[active].text}</p>
        <span className="mono">
          INTERFACE WALKTHROUGH / ORIGINAL PROJECT SCREENS
        </span>
      </div>
    </section>
  );
}
