import { Link, useParams, type MetaFunction } from "react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import { Artwork, imageSource } from "../components/image";
import { Walkthrough } from "../components/walkthrough";
import { Gallery } from "../components/gallery";
import { CaseNavigation } from "../components/case-navigation";
import { seo } from "../lib/seo";

export const meta: MetaFunction = ({ params }) => {
  const p = projects.find((p) => p.slug === params.slug);
  return p
    ? seo(p.name, p.introduction, `/project/${p.slug}`, imageSource(p.cover))
    : seo(
        "Project not found",
        "Explore the selected work of The Creative Genie.",
        "/404",
      );
};
export default function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  if (!project) throw new Response("Project not found", { status: 404 });
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "approach", label: "Approach" },
    ...(project.slug === "fbl" || project.slug === "chop-central"
      ? [{ id: "walkthrough", label: "Walkthrough" }]
      : []),
    { id: "details", label: "Design details" },
    { id: "next-project", label: "Next project" },
  ];
  return (
    <main
      id="main"
      className="case-study light-section"
      style={
        {
          "--case-color": project.color,
          "--case-ink": project.ink,
        } as React.CSSProperties
      }
    >
      <header className="case-header section-pad">
        <Link className="back-link mono" to="/work">
          <ArrowLeft size={16} />
          ALL WORK
        </Link>
        <div className="case-title-row">
          <h1>{project.name}</h1>
          <span className="case-category mono">{project.tags.join(" / ")}</span>
        </div>
        <p className="case-tagline">{project.line}</p>
      </header>
      <div
        className={`case-hero case-hero-${project.slug}`}
        style={{ viewTransitionName: `art-${project.slug}` }}
      >
        <Artwork
          src={project.cover}
          alt={project.coverAlt}
          priority
          sizes="100vw"
        />
      </div>
      <CaseNavigation key={project.slug} sections={sections} />
      <section
        id="overview"
        className="case-overview section-pad"
        aria-label="Project overview"
      >
        <div className="case-summary">
          <p className="eyebrow">THE PROJECT</p>
          <h2>{project.introduction}</h2>
        </div>
        <dl className="case-facts">
          <div>
            <dt>My role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Toolkit</dt>
            <dd>{project.tools}</dd>
          </div>
          <div>
            <dt>Deliverables</dt>
            <dd>{project.deliverables.join(" · ")}</dd>
          </div>
        </dl>
      </section>
      <section
        id="approach"
        className="case-brief section-pad"
        aria-label="Creative approach"
      >
        <div>
          <p className="eyebrow">01 / THE CHALLENGE</p>
          <p>{project.challenge}</p>
        </div>
        <div>
          <p className="eyebrow">02 / THE APPROACH</p>
          <p>{project.idea}</p>
        </div>
      </section>
      <Walkthrough key={project.slug} slug={project.slug} />
      {project.chapters.map((chapter, index) => (
        <section
          id={index === 0 ? "details" : `chapter-${index + 1}`}
          className="case-chapter section-pad"
          key={chapter.title}
        >
          <div className="chapter-heading">
            <span className="mono">0{index + 3} / THE DETAILS</span>
            <h2>{chapter.title}</h2>
            <p>{chapter.text}</p>
          </div>
          <Gallery images={chapter.images} />
        </section>
      ))}
      <section id="next-project" className="case-next section-pad">
        <p className="eyebrow">KEEP EXPLORING</p>
        <Link to={`/project/${next.slug}`} viewTransition>
          <div>
            <span className="mono">NEXT PROJECT</span>
            <h2>{next.name}</h2>
          </div>
          <ArrowUpRight />
        </Link>
        <Artwork src={next.cover} alt={next.coverAlt} />
      </section>
    </main>
  );
}
