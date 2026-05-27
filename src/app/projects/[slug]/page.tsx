import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MapPin, Ruler, Tag } from "lucide-react";
import ContemporaryNav from "@/components/ContemporaryNav";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";
import { projects, getProjectBySlug } from "@/data/projects";
import "../../contemporary.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found — Floor-Space India" };
  return {
    title: `${project.name} — Floor-Space India`,
    description: project.longDesc,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="c-page">
      <ContemporaryNav solid />

      {/* ── Hero ── */}
      <section className="c-proj-hero">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          fetchPriority="high"
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="c-proj-hero-overlay" aria-hidden />
        <div className="c-proj-hero-body">
          <span className="c-proj-hero-tag">{project.category}</span>
          <h1 className="c-proj-hero-title">{project.name}</h1>
          <div className="c-proj-meta-row">
            <div className="c-proj-meta-item">
              <span className="c-proj-meta-label">
                <Tag size={9} style={{ display: "inline", marginRight: 3 }} />Sector
              </span>
              <span className="c-proj-meta-value">{project.sector}</span>
            </div>
            <div className="c-proj-meta-item">
              <span className="c-proj-meta-label">
                <MapPin size={9} style={{ display: "inline", marginRight: 3 }} />Location
              </span>
              <span className="c-proj-meta-value">{project.city}</span>
            </div>
            <div className="c-proj-meta-item">
              <span className="c-proj-meta-label">
                <Ruler size={9} style={{ display: "inline", marginRight: 3 }} />Scale
              </span>
              <span className="c-proj-meta-value">{project.area}</span>
            </div>
            <div className="c-proj-meta-item">
              <span className="c-proj-meta-label">Photos</span>
              <span className="c-proj-meta-value">{project.images.length} images</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Description ── */}
      <div className="c-proj-desc-wrap">
        <Link href="/projects" className="c-proj-back">
          <ArrowLeft size={14} />
          Back to Projects
        </Link>
        <p className="c-proj-longdesc">{project.longDesc}</p>
      </div>

      {/* ── Gallery ── */}
      <section className="c-gallery" aria-labelledby="gallery-h">
        {(() => {
          // Filter out the cover image if it appears as the first gallery image (avoids duplicate)
          const galleryImages = project.images.filter((img) => img.src !== project.coverImage);
          const displayImages = galleryImages.length > 0 ? galleryImages : project.images;
          return (
            <>
              <p className="c-section-kicker" style={{ marginBottom: "0.5rem" }}>
                Project Gallery
              </p>
              <h2
                id="gallery-h"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)",
                  fontWeight: 700,
                  marginBottom: "2.5rem",
                  color: "var(--c-ink-1)",
                }}
              >
                {displayImages.length} photographs
              </h2>
              <ProjectGallery images={displayImages} projectName={project.name} />
            </>
          );
        })()}
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "0 clamp(1rem, 4vw, 4rem) clamp(4rem, 8vw, 8rem)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div className="c-cta-band" data-reveal>
            <p className="c-section-kicker" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
              Start a Project
            </p>
            <p className="c-cta-band-title">Like what you see?</p>
            <p className="c-cta-band-sub">
              Tell us about your space — we will come back with a clear path forward.
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
