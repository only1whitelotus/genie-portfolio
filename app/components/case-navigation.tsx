import { useEffect, useState } from "react";

type Section = { id: string; label: string };

export function CaseNavigation({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0].id);
  useEffect(() => {
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting)
            visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        const nearest = [...visible].sort((a, b) => a[1] - b[1])[0];
        if (nearest) setActive(nearest[0]);
      },
      { rootMargin: "-145px 0px -45% 0px" },
    );
    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="case-navigation section-pad" aria-label="On this project">
      <span className="mono">IN THIS PROJECT</span>
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={active === section.id ? "location" : undefined}
          onClick={() => setActive(section.id)}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
