import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Download, ArrowRight, PenTool, HardHat, Sofa, Zap,
  Award, CheckCircle2, ShieldCheck, Clock, TrendingUp,
  Factory, Building2, Monitor, Warehouse, GraduationCap, Hotel, Landmark, HeartPulse,
} from "lucide-react";
import ContemporaryNav from "@/components/ContemporaryNav";
import AnimatedStats from "@/components/AnimatedStats";
import Footer from "@/components/Footer";
import "../contemporary.css";

export const metadata: Metadata = {
  title: "Catalogue — Floor-Space India",
  description: "Download the Floor-Space India company catalogue — premium turnkey interior solutions for commercial office and industrial spaces.",
};

const CATALOGUE_PDF = "/catalogue/floor-space-india-turnkey-profile.pdf";

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "17+", label: "Years of Excellence" },
  { value: "150+", label: "Trusted Clients" },
  { value: "4", label: "Regional Offices" },
];

const expertise = [
  { Icon: Factory, label: "Manufacturing & Industrial Facilities", pct: "50%" },
  { Icon: Building2, label: "Corporate Offices & Global Capability Centers", pct: "20%" },
  { Icon: Monitor, label: "IT Parks & Business Campuses", pct: "10%" },
  { Icon: Warehouse, label: "Warehouse, R&D & Admin Blocks", pct: "10%" },
  { Icon: GraduationCap, label: "Educational Institutes", pct: "3%" },
  { Icon: Hotel, label: "Hostel & Hospitality", pct: "3%" },
  { Icon: Landmark, label: "Banking", pct: "2%" },
  { Icon: HeartPulse, label: "Healthcare", pct: "2%" },
];

const scope = [
  { Icon: PenTool, title: "Design & Layout Planning", desc: "Space strategy and concept design aligned with how your teams actually work." },
  { Icon: HardHat, title: "Civil & Interior Works", desc: "Structural, flooring, ceiling, and partition works executed in-house." },
  { Icon: Sofa, title: "Furniture & Fit-outs", desc: "Workstations, cabins, and custom joinery built to specification." },
  { Icon: Zap, title: "MEPF Works", desc: "Mechanical, electrical, plumbing, and fire-fighting under one roof." },
];

const advantage = [
  { Icon: Award, title: "QMS Certified", desc: "ISO 9001:2015 certified quality management across every project." },
  { Icon: CheckCircle2, title: "Single Point Accountability", desc: "One partner, one team, from design through handover." },
  { Icon: ShieldCheck, title: "Safety & Statutory Compliance", desc: "Documented processes that meet statutory and safety standards." },
  { Icon: Clock, title: "Minimal Disruption", desc: "Execution planned around your operations, not against them." },
  { Icon: TrendingUp, title: "Time & Cost Certainty", desc: "Fixed BOQs and schedules held to, project after project." },
];

const methodology = [
  { num: "01", title: "Requirement Analysis & Site Study", desc: "Understanding your brief, constraints, and site conditions." },
  { num: "02", title: "Design, Engineering & Approvals", desc: "Detailed drawings, engineering, and statutory sign-off." },
  { num: "03", title: "BOQ Preparation & Costing", desc: "Transparent, itemized costing before a single trade mobilizes." },
  { num: "04", title: "Turnkey Execution & Supervision", desc: "Coordinated execution across all trades under one project team." },
  { num: "05", title: "Testing, Commissioning & Handover", desc: "Full systems testing and sign-off before final handover." },
];

