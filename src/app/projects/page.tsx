import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import ContemporaryNav from "@/components/ContemporaryNav";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";
import "../contemporary.css";

export const metadata: Metadata = {
  title: "Projects — Floor-Space India",
  description:
    "225+ commercial spaces delivered across industrial construction, interior fit-out, corporate, banking, and institutional sectors.",
};

export default function ProjectsPage() {
  return (
    <div className="c-page">
      <ContemporaryNav solid />

      {/* ── Hero ── */}
      <section className="c-page-hero" aria-labelledby="projects-h">
        <Image
          src="/images/smbc-bkc-reception.jpg"
          alt="Featured project interior"
          fill
          fetchPriority="high"
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="c-page-hero-overlay" aria-hidden />
        <div className="c-page-hero-body">
          <p className="c-page-hero-kicker">Our Work</p>
          <h1 className="c-page-hero-title" id="projects-h">
            225+ Projects.<br />Every One Built to Last.
          </h1>
          <p className="c-page-hero-sub">
            From industrial construction to premium interior fit-out — spaces that
            perform across every sector we serve.
          </p>
        </div>
      </section>

      {/* ── Stat rail ── */}
      <div className="c-stat-rail">
        {[
          { value: "225+", label: "Projects Delivered" },
          { value: "17+",  label: "Years of Excellence" },
          { value: "20+",  label: "Cities Across India" },
          { value: "100%", label: "Turnkey Delivery" },
        ].map(({ value, label }) => (
          <div key={label} className="c-stat-rail-item">
            <p className="c-stat-rail-value">{value}</p>
            <p className="c-stat-rail-label">{label}</p>
          </div>
        ))}
      </div>

      {/* ── Grid ── */}
      <section className="c-section" aria-labelledby="grid-h">
        <div className="c-section-inner">
          <p className="c-section-kicker" data-reveal>Portfolio</p>
          <h2 className="c-section-title" id="grid-h" data-reveal>Selected projects.</h2>
          <div className="c-project-grid" data-stagger>
            {projects.map((p) => (
              <article key={p.slug} className="c-project-card-inner">
                <div className="c-project-card-image">
                  <Image
                    alt={p.coverAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 420px"
                    src={p.coverImage}
                    style={{ objectFit: "cover" }}
                  />
                  <span className="c-project-tag">{p.category}</span>
                </div>
                <div className="c-project-card-body">
                  <p className="c-project-meta">{p.sector} · {p.city}</p>
                  <h2 className="c-project-name">{p.name}</h2>
                  <p className="c-project-desc">{p.desc}</p>
                  <div className="c-project-footer">
                    <span style={{ color: "var(--c-ink-3)", fontSize: "0.8rem" }}>
                      {p.area} · {p.images.length} photos
                    </span>
                    <Link
                      href={`/projects/${p.slug}`}
                      style={{
                        alignItems: "center",
                        color: "var(--c-accent)",
                        display: "flex",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        gap: 4,
                        textDecoration: "none",
                      }}
                    >
                      View Project <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="c-section" style={{ paddingTop: 0 }}>
        <div className="c-section-inner">
          <div className="c-cta-band" data-reveal>
            <p className="c-section-kicker" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Start a Project</p>
            <p className="c-cta-band-title">Ready to transform your space?</p>
            <p className="c-cta-band-sub">
              Share your scope and timeline — we will come back with a clear path forward.
            </p>
            <Link href="/contact" className="c-btn-light">
              Start a Conversation <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
