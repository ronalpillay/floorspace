"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const W3F_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const initialForm = {
  name: "",
  company: "",
  email: "",
  scope: "",
  message: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const data = new FormData(event.currentTarget);
    data.append("access_key", W3F_KEY);
    data.append("subject", "New project enquiry — Floor-Space India");
    data.append("from_name", "Floor-Space India Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="section contact-section" id="contact">
        <div className="section-inner">
          <div className="form-success" role="status">
            <CheckCircle2 aria-hidden size={34} strokeWidth={1.7} />
            <h3>Brief received.</h3>
            <p>Thanks. We'll review your scope and come back within one business day.</p>
            <button
              className="fs-button fs-button-primary"
              onClick={() => setStatus("idle")}
              style={{ marginTop: "1rem" }}
            >
              Send another brief
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-inner contact-grid">
        <div>
          <p className="section-kicker">Start a project</p>
          <h2 className="contact-title">Let&apos;s build with clarity.</h2>
          <p className="contact-copy">
            Share the site, scope, city, and timeline. We will take it from there.
          </p>

          <dl className="contact-details">
            <div>
              <dt>Head office</dt>
              <dd>Pune, Maharashtra</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>rajesh@floor-space.co.in</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>+91 90119 99399</dd>
            </div>
            <div>
              <dt>Project cities</dt>
              <dd>Pune, Mumbai, Bengaluru, Chennai, Hyderabad, Delhi, and major Indian metros.</dd>
            </div>
          </dl>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Honeypot — bots fill this, humans don't */}
          <input type="checkbox" name="botcheck" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <div className="form-grid">
            <div className="field">
              <label htmlFor="ct-name">Name</label>
              <input
                id="ct-name"
                name="name"
                onChange={(e) => updateField("name", e.target.value)}
                placeholder="Your name"
                required
                type="text"
                value={form.name}
              />
            </div>
            <div className="field">
              <label htmlFor="ct-company">Company</label>
              <input
                id="ct-company"
                name="company"
                onChange={(e) => updateField("company", e.target.value)}
                placeholder="Company name"
                required
                type="text"
                value={form.company}
              />
            </div>
            <div className="field field-full">
              <label htmlFor="ct-email">Email</label>
              <input
                id="ct-email"
                name="email"
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="name@company.com"
                required
                type="email"
                value={form.email}
              />
            </div>
            <div className="field field-full">
              <label htmlFor="ct-scope">Project scope</label>
              <select
                id="ct-scope"
                name="scope"
                onChange={(e) => updateField("scope", e.target.value)}
                required
                value={form.scope}
              >
                <option value="">Select one</option>
                <option value="corporate-office">Corporate office</option>
                <option value="industrial">Industrial or manufacturing facility</option>
                <option value="healthcare">Healthcare or wellness space</option>
                <option value="renovation">Renovation or phased fit-out</option>
                <option value="other">Other commercial interior</option>
              </select>
            </div>
            <div className="field field-full">
              <label htmlFor="ct-message">Brief</label>
              <textarea
                id="ct-message"
                name="message"
                onChange={(e) => updateField("message", e.target.value)}
                placeholder="Approximate area, city, target handover, and any constraints..."
                value={form.message}
              />
            </div>
          </div>

          {status === "error" && (
            <p style={{ color: "#e53e3e", fontSize: "0.85rem", marginTop: "0.5rem" }}>
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            className="fs-button fs-button-primary form-submit"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending…" : "Send brief"}
            {status !== "submitting" && <ArrowRight aria-hidden size={17} strokeWidth={1.8} />}
          </button>
        </form>
      </div>
    </section>
  );
}
