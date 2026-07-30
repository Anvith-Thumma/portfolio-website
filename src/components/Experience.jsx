import { useEffect, useRef } from "react";
import { animate, createScope, spring, onScroll, stagger } from "animejs";
import { profile, experience, education } from "../data/content";
import Reveal from "./Reveal";
import { pressable } from "../lib/interactions";

function useStaggerReveal() {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(root.current.querySelectorAll(".timeline-item"), {
        opacity: [0, 1],
        y: [16, 0],
        scale: [0.96, 1],
        ease: spring({ stiffness: 220, damping: 18 }),
        delay: stagger(100),
        autoplay: onScroll({ target: root.current }),
      });
    });

    return () => scope.current.revert();
  }, []);

  return root;
}

export default function Experience() {
  const experienceList = useStaggerReveal();
  const educationList = useStaggerReveal();

  return (
    <section id="experience" className="section">
      <Reveal as="h2" className="section-title">
        Experience
      </Reveal>

      <ul className="timeline" ref={experienceList}>
        {experience.map((entry) => (
          <li
            key={entry.role + entry.company}
            className="timeline-item"
            {...pressable({ x: 6, scale: 1.01 }, 1)}
          >
            <div className="timeline-header">
              <h3>{entry.role}</h3>
              <span className="timeline-period">{entry.period}</span>
            </div>
            <p className="timeline-company">{entry.company}</p>
            <p className="timeline-description">{entry.description}</p>
          </li>
        ))}
      </ul>

      <Reveal as="h3" className="subsection-title">
        Education
      </Reveal>
      <ul className="timeline" ref={educationList}>
        {education.map((entry) => (
          <li
            key={entry.school}
            className="timeline-item"
            {...pressable({ x: 6, scale: 1.01 }, 1)}
          >
            <div className="timeline-header">
              <h3>{entry.degree}</h3>
              <span className="timeline-period">{entry.period}</span>
            </div>
            <p className="timeline-company">{entry.school}</p>
          </li>
        ))}
      </ul>

      <a
        className="button button-secondary"
        href={profile.resumeUrl}
        {...pressable({ scale: 1.08, rotate: -1 })}
      >
        Download resume
      </a>
    </section>
  );
}
