import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  PenTool,
  LayoutGrid,
  Layers,
  Zap,
  Wrench,
  Package,
  Volume2,
  Wifi,
  Shield,
  Building2,
  Factory,
  Landmark,
  Heart,
  GraduationCap,
  ShoppingBag,
  Hotel,
  Monitor,
  ArrowRight,
} from "lucide-react";
import ContemporaryNav from "@/components/ContemporaryNav";
import Footer from "@/components/Footer";
import ValueStrip from "@/components/ValueStrip";
import "../contemporary.css";
import "../page-hero.css";

export const metadata: Metadata = {
  title: "Services — Floor Space India",
  description:
    "End-to-end commercial interior solutions: design & build, space planning, MEP, acoustic design, smart infrastructure, and more.",
};

const serviceCards = [
  {
    Icon: PenTool,
    title: "Commercial Interior Design & Build",
    desc: "Concept-led design with engineering-backed execution from day one.",
  },
  {
    Icon: LayoutGrid,
    title: "Space Planning & Workplace Strategy",
    desc: "Layouts that maximize floor utilization and support the way your teams actually work.",
  },
  {
    Icon: Layers,
    title: "False Ceiling & Partitions",
    desc: "POP, gypsum, metallic, and modular grid ceilings paired with precision partition systems.",
  },
  {
    Icon: Zap,
    title: "Electrical & Lighting Design",
    desc: "Optimal lighting levels for every functional zone, fully installed and commissioned.",
  },
  {
    Icon: Wrench,
    title: "Civil & MEP Works",
    desc: "Mechanical, electrical, and plumbing coordination managed under one project team.",
  },
  {
    Icon: Package,
    title: "Modular Furniture & Custom Joinery",
    desc: "Workstations, cabins, conference tables, and storage built to specification.",
  },
  {
    Icon: Volume2,
    title: "Acoustic & Specialized Environments",
    desc: "Noise reduction, sound isolation, and acoustic studios achieving targeted NRC values.",
  },
  {
    Icon: Wifi,
    title: "Data, AV & Smart Infrastructure",
    desc: "Audio-visual systems, structured data networks, and smart building integration.",
  },
  {
    Icon: Shield,
    title: "Security & Surveillance",
    desc: "Access control, CCTV, and integrated security systems for every scale.",
  },
];

const sectors = [
  { Icon: Building2, label: "Corporate Offices" },
  { Icon: Factory, label: "Industrial & Manufacturing" },
  { Icon: Landmark, label: "Banking & Financial" },
  { Icon: Heart, label: "Healthcare & Labs" },
  { Icon: GraduationCap, label: "Educational Institutions" },
  { Icon: ShoppingBag, label: "Retail & Commercial" },
  { Icon: Hotel, label: "Hospitality & F&B" },
  { Icon: Monitor, label: "IT & Software Parks" },
];

