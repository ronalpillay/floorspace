"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ── Hero slideshow — start with interior (nav always visible), ext-1 moved to last ──
const heroSlides = [
  { src: "/images/hero-int-1.jpg", alt: "Interior fit-out" },
  { src: "/images/hero-ext-4.jpg", alt: "Industrial construction" },
  { src: "/images/hero-int-2.jpg", alt: "Interior fit-out" },
  { src: "/images/hero-int-3.jpg", alt: "Interior fit-out" },
  { src: "/images/hero-ext-1.jpg", alt: "Industrial construction" },
];
import { ArrowRight, ArrowUpRight, MapPin, Phone, Mail, Clock, Building2, Monitor, Factory, HeartPulse, UtensilsCrossed, ShoppingBag, GraduationCap, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
import Tilt3D from "@/components/Tilt3D";
import Footer from "@/components/Footer";
import AnimatedStats from "@/components/AnimatedStats";
import ContemporaryNav from "@/components/ContemporaryNav";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturedStack from "@/components/FeaturedStack";
import "./contemporary.css";

// Web3Forms key — set NEXT_PUBLIC_WEB3FORMS_KEY in your .env.local
const W3F_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const stats = [
  { value: "225+", label: "Projects Delivered" },
  { value: "17+", label: "Years of Excellence" },
  { value: "20+", label: "Cities Across India" },
  { value: "100%", label: "Turnkey Accountability" },
];

// All client logos — now all converted to transparent PNG
const clientLogos = [
  // Row 1 from client list
  { slug: "amcor",                         name: "Amcor" },
  { slug: "amneal-pharmaceuticals",        name: "Amneal" },
  { slug: "autoliv",                       name: "Autoliv" },
  { slug: "bonfiglioli",                   name: "Bonfiglioli" },
  { slug: "bridgestone",                   name: "Bridgestone" },
  { slug: "jio",                           name: "Jio" },
  { slug: "smcc-construction-india-limited", name: "SMCC" },
  { slug: "itc-hotels",                    name: "ITC Hotels" },
  { slug: "sav-chemicals",                 name: "SAV Chemicals" },
  { slug: "onward-technologies-limited",   name: "Onward Technologies" },
  { slug: "the-executive-centre",          name: "The Executive Centre" },
  // Row 2
  { slug: "bosch",                         name: "Bosch" },
  { slug: "eaton",                         name: "Eaton" },
  { slug: "geberit",                       name: "Geberit" },
  { slug: "guhring",                       name: "Guhring" },
  { slug: "hindustan-unilever-limited",    name: "Hindustan Unilever" },
  { slug: "shimz",                         name: "Shimz" },
  { slug: "coditas",                       name: "Coditas" },
  { slug: "nibe",                          name: "NIBE" },
  { slug: "tii-india",                     name: "TII India" },
  { slug: "tristone",                      name: "Tristone" },
  { slug: "osg",                           name: "OSG" },
  // Row 3
  { slug: "smbc-bank",                     name: "SMBC Bank" },
  { slug: "new-holland-agriculture",       name: "New Holland" },
  { slug: "vanderlande",                   name: "Vanderlande" },
  { slug: "trumpf",                        name: "Trumpf" },
  { slug: "schmalz",                       name: "Schmalz" },
  { slug: "acs-industries",               name: "ACS Industries" },
  { slug: "magnetic-motion-technologies",  name: "Magnetic" },
  { slug: "ahk",                           name: "AHK" },
  { slug: "mps-archonic",                  name: "MPS Archonic" },
  { slug: "hirschvogel-automotive-group",  name: "Hirschvogel" },
  // Row 4
  { slug: "john-deere",                    name: "John Deere" },
  { slug: "unicharm",                      name: "Unicharm" },
  { slug: "sca",                           name: "SCA" },
  { slug: "new-balance",                   name: "New Balance" },
  { slug: "jabil",                         name: "Jabil" },
  { slug: "rossini",                       name: "Rossini" },
  { slug: "marquardt",                     name: "Marquardt" },
  { slug: "nea-group",                     name: "NEA Group" },
  { slug: "axletech-international",        name: "AxleTech" },
  { slug: "gsidc",                         name: "GSIDC" },
  { slug: "chromewell",                    name: "Chromewell" },
  // Row 5
  { slug: "yazaki",                        name: "Yazaki" },
  { slug: "mazak",                         name: "Mazak" },
  { slug: "mitsuba",                       name: "Mitsuba" },
  { slug: "sutherland",                    name: "Sutherland" },
  { slug: "rehau",                         name: "Rehau" },
  { slug: "bmc",                           name: "BMC Software" },
  { slug: "zycus",                         name: "Zycus" },
  { slug: "iucaa",                         name: "IUCAA" },
  { slug: "vector",                        name: "Vector" },
  { slug: "iclean",                        name: "iClean" },
  { slug: "oerlikon",                      name: "Oerlikon" },
  // Row 6
  { slug: "l-t-infotech",                  name: "L&T Infotech" },
  { slug: "vodafone",                      name: "Vodafone" },
  { slug: "idea",                          name: "Idea" },
  { slug: "ross",                          name: "Ross" },
  { slug: "oetiker",                       name: "Oetiker" },
  { slug: "schmersal",                     name: "Schmersal" },
  { slug: "lupin",                         name: "Lupin" },
  { slug: "schwabe-group",                 name: "Schwabe Group" },
  { slug: "dana",                          name: "Dana" },
  { slug: "jll",                           name: "JLL" },
  { slug: "gestamp",                       name: "Gestamp" },
  // Row 7
  { slug: "reliance-footprint",            name: "Reliance Footprint" },
  { slug: "zf",                            name: "ZF" },
  { slug: "hyundai-construction-equipment", name: "Hyundai CE" },
  { slug: "mahindra",                      name: "Mahindra" },
  { slug: "kajima",                        name: "Kajima" },
  { slug: "octillion",                     name: "Octillion" },
  { slug: "wika",                          name: "WIKA" },
  { slug: "canam-unisearch",               name: "Canam Unisearch" },
  { slug: "hsbc",                          name: "HSBC" },
  { slug: "fristam",                       name: "Fristam" },
  { slug: "pyrotek",                       name: "Pyrotek" },
  // Additional
  { slug: "bajaj-allianz",                 name: "Bajaj Allianz" },
  { slug: "das",                           name: "DAS" },
  { slug: "denyo",                         name: "Denyo" },
  { slug: "essar",                         name: "Essar" },
  { slug: "kama-corporation",              name: "KAMA Corporation" },
  { slug: "lintec",                        name: "Lintec" },
  { slug: "mahindra-2-wheelers",           name: "Mahindra 2 Wheelers" },
  { slug: "mgm-new-bombay-hospital",       name: "MGM Hospital" },
  { slug: "neumann",                       name: "Neumann" },
  { slug: "new-holland-construction",      name: "New Holland CE" },
  { slug: "new-holland-fiat",              name: "New Holland Fiat" },
  { slug: "piab",                          name: "PIAB" },
  { slug: "plethico",                       name: "Plethico" },
  { slug: "serum-institute-of-india-ltd",  name: "Serum Institute" },
  { slug: "tti-india",                     name: "TTI India" },
  { slug: "voxeljet-technology",           name: "Voxeljet" },
];

const sectors: { label: string; sub: string; Icon: LucideIcon }[] = [
  { label: "Corporate Offices",          sub: "", Icon: Building2 },
  { label: "IT & ITES Spaces",           sub: "", Icon: Monitor },
  { label: "Retail Spaces",             sub: "", Icon: ShoppingBag },
  { label: "Hospitality",               sub: "", Icon: UtensilsCrossed },
  { label: "Industrial & Manufacturing", sub: "", Icon: Factory },
  { label: "Healthcare & Wellness",      sub: "", Icon: HeartPulse },
  { label: "Educational Institutions",   sub: "", Icon: GraduationCap },
  { label: "Residential Interiors",      sub: "", Icon: Home },
];

const testimonials = [
  {
    quote: "Floor-Space was the best option we could have found for our office renovation. The space is beautiful yet elegant and above all very functional. Highly recommend them.",
    name: "Vijay Joshi", initials: "VJ", company: "Client, Pune", rating: 5,
  },
  {
    quote: "Strongly recommend Floor-Space for office interior design. Very professional team with an eye for detail. They delivered exactly what was envisioned — on time and within budget.",
    name: "Parimal B", initials: "PB", company: "Client, Mumbai", rating: 5,
  },
  {
    quote: "Very conceptual and creative approach. The team understood our requirements perfectly and transformed our vision into a stunning workspace our employees love.",
    name: "Swapnil Jadhav", initials: "SJ", company: "Client, Pune", rating: 5,
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

// ── Hero Slideshow Component ──
function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);
  // Track which slides have been shown — only render Image for those (saves network requests)
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(new Set([0, 1]));

  useEffect(() => {
    const t = setInterval(() => {
      const next = (current + 1) % heroSlides.length;
      setPrev(current);
      setAnimating(true);
      setCurrent(next);
      // Pre-load the slide AFTER next so there's no pop-in
      setLoadedSlides((prev) => new Set([...prev, next, (next + 1) % heroSlides.length]));
      setTimeout(() => { setPrev(null); setAnimating(false); }, 1000);
    }, 4500);
    return () => clearInterval(t);
  }, [current]);

  return (
    <section className="c-hero" aria-labelledby="hero-h">
      {/* Slides — only render Image element for loaded slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className={`c-hero-slide ${i === current ? "is-active" : ""} ${i === prev && animating ? "is-leaving" : ""}`}
          aria-hidden={i !== current}
        >
          {loadedSlides.has(i) && (
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "low"}
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      ))}
      <div className="c-hero-overlay" aria-hidden />
      <div className="c-hero-body">
        <p className="c-hero-eyebrow c-anim-eyebrow">Pune · Mumbai · Bangalore · Hyderabad · Goa · Gujarat · Noida</p>
        <h1 className="c-hero-title" id="hero-h" aria-label="General Contracting Company">
          <span className="c-hero-word" style={{ "--wi": 0 } as React.CSSProperties}>General</span>{" "}
          <span className="c-hero-word" style={{ "--wi": 1 } as React.CSSProperties}>Contracting</span>
          <br />
          <span className="c-hero-word" style={{ "--wi": 2 } as React.CSSProperties}>Company</span>
        </h1>
        <p className="c-hero-sub c-anim-sub">17+ years. 225+ projects. Your complete partner for Industrial Construction and Interior Turnkey Solutions.</p>
        <div className="c-hero-actions c-anim-actions">
          <Link href="/projects" className="c-btn-hero-primary">
            View Our Work <ArrowRight size={16} aria-hidden />
          </Link>
          <Link href="/contact" className="c-btn-hero-ghost">Get a Quote</Link>
        </div>
      </div>
      {/* Slide indicators */}
      <div className="c-hero-dots" aria-hidden>
        {heroSlides.map((_, i) => (
          <span key={i} className={`c-hero-dot ${i === current ? "is-active" : ""}`} />
        ))}
      </div>
    </section>
  );
}

// ── Client Names Marquee — two rows, opposite directions ──

export default function HomePage() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const aboutParallax = useParallax(0.1);
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const E = "expo.out";   // premium exit easing
    const P = "power3.out"; // standard entrance easing

    // ── Hero: text body slow parallax ──
    gsap.to(".c-hero-body", {
      y: -80, ease: "none",
      scrollTrigger: { trigger: ".c-hero", start: "top top", end: "bottom top", scrub: 1.5 },
    });

    // ── Stats dividers: draw from top ──
    gsap.from(".c-stats-divider", {
      scaleY: 0, transformOrigin: "top", stagger: 0.08, duration: 0.7, ease: P,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-stats-strip", start: "top 82%", once: true },
    });

    // ── Stats items: slide up with stagger ──
    gsap.from(".c-stats-item", {
      y: 30, opacity: 0, stagger: 0.1, duration: 0.8, ease: P,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-stats-strip", start: "top 82%", once: true },
    });

    // ── Client section: count elastic pop ──
    gsap.from(".c-clients-count", {
      scale: 0.75, opacity: 0, duration: 1.0, ease: "elastic.out(1, 0.65)",
      immediateRender: false,
      scrollTrigger: { trigger: ".c-clients-hero-header", start: "top 85%", once: true },
    });
    gsap.from([".c-clients-headline", ".c-clients-subline"], {
      x: 20, opacity: 0, stagger: 0.12, duration: 0.85, ease: P, delay: 0.2,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-clients-hero-header", start: "top 85%", once: true },
    });

    // ── Client logo grid: batch stagger fade + scale ──
    ScrollTrigger.batch(".c-client-logo-card", {
      onEnter: (batch) =>
        gsap.fromTo(batch,
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.04, duration: 0.8, ease: "back.out(1.2)", overwrite: "auto" }
        ),
      once: true,
      start: "top 85%",
    });

    // ── Sector cards: smooth stagger up ──
    ScrollTrigger.batch(".c-sector-card", {
      onEnter: (batch) =>
        gsap.fromTo(batch,
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.14, duration: 1.1, ease: "power2.out", overwrite: "auto" }
        ),
      once: true,
      start: "top 76%",
    });

    // ── Sectors grid: kicker + title words ──
    gsap.from(".c-sectors-kicker", {
      y: 14, opacity: 0, duration: 1.0, ease: P,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-sectors-black-grid", start: "top 76%", once: true },
    });
    gsap.from(".c-sectors-title .c-gsap-word", {
      y: 28, opacity: 0, stagger: 0.2, duration: 1.3, ease: "power2.out", delay: 0.15,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-sectors-black-grid", start: "top 76%", once: true },
    });

    // ── Featured projects header ──
    gsap.from([".c-featured-eyebrow", ".c-featured-heading", ".c-featured-header .c-btn-light"], {
      y: 22, opacity: 0, stagger: 0.14, duration: 1.1, ease: P,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-featured-header", start: "top 80%", once: true },
    });

    // ── Featured project cards: staggered entrance ──
    ScrollTrigger.batch(".c-featured-card", {
      onEnter: (batch) =>
        gsap.fromTo(batch,
          { opacity: 0, y: 50, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.16, duration: 1.3, ease: "power2.out", overwrite: "auto" }
        ),
      once: true,
      start: "top 80%",
    });

    // ── Testimonial cards: smooth entrance ──
    ScrollTrigger.batch(".c-testi-card", {
      onEnter: (batch) =>
        gsap.fromTo(batch,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, stagger: 0.18, duration: 1.2, ease: "power2.out", overwrite: "auto" }
        ),
      once: true,
      start: "top 78%",
    });

    // ── Contact: columns slide in from sides ──
    gsap.from(".c-contact-left", {
      x: -30, opacity: 0, duration: 1.3, ease: "power2.out",
      immediateRender: false,
      scrollTrigger: { trigger: ".c-contact-inner", start: "top 78%", once: true },
    });
    gsap.from(".c-contact-right", {
      x: 30, opacity: 0, duration: 1.3, ease: "power2.out", delay: 0.1,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-contact-inner", start: "top 78%", once: true },
    });

    // ── Contact info rows ──
    gsap.from(".c-contact-row", {
      x: -12, opacity: 0, stagger: 0.12, duration: 1.0, ease: P, delay: 0.3,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-contact-info", start: "top 80%", once: true },
    });

    // ── Contact heading: word-by-word ──
    gsap.from("#contact-h .c-gsap-word", {
      y: 22, opacity: 0, stagger: 0.2, duration: 1.3, ease: "power2.out", delay: 0.2,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-contact-section", start: "top 76%", once: true },
    });

    // ── Contact form fields ──
    gsap.from(".c-form-field", {
      y: 14, opacity: 0, stagger: 0.1, duration: 1.0, ease: P, delay: 0.4,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-contact-right", start: "top 80%", once: true },
    });

    // ── Footer columns ──
    gsap.from(".c-footer-top > *", {
      y: 20, opacity: 0, stagger: 0.08, duration: 0.75, ease: P,
      immediateRender: false,
      scrollTrigger: { trigger: ".c-footer-top", start: "top 88%", once: true },
    });
  }, { scope: pageRef });


  async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");
    const data = new FormData(e.currentTarget);
    data.append("access_key", W3F_KEY);
    data.append("subject", "New enquiry from Floor-Space India website");
    data.append("from_name", "Floor-Space India Website");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setFormStatus("success");
        formRef.current?.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="c-page" ref={pageRef}>
      {/* Preload first hero image for fast LCP */}
      <link rel="preload" as="image" href="/images/hero-int-1.jpg" fetchPriority="high" />

      {/* ── Nav ── */}
      <ContemporaryNav />

      {/* 1. HERO — image slideshow */}
      <HeroSlideshow />



      {/* 2. STATS STRIP — animated counters */}
      <AnimatedStats stats={stats} />

      {/* 3. CLIENT SECTION — editorial two-col with stat anchor */}
      <section className="c-clients-section" aria-label="Clients we have worked with">
        <div className="c-clients-inner">
          <div className="c-clients-left">
            <p className="c-clients-eyebrow">Our Clients</p>
            <p className="c-clients-stat">100<span>+</span></p>
            <p className="c-clients-tagline">Brands that trust<br />our work</p>
            <p className="c-clients-desc">Global MNCs to fast-growing enterprises — across manufacturing, banking, pharma, and tech.</p>
          </div>
          <div className="c-client-marquees">
            <LogoMarquee logos={clientLogos} />
            <LogoMarquee logos={clientLogos} reverse />
          </div>
        </div>
      </section>

      {/* 4. TWO SERVICE CARDS */}
      <section className="c-cats-section" aria-label="Core services">
        <div data-reveal="left" className="c-cat-reveal">
          <Tilt3D intensity={7} className="c-cat-tilt">
            <article className="c-cat-card">
              <Image alt="Industrial Construction" className="c-cat-image" fill loading="lazy" sizes="50vw" src="/images/chromewell/03.jpg" />
              <div className="c-cat-overlay" aria-hidden />
              <div className="c-cat-body">
                <span className="c-cat-badge">Service 01</span>
                <span className="c-cat-title">Industrial Construction &amp; Turnkey Solutions</span>
                <Link href="/industrial-construction" className="c-cat-link">
                  Explore <ArrowUpRight size={14} aria-hidden />
                </Link>
              </div>
            </article>
          </Tilt3D>
        </div>
        <div data-reveal="right" className="c-cat-reveal">
          <Tilt3D intensity={7} className="c-cat-tilt">
            <article className="c-cat-card">
              <Image alt="Interior Fit Outs" className="c-cat-image" fill loading="lazy" sizes="50vw" src="/images/octillion-reception-main.jpg" />
              <div className="c-cat-overlay" aria-hidden />
              <div className="c-cat-body">
                <span className="c-cat-badge">Service 02</span>
                <span className="c-cat-title">Commercial &amp; Interior Fit Outs</span>
                <Link href="/interior-fitouts" className="c-cat-link">
                  Explore <ArrowUpRight size={14} aria-hidden />
                </Link>
              </div>
            </article>
          </Tilt3D>
        </div>
      </section>

      {/* 5. ABOUT */}
      <section className="c-about-section" id="about" aria-labelledby="about-h">
        <div className="c-about-content" data-reveal="left">
          <p className="c-section-kicker">Who We Are</p>
          <h2 className="c-section-title" id="about-h">
            Designing today,<br />enriching tomorrow.
          </h2>
          <p className="c-about-body">
            Floor-Space India is a Pune-based specialist in Industrial Construction and Interior Turnkey Solutions — delivering exceptional spaces that inspire and perform. From concept to completion, we blend aesthetics, functionality, and long-term value across corporate, industrial, healthcare, and institutional sectors.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/about" className="c-btn-dark">Read More About Us <ArrowRight size={15} aria-hidden /></Link>
            <Link href="/work" className="c-btn-outline">Our Portfolio</Link>
          </div>
        </div>
        <div className="c-about-image-wrap c-parallax-wrap" data-reveal="right">
          <div ref={aboutParallax} className="c-parallax-inner">
            <Image alt="Floor-Space India — completed interior" fill loading="lazy" sizes="50vw" src="/images/octillion-workspace.jpg" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* 6. SELECTED PROJECTS — stacked card deck */}
      <FeaturedStack />

      {/* 7. SECTORS — black icon grid */}
      <section className="c-sectors-black-grid" id="sectors" aria-labelledby="sectors-h">
        <div className="c-section-inner">
          <p className="c-section-kicker c-sectors-kicker">Sectors We Serve</p>
          <h2 className="c-section-title c-sectors-title" id="sectors-h">
            <span className="c-gsap-word">Spaces</span>{" "}
            <span className="c-gsap-word">We</span>{" "}
            <span className="c-gsap-word">Transform</span>
          </h2>
          <div className="c-sectors-icon-grid">
            {sectors.map(({ label, Icon }) => (
              <div key={label} className="c-sector-card">
                <div className="c-sector-card-inner">
                  <span className="c-sector-icon" aria-hidden>
                    <Icon size={48} strokeWidth={1.0} />
                  </span>
                  <span className="c-sector-name">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="c-testimonials-section" id="testimonials" aria-labelledby="testi-h">
        <div className="c-section-inner">
          <div className="c-testimonials-header" data-reveal>
            <div>
              <p className="c-section-kicker">Client Stories</p>
              <h2 className="c-section-title" id="testi-h">What our clients say</h2>
            </div>
            <Link href="/contact" className="c-btn-dark" style={{ flexShrink: 0 }}>Work With Us</Link>
          </div>
          <div className="c-testimonials-grid">
            {testimonials.map((t, i) => (
              <div className={`c-testi-card${i === 0 ? " is-featured" : ""}`} key={t.name}>
                <div className="c-testi-quote-mark" aria-hidden>&quot;</div>
                <blockquote className="c-testi-quote">{t.quote}</blockquote>
                <footer className="c-testi-footer">
                  <div className="c-testi-avatar" aria-hidden>{t.initials}</div>
                  <div>
                    <p className="c-testi-name">{t.name}</p>
                    <p className="c-testi-role">{t.company}</p>
                  </div>
                  <div className="c-testi-stars" aria-label={`${t.rating} stars`} style={{ marginLeft: "auto" }}>
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    ))}
                  </div>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CONTACT */}
      <section className="c-contact-section" id="contact" aria-labelledby="contact-h">
        <div className="c-contact-inner">
          <div className="c-contact-left">
            <p className="c-section-kicker" style={{ color: "rgba(255,255,255,0.5)" }}>Get In Touch</p>
            <h2 className="c-section-title" id="contact-h" style={{ color: "#fff", maxWidth: 420 }}>
              <span className="c-gsap-word">Let&apos;s</span>{" "}
              <span className="c-gsap-word">build</span>{" "}
              <span className="c-gsap-word">something</span>{" "}
              <span className="c-gsap-word">remarkable.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.94rem", lineHeight: 1.7, marginTop: 16, maxWidth: 380 }}>
              Share your site, scope, city, and timeline. Our team will come back with a clear path forward.
            </p>
            <div className="c-contact-info">
              <a href="tel:+919011999399" className="c-contact-row">
                <span className="c-contact-icon"><Phone size={16} strokeWidth={1.6} /></span>
                +91 90119 99399
              </a>
              <a href="mailto:rajesh@floor-space.co.in" className="c-contact-row">
                <span className="c-contact-icon"><Mail size={16} strokeWidth={1.6} /></span>
                rajesh@floor-space.co.in
              </a>
              <div className="c-contact-row">
                <span className="c-contact-icon"><MapPin size={16} strokeWidth={1.6} /></span>
                Office 709, 7th Floor, Verdant 84,<br />Koregaon Park Annexe, Pune – 411036
              </div>
              <div className="c-contact-row">
                <span className="c-contact-icon"><Clock size={16} strokeWidth={1.6} /></span>
                Mon–Sat, 09:30 AM – 06:00 PM
              </div>
            </div>
            <div className="c-contact-social">
              <a href="https://www.instagram.com/floor_space_india?igsh=cHU2OXV2bDN5NG5n" target="_blank" rel="noopener noreferrer" className="c-social-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/floor-space-india-private-limited/" target="_blank" rel="noopener noreferrer" className="c-social-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="c-contact-right">
            {formStatus === "success" ? (
              <div className="c-form-success" role="alert">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/>
                </svg>
                <p>Thank you! We&apos;ll be in touch within one business day.</p>
                <button className="c-btn-light" onClick={() => setFormStatus("idle")} style={{ marginTop: "1rem" }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form ref={formRef} className="c-contact-form" onSubmit={handleContactSubmit} aria-label="Contact form">
                {/* honeypot for spam prevention */}
                <input type="checkbox" name="botcheck" style={{ display: "none" }} />
                <div className="c-form-row">
                  <div className="c-form-field">
                    <label className="c-form-label" htmlFor="cf-name">Full Name</label>
                    <input className="c-form-input" id="cf-name" name="name" type="text" placeholder="Your name" required />
                  </div>
                  <div className="c-form-field">
                    <label className="c-form-label" htmlFor="cf-company">Company</label>
                    <input className="c-form-input" id="cf-company" name="company" type="text" placeholder="Company name" />
                  </div>
                </div>
                <div className="c-form-row">
                  <div className="c-form-field">
                    <label className="c-form-label" htmlFor="cf-email">Email</label>
                    <input className="c-form-input" id="cf-email" name="email" type="email" placeholder="you@company.com" required />
                  </div>
                  <div className="c-form-field">
                    <label className="c-form-label" htmlFor="cf-phone">Phone</label>
                    <input className="c-form-input" id="cf-phone" name="phone" type="tel" placeholder="+91 00000 00000" />
                  </div>
                </div>
                <div className="c-form-field">
                  <label className="c-form-label" htmlFor="cf-city">City &amp; Project Type</label>
                  <input className="c-form-input" id="cf-city" name="city_project" type="text" placeholder="e.g. Pune — Corporate Office, 8000 sq ft" />
                </div>
                <div className="c-form-field">
                  <label className="c-form-label" htmlFor="cf-msg">Message</label>
                  <textarea className="c-form-input c-form-textarea" id="cf-msg" name="message" placeholder="Tell us about your project…" rows={4} />
                </div>
                {formStatus === "error" && (
                  <p className="c-form-error" role="alert">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
                <button
                  type="submit"
                  className="c-btn-light"
                  disabled={formStatus === "submitting"}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {formStatus === "submitting" ? "Sending…" : <>Send Message <ArrowRight size={16} aria-hidden /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
