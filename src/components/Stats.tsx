"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 470, suffix: "+", label: "Projects Delivered" },
  { num: 15,  suffix: "+", label: "Years Experience" },
  { num: 200, suffix: "+", label: "Happy Clients" },
  { num: 6,   suffix: "",  label: "Cities" },
];

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(target: number, duration = 1800, trigger: boolean) {
  const [value, setValue] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update);
      } else {
        setValue(target);
      }
    };

    frameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, trigger]);

  return value;
}

function StatItem({ num, suffix, label, triggered, delay }: {
  num: number; suffix: string; label: string;
  triggered: boolean; delay: number;
}) {
  const [go, setGo] = useState(false);
  const value = useCountUp(num, 1600, go);

  useEffect(() => {
    if (!triggered) return;
    const t = setTimeout(() => setGo(true), delay);
    return () => clearTimeout(t);
  }, [triggered, delay]);

  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: "10px",
      alignItems: "flex-start", textAlign: "left"
    }}>
      <span style={{
        fontFamily: "var(--font-outfit)",
        fontSize: "clamp(48px,6vw,72px)", fontWeight: 300,
        color: "#fff", lineHeight: 1, letterSpacing: "-0.04em",
      }}>
        {value}{suffix}
      </span>
      <span style={{
        fontFamily: "var(--font-outfit)", fontSize: "11px",
        color: "var(--brown-1)", fontWeight: 500, letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}>
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: "var(--bg-warm)", padding: "clamp(80px,10vw,140px) clamp(16px,2.5vw,32px)" }}
    >
      <div
        style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(40px,8vw,120px)",
          maxWidth: "1400px", margin: "0 auto", alignItems: "center"
        }}
        className="stats-container"
      >
        {/* Left: Editorial Statement */}
        <div style={{ paddingRight: "clamp(0px,4vw,60px)" }}>
          <span style={{
            display: "inline-block", fontFamily: "var(--font-outfit)", fontSize: "11px",
            color: "var(--brown-1)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "32px",
            borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "16px", width: "100%"
          }}>
            Scale & Capability
          </span>
          <h2 style={{
            fontFamily: "var(--font-outfit)", fontSize: "clamp(32px,4vw,56px)",
            fontWeight: 400, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: "32px"
          }}>
            Delivering precision at an industrial scale.
          </h2>
          <p style={{
            fontFamily: "var(--font-outfit)", fontSize: "15px", color: "var(--beige-3)",
            lineHeight: 1.8, fontWeight: 300, maxWidth: "420px"
          }}>
            We manage the complexity of multi-city rollouts and high-stakes corporate campus builds, ensuring the design vision survives the reality of construction.
          </p>
        </div>

        {/* Right: The Stats */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,64px)",
          borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "clamp(32px,5vw,64px)"
        }}>
          {stats.map(({ num, suffix, label }, i) => (
            <StatItem
              key={label}
              num={num}
              suffix={suffix}
              label={label}
              triggered={triggered}
              delay={i * 150}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .stats-container { grid-template-columns: 1fr !important; }
          .stats-container > div:last-child { border-left: none !important; padding-left: 0 !important; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 40px; }
        }
      `}</style>
    </section>
  );
}
