import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ValueStrip from "@/components/ValueStrip";
import "../page-hero.css";
import "./work.css";

export const metadata: Metadata = {
  title: "Our Work — Floor Space India",
  description:
    "470+ commercial spaces delivered across banking, corporate, industrial, and institutional sectors. View selected projects.",
};

const projects = [
  {
    name: "SMBC Bank — BKC",
    sector: "Banking & Financial",
    city: "Mumbai",
    area: "45,000 sq ft",
    image: "/images/smbc/001.jpg",
    alt: "SMBC BKC — banking and executive floor interior",
    desc: "A landmark banking interior across multiple floors in Mumbai's financial district.",
    tall: true,
  },
  {
    name: "Tristone Technologies",
    sector: "Corporate",
    city: "Pune",
    area: "22,000 sq ft",
    image: "/images/tristone/01.jpg",
    alt: "Tristone Technologies — open-plan workspace",
    desc: "Open-plan and collaborative workspace for a technology consultancy.",
    tall: true,
  },
  {
    name: "Octillion Capital",
    sector: "Corporate",
    city: "Pune",
    area: "18,000 sq ft",
    image: "/images/octillion-reception.jpg",
    alt: "Octillion Capital — premium corporate headquarters",
    desc: "Premium corporate headquarters with lounge, boardroom, and open-plan floors.",
    tall: false,
  },
  {
    name: "MQT Industries",
    sector: "Industrial",
    city: "Pune",
    area: "35,000 sq ft",
    image: "/images/mqt/open-ceiling.jpg",
    alt: "MQT Industries — industrial facility",
    desc: "Industrial facility with canteen, open-plan office, and specialized zones.",
    tall: false,
  },
  {
    name: "John Deere",
    sector: "Industrial",
    city: "Pune",
    area: "28,000 sq ft",
    image: "/images/john-deere/01.jpg",
    alt: "John Deere — large-scale industrial workspace",
    desc: "Large-scale industrial workspace with modern office integration.",
    tall: false,
  },
  {
    name: "TII Corporation",
    sector: "Corporate",
    city: "Pune",
    area: "12,000 sq ft",
    image: "/images/tii/reception-1.jpg",
    alt: "TII Corporation — corporate reception",
    desc: "Corporate reception and collaboration space with custom millwork.",
    tall: false,
  },
  {
    name: "Mazak India",
    sector: "Industrial",
    city: "Pune",
    area: "20,000 sq ft",
    image: "/images/mazak-lobby.jpg",
    alt: "Mazak India — precision manufacturing showroom",
    desc: "Precision manufacturing showroom and office integration.",
    tall: false,
  },
];

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
      <Nav />
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

        {/* ── Projects Grid ── */}
        <section className="section capability-section" id="projects" aria-labelledby="projects-h">
          <div className="section-inner">
            <div className="work-header" style={{ marginBottom: 46 }}>
              <div>
                <p className="section-kicker">All Projects</p>
                <h2
                  className="section-title"
                  id="projects-h"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  470+ spaces delivered.
                </h2>
              </div>
            </div>

            <div className="work-projects-grid">
              {projects.map((project) => (
                <article
                  className={`work-project-card ${project.tall ? "work-project-card--tall" : ""}`}
                  key={project.name}
                >
                  <Image
                    alt={project.alt}
                    className="capability-image"
                    fill
                    loading="lazy"
                    sizes="(max-width: 760px) 100vw, (max-width: 1020px) 50vw, 33vw"
                    src={project.image}
                  />
                  <div className="work-project-overlay" aria-hidden />
                  <div className="work-project-content">
                    <p className="work-project-meta">
                      <span className="work-project-sector">{project.sector}</span>
                      <span aria-hidden> · </span>
                      <span>{project.city}</span>
                      <span aria-hidden> · </span>
                      <span>{project.area}</span>
                    </p>
                    <h3 className="work-project-title">{project.name}</h3>
                    <p className="work-project-desc">{project.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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
                { stat: "470+", label: "Projects Delivered" },
                { stat: "7", label: "Sectors Served" },
                { stat: "15+", label: "Years Experience" },
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
