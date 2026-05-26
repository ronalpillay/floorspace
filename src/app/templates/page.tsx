"use client";
import Link from "next/link";

export default function TemplatesPage() {
  return (
    <div>
      {/* Navigation */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)",
        padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <span style={{ color: "#fff", fontFamily: "serif", fontSize: 18, letterSpacing: 2 }}>FLOORSPACE — TEMPLATE PREVIEW</span>
        <div style={{ display: "flex", gap: 8 }}>
          {["1. Dark Luxury","2. Editorial","3. Swiss Minimal","4. Warm Organic","5. Bento Grid"].map((t,i) => (
            <a key={i} href={`#template-${i+1}`} style={{
              color: "#aaa", fontSize: 12, textDecoration: "none", padding: "6px 12px",
              border: "1px solid #333", borderRadius: 4,
              transition: "all .2s"
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color="#fff"; (e.target as HTMLElement).style.borderColor="#fff"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.color="#aaa"; (e.target as HTMLElement).style.borderColor="#333"; }}>
              {t}
            </a>
          ))}
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          TEMPLATE 1 — DARK LUXURY
      ───────────────────────────────────────────── */}
      <section id="template-1" style={{ background: "#0e0e0e", minHeight: "100vh", paddingTop: 80 }}>
        {/* label */}
        <div style={{ padding: "20px 48px", borderBottom: "1px solid #222", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#b8a06a", fontFamily: "monospace", fontSize: 12, letterSpacing: 4 }}>TEMPLATE 01 / DARK LUXURY</span>
          <span style={{ color: "#444", fontSize: 12 }}>Prestigious · Moody · High-end</span>
        </div>

        {/* Hero */}
        <div style={{ position: "relative", height: "90vh", overflow: "hidden" }}>
          <img src="/images/smbc-lobby.jpg" alt="hero" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.4)" }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(0,0,0,0.9) 40%, transparent)" }} />
          <div style={{ position:"absolute", top:"50%", left:80, transform:"translateY(-50%)" }}>
            <div style={{ color:"#b8a06a", fontSize:11, letterSpacing:6, marginBottom:24, fontFamily:"sans-serif" }}>SINCE 2009 · MUMBAI</div>
            <h1 style={{ color:"#fff", fontSize:"clamp(48px, 6vw, 96px)", fontFamily:"Georgia, serif", fontWeight:300, lineHeight:1.1, margin:0, marginBottom:32 }}>
              Where Space<br/>Becomes<br/><em style={{ color:"#b8a06a" }}>Legacy</em>
            </h1>
            <p style={{ color:"#888", fontSize:16, maxWidth:400, lineHeight:1.8, marginBottom:40 }}>
              Crafting interiors that define the identity of India's most distinguished organizations.
            </p>
            <button style={{ background:"transparent", border:"1px solid #b8a06a", color:"#b8a06a", padding:"16px 40px", fontSize:12, letterSpacing:3, cursor:"pointer", fontFamily:"sans-serif" }}>
              VIEW OUR WORK
            </button>
          </div>
          <div style={{ position:"absolute", right:80, bottom:60, color:"#b8a06a", fontSize:11, letterSpacing:3, writingMode:"vertical-rl" }}>
            SCROLL TO EXPLORE ↓
          </div>
        </div>

        {/* Projects strip */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", borderTop:"1px solid #1e1e1e" }}>
          {[
            { img:"/images/octillion-boardroom.jpg", label:"Octillion HQ", sub:"Mumbai · Corporate" },
            { img:"/images/smbc-conference.jpg", label:"SMBC Tower", sub:"BKC · Financial" },
            { img:"/images/tristone-reception.jpg", label:"Tristone Centre", sub:"Pune · Commercial" },
          ].map((p,i) => (
            <div key={i} style={{ position:"relative", height:380, overflow:"hidden", borderRight: i<2 ? "1px solid #1e1e1e" : "none", cursor:"pointer" }}
              onMouseEnter={e => { const img = (e.currentTarget as HTMLElement).querySelector("img"); if(img) img.style.transform="scale(1.08)"; }}
              onMouseLeave={e => { const img = (e.currentTarget as HTMLElement).querySelector("img"); if(img) img.style.transform="scale(1)"; }}>
              <img src={p.img} alt={p.label} style={{ width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.5)", transition:"transform 0.8s ease" }} />
              <div style={{ position:"absolute", bottom:32, left:32 }}>
                <div style={{ color:"#b8a06a", fontSize:10, letterSpacing:3, marginBottom:8 }}>0{i+1}</div>
                <div style={{ color:"#fff", fontSize:22, fontFamily:"Georgia,serif", fontWeight:300 }}>{p.label}</div>
                <div style={{ color:"#666", fontSize:12, marginTop:4 }}>{p.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", borderTop:"1px solid #1e1e1e", padding:"48px 0" }}>
          {[["150+","Projects Delivered"],["15","Years of Excellence"],["2M+","Sq Ft Designed"],["40+","Corporate Clients"]].map(([n,l],i) => (
            <div key={i} style={{ textAlign:"center", borderRight: i<3 ? "1px solid #1e1e1e" : "none" }}>
              <div style={{ color:"#b8a06a", fontSize:48, fontFamily:"Georgia,serif", fontWeight:300 }}>{n}</div>
              <div style={{ color:"#555", fontSize:12, letterSpacing:2, marginTop:8 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          TEMPLATE 2 — EDITORIAL
      ───────────────────────────────────────────── */}
      <section id="template-2" style={{ background: "#f8f5f0", minHeight: "100vh" }}>
        <div style={{ padding: "20px 48px", borderBottom: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "space-between", background:"#f8f5f0" }}>
          <span style={{ color: "#c0392b", fontFamily: "monospace", fontSize: 12, letterSpacing: 4 }}>TEMPLATE 02 / EDITORIAL</span>
          <span style={{ color: "#aaa", fontSize: 12 }}>Bold · Magazine · Architectural Digest</span>
        </div>

        {/* Masthead */}
        <div style={{ padding:"32px 48px 0", display:"flex", alignItems:"flex-end", justifyContent:"space-between", borderBottom:"3px solid #111" }}>
          <div>
            <div style={{ fontSize:11, letterSpacing:6, color:"#c0392b", fontFamily:"sans-serif", marginBottom:8 }}>THE FLOORSPACE JOURNAL — APRIL 2026</div>
            <h1 style={{ fontSize:"clamp(60px,8vw,140px)", fontFamily:"Georgia,serif", fontWeight:900, lineHeight:0.9, margin:0, color:"#111" }}>
              FLOOR<br/>SPACE
            </h1>
          </div>
          <div style={{ maxWidth:300, paddingBottom:16 }}>
            <p style={{ fontSize:14, lineHeight:1.9, color:"#444", fontFamily:"Georgia,serif" }}>
              India's foremost interior architecture studio, shaping the spaces where business happens.
            </p>
          </div>
        </div>

        {/* Editorial grid */}
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gridTemplateRows:"auto", gap:2, padding:"2px" }}>
          <div style={{ gridRow:"1/3", position:"relative", height:600, overflow:"hidden" }}>
            <img src="/images/octillion-openplan.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(transparent, rgba(0,0,0,0.8))", padding:"40px 32px 32px" }}>
              <div style={{ color:"#c0392b", fontSize:10, letterSpacing:4, marginBottom:8 }}>COVER STORY</div>
              <div style={{ color:"#fff", fontSize:28, fontFamily:"Georgia,serif", fontWeight:700, lineHeight:1.2 }}>The Future of the Indian Office</div>
            </div>
          </div>
          <div style={{ position:"relative", height:299, overflow:"hidden" }}>
            <img src="/images/smbc-reception.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative", height:299, overflow:"hidden" }}>
            <img src="/images/tristone-corridor.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
          <div style={{ position:"relative", height:299, overflow:"hidden" }}>
            <img src="/images/octillion-lounge.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
          <div style={{ background:"#111", height:299, display:"flex", flexDirection:"column", justifyContent:"center", padding:32 }}>
            <div style={{ color:"#c0392b", fontSize:10, letterSpacing:4, marginBottom:16 }}>PERSPECTIVE</div>
            <div style={{ color:"#fff", fontSize:22, fontFamily:"Georgia,serif", lineHeight:1.4 }}>"Design is not just what it looks like — it's how it works."</div>
            <div style={{ color:"#666", fontSize:12, marginTop:16 }}>— Floorspace Design Ethos</div>
          </div>
        </div>

        {/* Pull quote bar */}
        <div style={{ background:"#111", padding:"48px", display:"flex", alignItems:"center", gap:64 }}>
          <div style={{ fontSize:"clamp(32px,4vw,64px)", fontFamily:"Georgia,serif", color:"#fff", fontWeight:900, whiteSpace:"nowrap" }}>150+</div>
          <div style={{ width:2, height:60, background:"#c0392b" }} />
          <div style={{ color:"#aaa", fontSize:16, lineHeight:1.8, maxWidth:600 }}>
            Projects completed across Mumbai, Pune, Bangalore and Delhi NCR for India's most recognized corporations.
          </div>
          <button style={{ marginLeft:"auto", background:"#c0392b", border:"none", color:"#fff", padding:"16px 36px", fontSize:12, letterSpacing:2, cursor:"pointer", whiteSpace:"nowrap" }}>
            READ MORE →
          </button>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          TEMPLATE 3 — SWISS MINIMAL
      ───────────────────────────────────────────── */}
      <section id="template-3" style={{ background: "#ffffff", minHeight: "100vh", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <div style={{ padding: "20px 48px", borderBottom: "1px solid #e5e5e5", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#2563eb", fontFamily: "monospace", fontSize: 12, letterSpacing: 4 }}>TEMPLATE 03 / SWISS MINIMAL</span>
          <span style={{ color: "#aaa", fontSize: 12 }}>Clean · Timeless · Confident</span>
        </div>

        {/* Top nav */}
        <div style={{ padding:"24px 64px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid #e5e5e5" }}>
          <span style={{ fontSize:14, fontWeight:700, letterSpacing:4, color:"#111" }}>FLOORSPACE</span>
          <div style={{ display:"flex", gap:40 }}>
            {["Work","Studio","Process","Contact"].map(n => <a key={n} href="#" style={{ fontSize:12, color:"#111", textDecoration:"none", letterSpacing:1 }}>{n}</a>)}
          </div>
        </div>

        {/* Hero */}
        <div style={{ padding:"80px 64px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:80, alignItems:"center" }}>
          <div>
            <div style={{ fontSize:11, letterSpacing:6, color:"#999", marginBottom:32 }}>Interior Architecture · Mumbai</div>
            <h1 style={{ fontSize:"clamp(40px,5vw,80px)", fontWeight:800, lineHeight:1, margin:"0 0 32px", color:"#111", letterSpacing:-2 }}>
              We design<br />the spaces<br />that matter.
            </h1>
            <p style={{ fontSize:16, color:"#666", lineHeight:1.9, maxWidth:380, marginBottom:40 }}>
              Strategic, evidence-based interior design for India's leading organizations. Function first. Beauty always.
            </p>
            <div style={{ display:"flex", gap:16 }}>
              <button style={{ background:"#111", color:"#fff", border:"none", padding:"14px 32px", fontSize:12, letterSpacing:2, cursor:"pointer" }}>SEE WORK</button>
              <button style={{ background:"transparent", color:"#111", border:"1px solid #111", padding:"14px 32px", fontSize:12, letterSpacing:2, cursor:"pointer" }}>ABOUT US</button>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4 }}>
            <img src="/images/mazak-lobby.jpg" alt="" style={{ width:"100%", aspectRatio:"3/4", objectFit:"cover" }} />
            <img src="/images/octillion-conference.jpg" alt="" style={{ width:"100%", aspectRatio:"3/4", objectFit:"cover", marginTop:40 }} />
          </div>
        </div>

        {/* Divider with number */}
        <div style={{ padding:"0 64px", borderTop:"1px solid #e5e5e5", borderBottom:"1px solid #e5e5e5", display:"flex", alignItems:"stretch" }}>
          <div style={{ flex:1, padding:"40px 0" }}>
            <div style={{ fontSize:11, letterSpacing:4, color:"#999", marginBottom:8 }}>SELECTED PROJECTS</div>
          </div>
          <div style={{ width:1, background:"#e5e5e5" }} />
          <div style={{ flex:3, padding:"40px 40px" }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:0 }}>
              {[
                { n:"01", title:"Octillion HQ", meta:"95,000 sq ft · Open-Plan Office" },
                { n:"02", title:"SMBC Tower", meta:"40,000 sq ft · Financial Services" },
                { n:"03", title:"Tristone Centre", meta:"28,000 sq ft · Commercial" },
              ].map((p,i) => (
                <div key={i} style={{ padding:"0 32px", borderRight: i<2 ? "1px solid #e5e5e5":"none" }}>
                  <div style={{ fontSize:11, color:"#ccc", marginBottom:12 }}>{p.n}</div>
                  <div style={{ fontSize:18, fontWeight:700, letterSpacing:-0.5, marginBottom:8 }}>{p.title}</div>
                  <div style={{ fontSize:12, color:"#999" }}>{p.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full bleed image */}
        <div style={{ margin:"0 64px", padding:"40px 0" }}>
          <img src="/images/octillion-reception.jpg" alt="" style={{ width:"100%", height:400, objectFit:"cover" }} />
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          TEMPLATE 4 — WARM ORGANIC
      ───────────────────────────────────────────── */}
      <section id="template-4" style={{ background: "#f5f0e8", minHeight: "100vh" }}>
        <div style={{ padding: "20px 48px", borderBottom: "1px solid #ddd7ca", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#8B4513", fontFamily: "monospace", fontSize: 12, letterSpacing: 4 }}>TEMPLATE 04 / WARM ORGANIC</span>
          <span style={{ color: "#aaa", fontSize: 12 }}>Boutique · Tactile · Inviting</span>
        </div>

        {/* Nav */}
        <div style={{ padding:"28px 56px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div>
            <div style={{ fontSize:22, fontFamily:"Georgia,serif", color:"#3a2a1a", letterSpacing:1 }}>Floorspace</div>
            <div style={{ fontSize:10, letterSpacing:4, color:"#a0896e", marginTop:2 }}>INTERIOR DESIGN · INDIA</div>
          </div>
          <div style={{ display:"flex", gap:36 }}>
            {["Our Work","Philosophy","Studio","Contact"].map(n => <a key={n} href="#" style={{ fontSize:13, color:"#5a4535", textDecoration:"none", fontFamily:"Georgia,serif" }}>{n}</a>)}
          </div>
        </div>

        {/* Hero — asymmetric */}
        <div style={{ display:"grid", gridTemplateColumns:"5fr 4fr", gap:0, minHeight:"75vh" }}>
          <div style={{ position:"relative", overflow:"hidden" }}>
            <img src="/images/octillion-planters.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, transparent 50%, rgba(61,41,21,0.4))" }} />
          </div>
          <div style={{ background:"#ede8df", padding:"64px 56px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <div style={{ width:40, height:2, background:"#c4855a", marginBottom:32 }} />
            <h1 style={{ fontSize:"clamp(36px,3.5vw,60px)", fontFamily:"Georgia,serif", color:"#3a2a1a", fontWeight:400, lineHeight:1.25, margin:"0 0 28px" }}>
              Spaces that feel<br />like <em>home</em>, even<br />at work.
            </h1>
            <p style={{ fontSize:15, color:"#7a6555", lineHeight:1.9, marginBottom:40 }}>
              We believe workplaces should nourish the people inside them. Our designs bring warmth, texture, and intention to every square foot.
            </p>
            <a href="#" style={{ display:"inline-flex", alignItems:"center", gap:12, color:"#c4855a", textDecoration:"none", fontSize:14, fontFamily:"Georgia,serif", fontStyle:"italic" }}>
              Discover our approach <span>→</span>
            </a>
          </div>
        </div>

        {/* Services cards */}
        <div style={{ padding:"64px 56px" }}>
          <div style={{ fontSize:11, letterSpacing:4, color:"#a0896e", marginBottom:40 }}>WHAT WE DO</div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {[
              { icon:"◈", title:"Corporate Interiors", desc:"Thoughtfully designed offices that boost wellbeing and productivity." },
              { icon:"◉", title:"Space Planning", desc:"Intelligent layouts that make every square foot purposeful." },
              { icon:"◌", title:"Furniture Curation", desc:"Hand-selected pieces that bring character and comfort." },
            ].map((s,i) => (
              <div key={i} style={{ background:"#ede8df", borderRadius:16, padding:"40px 36px" }}>
                <div style={{ fontSize:28, color:"#c4855a", marginBottom:20 }}>{s.icon}</div>
                <div style={{ fontSize:18, fontFamily:"Georgia,serif", color:"#3a2a1a", marginBottom:12 }}>{s.title}</div>
                <div style={{ fontSize:14, color:"#7a6555", lineHeight:1.8 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Project row */}
        <div style={{ padding:"0 56px 64px", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:16 }}>
          {["/images/smbc-entrance.jpg","/images/zycus-corridor.jpg","/images/tristone-reception.jpg","/images/octillion-collab.jpg"].map((img,i) => (
            <div key={i} style={{ borderRadius:12, overflow:"hidden", aspectRatio:"3/4" }}>
              <img src={img} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          TEMPLATE 5 — BENTO GRID
      ───────────────────────────────────────────── */}
      <section id="template-5" style={{ background: "#0a0a0f", minHeight: "100vh", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
        <div style={{ padding: "20px 48px", borderBottom: "1px solid #1a1a2e", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#6366f1", fontFamily: "monospace", fontSize: 12, letterSpacing: 4 }}>TEMPLATE 05 / BENTO GRID</span>
          <span style={{ color: "#555", fontSize: 12 }}>Modern · Dynamic · Portfolio-first</span>
        </div>

        {/* Top bar */}
        <div style={{ padding:"24px 40px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <span style={{ fontSize:20, fontWeight:800, color:"#fff", letterSpacing:-0.5 }}>Floorspace<span style={{ color:"#6366f1" }}>.</span></span>
          <div style={{ background:"#6366f1", color:"#fff", padding:"10px 24px", fontSize:12, letterSpacing:1, cursor:"pointer", borderRadius:6 }}>
            START A PROJECT →
          </div>
        </div>

        {/* Hero headline */}
        <div style={{ padding:"20px 40px 32px" }}>
          <h1 style={{ fontSize:"clamp(36px,5vw,80px)", fontWeight:900, color:"#fff", margin:0, letterSpacing:-2, lineHeight:0.95 }}>
            India's most <span style={{ color:"#6366f1" }}>innovative</span><br />interior studio.
          </h1>
        </div>

        {/* Bento grid */}
        <div style={{ padding:"0 40px 40px", display:"grid", gridTemplateColumns:"repeat(12,1fr)", gridTemplateRows:"220px 220px 200px", gap:8 }}>

          {/* Large hero tile */}
          <div style={{ gridColumn:"1/6", gridRow:"1/3", borderRadius:16, overflow:"hidden", position:"relative" }}>
            <img src="/images/octillion-workspace.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 50%)" }} />
            <div style={{ position:"absolute", bottom:24, left:24 }}>
              <span style={{ background:"#6366f1", color:"#fff", fontSize:10, letterSpacing:2, padding:"4px 10px", borderRadius:4 }}>FEATURED</span>
              <div style={{ color:"#fff", fontSize:20, fontWeight:700, marginTop:8 }}>Octillion HQ</div>
              <div style={{ color:"#aaa", fontSize:12 }}>95,000 sq ft · Open-Plan Office</div>
            </div>
          </div>

          {/* Stat tile */}
          <div style={{ gridColumn:"6/8", gridRow:"1/2", background:"#6366f1", borderRadius:16, padding:24, display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
            <div style={{ color:"rgba(255,255,255,0.5)", fontSize:11, letterSpacing:2 }}>PROJECTS</div>
            <div style={{ color:"#fff", fontSize:56, fontWeight:900, lineHeight:1 }}>150+</div>
          </div>

          {/* Image tile */}
          <div style={{ gridColumn:"8/10", gridRow:"1/2", borderRadius:16, overflow:"hidden" }}>
            <img src="/images/smbc-boardroom.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>

          {/* Image tile */}
          <div style={{ gridColumn:"10/13", gridRow:"1/2", borderRadius:16, overflow:"hidden" }}>
            <img src="/images/tristone-corridor.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>

          {/* Text tile */}
          <div style={{ gridColumn:"6/9", gridRow:"2/3", background:"#14141f", borderRadius:16, padding:28, display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
            <div style={{ color:"#6366f1", fontSize:11, letterSpacing:3 }}>STUDIO</div>
            <div style={{ color:"#fff", fontSize:18, fontWeight:600, lineHeight:1.4 }}>Crafting environments that inspire, connect, and endure.</div>
            <div style={{ color:"#555", fontSize:12 }}>Mumbai · Pune · Bangalore · Delhi</div>
          </div>

          {/* Image tile */}
          <div style={{ gridColumn:"9/13", gridRow:"2/3", borderRadius:16, overflow:"hidden" }}>
            <img src="/images/zycus-openplan.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>

          {/* Bottom row */}
          <div style={{ gridColumn:"1/4", gridRow:"3/4", borderRadius:16, overflow:"hidden" }}>
            <img src="/images/octillion-cafeteria.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
          <div style={{ gridColumn:"4/7", gridRow:"3/4", borderRadius:16, overflow:"hidden" }}>
            <img src="/images/smbc-entrance.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
          <div style={{ gridColumn:"7/10", gridRow:"3/4", background:"#14141f", borderRadius:16, padding:28, display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <div style={{ color:"#6366f1", fontSize:32, fontWeight:900 }}>15</div>
            <div style={{ color:"#aaa", fontSize:12, marginTop:4 }}>Years of Excellence</div>
          </div>
          <div style={{ gridColumn:"10/13", gridRow:"3/4", background:"#6366f1", borderRadius:16, padding:28, display:"flex", flexDirection:"column", justifyContent:"center", cursor:"pointer" }}>
            <div style={{ color:"#fff", fontSize:18, fontWeight:700 }}>Start your project →</div>
            <div style={{ color:"rgba(255,255,255,0.6)", fontSize:12, marginTop:8 }}>Let's build something remarkable.</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div style={{ background:"#000", padding:"32px 48px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <span style={{ color:"#444", fontSize:12 }}>← <Link href="/" style={{ color:"#666", textDecoration:"none" }}>Back to current site</Link></span>
        <span style={{ color:"#444", fontSize:12 }}>Tell us which template you prefer and we&apos;ll rebuild the site in that style.</span>
      </div>
    </div>
  );
}
