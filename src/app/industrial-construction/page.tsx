import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import ContemporaryNav from "@/components/ContemporaryNav";
import "../contemporary.css";

const services = [
  {
    title: "Civil & Structural Works",
    desc: "Foundation, RCC, masonry, and structural steel for industrial facilities built to last.",
  },
  {
    title: "MEP Services",
    desc: "Mechanical, electrical, and plumbing systems designed for industrial-grade reliability.",
  },
  {
    title: "Factory Fit-Outs",
    desc: "Production area layouts, flooring, wall finishes, and utility runs for manufacturing plants.",
  },
  {
    title: "Warehousing & Storage",
    desc: "High-bay storage, racking systems, loading docks, and logistics-optimised floor plans.",
  },
  {
    title: "Clean Rooms & Labs",
    desc: "Controlled-environment spaces meeting ISO classification requirements for pharma and R&D.",
  },
  {
    title: "Turnkey Project Management",
    desc: "Single-point accountability from detailed engineering to handover — on schedule, on budget.",
  },
];

const processSteps = [
  { num: "01", title: "Site Assessment", desc: "We visit your site, review soil reports, utility access, and local regulations before anything else." },
  { num: "02", title: "Detailed Design", desc: "Our engineering team produces construction drawings, MEP layouts, and BOQ with full transparency." },
  { num: "03", title: "Approvals & Permits", desc: "We handle liaison with local authorities, factory inspectorates, and statutory bodies." },
  { num: "04", title: "Construction", desc: "Phased execution with weekly progress reports. Zero compromises on safety or material specification." },
  { num: "05", title: "Commissioning & Handover", desc: "System-by-system commissioning, snagging, and documentation before keys are handed over." },
];

const gallery = [
  { src: "/images/hero-ext-1.jpg", alt: "Industrial construction — completed facility" },
  { src: "/images/hero-ext-2.jpg", alt: "Industrial construction — building exterior" },
  { src: "/images/hero-ext-4.jpg", alt: "Industrial construction — factory exterior" },
  { src: "/images/hero-ext-5.jpg", alt: "Industrial construction — industrial campus" },
];

export default function IndustrialConstructionPage() {
  return (
    <div className="c-page">

      <ContemporaryNav solid />

      {/* ── Hero ── */}
      <section
        style={{
          position: "relative",
          minHeight: "72vh",
          display: "flex",
          alignItems: "flex-end",
          paddingTop: "80px",
          overflow: "hidden",
        }}
        aria-labelledby="ic-hero-h"
      >
        <Image
          src="/images/hero-ext-5.jpg"
          alt="Industrial construction — Mazak facility"
          fill
          priority
          style={{ objectFit: "cover", filter: "saturate(0.82) contrast(1.06) brightness(0.62)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(8,8,8,0.32) 0%, rgba(8,8,8,0.65) 100%)" }} aria-hidden />
        <div style={{ position: "relative", zIndex: 2, padding: "0 52px 72px", maxWidth: 860 }}>
          <p className="c-hero-kicker">Floor-Space India</p>
          <h1
            id="ic-hero-h"
            style={{
              color: "#fff",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.6rem, 5vw, 5rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            Industrial<br />Construction
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
            End-to-end construction for manufacturing plants, warehouses, and industrial campuses — delivered on time and built to last.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/contact" className="c-btn-hero-primary">
              Get a Quote <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/work" className="c-btn-hero-ghost">View Projects</Link>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section
        style={{ background: "var(--c-white)", padding: "80px 52px", borderBottom: "1px solid var(--c-border)" }}
        aria-labelledby="ic-overview-h"
      >
        <div style={{ maxWidth: 1260, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p className="c-section-kicker">What We Build</p>
            <h2 className="c-section-title" id="ic-overview-h" style={{ marginBottom: 24 }}>
              Industrial spaces built for performance
            </h2>
            <p style={{ color: "var(--c-ink-2)", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: 20 }}>
              Floor-Space India has delivered industrial construction projects for manufacturers, logistics operators, and technology companies across India. We bring engineering rigour, transparent procurement, and a single point of accountability to every project.
            </p>
            <p style={{ color: "var(--c-ink-2)", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: 32 }}>
              From greenfield factory builds to phased expansions and specialised clean-room construction, our teams manage complexity so your operations stay on track.
            </p>
            <Link href="/contact" className="c-btn-dark">
              Discuss Your Project <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
          <div style={{ position: "relative", height: 460, borderRadius: 24, overflow: "hidden" }}>
            <Image
              src="/images/hero-ext-3.jpg"
              alt="Industrial facility interior"
              fill
              loading="lazy"
              style={{ objectFit: "cover", filter: "saturate(0.88) contrast(1.04)" }}
            />
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section
        style={{ background: "var(--c-bg)", padding: "80px 52px" }}
        aria-labelledby="ic-services-h"
      >
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>
          <p className="c-section-kicker">Our Capabilities</p>
          <h2 className="c-section-title" id="ic-services-h" style={{ marginBottom: 48 }}>
            Services we provide
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {services.map((s) => (
              <div
                key={s.title}
                style={{
                  background: "var(--c-white)",
                  border: "1px solid var(--c-border)",
                  borderRadius: "var(--c-radius-card)",
                  padding: "32px 28px",
                  borderTop: "3px solid var(--c-accent)",
                }}
              >
                <h3 style={{ color: "var(--c-ink)", fontSize: "1rem", fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "var(--c-ink-2)", fontSize: "0.88rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section
        style={{ background: "var(--c-white)", padding: "80px 52px", borderTop: "1px solid var(--c-border)" }}
        aria-labelledby="ic-process-h"
      >
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>
          <p className="c-section-kicker">How We Work</p>
          <h2 className="c-section-title" id="ic-process-h" style={{ marginBottom: 52 }}>
            Our construction process
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr",
                  gap: 32,
                  padding: "32px 0",
                  borderBottom: i < processSteps.length - 1 ? "1px solid var(--c-border)" : "none",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    color: "var(--c-accent)",
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "2.2rem",
                    fontWeight: 600,
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 style={{ color: "var(--c-ink)", fontSize: "1.05rem", fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ color: "var(--c-ink-2)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: 600 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section
        style={{ background: "var(--c-bg)", padding: "80px 52px" }}
        aria-labelledby="ic-gallery-h"
      >
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>
          <p className="c-section-kicker">Selected Projects</p>
          <h2 className="c-section-title" id="ic-gallery-h" style={{ marginBottom: 40 }}>
            Work we&apos;re proud of
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {gallery.map((img, i) => (
              <div
                key={img.src}
                style={{
                  position: "relative",
                  borderRadius: "var(--c-radius-card)",
                  overflow: "hidden",
                  aspectRatio: i === 0 ? "16/9" : "4/3",
                  gridColumn: i === 0 ? "span 2" : "span 1",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  style={{ objectFit: "cover", filter: "saturate(0.88) contrast(1.04)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="c-contact-section"
        style={{ margin: "10px", borderRadius: "var(--c-radius-hero)" }}
        aria-labelledby="ic-cta-h"
      >
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p className="c-section-kicker" style={{ color: "rgba(255,255,255,0.5)" }}>Ready to Build?</p>
          <h2
            id="ic-cta-h"
            style={{
              color: "#fff",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Let&apos;s build your industrial facility the right way.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.96rem", lineHeight: 1.7, marginBottom: 40 }}>
            Share your location, scope, and timeline. We&apos;ll come back with a clear path forward.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="c-btn-light">
              Get a Quote <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/work" className="c-btn-ghost-light">
              View Our Work <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
