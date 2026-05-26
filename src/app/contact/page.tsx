"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import ContemporaryNav from "@/components/ContemporaryNav";
import Footer from "@/components/Footer";
import "../contemporary.css";

const W3F_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

type FormStatus = "idle" | "submitting" | "success" | "error";

const offices = [
  {
    name: "Head Office — Pune",
    address: "302, Sidhdhivinayak Aurum,\nNext to Hotel Hyatt, Viman Nagar,\nPune – 411014",
    phone: "+91-9011999399",
    email: "rajesh@floor-space.co.in",
  },
  {
    name: "Corporate Office — Pune",
    address: "709, 7th Floor, Verdant 84,\nKoregaon Park Annexe,\nPune – 411036",
    phone: "+91-9011999399",
    email: "rajesh@floor-space.co.in",
  },
];

const branches = ["Mumbai", "Goa", "Ahmedabad", "Gurgaon", "Delhi", "Bengaluru", "Hyderabad"];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");
    const data = new FormData(e.currentTarget);
    data.append("access_key", W3F_KEY);
    data.append("subject", "New enquiry from Floor-Space India website");
    data.append("from_name", "Floor-Space India Website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) { setFormStatus("success"); formRef.current?.reset(); }
      else { setFormStatus("error"); }
    } catch { setFormStatus("error"); }
  }

  return (
    <div className="c-page">
      <ContemporaryNav solid />

      {/* ── Hero ── */}
      <section className="c-page-hero-teal" aria-labelledby="contact-h">
        <div className="c-page-hero-body">
          <p className="c-page-hero-kicker">Get In Touch</p>
          <h1 className="c-page-hero-title" id="contact-h">
            Let&apos;s build something<br />remarkable.
          </h1>
          <p className="c-page-hero-sub">
            Share your site, scope, city, and timeline. Our team will review and
            come back with a clear path forward.
          </p>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="c-section" aria-labelledby="form-h">
        <div className="c-section-inner">
          <div className="c-contact-standalone">

            {/* Info */}
            <div data-reveal="left" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {/* Image */}
              <div style={{ position: "relative", height: 280, borderRadius: 16, overflow: "hidden" }}>
                <Image
                  src="/images/hero-int-1.jpg"
                  alt="Floor-Space India project"
                  fill
                  sizes="(max-width:768px) 100vw, 40vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <p className="c-section-kicker">Reach Us</p>
                <h2 className="c-section-title" id="form-h">
                  We&apos;d love to hear<br />from you.
                </h2>
                <p style={{ color: "var(--c-ink-2)", fontSize: "0.96rem", lineHeight: 1.75, marginTop: 16, marginBottom: 32 }}>
                  Whether you&apos;re planning a new office, expanding a facility, or simply
                  curious about what&apos;s possible — our team is ready to listen.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <a href="tel:+919011999399" style={{ alignItems: "center", color: "var(--c-ink-2)", display: "flex", gap: 14, fontSize: "0.94rem", textDecoration: "none" }}>
                    <span className="c-feature-icon" style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 10 }}>
                      <Phone size={16} strokeWidth={1.6} />
                    </span>
                    +91 90119 99399
                  </a>
                  <a href="mailto:rajesh@floor-space.co.in" style={{ alignItems: "center", color: "var(--c-ink-2)", display: "flex", gap: 14, fontSize: "0.94rem", textDecoration: "none" }}>
                    <span className="c-feature-icon" style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 10 }}>
                      <Mail size={16} strokeWidth={1.6} />
                    </span>
                    rajesh@floor-space.co.in
                  </a>
                  <div style={{ alignItems: "center", color: "var(--c-ink-2)", display: "flex", gap: 14, fontSize: "0.94rem" }}>
                    <span className="c-feature-icon" style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 10 }}>
                      <MapPin size={16} strokeWidth={1.6} />
                    </span>
                    Viman Nagar, Pune – 411014
                  </div>
                  <div style={{ alignItems: "center", color: "var(--c-ink-2)", display: "flex", gap: 14, fontSize: "0.94rem" }}>
                    <span className="c-feature-icon" style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 10 }}>
                      <Clock size={16} strokeWidth={1.6} />
                    </span>
                    Mon–Sat, 08:00–18:00
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div data-reveal="right">
              {formStatus === "success" ? (
                <div style={{ background: "var(--c-white)", border: "1px solid var(--c-border)", borderRadius: "var(--c-radius-card)", padding: "64px 40px", textAlign: "center" }}>
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="var(--c-accent)" strokeWidth="1.5" aria-hidden style={{ margin: "0 auto 20px" }}>
                    <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>
                  </svg>
                  <h3 style={{ color: "var(--c-ink)", fontFamily: "var(--font-playfair)", fontSize: "1.4rem", fontWeight: 500, marginBottom: 12 }}>Message sent!</h3>
                  <p style={{ color: "var(--c-ink-2)", fontSize: "0.94rem", lineHeight: 1.7, marginBottom: 28 }}>
                    Thank you! We&apos;ll be in touch within one business day.
                  </p>
                  <button className="c-btn-dark" onClick={() => setFormStatus("idle")}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} className="c-contact-form c-contact-form--light" onSubmit={handleSubmit}>
                  <input type="checkbox" name="botcheck" style={{ display: "none" }} />
                  <div className="c-form-row">
                    <div className="c-form-field">
                      <label className="c-form-label" htmlFor="ct-name">Full Name</label>
                      <input className="c-form-input" id="ct-name" name="name" type="text" placeholder="Your name" required />
                    </div>
                    <div className="c-form-field">
                      <label className="c-form-label" htmlFor="ct-company">Company</label>
                      <input className="c-form-input" id="ct-company" name="company" type="text" placeholder="Company name" />
                    </div>
                  </div>
                  <div className="c-form-row">
                    <div className="c-form-field">
                      <label className="c-form-label" htmlFor="ct-email">Email</label>
                      <input className="c-form-input" id="ct-email" name="email" type="email" placeholder="you@company.com" required />
                    </div>
                    <div className="c-form-field">
                      <label className="c-form-label" htmlFor="ct-phone">Phone</label>
                      <input className="c-form-input" id="ct-phone" name="phone" type="tel" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  <div className="c-form-field">
                    <label className="c-form-label" htmlFor="ct-city">City &amp; Project Type</label>
                    <input className="c-form-input" id="ct-city" name="city_project" type="text" placeholder="e.g. Pune — Corporate Office, 8000 sq ft" />
                  </div>
                  <div className="c-form-field">
                    <label className="c-form-label" htmlFor="ct-msg">Message</label>
                    <textarea className="c-form-input c-form-textarea" id="ct-msg" name="message" placeholder="Tell us about your project…" rows={4} />
                  </div>
                  {formStatus === "error" && (
                    <p className="c-form-error" role="alert">Something went wrong. Please try again or email us directly.</p>
                  )}
                  <button
                    type="submit"
                    className="c-btn-dark"
                    disabled={formStatus === "submitting"}
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    {formStatus === "submitting" ? "Sending…" : <><span>Send Message</span> <ArrowRight size={16} aria-hidden /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Offices ── */}
      <section className="c-section" style={{ background: "var(--c-white)", paddingTop: 0 }} aria-labelledby="offices-h">
        <div className="c-section-inner">
          <p className="c-section-kicker" data-reveal>Where We Are</p>
          <h2 className="c-section-title" id="offices-h" data-reveal>Offices across India.</h2>
          <div className="c-office-grid" data-stagger>
            {offices.map((office) => (
              <div key={office.name} className="c-office-card">
                <div className="c-office-icon"><MapPin size={18} strokeWidth={1.6} /></div>
                <h3 className="c-office-name">{office.name}</h3>
                <p className="c-office-address">{office.address}</p>
                <a href={`tel:${office.phone.replace(/[^+\d]/g, "")}`} className="c-office-row">
                  <Phone size={13} strokeWidth={1.6} color="var(--c-accent)" aria-hidden />
                  {office.phone}
                </a>
                <a href={`mailto:${office.email}`} className="c-office-row">
                  <Mail size={13} strokeWidth={1.6} color="var(--c-accent)" aria-hidden />
                  {office.email}
                </a>
              </div>
            ))}
            <div className="c-branches-card">
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", marginBottom: 12, textTransform: "uppercase" }}>
                Branch Network
              </p>
              <p style={{ color: "#fff", fontSize: "1rem", fontWeight: 650, marginBottom: 16 }}>Active across India</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {branches.map((city) => (
                  <span key={city} className="c-branch-tag">{city}</span>
                ))}
              </div>
              <div style={{ alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", display: "flex", fontSize: "0.82rem", gap: 8, marginTop: 20, paddingTop: 16 }}>
                <Clock size={13} strokeWidth={1.6} aria-hidden />
                Mon–Sat, 08:00–18:00
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
