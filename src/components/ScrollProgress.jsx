import { useEffect, useRef } from "react";
import { animate, createScope, onScroll } from "animejs";

export default function ScrollProgress() {
  const bar = useRef(null);
  const scope = useRef(null);

  useEffect(() => {
    scope.current = createScope({ root: bar }).add(() => {
      animate(bar.current, {
        scaleX: [0, 1],
        ease: "linear",
        autoplay: onScroll({
          enter: "top top",
          leave: "bottom bottom",
          sync: true,
        }),
      });
    });

    return () => scope.current.revert();
  }, []);

  return <div className="scroll-progress" ref={bar} />;
}
