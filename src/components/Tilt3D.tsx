"use client";

import { useRef } from "react";

interface Tilt3DProps {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Tilt3D({ children, intensity = 10, className, style }: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  function onEnter() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.08s linear";
  }

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2;
    el.style.transform = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity * 0.6}deg) scale(1.02)`;
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ transformStyle: "preserve-3d", willChange: "transform", ...style }}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
