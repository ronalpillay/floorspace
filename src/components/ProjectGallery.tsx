"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { ProjectImage } from "@/data/projects";

interface ProjectGalleryProps {
  images: ProjectImage[];
  projectName: string;
}

export default function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // GSAP ScrollTrigger.batch — staggered scale + fade entrance
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || typeof window === "undefined") return;

    let ctx: { revert: () => void } | null = null;

    async function initGsap() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const items = grid!.querySelectorAll<HTMLElement>(".c-gallery-item");

      // Set initial state
      gsap.set(items, { opacity: 0, y: 48, scale: 0.96 });

      ctx = gsap.context(() => {
        ScrollTrigger.batch(items, {
          start: "top 92%",
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.82,
              ease: "power3.out",
              stagger: 0.07,
              overwrite: true,
            });
          },
          once: true,
        });
      }, grid!);
    }

    initGsap();
    return () => ctx?.revert();
  }, [images]);

  // Mouse-move parallax inside each card
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid || typeof window === "undefined") return;

    function onMouseMove(e: MouseEvent) {
      const card = (e.currentTarget as HTMLElement);
      const img = card.querySelector<HTMLElement>("img");
      if (!img) return;
      const rect = card.getBoundingClientRect();
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `scale(1.06) translate(${cx * 10}px, ${cy * 8}px)`;
    }

    function onMouseLeave(e: MouseEvent) {
      const img = (e.currentTarget as HTMLElement).querySelector<HTMLElement>("img");
      if (img) img.style.transform = "scale(1) translate(0,0)";
    }

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".c-gallery-item"));
    cards.forEach((card) => {
      card.addEventListener("mousemove", onMouseMove);
      card.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", onMouseMove);
        card.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, [images]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, prev, next]);

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) next();
    else prev();
  }

  return (
    <>
      {/* ── Masonry grid ── */}
      <div className="c-gallery-grid" ref={gridRef}>
        {images.map((img, i) => (
          <button
            key={img.src}
            className="c-gallery-item"
            onClick={() => openLightbox(i)}
            aria-label={`View ${img.alt}`}
            type="button"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={720}
              height={480}
              sizes="(max-width: 500px) 100vw, (max-width: 900px) 50vw, 33vw"
              style={{ width: "100%", height: "auto", display: "block", transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)" }}
            />
            <span className="c-gallery-hover" aria-hidden>
              <ZoomIn size={22} strokeWidth={1.5} />
            </span>
          </button>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="c-lightbox"
          role="dialog"
          aria-modal
          aria-label={`Photo gallery — ${projectName}`}
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="c-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close gallery"
            type="button"
          >
            <X size={18} />
          </button>

          {images.length > 1 && (
            <>
              <button
                className="c-lightbox-nav c-lightbox-prev"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous image"
                type="button"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                className="c-lightbox-nav c-lightbox-next"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next image"
                type="button"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <div
            className="c-lightbox-img-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              width={1400}
              height={900}
              priority
              style={{
                maxWidth: "min(calc(100vw - 2rem), 1200px)",
                maxHeight: "80vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: "6px",
              }}
            />
          </div>

          <div className="c-lightbox-footer" onClick={(e) => e.stopPropagation()}>
            <span className="c-lightbox-caption">{images[lightboxIndex].alt}</span>
            <span className="c-lightbox-counter">
              {lightboxIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
