import { useLayoutEffect, useRef } from "react";
import { animate, createScope, spring, stagger } from "animejs";
import { profile } from "../data/content";
import { pressable } from "../lib/interactions";

export default function Hero() {
  const root = useRef(null);
  const scope = useRef(null);

  useLayoutEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(root.current.querySelectorAll(".hero-animate"), {
        opacity: [0, 1],
        y: [20, 0],
        scale: [0.95, 1],
        ease: spring({ stiffness: 200, damping: 16 }),
        delay: stagger(120, { start: 100 }),
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <section id="top" className="hero" ref={root}>
      <p className="hero-eyebrow hero-animate">{profile.title}</p>
      <h1 className="hero-animate">{profile.name}</h1>
      <p className="hero-tagline hero-animate">{profile.tagline}</p>
      <div className="hero-actions hero-animate">
        <a
          className="button button-primary"
          href="#projects"
          {...pressable({ scale: 1.08, rotate: -1 })}
        >
          View projects
        </a>
        <a
          className="button button-secondary"
          href="#contact"
          {...pressable({ scale: 1.08, rotate: 1 })}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
