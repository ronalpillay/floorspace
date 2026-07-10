"use client";

import { useState } from "react";

const projects = [
  { title:"Octillion Capital",      img:"/images/octillion/01.jpg",           aspect:"4/5" },
  { title:"Zycus Inc.",            img:"/images/zycus-corridor.jpg",          aspect:"1/1" },
  { title:"Octillion Reception",   img:"/images/octillion-reception.jpg",     aspect:"3/4" },
  { title:"Mazak Corporation",     img:"/images/mazak-exterior.jpg",          aspect:"4/3" },
  { title:"Octillion Collab",      img:"/images/octillion-collab.jpg",        aspect:"1/1" },
  { title:"Octillion Boardroom",   img:"/images/octillion-boardroom.jpg",     aspect:"1/1" },
  { title:"Tristone Flowtech",     img:"/images/tristone-reception.jpg",      aspect:"4/5" },
  { title:"Octillion Cafeteria",   img:"/images/octillion-cafeteria.jpg",     aspect:"1/1" },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  // Split into 3 columns
  const col1 = [projects[0], projects[1]];
  const col2 = [projects[2], projects[3], projects[4]];
  const col3 = [projects[5], projects[6], projects[7]];

  const renderCard = (p: typeof projects[0], i: number) => {
    const idx = projects.indexOf(p);
    return (
      <div
        key={p.title}
        style={{
          position:"relative", overflow:"hidden", borderRadius:"24px",
          aspectRatio: p.aspect, cursor:"pointer",
          marginBottom: "clamp(12px,2vw,24px)"
        }}
        onMouseEnter={() => setHovered(idx)}
        onMouseLeave={() => setHovered(null)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.img} alt={p.title} loading="lazy"
          style={{
            width:"100%", height:"100%", objectFit:"cover", display:"block",
            transform: hovered === idx ? "scale(1.05)" : "scale(1)",
            transition:"transform 700ms cubic-bezier(0.16,1,0.3,1)",
          }}
        />
        <div style={{
          position:"absolute", inset:0,
          background:"linear-gradient(to top, rgba(10,11,26,0.8) 0%, rgba(10,11,26,0) 40%)",
          opacity: hovered === idx ? 1 : 0.85,
          transition:"opacity 300ms",
        }} />
        
        {/* Bottom Bar: Title & Arrow */}
        <div style={{
          position:"absolute", bottom:"24px", left:"24px", right:"24px",
          display:"flex", justifyContent:"space-between", alignItems:"flex-end"
        }}>
          <span style={{
            fontFamily:"var(--font-outfit)", fontSize:"clamp(18px,2vw,24px)",
            fontWeight:700, color:"#fff",
            transform: hovered === idx ? "translateY(0)" : "translateY(4px)",
            transition:"transform 300ms",
          }}>
            {p.title}
          </span>
          <div style={{
            width:"36px", height:"36px", borderRadius:"50%", background:"#fff",
            display:"flex", alignItems:"center", justifyContent:"center",
            color:"var(--ink)", fontSize:"18px",
            transform: hovered === idx ? "rotate(45deg) scale(1.1)" : "rotate(0deg) scale(1)",
            transition:"all 300ms cubic-bezier(0.16,1,0.3,1)", flexShrink:0
          }}>
            ↗
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="portfolio" style={{ background:"var(--bg-page)", padding:"clamp(60px,8vw,120px) clamp(16px,2.5vw,32px)" }}>
      
      {/* Header Area */}
      <div style={{
        display:"grid", gridTemplateColumns:"1.2fr 1fr", gap:"40px",
        marginBottom:"clamp(40px,6vw,80px)", alignItems:"flex-end"
      }} className="portfolio-header">
        
        <h2 style={{
          fontSize:"clamp(36px,5vw,96px)", fontWeight:200, color:"var(--ink)", textTransform: "uppercase",
          lineHeight:1.0, letterSpacing:"-0.03em", margin:0
        }}>
          Selected<br/>
          <span style={{ color: "var(--brown-1)", fontStyle: "italic", fontWeight: 300 }}>Projects</span>
        </h2>

        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start", gap:"24px" }}>
          <p style={{ fontFamily:"var(--font-outfit)", fontSize:"16px", color:"var(--muted)", lineHeight:1.6, maxWidth:"380px", fontWeight: 300 }}>
            Floorspace will showcase its vision of contemporary architecture, interior design trends, and innovative living at Salone del Mobile.Milano 2026.
          </p>
          <a href="#" className="btn-primary" style={{ background:"var(--ink)", color: "var(--bg-page)", border:"none", padding:"12px 28px", fontWeight: 600, borderRadius: 0, textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "12px" }}>
            View More →
          </a>
        </div>
      </div>

      {/* Masonry Columns */}
      <div style={{
        display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"clamp(12px,2vw,24px)",
        alignItems:"flex-start"
      }} className="portfolio-grid">
        
        {/* Col 1 */}
        <div style={{ display:"flex", flexDirection:"column" }}>
          {col1.map(renderCard)}
        </div>

        {/* Col 2 */}
        <div style={{ display:"flex", flexDirection:"column" }}>
          {col2.map(renderCard)}
        </div>

        {/* Col 3 */}
        <div style={{ display:"flex", flexDirection:"column" }}>
          {col3.map(renderCard)}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-header { grid-template-columns: 1fr !important; }
          .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
