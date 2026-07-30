import { motion } from "framer-motion";
import { profile, experience, education } from "../data/content";
import Reveal from "./Reveal";

const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 18 },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal as="h2" className="section-title">
        Experience
      </Reveal>

      <motion.ul
        className="timeline"
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experience.map((entry) => (
          <motion.li
            key={entry.role + entry.company}
            className="timeline-item"
            variants={item}
            whileHover={{ x: 6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div className="timeline-header">
              <h3>{entry.role}</h3>
              <span className="timeline-period">{entry.period}</span>
            </div>
            <p className="timeline-company">{entry.company}</p>
            <p className="timeline-description">{entry.description}</p>
          </motion.li>
        ))}
      </motion.ul>

      <Reveal as="h3" className="subsection-title">
        Education
      </Reveal>
      <motion.ul
        className="timeline"
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {education.map((entry) => (
          <motion.li
            key={entry.school}
            className="timeline-item"
            variants={item}
            whileHover={{ x: 6, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div className="timeline-header">
              <h3>{entry.degree}</h3>
              <span className="timeline-period">{entry.period}</span>
            </div>
            <p className="timeline-company">{entry.school}</p>
          </motion.li>
        ))}
      </motion.ul>

      <motion.a
        className="button button-secondary"
        href={profile.resumeUrl}
        whileHover={{ scale: 1.08, rotate: -1 }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Download resume
      </motion.a>
    </section>
  );
}
