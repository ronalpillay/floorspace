"use client";

import { useEffect } from "react";

const COUNT = 8;

export default function CursorTrail() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dots: HTMLElement[] = [];
    const xs = new Float32Array(COUNT);
    const ys = new Float32Array(COUNT);
    let mx = 0;
    let my = 0;

    for (let i = 0; i < COUNT; i++) {
      const d = document.createElement("div");
      const alpha = 0.55 - i * 0.055;
      const size = 7 - i * 0.6;
      d.style.cssText = [
        "position:fixed",
        "top:0",
        "left:0",
        "pointer-events:none",
        `z-index:999997`,
        "border-radius:50%",
        `width:${size}px`,
        `height:${size}px`,
        `background:rgba(201,169,110,${alpha})`,
        "will-change:transform",
        "transform:translate(-50%,-50%)",
      ].join(";");
      document.body.appendChild(d);
      dots.push(d);
    }

    function onMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
    }
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf: number;
    function tick() {
      xs[0] = mx;
      ys[0] = my;
      for (let i = 1; i < COUNT; i++) {
        xs[i] += (xs[i - 1] - xs[i]) * 0.32;
        ys[i] += (ys[i - 1] - ys[i]) * 0.32;
      }
      for (let i = 0; i < COUNT; i++) {
        dots[i].style.transform = `translate(calc(${xs[i]}px - 50%), calc(${ys[i]}px - 50%))`;
      }
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      dots.forEach((d) => d.remove());
    };
  }, []);

  return null;
}
