import { useLayoutEffect, useRef } from "react";
import {
  createDrawable,
  createScope,
  spring,
  createTimeline,
  stagger,
} from "animejs";

const barSpecs = [
  { height: 18 },
  { height: 30 },
  { height: 42 },
  { height: 50 },
  { height: 42 },
  { height: 30 },
  { height: 18 },
];

const barWidth = 8;
const gap = 6;
const viewWidth = 220;
const viewHeight = 64;
const totalWidth = barSpecs.length * barWidth + (barSpecs.length - 1) * gap;
const startX = (viewWidth - totalWidth) / 2;
const centerIndex = (barSpecs.length - 1) / 2;

export default function HeroMark() {
  const root = useRef(null);
  const scope = useRef(null);

  useLayoutEffect(() => {
    scope.current = createScope({ root }).add(() => {
      const barEls = root.current.querySelectorAll(".hero-mark-bar");
      const [line] = createDrawable(root.current.querySelector(".hero-mark-line"));

      createTimeline({
        defaults: { ease: spring({ stiffness: 220, damping: 20 }) },
      })
        .add(barEls, {
          x: (_target, i) => [(i - centerIndex) * 30, 0],
          opacity: [0, 1],
          delay: stagger(50, { from: "center" }),
        })
        .add(
          line,
          { draw: ["0 0", "0 1"], ease: "inOutQuad", duration: 500 },
          "-=250"
        );
    });

    return () => scope.current.revert();
  }, []);

  return (
    <svg
      className="hero-mark"
      ref={root}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      aria-hidden="true"
    >
      <line
        className="hero-mark-line"
        x1={startX - 14}
        y1={viewHeight / 2}
        x2={startX + totalWidth + 14}
        y2={viewHeight / 2}
      />
      {barSpecs.map((bar, i) => (
        <rect
          key={i}
          className="hero-mark-bar"
          x={startX + i * (barWidth + gap)}
          y={(viewHeight - bar.height) / 2}
          width={barWidth}
          height={bar.height}
          rx={2}
        />
      ))}
    </svg>
  );
}
