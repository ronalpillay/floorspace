'use client';
import { useState, useEffect, useRef } from 'react';

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Intersection observer hook ───────────────────────────────────────────────
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = ['Home', 'About', 'Services', 'Team', 'Testimonials', 'Contact'];

const WHY_ITEMS = [
  { icon: '🦷', title: '500+ Dental Practices', desc: 'Trusted by hundreds of dentists across North America to grow their practices and attract more patients.' },
  { icon: '💎', title: '12 Diamond Invisalign Providers', desc: 'We have helped twelve practices reach Diamond-level Invisalign status through high-performance campaigns.' },
  { icon: '🤖', title: 'AI-Powered Booking Assistant', desc: 'Our AI virtual assistant handles appointment scheduling 24/7, ensuring no lead ever goes unanswered.' },
  { icon: '📈', title: 'Organic Social Growth', desc: 'Consistent, customised content that builds your brand authority and keeps patients coming back.' },
  { icon: '🎯', title: 'Full-Stack Marketing Solutions', desc: 'SEO, paid ads, email automation, and web design — everything under one roof, fully integrated.' },
  { icon: '🤝', title: 'Dedicated Account Support', desc: 'A real team working alongside you with ongoing hands-on support to keep results moving upward.' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery Call', desc: 'We learn your goals, current challenges, and what makes your practice unique before we touch a single ad.' },
  { num: '02', title: 'Market Research', desc: 'Deep analysis of your local competitors, patient demographics, and search trends to find your advantage.' },
  { num: '03', title: 'Strategy & Launch', desc: 'A fully tailored growth plan goes live — tracked weekly with transparent reporting so you always know the ROI.' },
];

const TEAM = [
  { name: 'James Harlow', role: 'CEO & Founder', initials: 'JH', color: '#4B82F5' },
  { name: 'Priya Nair', role: 'Chief Operating Officer', initials: 'PN', color: '#7C3AED' },
  { name: 'Marcus Lee', role: 'Head of Paid Media', initials: 'ML', color: '#0EA5E9' },
  { name: 'Sofia Reyes', role: 'Client Success Lead', initials: 'SR', color: '#10B981' },
];

const TESTIMONIALS = [
  { quote: 'We went from 15 new patients a month to over 60 in under 90 days. The ROI has been incredible.', author: 'Dr. Anita Sharma', clinic: 'Smile Studio Dental' },
  { quote: 'Their Meta Ads alone generated $45,000 in Invisalign revenue in the first 45 days. Nothing we tried before came close.', author: 'Dr. Kevin Park', clinic: 'Parkway Dental Care' },
  { quote: 'We hit Diamond Invisalign Provider in 8 months. I did not think that was possible. These guys made it happen.', author: 'Dr. Rachel Moore', clinic: 'Brighter Smiles Family Dentistry' },
  { quote: 'Finally a marketing team that actually understands dentistry. Every campaign feels built for our specific patients.', author: 'Dr. Omar Hassan', clinic: 'Westside Dental Group' },
];

const SERVICES = [
  {
    title: 'Meta Ads (Facebook & Instagram)',
    icon: '📱',
    short: 'Fill your appointment book with high-intent patients using precision-targeted social campaigns.',
    long: 'We have mastered Meta advertising specifically for dental practices. Our campaigns go beyond impressions — they are built to convert. We target new movers in your area, people actively researching cosmetic dentistry, and families looking for a new dentist. Every dollar is tracked, every ad is tested, and every campaign is optimised to book appointments, not just clicks.',
  },
  {
    title: 'Google Ads (PPC for Dentists)',
    icon: '🔍',
    short: 'Appear first when patients search for a dentist. High-intent traffic that is ready to book.',
    long: 'When someone types "dentist near me" or "Invisalign specialist," your practice needs to be at the top. We craft data-driven Google Ad campaigns targeting the exact search terms your ideal patients use, with compelling copy that highlights your differentiators — same-day appointments, specialist services, and five-star reviews.',
  },
  {
    title: 'Dental Website Design',
    icon: '💻',
    short: 'A website that earns trust and converts visitors into booked appointments — not just a digital brochure.',
    long: 'Your website is the hub of every marketing effort. We build fast, mobile-first dental websites that are engineered to convert. Every page, every headline, every button is designed with one goal: turning a curious visitor into a booked patient. We combine stunning visuals with proven conversion psychology.',
  },
  {
    title: 'SEO for Dentists',
    icon: '📊',
    short: 'Dominate local search rankings and attract a consistent, organic flow of new patients every month.',
    long: 'We build the long-term asset that keeps paying dividends long after ads stop. Our dental SEO covers Google Business Profile optimisation, local citation building, content strategy, and technical SEO. The result is your practice ranking at the top of Google for every relevant search in your area.',
  },
  {
    title: 'Social Media Management',
    icon: '⭐',
    short: 'Build a loyal community around your brand that turns followers into lifetime patients.',
    long: 'Social media is where your future patients spend their time. We create and manage a consistent content strategy that showcases your team, celebrates patient wins (with consent), educates your community, and builds the trust that gets someone to walk through your door for the first time.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function DentalMarketing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const statsRef = useInView(0.4);
  const c1 = useCounter(500, 2000, statsRef.inView);
  const c2 = useCounter(85, 2000, statsRef.inView);
  const c3 = useCounter(80, 2000, statsRef.inView);
  const c4 = useCounter(97, 2000, statsRef.inView);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", background: '#060B16', color: '#F0F4FF', overflowX: 'hidden' }}>

      {/* ── Navbar ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(6,11,22,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.3s ease',
        padding: '0 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 70,
      }}>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px' }}>
          <span style={{ color: '#4B82F5' }}>Denta</span><span style={{ color: '#fff' }}>Grow</span>
          <span style={{ fontSize: 11, color: '#4B82F5', display: 'block', letterSpacing: 3, fontWeight: 500, marginTop: -4 }}>DENTAL MARKETING</span>
        </div>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ color: '#94A3B8', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#94A3B8')}>{l}</a>
          ))}
          <a href="#contact" style={{
            background: 'linear-gradient(135deg, #4B82F5, #7C3AED)',
            color: '#fff', padding: '10px 22px', borderRadius: 8,
            fontSize: 14, fontWeight: 600, textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(75,130,245,0.3)',
          }}>Book a Call</a>
        </div>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: 24, cursor: 'pointer', display: 'none' }}
          className="hamburger">☰</button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 70, left: 0, right: 0, zIndex: 99,
          background: '#0E1520', borderBottom: '1px solid #1E293B',
          padding: '20px 5%', display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)}
              style={{ color: '#94A3B8', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      )}

      {/* ── Hero ── */}
      <section id="home" style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #060B16 0%, #0D1B35 50%, #060B16 100%)',
        position: 'relative', overflow: 'hidden',
        padding: '120px 5% 80px',
      }}>
        {/* Background glow */}
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 800, background: 'radial-gradient(circle, rgba(75,130,245,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '60%', right: '5%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(75,130,245,0.12)', border: '1px solid rgba(75,130,245,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4B82F5', display: 'inline-block' }} />
              <span style={{ fontSize: 12, color: '#4B82F5', fontWeight: 600, letterSpacing: 1 }}>NORTH AMERICA'S TOP DENTAL MARKETING AGENCY</span>
            </div>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 62px)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-2px', marginBottom: 24 }}>
              Get <span style={{ color: '#4B82F5' }}>20–40 New</span><br />
              Dental Patients<br />
              <span style={{ color: '#F0A500' }}>Every Single Month</span>
            </h1>

            <p style={{ fontSize: 17, color: '#94A3B8', lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              We specialise exclusively in dental marketing. Our proven system fills appointment books, grows Invisalign revenue, and delivers measurable ROI — or you don't pay.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#contact" style={{
                background: 'linear-gradient(135deg, #4B82F5, #7C3AED)',
                color: '#fff', padding: '16px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(75,130,245,0.4)',
                display: 'inline-block',
              }}>Book a Free Strategy Call →</a>
              <a href="#testimonials" style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff', padding: '16px 32px', borderRadius: 10,
                fontSize: 15, fontWeight: 600, textDecoration: 'none',
              }}>See Results</a>
            </div>

            <div style={{ display: 'flex', gap: 32, marginTop: 48, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {[['500+', 'Dental Practices'], ['$85M+', 'Revenue Generated'], ['12', 'Diamond Providers']].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontSize: 28, fontWeight: 900, color: '#4B82F5' }}>{val}</div>
                  <div style={{ fontSize: 12, color: '#64748B', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero card */}
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, #0E1A2E, #162240)',
              border: '1px solid rgba(75,130,245,0.2)',
              borderRadius: 20, padding: 32,
              boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
            }}>
              <div style={{ fontSize: 13, color: '#4B82F5', fontWeight: 600, letterSpacing: 1, marginBottom: 16 }}>RECENT CLIENT RESULT</div>
              <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>"Added $120K in revenue<br />in just 90 days."</div>
              <div style={{ color: '#64748B', fontSize: 14, marginBottom: 24 }}>— Dr. Sarah Kim, Lakeview Dental</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                {[['340%', 'ROI in 90 days'], ['62', 'New patients/month'], ['$0', 'Wasted ad spend'], ['14 days', 'To first result']].map(([val, label]) => (
                  <div key={label} style={{ background: 'rgba(75,130,245,0.08)', borderRadius: 12, padding: '16px', border: '1px solid rgba(75,130,245,0.12)' }}>
                    <div style={{ fontSize: 22, fontWeight: 800, color: '#4B82F5' }}>{val}</div>
                    <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>{label}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24, padding: '12px 16px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ color: '#10B981', fontSize: 18 }}>●</span>
                <span style={{ fontSize: 13, color: '#10B981', fontWeight: 600 }}>3 slots available this month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Logo marquee ── */}
      <div style={{ background: '#0A1020', borderTop: '1px solid #1E293B', borderBottom: '1px solid #1E293B', padding: '20px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: 60, animation: 'marquee 20s linear infinite', whiteSpace: 'nowrap' }}>
          {[...Array(3)].flatMap(() => ['Google Partner', 'Meta Business Partner', 'HubSpot Certified', 'Invisalign Premier', 'Dental Tribune', 'ADA Member Agency'].map(name => (
            <span key={name + Math.random()} style={{ color: '#334155', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', flexShrink: 0 }}>{name}</span>
          )))}
        </div>
      </div>

      {/* ── About ── */}
      <section id="about" style={{ padding: '100px 5%', background: '#060B16' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, color: '#4B82F5', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>About Us</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-1.5px', lineHeight: 1.15, marginBottom: 24 }}>
              Real Growth. Measurable Results. <span style={{ color: '#4B82F5' }}>Zero Guesswork.</span>
            </h2>
            <p style={{ color: '#64748B', lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
              DentaGrow was built with one focus: helping dental practices grow faster than they ever thought possible. With a track record spanning <strong style={{ color: '#94A3B8' }}>500+ dental clients</strong>, we have refined a marketing system that works — not in theory, but in actual chair time and revenue.
            </p>
            <p style={{ color: '#64748B', lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
              For many of our partners, that means an additional <strong style={{ color: '#F0A500' }}>$20,000 – $40,000+ in monthly revenue</strong> within the first quarter. We have helped practices go from Gold to Diamond Invisalign provider status in as little as 30 days — using the right strategy, at the right time, in the right market.
            </p>
            <a href="#contact" style={{
              display: 'inline-block', background: 'linear-gradient(135deg, #4B82F5, #7C3AED)',
              color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none',
            }}>Book a Free Call</a>
          </div>

          {/* About image card */}
          <div style={{ position: 'relative' }}>
            <div style={{ background: 'linear-gradient(135deg, #0E1A2E, #0A1020)', border: '1px solid #1E293B', borderRadius: 20, padding: 40, height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 48, fontWeight: 900, color: '#1E293B', lineHeight: 1 }}>DENTAL<br />GROWTH<br />AGENCY</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['Dental-specific strategy', 'Transparent weekly reporting', 'No lock-in contracts', 'Results in 14 days or less'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ color: '#10B981', fontSize: 16 }}>✓</span>
                    <span style={{ color: '#94A3B8', fontSize: 15 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating badge */}
            <div style={{ position: 'absolute', top: -20, right: -20, background: 'linear-gradient(135deg, #4B82F5, #7C3AED)', borderRadius: 16, padding: '16px 20px', textAlign: 'center', boxShadow: '0 16px 40px rgba(75,130,245,0.4)' }}>
              <div style={{ fontSize: 28, fontWeight: 900 }}>500+</div>
              <div style={{ fontSize: 11, opacity: 0.85, fontWeight: 600 }}>HAPPY DENTISTS</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section style={{ padding: '100px 5%', background: '#070D1A' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 12, color: '#4B82F5', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Why Choose Us</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 16 }}>Everything Your Practice Needs to Thrive</h2>
            <p style={{ color: '#64748B', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>Proven marketing systems designed exclusively for dental practices — from solo practitioners to multi-location groups.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {WHY_ITEMS.map((item) => (
              <div key={item.title} style={{
                background: '#0E1520', border: '1px solid #1E293B', borderRadius: 16, padding: 28,
                transition: 'border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(75,130,245,0.4)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#1E293B'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{item.title}</div>
                <div style={{ color: '#64748B', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div ref={statsRef.ref} style={{ padding: '80px 5%', background: 'linear-gradient(135deg, #0D1B35, #0A1020)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40, textAlign: 'center' }}>
          {[
            { val: c1, suffix: '+', label: 'Satisfied Dentists' },
            { val: c2, prefix: '$', suffix: 'M+', label: 'Revenue Generated' },
            { val: c3, suffix: '%', label: "Average Revenue Increase" },
            { val: c4, suffix: '%', label: 'Client Retention Rate' },
          ].map(({ val, prefix = '', suffix, label }) => (
            <div key={label}>
              <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: '-2px', color: '#4B82F5', lineHeight: 1 }}>
                {prefix}{val}{suffix}
              </div>
              <div style={{ color: '#64748B', fontSize: 14, marginTop: 8, fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Process ── */}
      <section style={{ padding: '100px 5%', background: '#060B16' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 12, color: '#4B82F5', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Our Process</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-1.5px' }}>From Zero to Booked Solid in 3 Steps</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, position: 'relative' }}>
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.num} style={{ position: 'relative' }}>
                {i < 2 && <div style={{ position: 'absolute', top: 40, left: '60%', right: '-40%', height: 1, background: 'linear-gradient(90deg, #4B82F5, transparent)', zIndex: 0 }} />}
                <div style={{ background: '#0E1520', border: '1px solid #1E293B', borderRadius: 20, padding: 36, position: 'relative', zIndex: 1 }}>
                  <div style={{ fontSize: 64, fontWeight: 900, color: 'rgba(75,130,245,0.12)', lineHeight: 1, marginBottom: 16 }}>{step.num}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 12 }}>{step.title}</div>
                  <div style={{ color: '#64748B', fontSize: 14, lineHeight: 1.7 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CEO Section ── */}
      <section style={{ padding: '100px 5%', background: '#070D1A' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ background: 'linear-gradient(135deg, #0E1A2E, #162240)', borderRadius: 20, aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(75,130,245,0.15)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'linear-gradient(135deg, #4B82F5, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 48, fontWeight: 900 }}>JH</div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>James Harlow</div>
              <div style={{ color: '#4B82F5', fontSize: 13, marginTop: 4 }}>CEO & Founder, DentaGrow</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: '#4B82F5', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>CEO & Founder</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 20 }}>James Harlow</h2>
            <p style={{ color: '#64748B', lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
              James is a dental marketing strategist who spent years inside dental practices before founding DentaGrow. That inside knowledge is why our campaigns perform differently — they are built by someone who understands the business of dentistry, not just the mechanics of advertising.
            </p>
            <p style={{ color: '#64748B', lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
              Since 2019, James and his team have generated over $85M in tracked revenue for dental practices across North America, with a client retention rate that speaks for itself.
            </p>
            <a href="#contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #4B82F5, #7C3AED)', color: '#fff', padding: '14px 28px', borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none' }}>Book a Call with James</a>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" style={{ padding: '100px 5%', background: '#060B16' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 12, color: '#4B82F5', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Our Team</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-1.5px' }}>The Experts Behind Your Growth</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {TEAM.map(m => (
              <div key={m.name} style={{ background: '#0E1520', border: '1px solid #1E293B', borderRadius: 16, padding: 28, textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: `${m.color}22`, border: `2px solid ${m.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 22, fontWeight: 800, color: m.color }}>{m.initials}</div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{m.name}</div>
                <div style={{ color: '#64748B', fontSize: 13 }}>{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" style={{ padding: '100px 5%', background: '#070D1A' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 12, color: '#4B82F5', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Testimonials</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 16 }}>Results That Speak for Themselves</h2>
            <p style={{ color: '#64748B', maxWidth: 540, margin: '0 auto' }}>Hear from dental practices who transformed their patient acquisition and revenue with DentaGrow.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.author} style={{ background: '#0E1520', border: '1px solid #1E293B', borderRadius: 20, padding: 36 }}>
                <div style={{ color: '#4B82F5', fontSize: 32, lineHeight: 1, marginBottom: 16 }}>"</div>
                <div style={{ fontSize: 17, fontWeight: 600, lineHeight: 1.6, marginBottom: 24, color: '#E2E8F0' }}>{t.quote}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #4B82F5, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15 }}>{t.author.split(' ').map(w => w[0]).join('')}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{t.author}</div>
                    <div style={{ color: '#64748B', fontSize: 12 }}>{t.clinic}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: '#F0A500', fontSize: 14 }}>★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" style={{ padding: '100px 5%', background: '#060B16' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 12, color: '#4B82F5', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Services</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 900, letterSpacing: '-1.5px' }}>Comprehensive Solutions for Dental Growth</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 0, border: '1px solid #1E293B', borderRadius: 20, overflow: 'hidden' }}>
            {/* Service tabs */}
            <div style={{ background: '#0A1020', borderRight: '1px solid #1E293B' }}>
              {SERVICES.map((s, i) => (
                <button key={s.title} onClick={() => setActiveService(i)} style={{
                  width: '100%', textAlign: 'left', background: activeService === i ? 'rgba(75,130,245,0.08)' : 'transparent',
                  border: 'none', borderLeft: activeService === i ? '3px solid #4B82F5' : '3px solid transparent',
                  borderBottom: '1px solid #1E293B', padding: '22px 28px', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 20 }}>{s.icon}</span>
                    <span style={{ color: activeService === i ? '#fff' : '#64748B', fontWeight: 600, fontSize: 14 }}>{s.title}</span>
                  </div>
                </button>
              ))}
            </div>
            {/* Service content */}
            <div style={{ background: '#0E1520', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{SERVICES[activeService].icon}</div>
              <h3 style={{ fontSize: 26, fontWeight: 800, marginBottom: 16, letterSpacing: '-0.5px' }}>{SERVICES[activeService].title}</h3>
              <p style={{ color: '#64748B', lineHeight: 1.8, fontSize: 15, marginBottom: 28 }}>{SERVICES[activeService].long}</p>
              <a href="#contact" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #4B82F5, #7C3AED)', color: '#fff', padding: '12px 24px', borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: 'none', alignSelf: 'flex-start' }}>Get Started →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section id="contact" style={{ padding: '100px 5%', background: 'linear-gradient(135deg, #0D1B35 0%, #162240 50%, #0D1B35 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(75,130,245,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ fontSize: 12, color: '#4B82F5', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Ready to Grow?</div>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 900, letterSpacing: '-2px', marginBottom: 20, lineHeight: 1.1 }}>
            Unlock Your Practice's Full Potential
          </h2>
          <p style={{ color: '#64748B', fontSize: 17, lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
            Book a free 30-minute strategy call. We will analyse your current marketing, identify your biggest growth opportunities, and show you exactly what we would do differently.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:hello@dentagrow.com" style={{ background: 'linear-gradient(135deg, #4B82F5, #7C3AED)', color: '#fff', padding: '18px 40px', borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: 'none', boxShadow: '0 8px 32px rgba(75,130,245,0.4)' }}>Book a Free Strategy Call</a>
            <a href="tel:+17782009127" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', padding: '18px 40px', borderRadius: 12, fontSize: 16, fontWeight: 600, textDecoration: 'none' }}>Call Us Now</a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ background: '#040810', borderTop: '1px solid #1E293B', padding: '60px 5% 30px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 16 }}>
                <span style={{ color: '#4B82F5' }}>Denta</span><span style={{ color: '#fff' }}>Grow</span>
              </div>
              <p style={{ color: '#334155', fontSize: 14, lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
                Dental marketing is not just part of what we do — it is everything we do.
              </p>
              <div style={{ display: 'flex', gap: 12 }}>
                {['f', 'in', '▶'].map(icon => (
                  <div key={icon} style={{ width: 36, height: 36, borderRadius: 8, background: '#0E1520', border: '1px solid #1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', fontSize: 13, cursor: 'pointer' }}>{icon}</div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20, color: '#64748B' }}>Quick Links</div>
              {['Home', 'About Us', 'Testimonials', 'Contact Us'].map(l => (
                <div key={l} style={{ marginBottom: 12 }}><a href="#" style={{ color: '#334155', fontSize: 14, textDecoration: 'none' }}>{l}</a></div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20, color: '#64748B' }}>Services</div>
              {['Meta Ads', 'Google Ads', 'Website Design', 'SEO for Dentists', 'Social Media'].map(l => (
                <div key={l} style={{ marginBottom: 12 }}><a href="#" style={{ color: '#334155', fontSize: 14, textDecoration: 'none' }}>{l}</a></div>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20, color: '#64748B' }}>Contact</div>
              <div style={{ color: '#334155', fontSize: 14, lineHeight: 2 }}>
                <div>hello@dentagrow.com</div>
                <div>+1 (800) 000-0000</div>
                <div>Mon–Sat, 9am–6pm</div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #1E293B', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: '#1E293B', fontSize: 13 }}>DentaGrow © 2026 All Rights Reserved.</div>
            <div style={{ color: '#1E293B', fontSize: 13 }}>Privacy Policy · Terms of Service</div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
