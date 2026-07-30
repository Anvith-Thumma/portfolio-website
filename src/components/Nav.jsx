import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { profile } from "../data/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 8);
  });

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="nav"
      animate={{
        boxShadow: scrolled
          ? "0 1px 0 var(--border), 0 8px 24px -16px rgba(0,0,0,0.25)"
          : "0 1px 0 var(--border), 0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.25 }}
    >
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "active" : undefined}
            >
              {link.label}
              {active === link.href && (
                <motion.span
                  className="nav-pill"
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 380, damping: 24 }}
                />
              )}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
