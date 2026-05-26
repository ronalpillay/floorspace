import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2, Factory, Landmark, Heart, GraduationCap, ShoppingBag,
  CheckCircle2, Clock, Award, TrendingUp, Expand, ArrowRight,
} from "lucide-react";
import ContemporaryNav from "@/components/ContemporaryNav";
import AnimatedStats from "@/components/AnimatedStats";
import Footer from "@/components/Footer";
import "../contemporary.css";

export const metadata: Metadata = {
  title: "About Us — Floor-Space India",
  description: "Floor-Space India is a full-service commercial interior contractor with 15+ years delivering intelligent, functional spaces across corporate, industrial, and institutional sectors.",
};

const stats = [
  { value: "470+", label: "Projects Delivered" },
  { value: "15+",  label: "Years of Excellence" },
  { value: "20+",  label: "Cities Across India" },
  { value: "100%", label: "Turnkey Accountability" },
];

const sectors = [
  { Icon: Building2,     label: "Corporate Offices & Workspaces" },
  { Icon: Factory,       label: "Industrial & Manufacturing" },
  { Icon: Landmark,      label: "Banking & Financial Institutions" },
  { Icon: Heart,         label: "Healthcare & Laboratories" },
  { Icon: GraduationCap, label: "Educational Institutions" },
  { Icon: ShoppingBag,   label: "Retail & Commercial" },
];

const steps = [
  { num: "01", title: "Consult",  desc: "Understand your business, workflows, and objectives to frame the right brief." },
  { num: "02", title: "Design",   desc: "Create innovative, functional concepts aligned with your brand identity." },
  { num: "03", title: "Plan",     desc: "Develop precise layouts, timelines, and budgets for full project transparency." },
  { num: "04", title: "Execute",  desc: "Deliver with rigorous quality control, coordination, and site efficiency." },
  { num: "05", title: "Deliver",  desc: "Ensure on-time, on-budget handover with complete accountability." },
];

const whyUs = [
  { Icon: Building2,    title: "Commercial Expertise Only",  desc: "Focused exclusively on business environments, not residential projects." },
  { Icon: CheckCircle2, title: "End-to-End Execution",       desc: "One partner for complete project delivery, from brief to handover." },
  { Icon: Award,        title: "Proven Track Record",        desc: "Trusted by leading corporates and institutions across India." },
  { Icon: TrendingUp,   title: "Precision & Quality",        desc: "Strong emphasis on engineering precision and quality detailing." },
  { Icon: Clock,        title: "On-Time Delivery",           desc: "Strict adherence to timelines and budgets, always." },
  { Icon: Expand,       title: "Scalable Solutions",         desc: "From single offices to large-scale multi-site infrastructure." },
];

