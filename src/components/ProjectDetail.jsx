import { useCallback, useEffect, useRef } from "react";
import { animate, createScope, spring } from "animejs";
import ProjectIcon from "./ProjectIcon";

export default function ProjectDetail({ project, onClose }) {
  const backdrop = useRef(null);
  const panel = useRef(null);
  const scope = useRef(null);
  const closing = useRef(false);

  useEffect(() => {
    scope.current = createScope({ root: backdrop }).add(() => {
      animate(backdrop.current, { opacity: [0, 1], duration: 200, ease: "easeOutQuad" });
      animate(panel.current, {
        opacity: [0, 1],
        y: [24, 0],
        scale: [0.96, 1],
        ease: spring({ stiffness: 260, damping: 22 }),
      });
    });

    document.body.style.overflow = "hidden";

    return () => {
      scope.current.revert();
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    animate(panel.current, {
      opacity: 0,
      y: 12,
      scale: 0.96,
      duration: 150,
      ease: "easeInQuad",
    });
    animate(backdrop.current, { opacity: 0, duration: 150, ease: "easeInQuad" }).then(onClose);
  }, [onClose]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);

  return (
    <div className="project-modal-backdrop" ref={backdrop} onClick={handleClose}>
      <div
        className="project-modal"
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal-close"
          onClick={handleClose}
          aria-label="Close"
        >
          ×
        </button>
        <ProjectIcon name={project.icon} className="project-modal-icon" />
        <h3>{project.title}</h3>
        <ul className="project-detail-list">
          {project.detail.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <ul className="project-tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <ul className="project-links">
          {project.links.map((link) => (
            <li key={link.label}>
              <a className="project-link" href={link.url} target="_blank" rel="noreferrer">
                {link.label} →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