const steps = [
  {
    num: "01",
    title: "Meet & Agree",
    desc: "We understand your space requirements, timelines, and budget before making a single recommendation.",
  },
  {
    num: "02",
    title: "Design & Concept",
    desc: "Our designers create functional layouts and visual concepts aligned with your brand identity.",
  },
  {
    num: "03",
    title: "Plan & Procure",
    desc: "Precise BOQs, schedules, and procurement aligned to site readiness.",
  },
  {
    num: "04",
    title: "Build & Deliver",
    desc: "Single-point accountability through construction, finishing, and handover.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <ContemporaryNav solid />
      <main>
        {/* ── Hero ── */}
        <section className="about-page-hero" aria-labelledby="services-hero-h">
          <div className="about-page-hero-media">
            <Image
              alt="Floor Space India — conference and boardroom execution"
              className="about-page-hero-image"
              fill
              fetchPriority="high"
              priority
              sizes="100vw"
              src="/images/octillion-conference.jpg"
            />
          </div>
          <div className="about-page-hero-overlay" aria-hidden />

          <div className="about-page-hero-content">
            <div className="section-inner">
              <p className="hero-kicker">Services</p>
              <h1 className="about-page-hero-title" id="services-hero-h">
                Complete Commercial Interior Solutions.
              </h1>
              <p className="about-page-hero-lede">
                From concept to handover — every discipline, one partner.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <Link className="fs-button fs-button-primary" href="/contact">
                  Start a Conversation
                  <ArrowRight aria-hidden size={16} strokeWidth={1.8} />
                </Link>
                <Link className="fs-button fs-button-secondary" href="/work">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>

          <div className="about-page-hero-rail">
            <div className="section-inner">
              <div className="hero-rail">
                <div className="hero-rail-item">
                  <span>9 Disciplines</span>
                  <p>Covered under one roof</p>
                </div>
                <div className="hero-rail-item">
                  <span>225+</span>
                  <p>Spaces delivered</p>
                </div>
                <div className="hero-rail-item">
                  <span>8 Sectors</span>
                  <p>Served across India</p>
                </div>
                <div className="hero-rail-item">
                  <span>100%</span>
                  <p>Turnkey accountability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="section services-section" id="services-list" aria-labelledby="services-list-h">
          <div className="section-inner">
            <div className="services-header">
              <p className="section-kicker">What We Do</p>
              <h2 className="section-title" id="services-list-h">
                Every discipline. One point of accountability.
              </h2>
              <p className="section-lede">
                We coordinate all trades and disciplines in-house so your project has no handoff
                gaps and no ambiguity.
              </p>
            </div>

            <ul
              className="services-bento"
              style={{ paddingLeft: 0, listStyle: "none", margin: "44px 0 0" }}
            >
              {serviceCards.map(({ Icon, title, desc }) => (
                <li className="service-cell" key={title}>
                  <Icon aria-hidden color="#c9ad86" size={22} strokeWidth={1.5} />
                  <span className="service-cell-label">{title}</span>
                  <span
                    style={{
                      color: "rgba(255,250,240,0.56)",
                      fontSize: "0.88rem",
                      lineHeight: 1.58,
                    }}
                  >
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Application Areas ── */}
        <section
          className="section capability-section"
          id="sectors"
          aria-labelledby="sectors-h"
        >
          <div className="section-inner">
            <p className="section-kicker">Application Areas</p>
            <h2
              className="section-title"
              id="sectors-h"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                marginBottom: 40,
              }}
            >
              Every sector, precisely served.
            </h2>

            <div
              style={{
                display: "grid",
                gap: 14,
                gridTemplateColumns: "repeat(4, 1fr)",
              }}
            >
              {sectors.map(({ Icon, label }) => (
                <div
                  className="sector-card"
                  key={label}
                  style={{ flexDirection: "column", alignItems: "flex-start", gap: 12, padding: "22px 20px" }}
                >
                  <span className="sector-card-icon" aria-hidden>
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <span className="sector-card-label">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @media (max-width: 1020px) {
              #sectors .section-inner > div:last-child {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 600px) {
              #sectors .section-inner > div:last-child {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </section>

        {/* ── Process ── */}
        <section className="section process-section" id="process" aria-labelledby="process-h">
          <div className="section-inner process-editorial">
            <div className="process-visual">
              <Image
                alt="Floor Space India — project planning and boardroom"
                className="process-photo"
                fill
                loading="lazy"
                sizes="(max-width: 1020px) 100vw, 50vw"
                src="/images/smbc-boardroom.jpg"
              />
            </div>
            <div className="process-copy">
              <p className="section-kicker">How We Work</p>
              <h2 className="section-title" id="process-h">
                A process built for clarity.
              </h2>
              <p className="section-lede" style={{ marginTop: 14 }}>
                Four structured phases, one accountable team, zero ambiguity between design and
                delivery.
              </p>
              <ol className="process-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {steps.map(({ num, title, desc }) => (
                  <li className="process-item" key={num}>
                    <span className="process-num">{num}</span>
                    <div>
                      <p className="process-title">{title}</p>
                      <p
                        style={{
                          color: "var(--color-ink-soft)",
                          fontSize: "0.91rem",
                          lineHeight: 1.58,
                          marginTop: 5,
                        }}
                      >
                        {desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section vision-section" id="services-cta" aria-labelledby="services-cta-h">
          <div className="section-inner" style={{ textAlign: "center" }}>
            <p className="section-kicker" style={{ color: "#c9ad86" }}>
              Ready to Begin
            </p>
            <h2
              className="vision-title"
              id="services-cta-h"
            >
              One call. Complete clarity.
            </h2>
            <p className="vision-body">
              Share your space, city, and timeline. We will handle everything else.
            </p>
            <Link className="fs-button fs-button-primary" href="/contact">
              Start a Conversation
              <ArrowRight aria-hidden size={17} strokeWidth={1.8} />
            </Link>
          </div>
        </section>
      </main>

      <ValueStrip />
      <Footer />
    </>
  );
}
