import { profile } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal as="h2" className="section-title">
        About
      </Reveal>
      <Reveal as="p" className="about-bio" delay={0.1}>
        {profile.bio}
      </Reveal>
      <Reveal as="p" className="about-location" delay={0.2}>
        {profile.location}
      </Reveal>
    </section>
  );
}
