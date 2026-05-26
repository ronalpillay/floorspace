"use client";
import Link from "next/link";

export default function Templates2Page() {
  return (
    <div>
      {/* Nav */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(0,0,0,0.9)", backdropFilter: "blur(12px)",
        padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <span style={{ color: "#fff", fontFamily: "serif", fontSize: 16, letterSpacing: 2 }}>FLOORSPACE — MORE TEMPLATES</span>
        <div style={{ display: "flex", gap: 8 }}>
          {["6. Japandi","7. Neo-Brutalist","8. Glassmorphism","9. Cinematic","10. Art Deco"].map((t,i) => (
            <a key={i} href={`#template-${i+6}`} style={{
              color: "#aaa", fontSize: 11, textDecoration: "none", padding: "6px 10px",
              border: "1px solid #333", borderRadius: 4
            }}>{t}</a>
          ))}
        </div>
        <Link href="/templates" style={{ color:"#666", fontSize:12, textDecoration:"none" }}>← First 5</Link>
      </div>

      {/* ─────────────────────────────────────────────
          TEMPLATE 6 — JAPANDI / ZEN
      ───────────────────────────────────────────── */}
      <section id="template-6" style={{ background: "#faf8f4", minHeight: "100vh", paddingTop: 80 }}>
        <div style={{ padding: "20px 48px", borderBottom: "1px solid #e8e2d8", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#6b7c6e", fontFamily: "monospace", fontSize: 12, letterSpacing: 4 }}>TEMPLATE 06 / JAPANDI · ZEN</span>
          <span style={{ color: "#bbb", fontSize: 12 }}>Serene · Wabi-sabi · Japanese-Scandi</span>
        </div>

        {/* Nav */}
        <div style={{ padding: "32px 64px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
            <span style={{ fontSize:13, letterSpacing:8, color:"#3d4a3e", fontFamily:"Georgia,serif" }}>FLOORSPACE</span>
            <div style={{ display:"flex", gap:4 }}>
              {[1,2,3].map(i=><div key={i} style={{ height:1, flex:1, background:"#6b7c6e", opacity: i===2?0.3:i===1?0.6:1 }} />)}
            </div>
          </div>
          <div style={{ display:"flex", gap:40 }}>
            {["Work","Studio","Journal","Contact"].map(n=><a key={n} href="#" style={{ fontSize:12, letterSpacing:3, color:"#7a8a7b", textDecoration:"none" }}>{n}</a>)}
          </div>
        </div>

        {/* Hero split */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"80vh" }}>
          <div style={{ padding:"48px 64px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
            <div style={{ width:32, height:1, background:"#6b7c6e", marginBottom:40 }} />
            <h1 style={{
              fontSize:"clamp(40px,4.5vw,72px)", fontFamily:"Georgia,serif", fontWeight:300,
              color:"#2c3a2d", lineHeight:1.2, margin:"0 0 32px", letterSpacing:-1
            }}>
              The art of<br />purposeful<br /><em>stillness.</em>
            </h1>
            <p style={{ fontSize:15, color:"#7a8a7b", lineHeight:2, maxWidth:340, marginBottom:48 }}>
              We design spaces that breathe. Calm, considered interiors that honour both craft and function.
            </p>
            <div style={{ display:"flex", alignItems:"center", gap:24 }}>
              <div style={{ width:48, height:1, background:"#6b7c6e" }} />
              <span style={{ fontSize:12, letterSpacing:4, color:"#6b7c6e" }}>EXPLORE OUR WORK</span>
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateRows:"1fr 1fr", gap:4 }}>
            <img src="/images/octillion-planters.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"saturate(0.7)" }} />
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4 }}>
              <img src="/images/tristone-reception.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"saturate(0.7)" }} />
              <div style={{ background:"#e8e2d8", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:8 }}>
                <div style={{ fontSize:40, fontFamily:"Georgia,serif", color:"#2c3a2d", fontWeight:300 }}>15</div>
                <div style={{ fontSize:10, letterSpacing:3, color:"#6b7c6e" }}>YEARS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy bar */}
        <div style={{ background:"#2c3a2d", padding:"56px 64px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:0 }}>
          {[
            { kanji:"間", romaji:"Ma", meaning:"Negative space" },
            { kanji:"侘", romaji:"Wabi", meaning:"Imperfect beauty" },
            { kanji:"寂", romaji:"Sabi", meaning:"Graceful ageing" },
            { kanji:"和", romaji:"Wa", meaning:"Harmony" },
          ].map((p,i)=>(
            <div key={i} style={{ textAlign:"center", padding:"24px 0", borderRight: i<3?"1px solid rgba(255,255,255,0.1)":"none" }}>
              <div style={{ fontSize:48, color:"rgba(255,255,255,0.15)", fontFamily:"serif", marginBottom:8 }}>{p.kanji}</div>
              <div style={{ fontSize:12, letterSpacing:3, color:"#6b7c6e", marginBottom:4 }}>{p.romaji}</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>{p.meaning}</div>
            </div>
          ))}
        </div>

        {/* Project row */}
        <div style={{ padding:"56px 64px", display:"grid", gridTemplateColumns:"2fr 1fr 1fr", gap:24 }}>
          <div style={{ position:"relative", overflow:"hidden", borderRadius:2 }}>
            <img src="/images/octillion-lounge.jpg" alt="" style={{ width:"100%", height:320, objectFit:"cover", filter:"saturate(0.75)" }} />
            <div style={{ padding:"20px 0" }}>
              <div style={{ fontSize:11, letterSpacing:3, color:"#6b7c6e" }}>FEATURED · 2024</div>
              <div style={{ fontSize:20, fontFamily:"Georgia,serif", color:"#2c3a2d", marginTop:8 }}>Octillion HQ, Mumbai</div>
            </div>
          </div>
          {["/images/smbc-lobby.jpg","/images/zycus-corridor.jpg"].map((img,i)=>(
            <div key={i}>
              <img src={img} alt="" style={{ width:"100%", height:320, objectFit:"cover", filter:"saturate(0.75)", borderRadius:2 }} />
              <div style={{ padding:"20px 0" }}>
                <div style={{ fontSize:11, letterSpacing:3, color:"#6b7c6e" }}>PROJECT · 202{3+i}</div>
                <div style={{ fontSize:16, fontFamily:"Georgia,serif", color:"#2c3a2d", marginTop:8 }}>{i===0?"SMBC Tower":"Zycus Campus"}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          TEMPLATE 7 — NEO-BRUTALIST
      ───────────────────────────────────────────── */}
      <section id="template-7" style={{ background: "#f0ec3c", minHeight: "100vh" }}>
        <div style={{ padding: "20px 48px", borderBottom: "3px solid #111", display: "flex", alignItems: "center", justifyContent: "space-between", background:"#f0ec3c" }}>
          <span style={{ color: "#111", fontFamily: "monospace", fontSize: 12, letterSpacing: 4 }}>TEMPLATE 07 / NEO-BRUTALIST</span>
          <span style={{ color: "#555", fontSize: 12 }}>Raw · Bold · Unapologetic</span>
        </div>

        {/* Nav */}
        <div style={{ borderBottom:"3px solid #111", padding:"16px 40px", display:"flex", alignItems:"center", justifyContent:"space-between", background:"#111" }}>
          <span style={{ fontSize:24, fontWeight:900, color:"#f0ec3c", letterSpacing:-1 }}>FLOORSPACE</span>
          <div style={{ display:"flex", gap:0 }}>
            {["WORK","STUDIO","PROCESS","CONTACT"].map((n,i)=>(
              <a key={n} href="#" style={{ fontSize:12, fontWeight:700, color:"#f0ec3c", textDecoration:"none", padding:"8px 20px", borderLeft: i>0?"1px solid #333":"none", letterSpacing:2 }}>{n}</a>
            ))}
          </div>
        </div>

        {/* Hero */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", border:"3px solid #111", borderTop:"none" }}>
          <div style={{ padding:"64px 48px", borderRight:"1px solid #111" }}>
            <div style={{ background:"#111", display:"inline-block", padding:"4px 12px", marginBottom:24 }}>
              <span style={{ color:"#f0ec3c", fontSize:11, fontWeight:700, letterSpacing:4 }}>EST. 2009 · MUMBAI</span>
            </div>
            <h1 style={{ fontSize:"clamp(56px,7vw,120px)", fontWeight:900, color:"#111", lineHeight:0.88, margin:"0 0 40px", letterSpacing:-4, textTransform:"uppercase" }}>
              WE<br />BUILD<br />GREAT<br />SPACE.
            </h1>
            <p style={{ fontSize:16, color:"#333", lineHeight:1.7, maxWidth:400, marginBottom:40, fontWeight:500 }}>
              Interior design that doesn't apologize for being noticed. Bold decisions, honest materials, lasting impact.
            </p>
            <div style={{ display:"flex", gap:0 }}>
              <button style={{ background:"#111", color:"#f0ec3c", border:"3px solid #111", padding:"16px 32px", fontSize:13, fontWeight:700, letterSpacing:2, cursor:"pointer" }}>SEE WORK</button>
              <button style={{ background:"transparent", color:"#111", border:"3px solid #111", borderLeft:"none", padding:"16px 32px", fontSize:13, fontWeight:700, letterSpacing:2, cursor:"pointer" }}>CALL US</button>
            </div>
          </div>
          <div style={{ position:"relative", minHeight:560, overflow:"hidden", border:"none" }}>
            <img src="/images/octillion-boardroom.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"grayscale(20%) contrast(1.1)" }} />
            <div style={{ position:"absolute", top:24, right:24, background:"#f0ec3c", border:"3px solid #111", padding:"8px 16px" }}>
              <span style={{ fontSize:11, fontWeight:700, letterSpacing:2 }}>150+ PROJECTS</span>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", borderBottom:"3px solid #111" }}>
          {[["150+","Projects"],["15yrs","Experience"],["2M","Sq Ft"],["40+","Clients"]].map(([n,l],i)=>(
            <div key={i} style={{ padding:"32px", borderRight: i<3?"1px solid #111":"none", display:"flex", flexDirection:"column", gap:4 }}>
              <div style={{ fontSize:48, fontWeight:900, color:"#111", letterSpacing:-2, lineHeight:1 }}>{n}</div>
              <div style={{ fontSize:12, fontWeight:700, letterSpacing:3, color:"#444" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Project grid */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", borderBottom:"3px solid #111" }}>
          {[
            { img:"/images/smbc-conference.jpg", title:"SMBC TOWER", tag:"FINANCIAL" },
            { img:"/images/tristone-corridor.jpg", title:"TRISTONE", tag:"COMMERCIAL" },
            { img:"/images/octillion-reception.jpg", title:"OCTILLION HQ", tag:"CORPORATE" },
          ].map((p,i)=>(
            <div key={i} style={{ borderRight: i<2?"1px solid #111":"none", position:"relative", overflow:"hidden", cursor:"pointer" }}
              onMouseEnter={e=>{ const el = e.currentTarget as HTMLElement; el.style.background="#111"; }}
              onMouseLeave={e=>{ const el = e.currentTarget as HTMLElement; el.style.background="transparent"; }}>
              <img src={p.img} alt="" style={{ width:"100%", height:300, objectFit:"cover", display:"block", filter:"grayscale(30%)" }} />
              <div style={{ padding:"20px 24px", borderTop:"3px solid #111", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <span style={{ fontSize:14, fontWeight:900, letterSpacing:1 }}>{p.title}</span>
                <span style={{ fontSize:10, fontWeight:700, letterSpacing:3, background:"#f0ec3c", padding:"4px 10px", border:"2px solid #111" }}>{p.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          TEMPLATE 8 — GLASSMORPHISM
      ───────────────────────────────────────────── */}
      <section id="template-8" style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 40%, #24243e 100%)", minHeight: "100vh", position:"relative", overflow:"hidden" }}>
        {/* Background blobs */}
        <div style={{ position:"absolute", top:"-10%", left:"-5%", width:600, height:600, borderRadius:"50%", background:"rgba(99,102,241,0.25)", filter:"blur(100px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"10%", right:"-10%", width:500, height:500, borderRadius:"50%", background:"rgba(168,85,247,0.2)", filter:"blur(120px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:"40%", left:"30%", width:400, height:400, borderRadius:"50%", background:"rgba(59,130,246,0.15)", filter:"blur(80px)", pointerEvents:"none" }} />

        <div style={{ padding: "20px 48px", borderBottom: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "space-between", position:"relative" }}>
          <span style={{ color: "#a78bfa", fontFamily: "monospace", fontSize: 12, letterSpacing: 4 }}>TEMPLATE 08 / GLASSMORPHISM</span>
          <span style={{ color: "#555", fontSize: 12 }}>Premium · Translucent · Futuristic</span>
        </div>

        {/* Nav */}
        <div style={{
          margin:"24px 40px", padding:"16px 32px", borderRadius:16,
          background:"rgba(255,255,255,0.06)", backdropFilter:"blur(20px)",
          border:"1px solid rgba(255,255,255,0.12)",
          display:"flex", alignItems:"center", justifyContent:"space-between", position:"relative"
        }}>
          <span style={{ fontSize:18, fontWeight:700, color:"#fff", letterSpacing:-0.5 }}>Floorspace<span style={{ color:"#a78bfa" }}>.</span></span>
          <div style={{ display:"flex", gap:32 }}>
            {["Work","Studio","Process","Contact"].map(n=><a key={n} href="#" style={{ fontSize:13, color:"rgba(255,255,255,0.7)", textDecoration:"none" }}>{n}</a>)}
          </div>
          <button style={{ background:"linear-gradient(135deg,#6366f1,#a78bfa)", color:"#fff", border:"none", padding:"10px 24px", borderRadius:8, fontSize:12, cursor:"pointer", fontWeight:600 }}>
            Get Started
          </button>
        </div>

        {/* Hero */}
        <div style={{ padding:"40px 40px 24px", position:"relative" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ display:"inline-block", background:"rgba(167,139,250,0.15)", border:"1px solid rgba(167,139,250,0.3)", borderRadius:20, padding:"6px 20px", marginBottom:24 }}>
              <span style={{ color:"#a78bfa", fontSize:12, letterSpacing:2 }}>INDIA'S PREMIER INTERIOR STUDIO</span>
            </div>
            <h1 style={{ fontSize:"clamp(44px,6vw,96px)", fontWeight:800, color:"#fff", lineHeight:0.95, margin:"0 0 24px", letterSpacing:-2 }}>
              Design beyond<br /><span style={{ background:"linear-gradient(135deg,#6366f1,#a78bfa,#ec4899)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>imagination.</span>
            </h1>
            <p style={{ fontSize:16, color:"rgba(255,255,255,0.5)", maxWidth:480, margin:"0 auto 40px", lineHeight:1.8 }}>
              Where architecture meets artistry. Transforming corporate spaces into environments that inspire.
            </p>
          </div>

          {/* Glass cards grid */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16 }}>
            {[
              { img:"/images/octillion-workspace.jpg", title:"Octillion HQ", tag:"Corporate", size:"95,000 sq ft" },
              { img:"/images/smbc-lobby.jpg", title:"SMBC Tower", tag:"Financial", size:"40,000 sq ft" },
              { img:"/images/tristone-reception.jpg", title:"Tristone Centre", tag:"Commercial", size:"28,000 sq ft" },
            ].map((p,i)=>(
              <div key={i} style={{
                borderRadius:20, overflow:"hidden", position:"relative",
                background:"rgba(255,255,255,0.06)", backdropFilter:"blur(16px)",
                border:"1px solid rgba(255,255,255,0.12)"
              }}>
                <img src={p.img} alt="" style={{ width:"100%", height:240, objectFit:"cover", opacity:0.85 }} />
                <div style={{ padding:"20px 24px" }}>
                  <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:8 }}>
                    <span style={{ color:"#fff", fontSize:16, fontWeight:600 }}>{p.title}</span>
                    <span style={{ background:"rgba(99,102,241,0.3)", color:"#a78bfa", fontSize:10, letterSpacing:2, padding:"4px 10px", borderRadius:20, border:"1px solid rgba(99,102,241,0.4)" }}>{p.tag}</span>
                  </div>
                  <span style={{ color:"rgba(255,255,255,0.4)", fontSize:12 }}>{p.size}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats glass bar */}
        <div style={{
          margin:"24px 40px 40px", padding:"32px 48px", borderRadius:20,
          background:"rgba(255,255,255,0.05)", backdropFilter:"blur(20px)",
          border:"1px solid rgba(255,255,255,0.1)",
          display:"grid", gridTemplateColumns:"repeat(4,1fr)", position:"relative"
        }}>
          {[["150+","Projects Delivered"],["15","Years Active"],["2M+","Sq Ft Designed"],["40+","Happy Clients"]].map(([n,l],i)=>(
            <div key={i} style={{ textAlign:"center", borderRight: i<3?"1px solid rgba(255,255,255,0.08)":"none", padding:"0 24px" }}>
              <div style={{ fontSize:40, fontWeight:800, background:"linear-gradient(135deg,#6366f1,#a78bfa)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>{n}</div>
              <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)", marginTop:4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          TEMPLATE 9 — CINEMATIC
      ───────────────────────────────────────────── */}
      <section id="template-9" style={{ background: "#080808", minHeight: "100vh", fontFamily:"'Helvetica Neue',sans-serif" }}>
        <div style={{ padding: "20px 48px", borderBottom: "1px solid #1a1a1a", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#e8d5a3", fontFamily: "monospace", fontSize: 12, letterSpacing: 4 }}>TEMPLATE 09 / CINEMATIC</span>
          <span style={{ color: "#444", fontSize: 12 }}>Film-noir · Dramatic · Immersive</span>
        </div>

        {/* Letterbox hero */}
        <div style={{ position:"relative", height:"95vh", overflow:"hidden" }}>
          {/* Grain overlay */}
          <div style={{
            position:"absolute", inset:0, zIndex:2, opacity:0.04,
            backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize:"128px"
          }} />
          {/* Letterbox bars */}
          <div style={{ position:"absolute", top:0, left:0, right:0, height:"10%", background:"#000", zIndex:3 }} />
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"10%", background:"#000", zIndex:3 }} />

          <img src="/images/octillion-openplan.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"brightness(0.35) contrast(1.2) sepia(0.3)" }} />

          {/* Centered content */}
          <div style={{ position:"absolute", inset:0, zIndex:4, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center" }}>
            <div style={{ fontSize:10, letterSpacing:8, color:"rgba(232,213,163,0.6)", marginBottom:32 }}>A FLOORSPACE PRODUCTION</div>
            <h1 style={{ fontSize:"clamp(48px,7vw,120px)", fontWeight:900, color:"#fff", margin:"0 0 24px", letterSpacing:-3, lineHeight:0.9, textTransform:"uppercase" }}>
              THE ART<br />OF SPACE
            </h1>
            <div style={{ width:80, height:1, background:"#e8d5a3", margin:"0 auto 24px" }} />
            <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", letterSpacing:4, textTransform:"uppercase" }}>
              Interior Design · Mumbai · Est. 2009
            </p>
          </div>

          {/* Bottom overlay info */}
          <div style={{ position:"absolute", bottom:"12%", left:0, right:0, zIndex:4, padding:"0 64px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
            <div>
              <div style={{ color:"rgba(232,213,163,0.5)", fontSize:10, letterSpacing:4, marginBottom:4 }}>NOW SHOWING</div>
              <div style={{ color:"#fff", fontSize:18, letterSpacing:1 }}>Octillion Headquarters — Mumbai</div>
            </div>
            <button style={{ background:"transparent", border:"1px solid rgba(232,213,163,0.4)", color:"#e8d5a3", padding:"12px 32px", fontSize:11, letterSpacing:3, cursor:"pointer" }}>
              ENTER →
            </button>
          </div>
        </div>

        {/* Film strip */}
        <div style={{ display:"flex", gap:0, overflow:"hidden", background:"#050505" }}>
          {["/images/smbc-entrance.jpg","/images/tristone-corridor.jpg","/images/octillion-cafeteria.jpg","/images/zycus-openplan.jpg","/images/octillion-collab.jpg","/images/smbc-conference.jpg"].map((img,i)=>(
            <div key={i} style={{ flex:"0 0 calc(100%/4)", position:"relative", cursor:"pointer" }}
              onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.flex="0 0 40%"; }}
              onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.flex="0 0 calc(100%/4)"; }}>
              <div style={{ height:280, transition:"transform 0.6s ease" }}>
                <img src={img} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"grayscale(60%) brightness(0.7)", display:"block" }} />
              </div>
              {/* Frame marks */}
              <div style={{ position:"absolute", top:8, left:8, width:16, height:16, borderTop:"1px solid rgba(232,213,163,0.3)", borderLeft:"1px solid rgba(232,213,163,0.3)" }} />
              <div style={{ position:"absolute", bottom:8, right:8, width:16, height:16, borderBottom:"1px solid rgba(232,213,163,0.3)", borderRight:"1px solid rgba(232,213,163,0.3)" }} />
            </div>
          ))}
        </div>

        {/* Director's note */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:320 }}>
          <div style={{ padding:"64px", borderRight:"1px solid #1a1a1a" }}>
            <div style={{ fontSize:10, letterSpacing:6, color:"rgba(232,213,163,0.5)", marginBottom:32 }}>DIRECTOR'S STATEMENT</div>
            <p style={{ fontSize:22, fontFamily:"Georgia,serif", color:"#fff", fontWeight:300, lineHeight:1.7, fontStyle:"italic" }}>
              "Every space tells a story. Our job is to make sure it's the right one."
            </p>
            <div style={{ marginTop:32, color:"rgba(232,213,163,0.6)", fontSize:13, letterSpacing:2 }}>— Floorspace Design Studio</div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr" }}>
            {[["150+","Projects"],["15","Years"],["2M+","Sq Ft"],["40+","Clients"]].map(([n,l],i)=>(
              <div key={i} style={{ padding:"40px", borderRight: i%2===0?"1px solid #1a1a1a":"none", borderBottom: i<2?"1px solid #1a1a1a":"none", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                <div style={{ fontSize:40, fontWeight:700, color:"#e8d5a3", lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:11, letterSpacing:3, color:"#444", marginTop:8 }}>{l.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          TEMPLATE 10 — ART DECO
      ───────────────────────────────────────────── */}
      <section id="template-10" style={{ background: "#0d1b2a", minHeight: "100vh", fontFamily:"Georgia,serif" }}>
        <div style={{ padding: "20px 48px", borderBottom: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#d4af37", fontFamily: "monospace", fontSize: 12, letterSpacing: 4 }}>TEMPLATE 10 / ART DECO</span>
          <span style={{ color: "#444", fontSize: 12 }}>Geometric · Jewel tones · Opulent</span>
        </div>

        {/* Top ornament */}
        <div style={{ textAlign:"center", padding:"32px 0 0", position:"relative" }}>
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:16, marginBottom:4 }}>
            <div style={{ height:1, width:80, background:"linear-gradient(to right, transparent, #d4af37)" }} />
            <div style={{ width:8, height:8, background:"#d4af37", transform:"rotate(45deg)" }} />
            <div style={{ height:1, width:80, background:"linear-gradient(to left, transparent, #d4af37)" }} />
          </div>
        </div>

        {/* Nav */}
        <div style={{ textAlign:"center", padding:"24px 40px 32px", borderBottom:"1px solid rgba(212,175,55,0.15)" }}>
          <div style={{ fontSize:11, letterSpacing:8, color:"#d4af37", marginBottom:8 }}>✦ ESTABLISHED 2009 ✦</div>
          <div style={{ fontSize:36, fontWeight:700, color:"#f0e6cc", letterSpacing:12, textTransform:"uppercase" }}>FLOORSPACE</div>
          <div style={{ fontSize:11, letterSpacing:6, color:"rgba(212,175,55,0.6)", marginTop:4 }}>INTERIOR ARCHITECTURE · INDIA</div>
          <div style={{ display:"flex", justifyContent:"center", gap:0, marginTop:24 }}>
            {["OUR WORK","THE STUDIO","PROCESS","CONTACT"].map((n,i)=>(
              <a key={n} href="#" style={{ fontSize:10, letterSpacing:4, color:"#d4af37", textDecoration:"none", padding:"8px 24px", borderLeft: i>0?"1px solid rgba(212,175,55,0.2)":"none" }}>{n}</a>
            ))}
          </div>
        </div>

        {/* Hero panel */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 2fr 1fr", gap:0, minHeight:"70vh", borderBottom:"1px solid rgba(212,175,55,0.15)" }}>
          {/* Left panel — geometric */}
          <div style={{ background:"#071120", borderRight:"1px solid rgba(212,175,55,0.15)", padding:"48px 32px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
            {/* Deco pattern */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4 }}>
              {[...Array(8)].map((_,i)=>(
                <div key={i} style={{ height:4, background: i%3===0?"#d4af37":"rgba(212,175,55,0.1)" }} />
              ))}
            </div>
            <div>
              <div style={{ fontSize:10, letterSpacing:4, color:"rgba(212,175,55,0.5)", marginBottom:24, textTransform:"uppercase" }}>Services</div>
              {["Corporate Interiors","Space Planning","Furniture Design","Lighting Design"].map((s,i)=>(
                <div key={i} style={{ padding:"12px 0", borderBottom:"1px solid rgba(212,175,55,0.1)", display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:4, height:4, background:"#d4af37", transform:"rotate(45deg)", flexShrink:0 }} />
                  <span style={{ fontSize:12, color:"#c4b080", letterSpacing:1 }}>{s}</span>
                </div>
              ))}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4 }}>
              {[...Array(8)].map((_,i)=>(
                <div key={i} style={{ height:4, background: i%3===0?"#d4af37":"rgba(212,175,55,0.1)" }} />
              ))}
            </div>
          </div>

          {/* Centre image */}
          <div style={{ position:"relative" }}>
            <img src="/images/smbc-lobby.jpg" alt="" style={{ width:"100%", height:"100%", objectFit:"cover", filter:"sepia(20%) brightness(0.7)" }} />
            {/* Deco overlay */}
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(13,27,42,0.7) 0%, transparent 40%, transparent 60%, rgba(13,27,42,0.9) 100%)" }} />
            {/* Corner ornaments */}
            {[["top:24px","left:24px"],["top:24px","right:24px"],["bottom:24px","left:24px"],["bottom:24px","right:24px"]].map((pos,i)=>(
              <div key={i} style={{ position:"absolute", ...Object.fromEntries(pos.map(p=>p.split(":"))) as Record<string,string>, width:32, height:32, border:"1px solid rgba(212,175,55,0.5)", borderRadius:0 }} />
            ))}
            <div style={{ position:"absolute", bottom:48, left:0, right:0, textAlign:"center" }}>
              <div style={{ fontSize:11, letterSpacing:6, color:"#d4af37", marginBottom:16 }}>✦ FEATURED PROJECT ✦</div>
              <h1 style={{ fontSize:"clamp(32px,4vw,64px)", color:"#f0e6cc", fontWeight:700, margin:"0 0 8px", letterSpacing:2 }}>SMBC TOWER</h1>
              <div style={{ fontSize:12, letterSpacing:4, color:"rgba(212,175,55,0.6)" }}>BKC · MUMBAI · 40,000 SQ FT</div>
            </div>
          </div>

          {/* Right panel */}
          <div style={{ background:"#071120", borderLeft:"1px solid rgba(212,175,55,0.15)", padding:"48px 32px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4 }}>
              {[...Array(8)].map((_,i)=>(
                <div key={i} style={{ height:4, background: i%3===0?"#d4af37":"rgba(212,175,55,0.1)" }} />
              ))}
            </div>
            <div>
              {[["150+","Projects"],["15","Years"],["2M+","Sq Ft"],["40+","Clients"]].map(([n,l],i)=>(
                <div key={i} style={{ padding:"20px 0", borderBottom:"1px solid rgba(212,175,55,0.1)", textAlign:"center" }}>
                  <div style={{ fontSize:36, color:"#d4af37", fontWeight:700 }}>{n}</div>
                  <div style={{ fontSize:10, letterSpacing:3, color:"rgba(212,175,55,0.5)", marginTop:4 }}>{l.toUpperCase()}</div>
                </div>
              ))}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:4 }}>
              {[...Array(8)].map((_,i)=>(
                <div key={i} style={{ height:4, background: i%3===0?"#d4af37":"rgba(212,175,55,0.1)" }} />
              ))}
            </div>
          </div>
        </div>

        {/* Project gallery */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:0 }}>
          {["/images/octillion-boardroom.jpg","/images/tristone-reception.jpg","/images/octillion-lounge.jpg","/images/zycus-openplan.jpg"].map((img,i)=>(
            <div key={i} style={{ position:"relative", overflow:"hidden", cursor:"pointer", borderRight: i<3?"1px solid rgba(212,175,55,0.1)":"none" }}>
              <img src={img} alt="" style={{ width:"100%", height:260, objectFit:"cover", filter:"sepia(20%) brightness(0.65)", display:"block" }} />
              <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"24px 16px", background:"linear-gradient(transparent, rgba(7,17,32,0.95))" }}>
                <div style={{ width:24, height:1, background:"#d4af37", marginBottom:8 }} />
                <div style={{ fontSize:11, letterSpacing:3, color:"#d4af37" }}>0{i+1}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div style={{ background:"#000", padding:"32px 48px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <Link href="/templates" style={{ color:"#666", fontSize:12, textDecoration:"none" }}>← View first 5 templates</Link>
        <span style={{ color:"#444", fontSize:12 }}>Pick a style — we'll rebuild the whole site.</span>
      </div>
    </div>
  );
}
