"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll("[data-reveal], [data-stagger]")
    ) as Element[];

    if (targets.length === 0) return;

    // Reveal everything above the fold immediately
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add("in-view");
      }
    });

    // Watch remaining elements with generous margins
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

    // Hard fallback — reveal everything after 2s no matter what
    const fallback = setTimeout(() => {
      targets.forEach((el) => el.classList.add("in-view"));
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
