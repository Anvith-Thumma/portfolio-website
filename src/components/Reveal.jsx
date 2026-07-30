import { useEffect, useRef } from "react";
import { animate, createScope, spring, onScroll } from "animejs";

export default function Reveal({ children, delay = 0, className, as: Tag = "div" }) {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root }).add(() => {
      animate(root.current, {
        opacity: [0, 1],
        y: [28, 0],
        scale: [0.94, 1],
        ease: spring({ stiffness: 170, damping: 15 }),
        delay: delay * 1000,
        autoplay: onScroll({ target: root.current }),
      });
    });

    return () => scope.current.revert();
  }, [delay]);

  return (
    <Tag ref={root} className={className}>
      {children}
    </Tag>
  );
}
