"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Logo {
  slug: string;
  name: string;
}

interface Props {
  logos: Logo[];
}

export default function LogoMarquee({ logos }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const speedPx = 0.55; // pixels per frame (~33px/s at 60fps)

  // Modal state
  const [activeLogo, setActiveLogo] = useState<Logo | null>(null);

  // Close modal on Escape
  useEffect(() => {
    if (!activeLogo) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveLogo(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [activeLogo]);

  // JS-driven marquee — immune to CSS animation click-event issues
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function animate() {
      if (!pausedRef.current && track) {
        posRef.current += speedPx;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current -= half;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const pause = useCallback(() => { pausedRef.current = true; }, []);
  const resume = useCallback(() => { pausedRef.current = false; }, []);

  // Duplicated for seamless loop
  const looped = [...logos, ...logos];

  return (
    <>
      {/* ── Marquee ── */}
      <div className="c-logo-marquee-wrap" onMouseEnter={pause} onMouseLeave={resume}>
        <div className="c-logo-marquee-track" ref={trackRef} style={{ transform: "translateX(0)" }}>
          {looped.map((logo, i) => (
            <button
              key={`${logo.slug}-${i}`}
              className="c-logo-card"
              onClick={() => setActiveLogo(logo)}
              aria-label={`View ${logo.name} logo`}
              type="button"
            >
              <Image
                src={`/images/clients/${logo.slug}.png`}
                alt={logo.name}
                width={200}
                height={72}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Modal ── */}
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
                src={`/images/clients/${activeLogo.slug}.png`}
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
