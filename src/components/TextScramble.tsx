"use client";

import { useRef, useEffect } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";

export default function TextScramble({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();

        let frame = 0;
        const total = Math.max(18, text.length * 1.4);
        let raf: number;

        function tick() {
          if (!el) return;
          el.textContent = text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i / text.length < frame / total) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
          frame++;
          if (frame <= total) {
            raf = requestAnimationFrame(tick);
          } else {
            el.textContent = text;
          }
        }

        const t = setTimeout(() => {
          raf = requestAnimationFrame(tick);
        }, delay);

        return () => {
          clearTimeout(t);
          cancelAnimationFrame(raf);
        };
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [text, delay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text}
    </span>
  );
}
