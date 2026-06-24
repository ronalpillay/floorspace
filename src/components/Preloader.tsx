"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [phase, setPhase] = useState<"in" | "out" | "done">("in");

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("fs-loaded")) {
      setPhase("done");
      return;
    }
    sessionStorage.setItem("fs-loaded", "1");

    const t1 = setTimeout(() => setPhase("out"), 1400);
    const t2 = setTimeout(() => setPhase("done"), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  return (
    <div className={`c-preloader${phase === "out" ? " is-out" : ""}`} aria-hidden>
      <div className="c-preloader-inner">
        <Image
          src="/images/fsipl-logo-new.png"
          alt="Floor-Space India"
          width={200}
          height={56}
          style={{ height: "auto", width: 180, filter: "brightness(0) invert(1)", opacity: 0.9 }}
          priority
        />
        <p className="c-preloader-tag">Interior Design &amp; Turnkey Solutions</p>
      </div>
      <div className="c-preloader-bar" />
      <div className="c-preloader-count" aria-hidden>
        <span className="c-preloader-pct">Loading…</span>
      </div>
    </div>
  );
}
