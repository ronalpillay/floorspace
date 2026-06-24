"use client";

import { useRef, useEffect } from "react";

interface Props {
  children: React.ReactNode;
  from?: "left" | "right" | "bottom";
  delay?: number;
  className?: string;
}

export default function ScrollRevealImage({
  children,
  from = "bottom",
  delay = 0,
  className,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        setTimeout(() => el.classList.add("sri-visible"), delay);
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={wrapRef}
      className={`sri-wrap sri-from-${from}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
