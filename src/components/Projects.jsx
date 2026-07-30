import { useEffect, useRef, useState } from "react";
import { animate, createScope, spring, onScroll, stagger } from "animejs";
import { projects } from "../data/content";
import Reveal from "./Reveal";
import { pressable } from "../lib/interactions";
import ProjectIcon from "./ProjectIcon";
import ProjectDetail from "./ProjectDetail";

export default function Projects() {
  const grid = useRef(null);
  const scope = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    scope.current = createScope({ root: grid }).add(() => {
      animate(grid.current.querySelectorAll(".project-card"), {
        opacity: [0, 1],
        y: [24, 0],
        scale: [0.92, 1],
        ease: spring({ stiffness: 200, damping: 16 }),
        delay: stagger(100),
        autoplay: onScroll({ target: grid.current }),
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <section id="projects" className="section">
      <Reveal as="h2" className="section-title">
        Projects
      </Reveal>
      <div className="project-grid" ref={grid}>
        {projects.map((project) => (
          <div
            key={project.title}
            className="project-card"
            {...pressable({ y: -8, scale: 1.03, rotate: -0.5 }, 0.97)}
          >
            <button
              type="button"
              className="project-icon-button"
              onClick={() => setSelected(project)}
              aria-label={`View details for ${project.title}`}
              {...pressable({ scale: 1.12, rotate: -4 }, 0.9)}
            >
              <ProjectIcon name={project.icon} className="project-icon" />
            </button>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <ul className="project-tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {selected && (
        <ProjectDetail project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
