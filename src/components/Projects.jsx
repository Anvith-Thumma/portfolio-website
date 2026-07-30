import { motion } from "framer-motion";
import { projects } from "../data/content";
import Reveal from "./Reveal";

const grid = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24, scale: 0.92 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 16 },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal as="h2" className="section-title">
        Projects
      </Reveal>
      <motion.div
        className="project-grid"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((project) => (
          <motion.a
            key={project.title}
            className="project-card"
            href={project.link}
            target="_blank"
            rel="noreferrer"
            variants={card}
            whileHover={{ y: -8, scale: 1.03, rotate: -0.5 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 16 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="project-tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
