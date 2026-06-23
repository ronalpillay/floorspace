"use client";

import { useEffect, useRef } from "react";

export function useParallax(factor = 0.12) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let current = 0;

    function update() {
      if (!el) return;
      const rect = el.parentElement?.getBoundingClientRect() ?? el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const target = (window.innerHeight / 2 - center) * factor;
      current += (target - current) * 0.08;
      el.style.transform = `translateY(${current.toFixed(2)}px)`;
      raf = requestAnimationFrame(update);
    }

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [factor]);

  return ref;
}
