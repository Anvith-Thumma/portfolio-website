import { motion } from "framer-motion";

const bubbles = [
  { size: 280, top: "-6%", left: "8%", tone: "var(--bubble-1)", duration: 18 },
  { size: 190, top: "12%", left: "82%", tone: "var(--bubble-2)", duration: 22 },
  { size: 340, top: "55%", left: "-10%", tone: "var(--bubble-1)", duration: 26 },
  { size: 220, top: "78%", left: "75%", tone: "var(--bubble-2)", duration: 20 },
  { size: 150, top: "38%", left: "48%", tone: "var(--bubble-1)", duration: 24 },
];

export default function BackgroundBubbles() {
  return (
    <div className="bubble-field" aria-hidden="true">
      {bubbles.map((bubble, index) => (
        <motion.span
          key={index}
          className="bubble"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: bubble.top,
            left: bubble.left,
            background: bubble.tone,
          }}
          animate={{
            y: [0, -30, 0, 24, 0],
            x: [0, 18, 0, -18, 0],
          }}
          transition={{
            duration: bubble.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
