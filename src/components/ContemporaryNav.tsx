"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

interface Props {
  /** Force solid (non-transparent) state — use on pages without a video hero */
  solid?: boolean;
}

const navItems = [
  { label: "Home",         href: "/" },
  { label: "About Us",     href: "/about" },
  { label: "Projects",     href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blogs",        href: "/blogs" },
  { label: "Contact",      href: "/contact" },
];

export default function ContemporaryNav({ solid = false }: Props) {
  const [scrolled, setScrolled] = useState(solid);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  return (
    <>
      <nav className={`c-nav ${scrolled ? "is-scrolled" : ""}`} aria-label="Primary navigation">
        <Link href="/" className="c-nav-logo" aria-label="Floor-Space India">
          <Image
            src="/images/fsipl-logo-new.png"
            alt="Floor-Space India"
            width={300}
            height={80}
            priority
            className={`c-nav-logo-img ${scrolled ? "is-scrolled" : ""}`}
            style={{ height: "100%", width: "auto", objectFit: "contain" }}
          />
        </Link>
        <ul className="c-nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link className="c-nav-link" href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/contact" className="c-nav-cta">Start a Project</Link>
          {!menuOpen && (
            <button
              className="c-nav-hamburger"
              aria-label="Open menu"
              aria-expanded={false}
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile drawer — full-screen takeover */}
      {menuOpen && (
        <div className="c-mobile-menu" role="dialog" aria-label="Mobile navigation">
          {/* Top bar inside overlay */}
          <div className="c-mobile-menu-topbar">
            <Link href="/" className="c-mobile-menu-brand" onClick={() => setMenuOpen(false)}>
              <Image
                src="/images/fsipl-logo-new.png"
                alt="Floor-Space India"
                width={160}
                height={44}
                style={{ height: 36, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </Link>
            <button
              className="c-mobile-menu-close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="c-mobile-menu-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="c-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Bottom info */}
          <div className="c-mobile-menu-footer">
            <div className="c-mobile-menu-address">
              <p>Koregaon Park Annexe, Pune – 411036</p>
              <p>Mumbai · Bengaluru · Delhi</p>
            </div>
            <a href="mailto:rajesh@floor-space.co.in" className="c-mobile-menu-email">
              EMAIL US
            </a>
          </div>

          {/* Bottom strip */}
          <div className="c-mobile-menu-strip">
            <span>© {new Date().getFullYear()} Floor-Space India Pvt Ltd</span>
            <a href="tel:+919011999399">+91 90119 99399</a>
          </div>
        </div>
      )}
    </>
  );
}
