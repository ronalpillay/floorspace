import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import ContemporaryNav from "@/components/ContemporaryNav";
import Footer from "@/components/Footer";
import "../contemporary.css";

export const metadata: Metadata = {
  title: "Certificates — Floor-Space India",
  description: "Floor-Space India holds industry-recognised certifications across quality management, safety standards, and professional excellence.",
};

const certificates = [
  {
    num: "01",
    title: "ISO 9001:2015",
    body: "Quality Management Systems",
    issuer: "Bureau Veritas",
    year: "Granted",
    desc: "Floor-Space India has been granted ISO 9001:2015 certification — the internationally recognised standard for Quality Management Systems. This certifies our consistent delivery of quality processes across design, procurement, and construction on every project.",
    Icon: Award,
  },
];

export default function CertificatesPage() {
  return (
    <div className="c-page">
      <ContemporaryNav solid />

      {/* ── Hero ── */}
      <section className="c-page-hero-teal" aria-labelledby="certs-h">
        <div className="c-page-hero-body">
          <p className="c-page-hero-kicker">Credentials</p>
          <h1 className="c-page-hero-title" id="certs-h">
            Certified Excellence.<br />Built on Trust.
          </h1>
          <p className="c-page-hero-sub">
            Our certifications reflect our commitment to quality, safety, and
            accountability across every project we deliver.
          </p>
        </div>
      </section>

      {/* ── Stat rail ── */}
      <div className="c-stat-rail">
        {[
          { value: "ISO 9001", label: "International Standard" },
          { value: "Bureau Veritas", label: "Certifying Body" },
          { value: "15+",      label: "Years Compliant" },
          { value: "100%",     label: "Audit Ready" },
        ].map(({ value, label }) => (
          <div key={label} className="c-stat-rail-item">
            <p className="c-stat-rail-value">{value}</p>
            <p className="c-stat-rail-label">{label}</p>
          </div>
        ))}
      </div>

      {/* ── Certificate — full-width two-col ── */}
      <section className="c-section" aria-labelledby="certs-list-h">
        <div className="c-section-inner">
          <p className="c-section-kicker" data-reveal>Our Standards</p>
          <h2 className="c-section-title" id="certs-list-h" data-reveal>
            Internationally certified quality.
          </h2>

          <div className="c-cert-feature" data-reveal>
            {/* Image side */}
            <div className="c-cert-feature-img">
              <Image
                src="/images/hero-ext-3.jpg"
                alt="Floor-Space India — ISO certified project site"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Content side */}
            <div className="c-cert-feature-body">
              <div className="c-cert-icon-wrap" style={{ marginBottom: 24 }}>
                <Award size={24} strokeWidth={1.5} />
              </div>
              <p className="c-cert-issuer" style={{ marginBottom: 8 }}>Bureau Veritas · Granted</p>
              <h3 className="c-cert-title" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)", marginBottom: 8 }}>ISO 9001:2015</h3>
              <p className="c-cert-body-label" style={{ marginBottom: 24 }}>Quality Management Systems</p>
              <p className="c-cert-desc" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
                Floor-Space India has been granted ISO 9001:2015 certification — the internationally recognised standard for Quality Management Systems. This certifies our consistent delivery of quality processes across design, procurement, and construction on every project we undertake.
              </p>
              <div style={{ marginTop: 36, padding: "20px 24px", background: "var(--c-accent-light)", borderRadius: 12, borderLeft: "3px solid var(--c-accent)" }}>
                <p style={{ color: "var(--c-accent)", fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>What this means for you</p>
                <p style={{ color: "var(--c-ink-2)", fontSize: "0.93rem", lineHeight: 1.7 }}>
                  Every project follows documented, audited processes — so quality is built in, not inspected at the end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="c-section" style={{ paddingTop: 0 }}>
        <div className="c-section-inner">
          <div className="c-cta-band" data-reveal>
            <p className="c-section-kicker" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Our Promise</p>
            <p className="c-cta-band-title">
              Quality, safety, and accountability<br />on every project, every time.
            </p>
            <p className="c-cta-band-sub">
              Our certifications aren&apos;t just paperwork. They&apos;re the foundation of how we operate.
            </p>
            <Link href="/contact" className="c-btn-light">
              Start a Project <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
