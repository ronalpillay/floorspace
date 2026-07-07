"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
    image: "/images/chromewell/homepage.jpg",
    alt: "Chromewell — industrial facility aerial view",
  },
  {
    slug: "john-deere",
    name: "John Deere",
    location: "Pune, India",
    category: "Industrial Workspace",
    image: "/images/john-deere/homepage.jpg",
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

const N = PROJECTS.length;

// Progress thresholds at which each card becomes "active" (front)
const ACTIVE_THRESHOLDS = [0, 0.38, 0.56, 0.74];

export default function FeaturedStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    // ── Mobile: no pinning, plain vertical stack ──
    if (window.innerWidth < 768) return;

    const cardEls = gsap.utils.toArray<HTMLElement>(".fs-stack-card", section);

    // All cards start perfectly stacked (Flipspaces approach)
    gsap.set(cardEls, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: (i: number) => N - i,
    });

    const masterTL = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate(self) {
          // Update counter and dots without React re-render
          const prog = self.progress;
          let idx = 0;
          for (let i = ACTIVE_THRESHOLDS.length - 1; i >= 0; i--) {
            if (prog >= ACTIVE_THRESHOLDS[i]) { idx = i; break; }
          }
          if (counterRef.current) {
            counterRef.current.textContent =
              `${String(idx + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")}`;
          }
          if (dotsRef.current) {
            dotsRef.current.querySelectorAll<HTMLElement>(".fs-dot").forEach((d, i) => {
              d.classList.toggle("is-active", i === idx);
            });
          }
        },
      },
    });

    // Phase 1 – spread: front card nudges left, back cards fan right at smaller scales
    masterTL
      .to(cardEls[0], { scale: 1.05, x: -200, ease: "none" })
      .to(cardEls[1], { scale: 0.8,  x: 150,  ease: "none" }, "<")
      .to(cardEls[2], { scale: 0.6,  x: 350,  ease: "none" }, "<")
      .to(cardEls[3], { scale: 0.5,  x: 450,  opacity: 1, ease: "none" }, "<")

      // Phase 2 – sequential exit: each card flies left, next takes over
      .to(cardEls[0], { opacity: 0, x: -250, scale: 1.1, pointerEvents: "none" }, "+=0.2")
      .to(cardEls[1], { x: -100, scale: 1.1 }, "<0.2")
      .to(cardEls[1], { opacity: 0, x: -150, pointerEvents: "none" }, "<0.25")
      .to(cardEls[2], { x: -100, scale: 1.1 }, "<0.25")
      .to(cardEls[2], { opacity: 0, x: -150, pointerEvents: "none" }, "<0.3")
      .to(cardEls[3], { x: 0, scale: 1.1, opacity: 1, zIndex: 4 }, "<0.3");

  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="c-stack-section"
      aria-labelledby="featured-h"
    >
      <div className="c-stack-inner">
        {/* ── Left panel ── */}
        <div className="c-stack-header">
          <p className="c-stack-eyebrow">Selected Work</p>
          <h2 className="c-stack-title" id="featured-h">
            Spaces built to<br />inspire and perform.
          </h2>
          <p className="c-stack-sub" ref={counterRef}>
            01 / 04
          </p>
          <div className="c-stack-dots" ref={dotsRef} role="tablist" aria-label="Project slides">
            {PROJECTS.map((p, i) => (
              <span
                key={p.slug}
                className={`c-stack-dot fs-dot${i === 0 ? " is-active" : ""}`}
                role="tab"
                aria-label={p.name}
              />
            ))}
          </div>
          <Link href="/work" className="c-btn-dark" style={{ alignSelf: "flex-start", marginTop: "1.25rem" }}>
            View All Projects <ArrowRight size={15} aria-hidden />
          </Link>
        </div>

        {/* ── Stacked cards ── */}
        <div className="c-stack-cards">
          {PROJECTS.map((p, i) => (
            <article
              key={p.slug}
              className="c-stack-card fs-stack-card"
              style={{ zIndex: N - i }}
              aria-label={p.name}
            >
              <div className="c-stack-card-img">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={i === 0}
                  style={{ objectFit: "cover" }}
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
                  tabIndex={i === 0 ? 0 : -1}
                  onClick={e => e.stopPropagation()}
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden>
                    <path d="M10.837 3.692L1.529 13 0 11.471l9.307-9.308H1.104V0H13v11.896h-2.163V3.692z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Mobile: plain vertical list */}
      <div className="c-stack-mobile">
        {PROJECTS.map(p => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="c-stack-mobile-card">
            <div className="c-stack-mobile-img">
              <Image src={p.image} alt={p.alt} fill style={{ objectFit: "cover" }} sizes="100vw" />
              <div className="c-stack-card-overlay" aria-hidden />
            </div>
            <div className="c-stack-mobile-body">
              <span className="c-stack-card-category">{p.category}</span>
              <h3 className="c-stack-card-title">{p.name}</h3>
              <span className="c-stack-card-loc">{p.location}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
