"use client";

// Deterministic particles — same on server + client (no Math.random)
const PARTICLES = [
  { x: 8,  size: 2,   dur: 12, delay: 0,    opacity: 0.25 },
  { x: 18, size: 3,   dur: 16, delay: -4,   opacity: 0.18 },
  { x: 27, size: 1.5, dur: 10, delay: -8,   opacity: 0.30 },
  { x: 35, size: 2.5, dur: 14, delay: -2,   opacity: 0.20 },
  { x: 48, size: 2,   dur: 18, delay: -11,  opacity: 0.15 },
  { x: 55, size: 3.5, dur: 11, delay: -6,   opacity: 0.22 },
  { x: 63, size: 1.5, dur: 15, delay: -1,   opacity: 0.28 },
  { x: 72, size: 2,   dur: 13, delay: -9,   opacity: 0.18 },
  { x: 80, size: 3,   dur: 17, delay: -3,   opacity: 0.24 },
  { x: 90, size: 1.5, dur: 12, delay: -7,   opacity: 0.20 },
  { x: 12, size: 2.5, dur: 19, delay: -14,  opacity: 0.14 },
  { x: 43, size: 2,   dur: 9,  delay: -5,   opacity: 0.30 },
  { x: 68, size: 1.5, dur: 14, delay: -10,  opacity: 0.22 },
  { x: 82, size: 3,   dur: 16, delay: -13,  opacity: 0.16 },
  { x: 95, size: 2,   dur: 11, delay: -2,   opacity: 0.26 },
];

export default function HeroParticles() {
  return (
    <div className="c-hero-particles" aria-hidden>
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="c-hero-particle"
          style={{
            left: `${p.x}%`,
            width:  p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.dur}s`,
            animationDelay:    `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
