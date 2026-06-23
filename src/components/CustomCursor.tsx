"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on pointer-fine (desktop) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rx = 0, ry = 0; // ring position (lagged)
    let mx = 0, my = 0; // mouse position
    let raf = 0;
    let hovering = false;

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function tick() {
      rx = lerp(rx, mx, 0.12);
      ry = lerp(ry, my, 0.12);

      if (dot)  dot.style.transform  = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      if (ring) ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%) scale(${hovering ? 1.7 : 1})`;
      raf = requestAnimationFrame(tick);
    }

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
    }

    function onEnterLink() { hovering = true; }
    function onLeaveLink() { hovering = false; }

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    dot.style.opacity  = "1";
    ring.style.opacity = "1";
    raf = requestAnimationFrame(tick);

    // Hide native cursor globally
    document.documentElement.style.cursor = "none";

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Small solid dot — snaps instantly */}
      <div ref={dotRef} className="c-cursor-dot" aria-hidden />
      {/* Larger ring — lags behind for depth */}
      <div ref={ringRef} className="c-cursor-ring" aria-hidden />
    </>
  );
}
