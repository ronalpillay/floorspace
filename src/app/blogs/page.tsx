import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContemporaryNav from "@/components/ContemporaryNav";
import Footer from "@/components/Footer";
import "../contemporary.css";

export const metadata: Metadata = {
  title: "Blog — Floor-Space India",
  description: "Insights, guides, and case studies from Floor-Space India on commercial interiors, industrial construction, and workspace design.",
};

const posts = [
  {
    title: "5 Key Trends in Commercial Interior Design for 2025",
    category: "Design Trends",
    excerpt: "From biophilic elements to flexible workspaces, discover what's shaping modern commercial interiors this year and how forward-thinking companies are adapting their offices.",
    date: "12 May 2025",
    readTime: "5 min read",
    image: "/images/octillion-biophilic.jpg",
  },
  {
    title: "What to Look for in a Turnkey Interior Contractor",
    category: "Industry Guide",
    excerpt: "Choosing the right partner for your office fit-out is critical to your project's success. Here are the 7 questions every client should ask before signing.",
    date: "28 Apr 2025",
    readTime: "7 min read",
    image: "/images/smbc-bkc-corridor.jpg",
  },
  {
    title: "Industrial vs. Corporate: Design Principles for Both",
    category: "Case Study",
    excerpt: "We break down how our approach differs across industrial construction and premium corporate environments — and why the fundamentals remain the same.",
    date: "10 Apr 2025",
    readTime: "6 min read",
    image: "/images/octillion-boardroom-main.jpg",
  },
  {
    title: "How We Delivered 45,000 sq ft for SMBC Bank in 90 Days",
    category: "Case Study",
    excerpt: "A behind-the-scenes look at how our team coordinated design, procurement, and construction to meet one of Mumbai's most demanding timelines.",
    date: "22 Mar 2025",
    readTime: "8 min read",
    image: "/images/smbc-bkc-reception.jpg",
  },
  {
    title: "The True Cost of a Cheap Office Fit-Out",
    category: "Industry Guide",
    excerpt: "Cutting corners on your workspace might save money upfront, but the hidden costs — rework, downtime, employee dissatisfaction — often far outweigh the savings.",
    date: "5 Mar 2025",
    readTime: "5 min read",
    image: "/images/octillion-reception-main.jpg",
  },
  {
    title: "Biophilic Design in the Workplace: More Than a Trend",
    category: "Design Trends",
    excerpt: "Natural light, greenery, and organic materials aren't just aesthetic choices. We explore the measurable productivity and wellbeing benefits of biophilic design.",
    date: "18 Feb 2025",
    readTime: "6 min read",
    image: "/images/octillion-biophilic.jpg",
  },
];

const [featured, ...rest] = posts;

export default function BlogsPage() {
  return (
    <div className="c-page">
      <ContemporaryNav solid />

      {/* ── Hero ── */}
      <section className="c-page-hero" aria-labelledby="blogs-h">
        <Image
          src="/images/octillion-biophilic.jpg"
          alt="Floor-Space India workspace insights"
          fill
          fetchPriority="high"
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="c-page-hero-overlay" aria-hidden />
        <div className="c-page-hero-body">
          <p className="c-page-hero-kicker">Insights</p>
          <h1 className="c-page-hero-title" id="blogs-h">From Our Desk.</h1>
          <p className="c-page-hero-sub">
            Perspectives on commercial interiors, industrial construction, and workspace
            design from the Floor-Space India team.
          </p>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="c-section" aria-label="Blog posts">
        <div className="c-section-inner">

          {/* Featured */}
          <article className="c-blog-featured" data-reveal>
            <div className="c-blog-featured-image">
              <Image
                alt={featured.title}
                fill
                loading="lazy"
                sizes="55vw"
                src={featured.image}
                style={{ objectFit: "cover" }}
              />
              <span className="c-blog-tag">{featured.category}</span>
            </div>
            <div className="c-blog-featured-body">
              <p className="c-blog-featured-label">Featured Story</p>
              <h2 className="c-blog-featured-title">{featured.title}</h2>
              <p className="c-blog-featured-excerpt">{featured.excerpt}</p>
              <div className="c-blog-featured-footer">
                <span className="c-blog-meta">{featured.date} · {featured.readTime}</span>
                <Link href="#" className="c-btn-dark">
                  Read Article <ArrowRight size={14} aria-hidden />
                </Link>
              </div>
            </div>
          </article>

          {/* Grid */}
          <div className="c-blog-grid" data-stagger>
            {rest.map((post) => (
              <article key={post.title} className="c-blog-card">
                <div className="c-blog-card-image">
                  <Image
                    alt={post.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 420px"
                    src={post.image}
                    style={{ objectFit: "cover" }}
                  />
                  <span className="c-blog-tag">{post.category}</span>
                </div>
                <div className="c-blog-card-body">
                  <h2 className="c-blog-card-title">{post.title}</h2>
                  <p className="c-blog-card-excerpt">{post.excerpt}</p>
                  <div className="c-blog-card-footer">
                    <span className="c-blog-meta">{post.date} · {post.readTime}</span>
                    <Link href="#" style={{ alignItems: "center", color: "var(--c-accent)", display: "flex", fontSize: "0.78rem", fontWeight: 700, gap: 4, textDecoration: "none" }}>
                      Read <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
