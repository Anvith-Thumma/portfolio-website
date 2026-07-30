import { motion } from "framer-motion";
import { profile } from "../data/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 16 },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="top"
      className="hero"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p className="hero-eyebrow" variants={item}>
        {profile.title}
      </motion.p>
      <motion.h1 variants={item}>{profile.name}</motion.h1>
      <motion.p className="hero-tagline" variants={item}>
        {profile.tagline}
      </motion.p>
      <motion.div className="hero-actions" variants={item}>
        <motion.a
          className="button button-primary"
          href="#projects"
          whileHover={{ scale: 1.08, rotate: -1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          View projects
        </motion.a>
        <motion.a
          className="button button-secondary"
          href="#contact"
          whileHover={{ scale: 1.08, rotate: 1 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Get in touch
        </motion.a>
      </motion.div>
    </motion.section>
  );
}
