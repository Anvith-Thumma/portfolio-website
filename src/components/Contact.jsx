import { useEffect, useRef } from "react";
import { animate, createScope, spring, onScroll, stagger } from "animejs";
import { profile } from "../data/content";
import Reveal from "./Reveal";
import { pressable } from "../lib/interactions";

export default function Contact() {
  const socials = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: socials }).add(() => {
      animate(socials.current.querySelectorAll("li"), {
        opacity: [0, 1],
        y: [10, 0],
        scale: [0.9, 1],
        ease: spring({ stiffness: 300, damping: 18 }),
        delay: stagger(80),
        autoplay: onScroll({ target: socials.current }),
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <section id="contact" className="section">
      <Reveal as="h2" className="section-title">
        Contact
      </Reveal>
      <Reveal as="p" className="contact-lead" delay={0.1}>
        I'm always open to new opportunities and conversations. Feel free to reach out.
      </Reveal>
      <Reveal delay={0.15}>
        <a
          className="button button-primary"
          href={`mailto:${profile.email}`}
          {...pressable({ scale: 1.08, rotate: -1 })}
        >
          {profile.email}
        </a>
      </Reveal>
      <ul className="social-links" ref={socials}>
        {profile.social.map((social) => (
          <li key={social.label} {...pressable({ scale: 1.1, y: -2 }, 1)}>
            <a href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
