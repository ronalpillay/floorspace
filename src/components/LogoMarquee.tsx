"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";

// Slugs that have a transparent SVG in public/images/clients/
const SVG_SLUGS = new Set([
  "amneal-pharmaceuticals", "axletech-international", "bajaj-allianz", "bmc",
  "bridgestone", "dana", "das", "denyo", "eaton", "geberit",
  "hindustan-unilever-limited", "hirschvogel-automotive-group", "iucaa", "jabil",
  "john-deere", "kama-corporation", "l-t-infotech", "lintec", "lupin",
  "mahindra-2-wheelers", "marquardt", "mazak", "mgm-new-bombay-hospital",
  "neumann", "new-balance", "new-holland-construction", "octillion", "oerlikon",
  "onward-technologies-limited", "osg", "plethico", "ross", "rossini", "sca",
  "schmersal", "serum-institute-of-india-ltd", "shimz", "smbc-bank",
  "smcc-construction-india-limited", "tristone", "tti-india", "unicharm",
  "vanderlande", "vector", "voxeljet-technology", "wika", "zf", "zycus",
]);

interface Logo {
  slug: string;
  name: string;
}

interface Props {
  logos: Logo[];
  reverse?: boolean;
}

export default function LogoMarquee({ logos, reverse = false }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const speedPx = 0.55;

  const [activeLogo, setActiveLogo] = useState<Logo | null>(null);
  const [loadedSlugs, setLoadedSlugs] = useState<Set<string>>(new Set());

  const markLoaded = useCallback((slug: string) => {
    setLoadedSlugs((prev) => {
      if (prev.has(slug)) return prev;
      const next = new Set(prev);
      next.add(slug);
      return next;
    });
  }, []);

  // Close modal on Escape
  useEffect(() => {
    if (!activeLogo) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveLogo(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [activeLogo]);

  // JS-driven marquee
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (reverse) posRef.current = track.scrollWidth / 2;

    function animate() {
      if (!pausedRef.current && track) {
        const half = track.scrollWidth / 2;
        if (reverse) {
          posRef.current -= speedPx;
          if (posRef.current < 0) posRef.current += half;
        } else {
          posRef.current += speedPx;
          if (posRef.current >= half) posRef.current -= half;
        }
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reverse]);

  const pause = useCallback(() => { pausedRef.current = true; }, []);
  const resume = useCallback(() => { pausedRef.current = false; }, []);

  const looped = [...logos, ...logos];

  return (
    <>
      <div className="c-logo-marquee-wrap" onMouseEnter={pause} onMouseLeave={resume}>
        <div className="c-logo-marquee-track" ref={trackRef} style={{ transform: "translateX(0)" }}>
          {looped.map((logo, i) => {
            const loaded = loadedSlugs.has(logo.slug);
            const ext = SVG_SLUGS.has(logo.slug) ? "svg" : "png";
            const src = `/images/clients/${logo.slug}.${ext}`;
            return (
              <button
                key={`${logo.slug}-${i}`}
                className="c-logo-card"
                onClick={() => setActiveLogo(logo)}
                aria-label={`View ${logo.name} logo`}
                type="button"
              >
                <span className={`c-logo-ph${loaded ? " is-gone" : ""}`} aria-hidden>
                  {logo.name}
                </span>
                <span className={`c-logo-img-wrap${loaded ? " is-loaded" : ""}`}>
                  <Image
                    src={src}
                    alt={logo.name}
                    fill
                    sizes="128px"
                    onLoad={() => markLoaded(logo.slug)}
                    style={{ objectFit: "contain" }}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {activeLogo && (
        <div
          className="c-logo-modal-backdrop"
          onClick={() => setActiveLogo(null)}
          role="dialog"
          aria-modal
          aria-label={`${activeLogo.name} logo`}
        >
          <div className="c-logo-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="c-logo-modal-close"
              onClick={() => setActiveLogo(null)}
              aria-label="Close"
              type="button"
            >
              <X size={16} />
            </button>
            <div className="c-logo-modal-img-wrap">
              <Image
                src={`/images/clients/${activeLogo.slug}.${SVG_SLUGS.has(activeLogo.slug) ? "svg" : "png"}`}
                alt={activeLogo.name}
                width={400}
                height={200}
                priority
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <p className="c-logo-modal-name">{activeLogo.name}</p>
          </div>
        </div>
      )}
    </>
  );
}
