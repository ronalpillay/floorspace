"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    slug: "octillion-capital",
    name: "Octillion Capital",
    location: "Pune, India",
    category: "Corporate Office",
    image: "/images/octillion/homepage.jpg",
    alt: "Octillion Capital — premium corporate headquarters",
  },
  {
    slug: "chromewell",
    name: "Chromewell",
    location: "Pune, India",
    category: "Industrial Construction",
    image: "/images/chromewell/homepage.png",
    alt: "Chromewell — industrial facility aerial view",
  },
  {
    slug: "john-deere",
    name: "John Deere",
    location: "Pune, India",
    category: "Industrial Workspace",
    image: "/images/john-deere/homepage.png",
    alt: "John Deere — large-scale industrial workspace",
  },
  {
    slug: "tristone-flowtech",
    name: "Tristone Technologies",
    location: "Pune, India",
    category: "Corporate Workspace",
    image: "/images/tristone/01.jpg",
    alt: "Tristone Technologies — open-plan workspace",
  },
];

// Stack positions for each "distance from active" index
const STACK_STATES = [
  // pos 0 → front card
  { x: 0,   y: 0,  scale: 1,    opacity: 1,    zIndex: 4, events: true  },
  // pos 1 → first behind
  { x: 72,  y: 12, scale: 0.97, opacity: 0.82, zIndex: 3, events: true  },
  // pos 2 → second behind
  { x: 120, y: 22, scale: 0.94, opacity: 0.58, zIndex: 2, events: true  },
  // pos 3 → third behind
  { x: 158, y: 32, scale: 0.91, opacity: 0.34, zIndex: 1, events: false },
];

export default function FeaturedStack() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = PROJECTS.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive(a => (a + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section
      className="c-stack-section"
      aria-label="Selected projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="c-stack-inner">
        {/* ── Left header ── */}
        <div className="c-stack-header">
          <p className="c-stack-eyebrow">Selected Work</p>
          <h2 className="c-stack-title" id="featured-h">
            Spaces built to<br />inspire and perform.
          </h2>
          <p className="c-stack-sub">
            {String(active + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </p>

          {/* Navigation dots */}
          <div className="c-stack-dots" role="tablist" aria-label="Project slides">
            {PROJECTS.map((p, i) => (
              <button
                key={p.slug}
                className={`c-stack-dot${i === active ? " is-active" : ""}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Go to ${p.name}`}
                type="button"
              />
            ))}
          </div>

          <Link href="/work" className="c-btn-dark" style={{ alignSelf: "flex-start", marginTop: "1rem" }}>
            View All Projects <ArrowRight size={15} aria-hidden />
          </Link>
        </div>

        {/* ── Stacked cards ── */}
        <div className="c-stack-cards" aria-live="polite">
          {PROJECTS.map((p, i) => {
            const pos = (i - active + n) % n;
            const s = STACK_STATES[pos] ?? STACK_STATES[3];
            const transform = `translateX(${s.x}px) translateY(${s.y}px) scale(${s.scale})`;

            return (
              <article
                key={p.slug}
                className="c-stack-card"
                style={{
                  zIndex: s.zIndex,
                  transform,
                  opacity: s.opacity,
                  pointerEvents: s.events ? "auto" : "none",
                }}
                onClick={() => setActive(i)}
                aria-hidden={pos !== 0}
              >
                <div className="c-stack-card-img">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={i === 0}
                    style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }}
                  />
                </div>
                <div className="c-stack-card-overlay" aria-hidden />
                <div className="c-stack-card-body">
                  <div>
                    <p className="c-stack-card-category">{p.category}</p>
                    <h3 className="c-stack-card-title">{p.name}</h3>
                    <p className="c-stack-card-loc">{p.location}</p>
                  </div>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="c-stack-card-cta"
                    onClick={e => e.stopPropagation()}
                    tabIndex={pos === 0 ? 0 : -1}
                  >
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden>
                      <path d="M10.837 3.692L1.529 13 0 11.471l9.307-9.308H1.104V0H13v11.896h-2.163V3.692z" fill="currentColor"/>
                    </svg>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
