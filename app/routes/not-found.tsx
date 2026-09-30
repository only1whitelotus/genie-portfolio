import { ButtonLink } from "../components/shell";
import { seo } from "../lib/seo";
export const meta = () => [
  ...seo(
    "Page not found",
    "The page you are looking for isn’t in the studio. Explore the selected work of The Creative Genie.",
    "/404",
  ),
  { name: "robots", content: "noindex" },
];
export default function NotFound() {
  return (
    <main id="main" className="error-page section-pad">
      <p className="eyebrow">404 / OFF THE CANVAS</p>
      <h1>
        This one
        <br />
        <em>got away.</em>
      </h1>
      <p>
        That page isn’t in the studio.
        <br />
        There’s plenty more to explore.
      </p>
      <ButtonLink to="/work">Explore the work</ButtonLink>
    </main>
  );
}
