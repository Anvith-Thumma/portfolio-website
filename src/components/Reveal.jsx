import { motion } from "framer-motion";

export default function Reveal({ children, delay = 0, className, as = "div" }) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 170, damping: 15, delay }}
    >
      {children}
    </MotionTag>
  );
}
