export default function FullBleedBanner() {
  return (
    <section style={{ position:"relative", height:"clamp(400px,60vh,720px)", overflow:"hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/octillion-cafeteria.jpg"
        alt="Octillion Pimpri — cafeteria by Floorspace"
        loading="lazy"
        style={{
          width:"100%", height:"100%", objectFit:"cover",
          objectPosition:"center 40%", display:"block",
        }}
      />
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(135deg, rgba(10,8,6,0.72) 0%, rgba(10,8,6,0.28) 60%, rgba(10,8,6,0.05) 100%)",
      }} />
      <div style={{
        position:"absolute", inset:0,
        display:"flex", flexDirection:"column",
        justifyContent:"center",
        padding:"clamp(32px,5vw,80px) clamp(24px,5vw,80px)",
      }}>
        <p style={{
          fontFamily:"var(--font-outfit)", fontSize:"10px",
          letterSpacing:"0.28em", textTransform:"uppercase",
          color:"rgba(255,255,255,0.5)", marginBottom:"16px",
        }}>
          Every Detail. Considered.
        </p>
        <h2 style={{
          color:"#fff", fontStyle:"italic",
          fontSize:"clamp(40px,6.5vw,96px)",
          lineHeight:0.98, letterSpacing:"-0.02em",
          margin:"0 0 28px", maxWidth:"720px",
        }}>
          We Don&apos;t Just<br />
          <span style={{ color:"rgba(255,255,255,0.45)" }}>Fit Out Offices.</span>
        </h2>
        <a href="#contact" className="btn-outline-light" style={{ alignSelf:"flex-start" }}>
          Start a Conversation →
        </a>
      </div>
    </section>
  );
}
