import { useEffect, useRef, useState } from "react";
import { animate, spring } from "animejs";
import { profile } from "../data/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const pillEase = spring({ stiffness: 380, damping: 24 });

export default function Nav() {
  const shadow = useRef(null);
  const navLinks = useRef(null);
  const pill = useRef(null);
  const hasPositionedPill = useRef(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!shadow.current) return;
    animate(shadow.current, {
      opacity: scrolled ? 1 : 0,
      duration: 250,
      ease: "easeOutQuad",
    });
  }, [scrolled]);

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

  useEffect(() => {
    const positionPill = (animated) => {
      if (!active || !pill.current || !navLinks.current) return;
      const activeLink = navLinks.current.querySelector(`a[href="${active}"]`);
      if (!activeLink) return;

      const containerRect = navLinks.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      const left = linkRect.left - containerRect.left;
      const width = linkRect.width;

      if (!animated || !hasPositionedPill.current) {
        pill.current.style.left = `${left}px`;
        pill.current.style.width = `${width}px`;
        pill.current.style.opacity = "1";
        hasPositionedPill.current = true;
      } else {
        animate(pill.current, { left, width, ease: pillEase });
      }
    };

    const handleResize = () => positionPill(false);

    positionPill(true);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);

  return (
    <header className="nav">
      <div className="nav-shadow" ref={shadow} />
      <div className="nav-inner">
        <a className="nav-brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav-links" ref={navLinks}>
          <span className="nav-pill" ref={pill} />
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={active === link.href ? "active" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
