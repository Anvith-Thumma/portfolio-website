import { useEffect, useRef, useState } from "react";
import { animate, createScope, spring, onScroll, stagger } from "animejs";
import { certifications } from "../data/content";
import Reveal from "./Reveal";
import { pressable } from "../lib/interactions";
import CertificationDetail from "./CertificationDetail";

function bucketByIssuer(list) {
  const map = new Map();
  list.forEach((cert) => {
    if (!map.has(cert.issuer)) map.set(cert.issuer, []);
    map.get(cert.issuer).push(cert);
  });
  return Array.from(map, ([issuer, items]) => ({ issuer, items }));
}

const buckets = bucketByIssuer(certifications);

export default function Certifications() {
  const grid = useRef(null);
  const scope = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    scope.current = createScope({ root: grid }).add(() => {
      animate(grid.current.querySelectorAll(".cert-bucket"), {
        opacity: [0, 1],
        y: [16, 0],
        scale: [0.95, 1],
        ease: spring({ stiffness: 220, damping: 18 }),
        delay: stagger(80),
        autoplay: onScroll({ target: grid.current }),
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <section id="certifications" className="section">
      <Reveal as="h2" className="section-title">
        Certifications
      </Reveal>
      <div className="cert-bucket-grid" ref={grid}>
        {buckets.map((bucket) => (
          <button
            type="button"
            key={bucket.issuer}
            className="cert-bucket"
            onClick={() => setSelected(bucket)}
            {...pressable({ y: -4, scale: 1.03 }, 0.96)}
          >
            <span className="cert-bucket-name">{bucket.issuer}</span>
            <span className="cert-bucket-count">
              {bucket.items.length}{" "}
              {bucket.items.length === 1 ? "certification" : "certifications"}
            </span>
          </button>
        ))}
      </div>
      {selected && (
        <CertificationDetail bucket={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
