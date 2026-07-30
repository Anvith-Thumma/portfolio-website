import { animate, spring } from "animejs";

const hoverEase = spring({ stiffness: 400, damping: 10 });

function restValuesFor(hoverVars) {
  return Object.fromEntries(
    Object.keys(hoverVars).map((key) => [key, key === "scale" ? 1 : 0])
  );
}

export function pressable(hoverVars, tapScale = 0.92) {
  const restVars = restValuesFor(hoverVars);

  return {
    onMouseEnter: (event) =>
      animate(event.currentTarget, { ...hoverVars, ease: hoverEase, duration: 400 }),
    onMouseLeave: (event) =>
      animate(event.currentTarget, { ...restVars, ease: hoverEase, duration: 400 }),
    onMouseDown: (event) =>
      animate(event.currentTarget, { scale: tapScale, ease: hoverEase, duration: 200 }),
    onMouseUp: (event) =>
      animate(event.currentTarget, { ...hoverVars, ease: hoverEase, duration: 200 }),
  };
}
