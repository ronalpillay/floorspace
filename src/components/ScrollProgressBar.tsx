"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      const pct = total > 0 ? scrolled / total : 0;
      bar.style.transform = `scaleX(${pct})`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: "100%",
        background: "linear-gradient(90deg, var(--brown-2), var(--brown-1))",
        zIndex: 10000,
        transform: "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.08s linear",
        pointerEvents: "none",
      }}
      ref={barRef}
    />
  );
}
