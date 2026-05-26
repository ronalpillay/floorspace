const steps = [
  { num: "01", title: "Discovery",  desc: "We understand your brief, constraints, and budget before we design anything. No generic proposals." },
  { num: "02", title: "Design & BOQ", desc: "Detailed working drawings and an itemised bill of quantities. Zero ambiguity before we break ground." },
  { num: "03", title: "Execution",  desc: "In-house project managers, dedicated site engineers, and daily progress reports for every project." },
  { num: "04", title: "Handover",   desc: "Punch list walkthrough, snagging, training for facility teams, and as-built documentation." },
];

export default function Approach() {
  return (
    <section
      style={{
        background: "var(--bg-warm)",
        padding: "clamp(64px,10vw,140px) clamp(24px,8vw,120px)",
        borderTop: "1px solid rgba(181,133,42,0.15)",
      }}
    >
      <div style={{ marginBottom: "64px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
          <span className="divider-gold" />
          <span className="eyebrow">Approach</span>
        </div>
        <h2 style={{ maxWidth: "440px" }}>
          On time.{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold-4)" }}>On budget.</em>
          <br />
          Every project.
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid rgba(0,0,0,0.09)",
          borderLeft: "1px solid rgba(0,0,0,0.09)",
        }}
        className="approach-grid"
      >
        {steps.map(({ num, title, desc }) => (
          <div
            key={num}
            style={{
              padding: "clamp(28px,3.5vw,44px)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              borderRight: "1px solid rgba(0,0,0,0.09)",
              borderBottom: "1px solid rgba(0,0,0,0.09)",
              background: "transparent",
            }}
          >
            <span style={{ fontFamily: "var(--font-outfit)", fontSize: "11px", letterSpacing: "0.2em", color: "var(--gold-4)" }}>
              {num}
            </span>
            <h4 style={{ fontFamily: "var(--font-outfit)", fontSize: "clamp(20px,1.8vw,28px)", fontWeight: 700, color: "var(--text-head)" }}>
              {title}
            </h4>
            <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.7 }}>
              {desc}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 860px) {
          .approach-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .approach-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
