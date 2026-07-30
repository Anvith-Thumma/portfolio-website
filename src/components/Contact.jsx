import { motion } from "framer-motion";
import { profile } from "../data/content";
import Reveal from "./Reveal";

const list = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 18 },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="section">
      <Reveal as="h2" className="section-title">
        Contact
      </Reveal>
      <Reveal as="p" className="contact-lead" delay={0.1}>
        I'm always open to new opportunities and conversations. Feel free to reach out.
      </Reveal>
      <Reveal delay={0.15}>
        <motion.a
          className="button button-primary"
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.08, rotate: -1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {profile.email}
        </motion.a>
      </Reveal>
      <motion.ul
        className="social-links"
        variants={list}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {profile.social.map((social) => (
          <motion.li
            key={social.label}
            variants={item}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
