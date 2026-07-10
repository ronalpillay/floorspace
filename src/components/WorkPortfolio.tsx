"use client";

import { useState } from "react";
import Image from "next/image";

const ALL = "All";

const projects = [
  {
    name: "Octillion Capital",
    sector: "Corporate",
    city: "Pune",
    area: "18,000 sq ft",
    image: "/images/octillion/homepage.jpg",
    alt: "Octillion Capital — premium corporate headquarters",
    desc: "Premium corporate headquarters with lounge, boardroom, and open-plan floors.",
    tall: true,
  },
  {
    name: "Tristone Technologies",
    sector: "Corporate",
    city: "Pune",
    area: "22,000 sq ft",
    image: "/images/tristone/01.jpg",
    alt: "Tristone Technologies — open-plan workspace",
    desc: "Open-plan and collaborative workspace for a technology consultancy.",
    tall: true,
  },
  {
    name: "MQT Industries",
    sector: "Industrial",
    city: "Pune",
    area: "35,000 sq ft",
    image: "/images/mqt/open-ceiling.jpg",
    alt: "MQT Industries — industrial facility",
    desc: "Industrial facility with canteen, open-plan office, and specialized zones.",
    tall: false,
  },
  {
    name: "John Deere",
    sector: "Industrial",
    city: "Pune",
    area: "28,000 sq ft",
    image: "/images/john-deere/01.jpg",
    alt: "John Deere — large-scale industrial workspace",
    desc: "Large-scale industrial workspace with modern office integration.",
    tall: false,
  },
  {
    name: "TII Corporation",
    sector: "Corporate",
    city: "Pune",
    area: "12,000 sq ft",
    image: "/images/tii/reception-1.jpg",
    alt: "TII Corporation — corporate reception",
    desc: "Corporate reception and collaboration space with custom millwork.",
    tall: false,
  },
  {
    name: "Mazak India",
    sector: "Industrial",
    city: "Pune",
    area: "20,000 sq ft",
    image: "/images/mazak-lobby.jpg",
    alt: "Mazak India — precision manufacturing showroom",
    desc: "Precision manufacturing showroom and office integration.",
    tall: false,
  },
];

const sectors = [ALL, ...Array.from(new Set(projects.map((p) => p.sector)))];

export default function WorkPortfolio() {
  const [active, setActive] = useState(ALL);

  const visible = active === ALL ? projects : projects.filter((p) => p.sector === active);

  return (
    <section className="section capability-section" id="projects" aria-labelledby="projects-h">
      <div className="section-inner">
        <div className="work-header" style={{ marginBottom: 32 }}>
          <div>
            <p className="section-kicker">All Projects</p>
            <h2
              className="section-title"
              id="projects-h"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", marginBottom: 28 }}
            >
              225+ spaces delivered.
            </h2>
          </div>
        </div>

        <div className="c-work-filters" role="group" aria-label="Filter by sector">
          {sectors.map((s) => (
            <button
              key={s}
              className={`c-work-filter-pill${active === s ? " is-active" : ""}`}
              onClick={() => setActive(s)}
              aria-pressed={active === s}
              type="button"
            >
              {s}
            </button>
          ))}
        </div>

        <div className="work-projects-grid">
          {visible.map((project) => (
            <article
              className={`work-project-card ${project.tall ? "work-project-card--tall" : ""}`}
              key={project.name}
            >
              <Image
                alt={project.alt}
                className="capability-image"
                fill
                loading="lazy"
                sizes="(max-width: 760px) 100vw, (max-width: 1020px) 50vw, 33vw"
                src={project.image}
              />
              <div className="work-project-overlay" aria-hidden />
              <div className="work-project-content">
                <p className="work-project-meta">
                  <span className="work-project-sector">{project.sector}</span>
                  <span aria-hidden> · </span>
                  <span>{project.city}</span>
                  <span aria-hidden> · </span>
                  <span>{project.area}</span>
                </p>
                <h3 className="work-project-title">{project.name}</h3>
                <p className="work-project-desc">{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
