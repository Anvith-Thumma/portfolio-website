import { useCallback, useEffect, useRef } from "react";
import { animate, createScope, spring } from "animejs";

export default function Modal({ onClose, ariaLabel, children }) {
  const backdrop = useRef(null);
  const panel = useRef(null);
  const scope = useRef(null);
  const closing = useRef(false);

  useEffect(() => {
    scope.current = createScope({ root: backdrop }).add(() => {
      animate(backdrop.current, { opacity: [0, 1], duration: 200, ease: "easeOutQuad" });
      animate(panel.current, {
        opacity: [0, 1],
        y: [24, 0],
        scale: [0.96, 1],
        ease: spring({ stiffness: 260, damping: 22 }),
      });
    });

    document.body.style.overflow = "hidden";

    return () => {
      scope.current.revert();
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    animate(panel.current, {
      opacity: 0,
      y: 12,
      scale: 0.96,
      duration: 150,
      ease: "easeInQuad",
    });
    animate(backdrop.current, { opacity: 0, duration: 150, ease: "easeInQuad" }).then(onClose);
  }, [onClose]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [handleClose]);

  return (
    <div className="modal-backdrop" ref={backdrop} onClick={handleClose}>
      <div
        className="modal-panel"
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={handleClose} aria-label="Close">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
