import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    items: [
      { label: "Industrial Construction", href: "/industrial-construction" },
      { label: "Interior Fit Outs", href: "/interior-fitouts" },
      { label: "Design & Build", href: "/services" },
      { label: "Project Management", href: "/services" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="c-footer">
      <div className="c-footer-top">
        {/* Logo + tagline */}
        <div className="c-footer-brand">
          <div className="c-footer-logo-wrap">
            <Image
              alt="Floor-Space India"
              src="/images/fsipl-logo-new.png"
              width={320}
              height={90}
              style={{ height: "auto", width: "220px", filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p className="c-footer-tagline">
            Turnkey commercial interiors &amp; industrial construction for organisations that demand performance, precision, and accountability.
          </p>
          <div className="c-footer-social">
            <a href="https://www.instagram.com/floor_space_india?igsh=cHU2OXV2bDN5NG5n" target="_blank" rel="noopener noreferrer" className="c-footer-social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/floor-space-india-private-limited/" target="_blank" rel="noopener noreferrer" className="c-footer-social-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://youtube.com/@floor-spaceindiapvtltd?si=HxoFSfrXwDKgLILG" target="_blank" rel="noopener noreferrer" className="c-footer-social-btn" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
              YouTube
            </a>
            <a href="https://wa.me/919011999399" target="_blank" rel="noopener noreferrer" className="c-footer-social-btn" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Links — each group is a direct grid child */}
        {footerLinks.map((group) => (
          <div key={group.title} className="c-footer-group">
            <h3 className="c-footer-group-title">{group.title}</h3>
            <ul className="c-footer-group-list">
              {group.items.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="c-footer-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact quick */}
        <div className="c-footer-contact">
          <h3 className="c-footer-group-title">Contact</h3>
          <a href="tel:+919011999399" className="c-footer-contact-row">+91 90119 99399</a>
          <a href="mailto:rajesh@floor-space.co.in" className="c-footer-contact-row">rajesh@floor-space.co.in</a>
          <p className="c-footer-contact-row">Office 709, 7th Floor, Verdant 84, Koregaon Park Annexe, Pune – 411036</p>
          <Link href="/contact" className="c-footer-cta">Start a Project →</Link>
        </div>
      </div>

      <div className="c-footer-bottom">
        <span>© {new Date().getFullYear()} Floor-Space India Pvt Ltd. All rights reserved.</span>
        <span className="c-footer-cities">Pune · Mumbai · Bengaluru · Hyderabad · Goa · Gujarat · Noida</span>
      </div>
      <div className="c-footer-madeby">
        Made by{" "}
        <a href="https://planetu.co.in" target="_blank" rel="noopener noreferrer" className="c-footer-madeby-link">
          PlanetU
        </a>
      </div>
    </footer>
  );
}
