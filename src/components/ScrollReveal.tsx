"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );

    // Auto-apply reveal to all direct children of <main>
    const sections = document.querySelectorAll("main > *");
    sections.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });

    // Also observe any manually-tagged reveal elements
    const manual = document.querySelectorAll(".reveal:not([data-observed])");
    manual.forEach((el) => {
      (el as HTMLElement).dataset.observed = "1";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
