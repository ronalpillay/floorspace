"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home",         href: "/" },
  { label: "About Us",     href: "/about" },
  { label: "Projects",     href: "/projects" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blogs",        href: "/blogs" },
  { label: "Contact",      href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
        <Link className="brand-mark brand-mark-logo" href="/" aria-label="Floor-Space India home">
          <Image
            alt="Floor-Space India"
            className={`brand-logo-image ${scrolled ? "" : "brand-logo-white"}`}
            height={176}
            priority
            src="/images/fsipl-logo-new.png"
            width={650}
          />
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link className="nav-link" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="fs-button fs-button-primary nav-cta" href="/contact">
            +91 90119 99399
            <ArrowRight aria-hidden size={16} strokeWidth={1.8} />
          </Link>
        </nav>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={19} strokeWidth={1.8} /> : <Menu size={19} strokeWidth={1.8} />}
        </button>
      </div>

      <nav className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
            <ArrowRight aria-hidden size={18} strokeWidth={1.8} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
