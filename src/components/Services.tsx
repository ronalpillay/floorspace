"use client";

import { useState } from "react";

const services = [
  {
    label: "Office Interiors",
    headline: "Headquarters That\nDefine Your Brand.",
    img: "/images/smbc-reception.jpg",
    tag: "Full Turnkey",
  },
  {
    label: "Workspace Design",
    headline: "Agile. Collaborative.\nFuture-Ready.",
    img: "/images/octillion-lounge.jpg",
    tag: "Design & Build",
  },
  {
    label: "Corporate Renovations",
    headline: "Zero Downtime.\nTotal Transformation.",
    img: "/images/octillion-conference.jpg",
    tag: "Phased Delivery",
  },
  {
    label: "Pharma & Industrial",
    headline: "GMP-Certified.\nAudit-Ready.",
    img: "/images/mazak-lobby.jpg",
    tag: "GMP Certified",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{
        background: "var(--warm-white)",
        padding: "clamp(40px,6vw,80px) clamp(16px,2.5vw,32px)",
      }}
    >
      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        marginBottom: "clamp(24px,3vw,44px)", flexWrap: "wrap", gap: "16px",
      }}>
        <div>
          <p style={{
            fontFamily: "var(--font-outfit)", fontSize: "10px",
            letterSpacing: "0.26em", textTransform: "uppercase",
            color: "var(--brown-2)", marginBottom: "8px",
          }}>
            Our Services
          </p>
          <h2 style={{ fontStyle: "italic", color: "var(--ink)", margin: 0, lineHeight: 1.02 }}>
            What We<br />Build for You.
          </h2>
        </div>
        <a href="#contact" className="btn-secondary" style={{ fontSize: "11px", padding: "10px 24px", alignSelf: "flex-end" }}>
          Start a Project →
        </a>
      </div>

      {/* 2×2 grid */}
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "clamp(8px,1vw,12px)" }}
        className="services-grid"
      >
        {services.map((s, i) => (
          <div
            key={s.label}
            style={{ borderRadius: "20px", overflow: "hidden", background: "var(--beige-1)", cursor: "pointer" }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image */}
            <div style={{ height: "clamp(180px,22vw,300px)", overflow: "hidden", position: "relative" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.img}
                alt={s.label}
                loading="lazy"
                style={{
                  width: "100%", height: "100%", objectFit: "cover", display: "block",
                  transform: hovered === i ? "scale(1.05)" : "scale(1)",
                  transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)",
                }}
              />
              <div style={{
                position: "absolute", top: "14px", left: "14px",
                padding: "5px 13px", borderRadius: "100px",
                background: "rgba(255,255,255,0.88)", backdropFilter: "blur(8px)",
              }}>
                <span style={{
                  fontFamily: "var(--font-outfit)", fontSize: "9px",
                  letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--ink)",
                }}>
                  {s.tag}
                </span>
              </div>
            </div>

            {/* Text */}
            <div style={{ padding: "clamp(20px,2.5vw,32px)" }}>
              <p style={{
                fontFamily: "var(--font-outfit)", fontSize: "10px",
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "var(--brown-2)", marginBottom: "10px",
              }}>
                {s.label}
              </p>
              <h3 style={{
                fontFamily: "var(--font-outfit)", fontSize: "clamp(24px,2.8vw,38px)",
                fontWeight: 700, fontStyle: "italic", color: "var(--ink)",
                lineHeight: 1.08, margin: "0 0 20px", whiteSpace: "pre-line",
              }}>
                {s.headline}
              </h3>
              <span style={{
                fontFamily: "var(--font-outfit)", fontSize: "11px",
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: hovered === i ? "var(--brown-2)" : "var(--ink)",
                borderBottom: `1px solid ${hovered === i ? "var(--brown-2)" : "var(--ink)"}`,
                paddingBottom: "2px",
                transition: "color 200ms, border-color 200ms",
              }}>
                Explore →
              </span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 680px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
