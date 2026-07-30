import { useEffect, useRef } from "react";
import { animate, createScope } from "animejs";

const bubbles = [
  { size: 280, top: "-6%", left: "8%", tone: "var(--bubble-1)", duration: 18 },
  { size: 190, top: "12%", left: "82%", tone: "var(--bubble-2)", duration: 22 },
  { size: 340, top: "55%", left: "-10%", tone: "var(--bubble-1)", duration: 26 },
  { size: 220, top: "78%", left: "75%", tone: "var(--bubble-2)", duration: 20 },
  { size: 150, top: "38%", left: "48%", tone: "var(--bubble-1)", duration: 24 },
];

export default function BackgroundBubbles() {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      root.current.querySelectorAll(".bubble").forEach((bubble, index) => {
        const segment = (bubbles[index].duration * 1000) / 4;
        animate(bubble, {
          keyframes: [
            { y: -30, x: 18, duration: segment },
            { y: 0, x: 0, duration: segment },
            { y: 24, x: -18, duration: segment },
            { y: 0, x: 0, duration: segment },
          ],
          ease: "inOutSine",
          loop: true,
        });
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <div className="bubble-field" aria-hidden="true" ref={root}>
      {bubbles.map((bubble, index) => (
        <span
          key={index}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
            background: bubble.tone,
          }}
        />
      ))}
    </div>
  );
}
