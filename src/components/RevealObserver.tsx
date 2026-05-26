"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const html = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll("[data-reveal], [data-stagger]")
    ) as Element[];

    if (targets.length === 0) return;

    // Step 1: Mark above-fold elements as in-view BEFORE enabling animations.
    // This ensures they're never hidden even for a single frame.
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("in-view");
      }
    });

    // Step 2: NOW add js-reveal — above-fold elements already have in-view so
    // they stay fully visible. Below-fold elements get hidden and will animate
    // in as the user scrolls.
    html.classList.add("js-reveal");

    // Step 3: Watch below-fold elements with generous margins
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "80px 0px 80px 0px" }
    );

    targets
      .filter((el) => !el.classList.contains("in-view"))
      .forEach((el) => observer.observe(el));

    // Step 4: Hard fallback — remove js-reveal entirely after 2s so every
    // element becomes visible regardless of scroll position or observer state.
    const fallback = setTimeout(() => {
      html.classList.remove("js-reveal");
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
      html.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
