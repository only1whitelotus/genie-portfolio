import { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import { films } from "../data/content";
import { seo } from "../lib/seo";
export const meta = () => [
  ...seo(
    "Explore the new studio",
    "The Creative Genie has a new home for selected work and films.",
    "/work",
  ),
  { name: "robots", content: "noindex" },
];
export default function Legacy() {
  const { category } = useParams();
  const { hash } = useLocation();
  const navigate = useNavigate();
  const film = films.find((f) => f.legacyId === hash.slice(1));
  const to =
    category === "video"
      ? film
        ? `/films/${film.slug}`
        : "/films"
      : category === "web"
        ? "/work?type=code"
        : "/work?type=design";
  useEffect(() => {
    void navigate(to, { replace: true });
  }, [navigate, to]);
  return (
    <main id="main" className="error-page section-pad">
      <h1>A new view.</h1>
      <p>The work has moved into the new studio.</p>
      <Link className="button" to={to}>
        Continue to the work
      </Link>
    </main>
  );
}
