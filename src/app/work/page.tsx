import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import ContemporaryNav from "@/components/ContemporaryNav";
import Footer from "@/components/Footer";
import ValueStrip from "@/components/ValueStrip";
import WorkPortfolio from "@/components/WorkPortfolio";
import VideoShowcase from "@/components/VideoShowcase";
import "../contemporary.css";
import "../page-hero.css";
import "./work.css";

export const metadata: Metadata = {
  title: "Our Work — Floor-Space India",
  description:
    "225+ commercial spaces delivered across banking, corporate, industrial, and institutional sectors. View selected projects.",
};


const testimonials = [
  {
    quote:
      "Floor Space is the best option for beautiful yet elegant interiors. Their attention to detail is remarkable.",
    name: "Vijay Joshi",
    role: "Director",
  },
  {
    quote:
      "Strongly recommend FSIPL for revolutionizing your office ambience. Professional team, on-time delivery.",
    name: "Parimal B",
    role: "Managing Director",
  },
];

export default function WorkPage() {
  return (
    <>
      <ContemporaryNav solid />
      <main>
        {/* ── Hero ── */}
        <section className="page-hero-small" aria-labelledby="work-hero-h">
          <div className="page-hero-small-media">
            <Image
              alt="Tristone Technologies — interior showcase"
              className="page-hero-small-image"
              fill
              fetchPriority="high"
              priority
              sizes="100vw"
              src="/images/tristone/01.jpg"
            />
          </div>
          <div className="page-hero-small-overlay" aria-hidden />

          <div className="page-hero-small-content">
            <p className="hero-kicker">Portfolio</p>
            <h1
              id="work-hero-h"
              style={{
                color: "var(--color-paper-strong)",
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "clamp(3rem, 5.5vw, 5.5rem)",
                fontWeight: 500,
                lineHeight: 0.96,
                marginBottom: 18,
                maxWidth: 720,
              }}
            >
              Selected Work.
            </h1>
            <p
              style={{
                color: "rgba(255, 250, 240, 0.72)",
                fontSize: "1.1rem",
                lineHeight: 1.6,
                maxWidth: 520,
              }}
            >
              Projects delivered across banking, corporate, industrial, and institutional sectors.
            </p>
          </div>
        </section>

        {/* ── Projects Grid (filterable) ── */}
        <WorkPortfolio />

        {/* ── Video Showcase ── */}
        <VideoShowcase />

        {/* ── Stats Strip ── */}
        <section
          className="section about-section"
          id="work-stats"
          aria-labelledby="work-stats-h"
        >
          <div className="section-inner">
            <h2 className="sr-only" id="work-stats-h">
              Project statistics
            </h2>
            <div
              style={{
                display: "grid",
                gap: 0,
                gridTemplateColumns: "repeat(4, 1fr)",
              }}
            >
              {[
                { stat: "225+", label: "Projects Delivered" },
                { stat: "7", label: "Sectors Served" },
                { stat: "17+", label: "Years Experience" },
                { stat: "PAN India", label: "Project Reach" },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  style={{
                    borderRight: "1px solid var(--color-line)",
                    padding: "32px 28px",
                    textAlign: "center",
                  }}
                >
                  <strong
                    style={{
                      color: "var(--color-ink)",
                      display: "block",
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                      fontWeight: 600,
                      lineHeight: 1,
                      marginBottom: 10,
                    }}
                  >
                    {stat}
                  </strong>
                  <span
                    style={{
                      color: "var(--color-muted)",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 760px) {
              #work-stats .section-inner > div {
                grid-template-columns: repeat(2, 1fr);
              }
              #work-stats .section-inner > div > div {
                border-bottom: 1px solid var(--color-line);
              }
            }
          `}</style>
        </section>

        {/* ── Testimonials ── */}
        <section
          className="section services-section"
          id="work-testimonials"
          aria-labelledby="work-testimonials-h"
        >
          <div className="section-inner">
            <p className="section-kicker">Client Voices</p>
            <h2 className="section-title" id="work-testimonials-h" style={{ marginBottom: 44 }}>
              Trusted by leaders across India.
            </h2>

            <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(2, 1fr)" }}>
              {testimonials.map((t) => (
                <article
                  key={t.name}
                  style={{
                    background: "rgba(255, 250, 240, 0.05)",
                    border: "1px solid rgba(255, 250, 240, 0.13)",
                    borderRadius: "var(--radius-md)",
                    display: "grid",
                    gap: 20,
                    padding: "32px 28px",
                  }}
                >
                  <div style={{ display: "flex", gap: 3 }}>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        aria-hidden
                        fill="#c9ad86"
                        key={i}
                        size={14}
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p
                    style={{
                      color: "rgba(255, 250, 240, 0.78)",
                      fontSize: "1.05rem",
                      fontStyle: "italic",
                      lineHeight: 1.68,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <p
                      style={{
                        color: "var(--color-paper-strong)",
                        fontSize: "0.9rem",
                        fontWeight: 650,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        color: "rgba(255, 250, 240, 0.52)",
                        fontSize: "0.82rem",
                        marginTop: 3,
                      }}
                    >
                      {t.role}
                    </p>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section vision-section" id="work-cta" aria-labelledby="work-cta-h">
          <div className="section-inner" style={{ textAlign: "center" }}>
            <p className="section-kicker" style={{ color: "#c9ad86" }}>
              Start a Project
            </p>
            <h2 className="vision-title" id="work-cta-h">
              Ready to start your project?
            </h2>
            <Link className="fs-button fs-button-primary" href="/contact">
              Start a Conversation
              <ArrowRight aria-hidden size={17} strokeWidth={1.8} />
            </Link>
          </div>
        </section>
      </main>

      <ValueStrip />
      <Footer />
    </>
  );
}
