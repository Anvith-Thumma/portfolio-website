import ProjectIcon from "./ProjectIcon";
import Modal from "./Modal";

export default function ProjectDetail({ project, onClose }) {
  return (
    <Modal onClose={onClose} ariaLabel={project.title}>
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
    </Modal>
  );
}
