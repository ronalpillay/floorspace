"use client";

const posts = [
  {
    tag: "Case Study",
    title: "Designing for scale: how we handle 1 lakh sqft projects",
    excerpt: "Large-format projects break every standard playbook. Here's what we learned delivering Bajaj Finserv's 1.2 lakh sqft HQ in 11 months.",
    date: "March 2026",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75",
  },
  {
    tag: "Guide",
    title: "GMP interiors: what every pharma client needs to know before day one",
    excerpt: "Regulatory compliance isn't a checklist — it's a construction methodology. We break down what GMP-compliant interiors actually demand.",
    date: "February 2026",
    img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=75",
  },
  {
    tag: "Insight",
    title: "Why turnkey always beats multi-vendor for commercial fitouts",
    excerpt: "Coordination gaps between civil, MEP, and finishing vendors add 20–40% to project timelines. Single-responsibility changes everything.",
    date: "January 2026",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      style={{
        background: "var(--bg-page)",
        padding: "clamp(64px,10vw,140px) clamp(24px,8vw,120px)",
        borderTop: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "52px",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
            <span className="divider-gold" />
            <span className="eyebrow">Insights</span>
          </div>
          <h2>
            From the
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold-4)" }}>field.</em>
          </h2>
        </div>
        <a href="#" className="btn-outline">All articles →</a>
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}
        className="insights-grid"
      >
        {posts.map((post) => (
          <article key={post.title} style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}>
            <div style={{ overflow: "hidden", aspectRatio: "16/10", marginBottom: "20px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.img}
                alt={post.title}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 500ms ease", display: "block" }}
                onMouseEnter={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.04)")}
                onMouseLeave={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <span
                style={{
                  padding: "3px 10px",
                  background: "var(--gold-1)",
                  border: "1px solid rgba(181,133,42,0.2)",
                  fontFamily: "var(--font-outfit)",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "var(--gold-5)",
                  textTransform: "uppercase",
                }}
              >
                {post.tag}
              </span>
              <span style={{ fontFamily: "var(--font-outfit)", fontSize: "11px", color: "var(--text-muted)" }}>
                {post.date}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "clamp(20px,1.8vw,26px)",
                fontWeight: 700,
                color: "var(--text-head)",
                lineHeight: 1.3,
                marginBottom: "10px",
              }}
            >
              {post.title}
            </h3>

            <p style={{ fontFamily: "var(--font-outfit)", fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.7, flex: 1 }}>
              {post.excerpt}
            </p>

            <a
              href="#"
              style={{
                marginTop: "16px",
                fontFamily: "var(--font-outfit)",
                fontSize: "12px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--gold-4)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--gold-5)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--gold-4)")}
            >
              Read more
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .insights-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 560px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
