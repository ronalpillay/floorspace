"use client";

import Image from "next/image";

const clients = [
  { name: "Mazak", img: "/images/clients/mazak.svg" },
  { name: "Bajaj Allianz", img: "/images/clients/bajaj-allianz.svg" },
  { name: "Mahindra 2 Wheelers", img: "/images/clients/mahindra-2-wheelers.svg" },
  { name: "EATON", img: "/images/clients/eaton.svg" },
  { name: "L&T Infotech", img: "/images/clients/l-t-infotech.svg" },
  { name: "Voxeljet Technology", img: "/images/clients/voxeljet-technology.svg" },
  { name: "BMC", img: "/images/clients/bmc.svg" },
  { name: "Onward Technologies Limited", img: "/images/clients/onward-technologies-limited.svg" },
  { name: "ZF", img: "/images/clients/zf.svg" },
  { name: "DAS", img: "/images/clients/das.svg" },
  { name: "SHIMZ", img: "/images/clients/shimz.svg" },
  { name: "Hindustan Unilever Limited", img: "/images/clients/hindustan-unilever-limited.svg" },
  { name: "New Balance", img: "/images/clients/new-balance.svg" },
  { name: "SMCC Construction India Ltd.", img: "/images/clients/smcc-construction-india-ltd.svg" },
  { name: "Schmersal", img: "/images/clients/schmersal.svg" },
  { name: "Vector", img: "/images/clients/vector.svg" },
  { name: "Hirschvogel Automotive Group", img: "/images/clients/hirschvogel-automotive-group.svg" },
  { name: "TTI India", img: "/images/clients/tti-india.svg" },
  { name: "Tristone", img: "/images/clients/tristone.svg" },
  { name: "OSG", img: "/images/clients/osg.svg" },
  { name: "Amneal Pharmaceuticals", img: "/images/clients/amneal-pharmaceuticals.svg" },
  { name: "Plethico", img: "/images/clients/plethico.svg" },
  { name: "Serum Institute of India Ltd.", img: "/images/clients/serum-institute-of-india-ltd.svg" },
  { name: "MGM New Bombay Hospital", img: "/images/clients/mgm-new-bombay-hospital.svg" },
  { name: "Bridgestone", img: "/images/clients/bridgestone.svg" },
  { name: "SCA", img: "/images/clients/sca.svg" },
  { name: "Lintec", img: "/images/clients/lintec.svg" },
  { name: "Ross", img: "/images/clients/ross.svg" },
  { name: "Rossini", img: "/images/clients/rossini.svg" },
  { name: "AxleTech International", img: "/images/clients/axletech-international.svg" },
  { name: "WIKA", img: "/images/clients/wika.svg" },
  { name: "Lupin", img: "/images/clients/lupin.svg" },
  { name: "Oerlikon", img: "/images/clients/oerlikon.svg" },
  { name: "New Holland Construction", img: "/images/clients/new-holland-construction.svg" },
  { name: "Geberit", img: "/images/clients/geberit.svg" },
  { name: "Marquardt", img: "/images/clients/marquardt.svg" },
  { name: "Kama Corporation", img: "/images/clients/kama-corporation.svg" },
  { name: "Unicharm", img: "/images/clients/unicharm.svg" },
  { name: "SMBC Bank", img: "/images/clients/smbc-bank.svg" },
  { name: "NEF", img: "/images/clients/nef.svg" },
  { name: "Jabil", img: "/images/clients/jabil.svg" },
  { name: "Neumann", img: "/images/clients/neumann.svg" },
  { name: "Dana", img: "/images/clients/dana.svg" },
  { name: "Denyo", img: "/images/clients/denyo.svg" },
  { name: "IUCAA", img: "/images/clients/iucaa.svg" },
  { name: "John Deere", img: "/images/clients/john-deere.svg" },
  { name: "Octillion", img: "/images/clients/octillion.svg" },
  { name: "Zycus", img: "/images/clients/zycus.svg" },
];

export default function Clients() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "clamp(56px,7vw,88px) clamp(24px,8vw,120px)",
        borderTop: "1px solid rgba(0,0,0,0.06)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: "var(--font-outfit)",
          fontSize: "11px",
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginBottom: "clamp(32px,4vw,52px)",
          textAlign: "center",
        }}
      >
        Trusted by India&apos;s leading MNCs
      </p>

      {/* Heading */}
      <div style={{ textAlign: "center", maxWidth: 980, margin: "0 auto 28px" }}>
        <h2 style={{ margin: 0, fontSize: "clamp(28px,4vw,44px)", fontWeight: 600 }}>Purpose-Built Spaces For Every Industry.</h2>
        <p style={{ marginTop: 12, color: "var(--text-muted)", maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
          Flipspaces partners with organizations across industries to create spaces that drive growth, improve efficiency, and enhance brand experience across real estate asset classes.
        </p>
      </div>

      {/* Rounded logo cards */}
      <div className="clients-cards" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 18 }}>
        {clients.map(({ name, img }) => (
          <div key={name} className="card" style={{ background: "#fff", borderRadius: 12, padding: 20, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 1px 0 rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.06)" }}>
            {img ? (
              <Image src={img} alt={name} width={150} height={48} style={{ objectFit: "contain" }} />
            ) : (
              <span style={{ fontWeight: 700, color: "#222" }}>{name}</span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .clients-cards { grid-template-columns: repeat(auto-fit,minmax(140px,1fr)) !important; }
        }
        @media (max-width: 560px) {
          .clients-cards { grid-template-columns: repeat(auto-fit,minmax(120px,1fr)) !important; }
        }
        .clients-cards .card:hover { transform: translateY(-4px); box-shadow: 0 6px 20px rgba(0,0,0,0.06); transition: transform 220ms, box-shadow 220ms; }
      `}</style>
    </section>
  );
}
