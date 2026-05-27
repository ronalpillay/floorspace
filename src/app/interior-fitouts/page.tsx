import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Footer from "@/components/Footer";
import ContemporaryNav from "@/components/ContemporaryNav";
import "../contemporary.css";

export const metadata: Metadata = {
  title: "Interior Fit Outs — Floor-Space India",
  description:
    "Premium commercial interior fit-outs across India. Corporate offices, banking interiors, healthcare facilities, retail showrooms, and IT campuses. Turnkey delivery from brief to handover.",
};

const services = [
  {
    title: "Corporate Office Interiors",
    desc: "Open-plan workspaces, private cabins, boardrooms, and collaborative zones designed for modern work culture.",
  },
  {
    title: "Banking & Institutional",
    desc: "Authoritative, compliance-ready interiors that reinforce trust — teller areas, vaults, and executive floors.",
  },
  {
    title: "Healthcare Facilities",
    desc: "Hygienic, calming patient environments with durable finishes, compliant lighting, and infection-control detailing.",
  },
  {
    title: "Hospitality & F&B",
    desc: "Restaurant, café, and hotel interiors designed to create atmosphere and maximise covers per square foot.",
  },
  {
    title: "Retail & Showroom",
    desc: "High-impact retail interiors with zoning strategies, accent lighting, and brand-aligned materials.",
  },
  {
    title: "IT & Tech Campuses",
    desc: "Agile campuses with focus pods, collaboration hubs, server-room coordination, and tech infrastructure integration.",
  },
];

const processSteps = [
  { num: "01", title: "Brief & Discovery", desc: "We understand your culture, headcount, adjacencies, and brand guidelines before touching a drawing." },
  { num: "02", title: "Concept Design", desc: "Space planning, mood boards, and 3D visualisations so you can see the space before it's built." },
  { num: "03", title: "Detailed Design & BOQ", desc: "Construction drawings, material specifications, and transparent bill of quantities with no surprises." },
  { num: "04", title: "Procurement & Fabrication", desc: "Factory-manufactured joinery, curated vendor sourcing, and strict QC at our yard before site delivery." },
  { num: "05", title: "Site Execution", desc: "Phased fit-out managed by a dedicated site team. Weekly reporting and zero-defect commitment." },
];

const gallery = [
  { src: "/images/smbc-bkc-reception.jpg", alt: "SMBC BKC — reception and lobby" },
  { src: "/images/smbc-bkc-corridor.jpg", alt: "SMBC BKC — corridor" },
  { src: "/images/octillion-reception-main.jpg", alt: "Octillion — reception" },
  { src: "/images/octillion-boardroom-main.jpg", alt: "Octillion — boardroom" },
  { src: "/images/octillion-biophilic.jpg", alt: "Octillion — biophilic workspace" },
];

export default function InteriorFitoutsPage() {
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
        aria-labelledby="if-hero-h"
      >
        <Image
          src="/images/smbc-bkc-reception.jpg"
          alt="Interior fit-out — SMBC BKC reception"
          fill
          priority
          style={{ objectFit: "cover", filter: "saturate(0.85) contrast(1.06) brightness(0.62)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(8,8,8,0.28) 0%, rgba(8,8,8,0.68) 100%)" }} aria-hidden />
        <div style={{ position: "relative", zIndex: 2, padding: "0 52px 72px", maxWidth: 860 }}>
          <p className="c-hero-kicker">Floor-Space India</p>
          <h1
            id="if-hero-h"
            style={{
              color: "#fff",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(2.6rem, 5vw, 5rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              marginBottom: 28,
            }}
          >
            Interior<br />Fit Outs
          </h1>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 520, marginBottom: 36 }}>
            Turnkey commercial interiors — from concept and design to procurement, fabrication, and handover — for organisations that demand quality.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            <Link href="/contact" className="c-btn-hero-primary">
              Start a Project <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/work" className="c-btn-hero-ghost">View Portfolio</Link>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section
        style={{ background: "var(--c-white)", padding: "80px 52px", borderBottom: "1px solid var(--c-border)" }}
        aria-labelledby="if-overview-h"
      >
        <div style={{ maxWidth: 1260, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <p className="c-section-kicker">Our Approach</p>
            <h2 className="c-section-title" id="if-overview-h" style={{ marginBottom: 24 }}>
              Interiors that inspire and perform
            </h2>
            <p style={{ color: "var(--c-ink-2)", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: 20 }}>
              Floor-Space India has completed over 470 fit-out projects across India — offices for multinational banks, campuses for tech companies, and healthcare facilities for leading hospital groups. Our work balances aesthetic ambition with functional precision.
            </p>
            <p style={{ color: "var(--c-ink-2)", fontSize: "0.96rem", lineHeight: 1.75, marginBottom: 32 }}>
              Every project is managed under a single contract with fixed timelines and transparent pricing. You get one team, one point of contact, and complete accountability from brief to handover.
            </p>
            <Link href="/contact" className="c-btn-dark">
              Discuss Your Project <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
          <div style={{ position: "relative", height: 460, borderRadius: 24, overflow: "hidden" }}>
            <Image
              src="/images/smbc-bkc-corridor.jpg"
              alt="Completed interior — corridor detail"
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
        aria-labelledby="if-services-h"
      >
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>
          <p className="c-section-kicker">Sectors We Serve</p>
          <h2 className="c-section-title" id="if-services-h" style={{ marginBottom: 48 }}>
            Spaces we specialise in
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
        aria-labelledby="if-process-h"
      >
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>
          <p className="c-section-kicker">How We Work</p>
          <h2 className="c-section-title" id="if-process-h" style={{ marginBottom: 52 }}>
            From brief to beautiful
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
        aria-labelledby="if-gallery-h"
      >
        <div style={{ maxWidth: 1260, margin: "0 auto" }}>
          <p className="c-section-kicker">Selected Work</p>
          <h2 className="c-section-title" id="if-gallery-h" style={{ marginBottom: 40 }}>
            Recent fit-outs
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
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
                  gridColumn: i === 0 ? "span 3" : "span 1",
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
        aria-labelledby="if-cta-h"
      >
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <p className="c-section-kicker" style={{ color: "rgba(255,255,255,0.5)" }}>Ready to Transform Your Space?</p>
          <h2
            id="if-cta-h"
            style={{
              color: "#fff",
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              marginBottom: 32,
            }}
          >
            Let&apos;s create a space your team will love.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.96rem", lineHeight: 1.7, marginBottom: 40 }}>
            Tell us about your project — size, location, sector, and timeline. We respond within 24 hours.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="c-btn-light">
              Start a Conversation <ArrowRight size={16} aria-hidden />
            </Link>
            <Link href="/work" className="c-btn-ghost-light">
              Browse Portfolio <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
