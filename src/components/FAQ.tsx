"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What types of projects do you handle?",
    a: "We deliver turnkey interiors for corporate offices, pharma and GMP facilities, industrial plants, and institutional buildings like hospitals and colleges. If it requires build-out from bare shell to ready-to-occupy, we can handle it — across any scale.",
  },
  {
    q: "How long does a typical office fit-out take?",
    a: "A 5,000–15,000 sqft office typically takes 60–90 days from design freeze to handover. Larger campuses and pharma projects are scoped individually. We're known for aggressive timelines — but we only commit to what we can actually deliver.",
  },
  {
    q: "Do you provide both design and construction?",
    a: "Yes. We offer full design-build as a single-point responsibility — concept, detailed drawings, MEP coordination, procurement, construction, and punch-list closure. You deal with one team, not four.",
  },
  {
    q: "Are you GMP-certified for pharma projects?",
    a: "Our site teams are trained in GMP construction practices, and we've delivered validated cleanrooms across Class 10,000 and Class 100,000 environments. We maintain full IQ/OQ documentation and support your validation team through qualification.",
  },
  {
    q: "Can you handle projects across multiple cities simultaneously?",
    a: "Yes — we currently operate across Pune, Mumbai, Bengaluru, Chennai, Hyderabad, Delhi, Ahmedabad, and Kolkata. Multi-city rollouts are a strength. We have resident project managers in each hub and a centralised procurement model that keeps costs consistent.",
  },
  {
    q: "What's your minimum project size?",
    a: "We take projects from ₹25 lakhs upward. Below that threshold, our overhead structure makes us the wrong fit and we'll tell you honestly. For large-scale rollouts, we can discuss volume-based pricing.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        background: "var(--bg-page)",
        padding: "clamp(64px,10vw,140px) clamp(24px,8vw,120px)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "clamp(48px,8vw,120px)",
          alignItems: "start",
        }}
        className="faq-layout"
      >
        {/* Left — heading */}
        <div style={{ position: "sticky", top: "120px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
            <span className="divider-gold" />
            <span className="eyebrow">FAQ</span>
          </div>
          <h2 style={{ maxWidth: "340px" }}>
            Questions
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold-4)" }}>we always get.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.75,
              maxWidth: "300px",
              marginTop: "20px",
            }}
          >
            Still have one we haven&apos;t answered? Drop us a message on WhatsApp.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ marginTop: "32px", display: "inline-flex" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ask Us
          </a>
        </div>

        {/* Right — accordion */}
        <div>
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "28px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "24px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: "clamp(18px,1.6vw,24px)",
                      fontWeight: 600,
                      color: isOpen ? "var(--gold-4)" : "var(--text-head)",
                      transition: "color 200ms",
                      lineHeight: 1.3,
                    }}
                  >
                    {q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      border: "1px solid",
                      borderColor: isOpen ? "var(--gold-4)" : "rgba(0,0,0,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "border-color 200ms, transform 200ms",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke={isOpen ? "var(--gold-4)" : "var(--text-head)"} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 350ms ease",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: "clamp(14px,1.1vw,16px)",
                        color: "var(--text-muted)",
                        lineHeight: 1.8,
                        paddingBottom: "28px",
                        paddingRight: "52px",
                      }}
                    >
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .faq-layout { grid-template-columns: 1fr !important; }
          .faq-layout > div:first-child { position: static !important; }
        }
      `}</style>
    </section>
  );
}
