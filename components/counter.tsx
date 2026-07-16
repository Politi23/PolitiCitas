"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const fmt = (v: number) =>
  v.toLocaleString("es-VE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? fmt(value) : fmt(0));

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(fmt(value));
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(fmt(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduced]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
