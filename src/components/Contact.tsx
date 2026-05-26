"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const initialForm = {
  name: "",
  company: "",
  email: "",
  scope: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

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
              <dd>projects@floorspace.co.in</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>+91 95273 14444</dd>
            </div>
            <div>
              <dt>Project cities</dt>
              <dd>Pune, Mumbai, Bengaluru, Chennai, Hyderabad, Delhi, and major Indian metros.</dd>
            </div>
          </dl>
        </div>

        {sent ? (
          <div className="form-success" role="status">
            <CheckCircle2 aria-hidden size={34} strokeWidth={1.7} />
            <h3>Brief received.</h3>
            <p>
              Thanks. The next step is to review scope, site constraints, and timelines before
              recommending a delivery path.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Your name"
                  required
                  type="text"
                  value={form.name}
                />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  onChange={(event) => updateField("company", event.target.value)}
                  placeholder="Company name"
                  required
                  type="text"
                  value={form.company}
                />
              </div>
              <div className="field field-full">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="name@company.com"
                  required
                  type="email"
                  value={form.email}
                />
              </div>
              <div className="field field-full">
                <label htmlFor="scope">Project scope</label>
                <select
                  id="scope"
                  onChange={(event) => updateField("scope", event.target.value)}
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
                <label htmlFor="message">Brief</label>
                <textarea
                  id="message"
                  onChange={(event) => updateField("message", event.target.value)}
                  placeholder="Approximate area, city, target handover, and any constraints..."
                  value={form.message}
                />
              </div>
            </div>
            <button className="fs-button fs-button-primary form-submit" type="submit">
              Send brief
              <ArrowRight aria-hidden size={17} strokeWidth={1.8} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
