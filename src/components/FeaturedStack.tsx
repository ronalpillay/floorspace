"use client";

import { useRef, useEffect } from "react";
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

export default function FeaturedStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;

    let ctx: { revert: () => void } | null = null;

    async function init() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      if (!section) return;

      const cards = Array.from(
        section.querySelectorAll<HTMLElement>(".fs-card")
      );
      if (cards.length < 4) return;

      // Stack all cards at the same position, highest z on top
      gsap.set(cards, { x: 0, y: 0, scale: 1, opacity: 1 });
      cards.forEach((c, i) => { c.style.zIndex = String(N - i); });

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            // section is 400vh tall; sticky child keeps visual in place
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate(self) {
              const p = self.progress;
              // each card owns ~25% of the scroll range
              const idx = Math.min(N - 1, Math.floor(p * N));
              if (counterRef.current) {
                counterRef.current.textContent =
                  `${String(idx + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")}`;
              }
              dotsRef.current
                ?.querySelectorAll<HTMLElement>(".fs-dot")
                .forEach((d, i) => d.classList.toggle("is-active", i === idx));
            },
          },
        });

        // Phase 1 — spread (identical to Flipspaces anim.js)
        tl.to(cards[0], { scale: 1.05, x: -200, ease: "none" })
          .to(cards[1], { scale: 0.8,  x: 150,  ease: "none" }, "<")
          .to(cards[2], { scale: 0.6,  x: 350,  ease: "none" }, "<")
          .to(cards[3], { scale: 0.5,  x: 450, opacity: 1, ease: "none" }, "<")

          // Phase 2 — sequential exit left
          .to(cards[0], { opacity: 0, x: -250, scale: 1.1, pointerEvents: "none" }, "+=0.2")
          .to(cards[1], { x: -100, scale: 1.1 }, "<0.2")
          .to(cards[1], { opacity: 0, x: -150, pointerEvents: "none" }, "<0.25")
          .to(cards[2], { x: -100, scale: 1.1 }, "<0.25")
          .to(cards[2], { opacity: 0, x: -150, pointerEvents: "none" }, "<0.3")
          .to(cards[3], { x: 0, scale: 1.1, opacity: 1, zIndex: 4 }, "<0.3");
      });
    }

    init();
    return () => ctx?.revert();
  }, []);

  return (
    <>
      {/* ── Desktop: tall section + sticky inner ── */}
      <div ref={sectionRef} className="fs-section" aria-labelledby="featured-h">
        <div className="fs-sticky">
          <div className="fs-inner">
            {/* Left panel */}
            <div className="fs-header">
              <p className="fs-eyebrow">Selected Work</p>
              <h2 className="fs-title" id="featured-h">
                Spaces built to<br />inspire and perform.
              </h2>
              <p className="fs-counter" ref={counterRef}>01 / 04</p>
              <div className="fs-dots" ref={dotsRef}>
                {PROJECTS.map((p, i) => (
                  <span
                    key={p.slug}
                    className={`fs-dot${i === 0 ? " is-active" : ""}`}
                    aria-label={p.name}
                  />
                ))}
              </div>
              <Link href="/work" className="c-btn-dark" style={{ alignSelf: "flex-start", marginTop: "1.5rem" }}>
                View All Projects <ArrowRight size={15} aria-hidden />
              </Link>
            </div>

            {/* Card stack */}
            <div className="fs-cards">
              {PROJECTS.map((p, i) => (
                <article
                  key={p.slug}
                  className="fs-card"
                  style={{ zIndex: N - i }}
                >
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority={i === 0}
                    style={{ objectFit: "cover" }}
                  />
                  <div className="fs-card-overlay" aria-hidden />
                  <div className="fs-card-body">
                    <div>
                      <p className="fs-card-cat">{p.category}</p>
                      <h3 className="fs-card-name">{p.name}</h3>
                      <p className="fs-card-loc">{p.location}</p>
                    </div>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="fs-card-cta"
                      tabIndex={i === 0 ? 0 : -1}
                      onClick={e => e.stopPropagation()}
                    >
                      View Details
                      <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden>
                        <path d="M10.837 3.692L1.529 13 0 11.471l9.307-9.308H1.104V0H13v11.896h-2.163V3.692z" fill="currentColor"/>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile: plain vertical list ── */}
      <div className="fs-mobile" aria-label="Selected projects">
        <div className="fs-mobile-header">
          <p className="fs-eyebrow">Selected Work</p>
          <h2 className="fs-title" id="featured-h-m">
            Spaces built to<br />inspire and perform.
          </h2>
        </div>
        {PROJECTS.map(p => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="fs-mobile-card">
            <div className="fs-mobile-img">
              <Image src={p.image} alt={p.alt} fill style={{ objectFit: "cover" }} sizes="100vw" />
              <div className="fs-card-overlay" aria-hidden />
            </div>
            <div className="fs-mobile-body">
              <p className="fs-card-cat">{p.category}</p>
              <h3 className="fs-card-name">{p.name}</h3>
              <p className="fs-card-loc">{p.location}</p>
            </div>
          </Link>
        ))}
        <Link href="/work" className="c-btn-dark" style={{ marginTop: "8px" }}>
          View All Projects <ArrowRight size={15} aria-hidden />
        </Link>
      </div>
    </>
  );
}