export default function CataloguePage() {
  return (
    <div className="c-page">
      <ContemporaryNav solid />

      {/* ── Hero ── */}
      <section className="c-page-hero" aria-labelledby="cat-h">
        <Image
          src="/images/octillion-boardroom-main.jpg"
          alt="Floor-Space India — turnkey interior execution"
          fill
          fetchPriority="high"
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="c-page-hero-overlay" aria-hidden />
        <div className="c-page-hero-body">
          <p className="c-page-hero-kicker">Company Catalogue</p>
          <h1 className="c-page-hero-title" id="cat-h">
            Premium Turnkey<br />Interior Solutions.
          </h1>
          <p className="c-page-hero-sub">
            Commercial office &amp; industrial spaces — end-to-end execution with
            single point accountability. Explore our full company profile.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <a href={CATALOGUE_PDF} download className="c-btn-light">
              Download Catalogue (PDF) <Download size={15} aria-hidden />
            </a>
            <Link href="/contact" className="c-btn-ghost-light">Start a Project</Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <AnimatedStats stats={stats} />

      {/* ── Download card ── */}
      <section className="c-section" id="download" aria-labelledby="dl-h">
        <div className="c-section-inner">
          <div className="c-two-col">
            <div data-reveal="left">
              <div
                style={{
                  position: "relative",
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
                  border: "1px solid var(--c-border)",
                }}
              >
                <a href={CATALOGUE_PDF} download aria-label="Download the Floor-Space India catalogue PDF">
                  <Image
                    src="/images/catalogue-cover.jpg"
                    alt="Floor-Space India — Premium Turnkey Profile cover"
                    width={1400}
                    height={788}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </a>
              </div>
            </div>
            <div data-reveal="right">
              <p className="c-section-kicker">Our Company Profile</p>
              <h2 className="c-section-title" id="dl-h">
                Everything about how we build.
              </h2>
              <p style={{ color: "var(--c-ink-2)", fontSize: "0.96rem", lineHeight: 1.75, marginTop: 20 }}>
                Our full catalogue covers our core expertise, turnkey scope of
                services, execution methodology, project team, and a gallery of
                completed work for clients including Marquardt, John Deere,
                Yamazaki Mazak, and SMBC Bank.
              </p>
              <div style={{ marginTop: 32 }}>
                <a href={CATALOGUE_PDF} download className="c-btn-dark">
                  Download Full Catalogue <Download size={15} aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Expertise ── */}
      <section className="c-section" style={{ background: "var(--c-white)" }} id="expertise" aria-labelledby="exp-h">
        <div className="c-section-inner">
          <p className="c-section-kicker" data-reveal>Core Expertise</p>
          <h2 className="c-section-title" id="exp-h" data-reveal>
            Where our projects come from.
          </h2>
          <div className="c-feature-grid" data-stagger>
            {expertise.map(({ Icon, label, pct }) => (
              <div className="c-feature-card" key={label}>
                <div className="c-feature-icon"><Icon size={20} strokeWidth={1.6} /></div>
                <p className="c-feature-title">{pct} — {label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scope of Services ── */}
      <section className="c-section" id="scope" aria-labelledby="scope-h">
        <div className="c-section-inner">
          <p className="c-section-kicker" data-reveal>Turnkey Scope of Services</p>
          <h2 className="c-section-title" id="scope-h" data-reveal>
            One team, every discipline.
          </h2>
          <div className="c-feature-grid" data-stagger>
            {scope.map(({ Icon, title, desc }) => (
              <div className="c-feature-card" key={title}>
                <div className="c-feature-icon"><Icon size={20} strokeWidth={1.6} /></div>
                <p className="c-feature-title">{title}</p>
                <p className="c-feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Turnkey Advantage ── */}
      <section className="c-section" style={{ background: "var(--c-white)" }} id="advantage" aria-labelledby="adv-h">
        <div className="c-section-inner">
          <p className="c-section-kicker" data-reveal>The Turnkey Advantage</p>
          <h2 className="c-section-title" id="adv-h" data-reveal>
            Why clients choose Floor-Space.
          </h2>
          <div className="c-feature-grid" data-stagger>
            {advantage.map(({ Icon, title, desc }) => (
              <div className="c-feature-card" key={title}>
                <div className="c-feature-icon"><Icon size={20} strokeWidth={1.6} /></div>
                <p className="c-feature-title">{title}</p>
                <p className="c-feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Execution Methodology ── */}
      <section className="c-section" id="methodology" aria-labelledby="method-h">
        <div className="c-section-inner">
          <div className="c-process-grid">
            <div className="c-process-image" data-reveal="left">
              <Image
                src="/images/tristone-corridor.jpg"
                alt="Floor-Space India — execution supervision"
                fill
                sizes="50vw"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div data-reveal="right">
              <p className="c-section-kicker">Execution Methodology</p>
              <h2 className="c-section-title" id="method-h">
                Five phases. Zero ambiguity.
              </h2>
              <ol className="c-process-steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {methodology.map(({ num, title, desc }) => (
                  <li className="c-process-step" key={num}>
                    <span className="c-process-num">{num}</span>
                    <div>
                      <p className="c-process-step-title">{title}</p>
                      <p className="c-process-step-desc">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="c-section">
        <div className="c-section-inner">
          <div className="c-cta-band" data-reveal>
            <p className="c-section-kicker" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>
              Ready to Support Your Next Project
            </p>
            <p className="c-cta-band-title">
              Get the full picture,<br />in one document.
            </p>
            <p className="c-cta-band-sub">
              Our complete company profile — expertise, process, and project gallery.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap", justifyContent: "center" }}>
              <a href={CATALOGUE_PDF} download className="c-btn-light">
                Download Catalogue (PDF) <Download size={15} aria-hidden />
              </a>
              <Link href="/contact" className="c-btn-ghost-light">
                Start a Project <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
