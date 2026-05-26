"use client";

const testimonials = [
  {
    quote:
      "Floor Space India delivered our 40,000 sqft Pune headquarters on time and under budget. The quality of finishes, the discipline on site — it was unlike anything we'd experienced with previous contractors. We've already engaged them for our Bengaluru campus.",
    name: "Rakesh Mehta",
    title: "VP – Facilities, Bajaj Finserv",
    initials: "RM",
  },
  {
    quote:
      "Our GMP cleanroom expansion had zero tolerance for delays or non-compliance. Floor Space India's documentation, their air handling expertise, and their audit-ready handover process gave our QA team full confidence. First-time validation pass.",
    name: "Dr. Priya Nair",
    title: "Head – Engineering & Compliance, Sun Pharma",
    initials: "PN",
  },
  {
    quote:
      "We needed 12 regional offices fitted out in four cities within 90 days. Most contractors wouldn't even quote. Floor Space India committed, executed, and handed over all 12 on schedule. Exceptional project management across the board.",
    name: "Aniket Joshi",
    title: "Director – Infrastructure, HDFC Life",
    initials: "AJ",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        background: "var(--bg-warm-2)",
        padding: "clamp(64px,10vw,140px) clamp(24px,8vw,120px)",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "clamp(48px,6vw,80px)", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "20px" }}>
          <span className="divider-gold" />
          <span className="eyebrow" style={{ color: "var(--gold-3)" }}>Client Stories</span>
          <span className="divider-gold" />
        </div>
        <h2 style={{ color: "#FFFFFF", maxWidth: "560px", margin: "0 auto" }}>
          What our clients
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold-3)" }}>actually say.</em>
        </h2>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "clamp(12px,1.5vw,20px)",
        }}
        className="testimonials-grid"
      >
        {testimonials.map(({ quote, name, title, initials }) => (
          <div
            key={name}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "clamp(32px,3.5vw,48px)",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              transition: "background 250ms",
              borderRadius: "20px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(181,133,42,0.07)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
          >
            {/* Quote mark */}
            <span
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "72px",
                lineHeight: 0.8,
                color: "var(--gold-4)",
                opacity: 0.5,
                display: "block",
              }}
            >
              &ldquo;
            </span>

            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "clamp(17px,1.5vw,21px)",
                color: "rgba(255,255,255,0.82)",
                lineHeight: 1.7,
                fontStyle: "italic",
                flex: 1,
                marginTop: "-24px",
              }}
            >
              {quote}
            </p>

            {/* Attribution */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "var(--gold-4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontFamily: "var(--font-outfit)",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: "0.05em",
                }}
              >
                {initials}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: "11px",
                    color: "var(--neutral-shade-4)",
                    letterSpacing: "0.04em",
                    marginTop: "2px",
                  }}
                >
                  {title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