export default function AboutPage() {
  return (
    <div className="c-page">
      <ContemporaryNav solid />

      {/* ── Hero ── */}
      <section className="c-page-hero" aria-labelledby="about-h">
        <Image
          src="/images/smbc-lobby.jpg"
          alt="Floor-Space India — interior execution"
          fill
          fetchPriority="high"
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="c-page-hero-overlay" aria-hidden />
        <div className="c-page-hero-body">
          <p className="c-page-hero-kicker">Floor-Space India</p>
          <h1 className="c-page-hero-title" id="about-h">
            Designing Workspaces.<br />Delivering Performance.
          </h1>
          <p className="c-page-hero-sub">
            At Floor-Space, we are more than interior contractors — we are strategic partners
            in transforming commercial environments into high-performing, future-ready spaces.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <AnimatedStats stats={stats} />

      {/* ── Who We Are ── */}
      <section className="c-section" id="who-we-are" aria-labelledby="who-h">
        <div className="c-section-inner">
          <div className="c-two-col">
            <div data-reveal="left">
              <p className="c-section-kicker">Who We Are</p>
              <h2 className="c-section-title" id="who-h">
                A full-service commercial interior company.
              </h2>
              <p style={{ color: "var(--c-ink-2)", fontSize: "0.96rem", lineHeight: 1.75, marginTop: 20 }}>
                Floor-Space is focused on designing and executing interior fit-outs for corporate,
                industrial, and institutional clients. Our strength lies in our people — a
                collaborative team of designers, engineers, and project managers who combine
                creativity with technical expertise to deliver exceptional results.
              </p>
              <p style={{ color: "var(--c-ink-2)", fontSize: "0.96rem", lineHeight: 1.75, marginTop: 14 }}>
                From concept to completion, we bring together design thinking, engineering
                precision, and execution excellence — ensuring every project is delivered
                seamlessly, on time, and with complete accountability.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <Link href="/contact" className="c-btn-dark">
                  Start a Conversation <ArrowRight size={15} aria-hidden />
                </Link>
                <Link href="/projects" className="c-btn-outline">View Our Work</Link>
              </div>
            </div>
            <div className="c-two-col-image-pair" data-reveal="right">
              <div>
                <Image src="/images/smbc-reception.jpg" alt="Reception area" fill sizes="50vw" style={{ objectFit: "cover" }} loading="eager" />
              </div>
              <div>
                <Image src="/images/octillion-collab.jpg" alt="Collaborative workspace" fill sizes="25vw" style={{ objectFit: "cover" }} loading="eager" />
              </div>
              <div>
                <Image src="/images/octillion-reception-main.jpg" alt="Office reception" fill sizes="25vw" style={{ objectFit: "cover" }} loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sectors ── */}
      <section className="c-section" style={{ background: "var(--c-white)" }} id="sectors" aria-labelledby="sectors-h">
        <div className="c-section-inner">
          <p className="c-section-kicker" data-reveal>Sectors We Serve</p>
          <h2 className="c-section-title" id="sectors-h" data-reveal>
            Built for the demands of every industry.
          </h2>
          <div className="c-feature-grid" data-stagger>
            {sectors.map(({ Icon, label }) => (
              <div className="c-feature-card" key={label}>
                <div className="c-feature-icon"><Icon size={20} strokeWidth={1.6} /></div>
                <p className="c-feature-title">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="c-section" id="process" aria-labelledby="process-h">
        <div className="c-section-inner">
          <div className="c-process-grid">
            <div className="c-process-image" data-reveal="left">
              <Image src="/images/smbc-boardroom.jpg" alt="Floor-Space project planning" fill sizes="50vw" style={{ objectFit: "cover" }} loading="lazy" />
            </div>
            <div data-reveal="right">
              <p className="c-section-kicker">Our Approach</p>
              <h2 className="c-section-title" id="process-h">
                Structured, transparent,<br />and result-driven.
              </h2>
              <p style={{ color: "var(--c-ink-2)", fontSize: "0.94rem", lineHeight: 1.7, marginTop: 16, marginBottom: 36 }}>
                Our integrated model ensures seamless coordination, reduced risks, and superior
                outcomes at every stage of your project.
              </p>
              <ol className="c-process-steps" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {steps.map(({ num, title, desc }) => (
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

      {/* ── Why Us ── */}
      <section className="c-section" style={{ background: "var(--c-white)" }} id="why" aria-labelledby="why-h">
        <div className="c-section-inner">
          <p className="c-section-kicker" data-reveal>Why Floor-Space</p>
          <h2 className="c-section-title" id="why-h" data-reveal>
            The partner your project deserves.
          </h2>
          <div className="c-feature-grid" data-stagger>
            {whyUs.map(({ Icon, title, desc }) => (
              <div className="c-feature-card" key={title}>
                <div className="c-feature-icon"><Icon size={20} strokeWidth={1.6} /></div>
                <p className="c-feature-title">{title}</p>
                <p className="c-feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="c-section">
        <div className="c-section-inner">
          <div className="c-cta-band" data-reveal>
            <p className="c-section-kicker" style={{ color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Our Vision</p>
            <p className="c-cta-band-title">
              To be a leading force in transforming<br />commercial spaces across India.
            </p>
            <p className="c-cta-band-sub">One Partner. Complete Commercial Solutions.</p>
            <Link href="/contact" className="c-btn-light">
              Start Your Project <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
