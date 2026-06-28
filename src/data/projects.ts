export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  name: string;
  sector: string;
  city: string;
  area: string;
  coverImage: string;
  coverAlt: string;
  desc: string;
  longDesc: string;
  category: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  // ── Priority projects (client-specified order) ───────────────────────────

  {
    slug: "octillion-capital",
    name: "Octillion Capital HQ",
    sector: "Corporate Office",
    city: "Pimpri, Pune",
    area: "30,000 sq ft",
    coverImage: "/images/octillion/01.jpg",
    coverAlt: "Octillion Capital — premium corporate headquarters",
    desc: "Premium corporate headquarters with lounge, boardroom, and open-plan floors.",
    longDesc:
      "A flagship corporate headquarters for Octillion Capital in Pimpri, Pune. The project features an impressive reception, executive boardroom suites, biophilic lounges, and expansive open-plan workspaces. The design balances prestige with practicality — integrating natural elements, premium materials, and intelligent space planning across multiple floors.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/octillion/01.jpg", alt: "Reception lobby" },
      { src: "/images/octillion/02.jpg", alt: "Open-plan workspace" },
      { src: "/images/octillion/03.jpg", alt: "Collaboration area" },
      { src: "/images/octillion/04.jpg", alt: "Interior corridor" },
      { src: "/images/octillion/05.jpg", alt: "Workstation layout" },
      { src: "/images/octillion/06.jpg", alt: "Conference room" },
      { src: "/images/octillion/07.jpg", alt: "Executive lounge" },
      { src: "/images/octillion/08.jpg", alt: "Ceiling detail" },
      { src: "/images/octillion/09.jpg", alt: "Lighting installation" },
      { src: "/images/octillion/10.jpg", alt: "Breakout zone" },
      { src: "/images/octillion/11.jpg", alt: "Flooring and finishes" },
      { src: "/images/octillion/12.jpg", alt: "Meeting room interior" },
      { src: "/images/octillion/13.jpg", alt: "Office view" },
      { src: "/images/octillion/14.jpg", alt: "Cafeteria" },
      { src: "/images/octillion/15.jpg", alt: "Boardroom" },
      { src: "/images/octillion/16.jpg", alt: "Director's cabin" },
      { src: "/images/octillion/17.jpg", alt: "Workspace detail" },
      { src: "/images/octillion/18.jpg", alt: "Open floor plan" },
      { src: "/images/octillion/19.jpg", alt: "Interior overview" },
      { src: "/images/octillion/20.jpg", alt: "Biophilic elements" },
      { src: "/images/octillion/21.jpg", alt: "Lounge seating" },
      { src: "/images/octillion/22.jpg", alt: "Pantry area" },
      { src: "/images/octillion/23.jpg", alt: "Entrance foyer" },
      { src: "/images/octillion/24.jpg", alt: "Workstation zone" },
      { src: "/images/octillion/25.jpg", alt: "Feature wall" },
      { src: "/images/octillion/26.jpg", alt: "Corridor view" },
      { src: "/images/octillion/27.jpg", alt: "Glass partition detail" },
      { src: "/images/octillion/28.jpg", alt: "Office furniture" },
      { src: "/images/octillion/29.jpg", alt: "Reception desk" },
      { src: "/images/octillion/30.jpg", alt: "Executive area" },
      { src: "/images/octillion/31.jpg", alt: "Completed space" },
      { src: "/images/octillion/32.jpg", alt: "Lighting feature" },
      { src: "/images/octillion/33.jpg", alt: "Interior view 2" },
      { src: "/images/octillion/34.jpg", alt: "Conference detail" },
      { src: "/images/octillion/35.jpg", alt: "Workspace area" },
      { src: "/images/octillion/36.jpg", alt: "Final overview" },
    ],
  },

  {
    slug: "marquardt-hinjewadi",
    name: "Marquardt — Hinjewadi",
    sector: "Corporate & IT Office",
    city: "Pune",
    area: "12,000 sq ft",
    coverImage: "/images/mqt/06.jpg",
    coverAlt: "Marquardt Hinjewadi — open-plan office with feature ceiling",
    desc: "A dynamic modern workspace with open ceilings, collaboration zones, and flexible seating.",
    longDesc:
      "A contemporary corporate workspace for Marquardt India's Hinjewadi facility. Features exposed ceiling elements, a modern canteen, open-cell workspace areas, and varied seating zones that support both focused work and spontaneous collaboration. The palette blends industrial texture with warm accents.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/mqt/01.jpg", alt: "Third floor overview" },
      { src: "/images/mqt/02.jpg", alt: "Canteen area" },
      { src: "/images/mqt/03.jpg", alt: "Canteen seating" },
      { src: "/images/mqt/04.jpg", alt: "Dining zone" },
      { src: "/images/mqt/05.jpg", alt: "Open-cell workspace" },
      { src: "/images/mqt/06.jpg", alt: "Exposed ceiling design" },
      { src: "/images/mqt/07.jpg", alt: "Office passage" },
      { src: "/images/mqt/08.jpg", alt: "Workspace view 1" },
      { src: "/images/mqt/09.jpg", alt: "Workspace view 2" },
      { src: "/images/mqt/10.jpg", alt: "Interior detail" },
      { src: "/images/mqt/11.jpg", alt: "Completed floor" },
    ],
  },

  {
    slug: "tristone-flowtech",
    name: "Tristone Flowtech",
    sector: "Industrial & Office",
    city: "Pune",
    area: "28,000 sq ft",
    coverImage: "/images/tristone/01.jpg",
    coverAlt: "Tristone Flowtech — industrial and office interior",
    desc: "Combined industrial and office facility for an international automotive supplier.",
    longDesc:
      "A complete fit-out of Tristone Flowtech's India operations — combining a precision manufacturing support office, visitor reception, executive meeting rooms, and open workspace across a single contiguous floor plate. The design reflects the brand's German engineering precision while adapting to the local operational context.",
    category: "Industrial Construction",
    images: [
      { src: "/images/tristone/01.jpg", alt: "Facility overview" },
      { src: "/images/tristone/02.jpg", alt: "Workspace interior" },
      { src: "/images/tristone/03.jpg", alt: "Office area" },
      { src: "/images/tristone/04.jpg", alt: "Interior corridor" },
      { src: "/images/tristone/05.jpg", alt: "Meeting zone" },
      { src: "/images/tristone/06.jpg", alt: "Open floor plan" },
      { src: "/images/tristone/07.jpg", alt: "Workstation layout" },
      { src: "/images/tristone/08.jpg", alt: "Conference room" },
      { src: "/images/tristone/09.jpg", alt: "Ceiling detail" },
      { src: "/images/tristone/10.jpg", alt: "Lighting installation" },
      { src: "/images/tristone/11.jpg", alt: "Flooring and finishes" },
      { src: "/images/tristone/12.jpg", alt: "Completed space" },
    ],
  },

  {
    slug: "mazak-technology-centre",
    name: "Mazak Technology Centre",
    sector: "Industrial",
    city: "Pune",
    area: "35,000 sq ft",
    coverImage: "/images/mazak/01.jpg",
    coverAlt: "Mazak Technology Centre — industrial facility",
    desc: "State-of-the-art industrial facility combining manufacturing showroom and office space.",
    longDesc:
      "A landmark industrial construction project for Yamazaki Mazak India. The facility integrates a precision manufacturing showroom, technical training centre, and executive reception areas — all built to international standards. The project required close coordination with Mazak's global design team to align with their worldwide facility specifications.",
    category: "Industrial Construction",
    images: [
      { src: "/images/mazak/01.jpg", alt: "Facility overview" },
      { src: "/images/mazak/02.jpg", alt: "Manufacturing showroom" },
      { src: "/images/mazak/03.jpg", alt: "Technical area" },
      { src: "/images/mazak/04.jpg", alt: "Interior corridor" },
      { src: "/images/mazak/05.jpg", alt: "Reception lobby" },
      { src: "/images/mazak/06.jpg", alt: "Office workspace" },
      { src: "/images/mazak/07.jpg", alt: "Ceiling and structure" },
      { src: "/images/mazak/08.jpg", alt: "Workstation area" },
      { src: "/images/mazak/09.jpg", alt: "Conference room" },
      { src: "/images/mazak/10.jpg", alt: "Executive area" },
      { src: "/images/mazak/11.jpg", alt: "Building interior" },
      { src: "/images/mazak/12.jpg", alt: "Precision finishes" },
      { src: "/images/mazak/13.jpg", alt: "Lighting installation" },
      { src: "/images/mazak/14.jpg", alt: "Flooring detail" },
      { src: "/images/mazak/15.jpg", alt: "Interior view" },
      { src: "/images/mazak/16.jpg", alt: "Completed space" },
      { src: "/images/mazak/17.jpg", alt: "Final overview" },
    ],
  },

  {
    slug: "pyrotek",
    name: "Pyrotek India",
    sector: "Industrial",
    city: "Pune",
    area: "14,000 sq ft",
    coverImage: "/images/pyrotek/02.jpg",
    coverAlt: "Pyrotek India — industrial facility",
    desc: "Industrial and office fit-out for Pyrotek's India operations.",
    longDesc:
      "A complete interior and industrial fit-out for Pyrotek India's Pune facility, blending functional manufacturing-support areas with a professional corporate environment. The project was executed with Pyrotek's operational requirements at the forefront, delivering a workspace that supports both production and administration.",
    category: "Industrial Construction",
    images: [
      { src: "/images/pyrotek/01.jpg", alt: "Facility overview" },
      { src: "/images/pyrotek/02.jpg", alt: "Industrial area" },
      { src: "/images/pyrotek/03.jpg", alt: "Interior view" },
      { src: "/images/pyrotek/04.jpg", alt: "Office space" },
      { src: "/images/pyrotek/05.jpg", alt: "Production support" },
      { src: "/images/pyrotek/06.jpg", alt: "Completed facility" },
    ],
  },

  // ── Remaining projects ────────────────────────────────────────────────────

  {
    slug: "smbc-bank-bkc",
    name: "SMBC Bank — BKC",
    sector: "Banking & Financial",
    city: "Mumbai",
    area: "57,000 sq ft",
    coverImage: "/images/smbc/01.jpg",
    coverAlt: "SMBC Bank BKC — banking floor interior",
    desc: "A landmark banking interior across multiple floors in Mumbai's financial district.",
    longDesc:
      "Complete interior fit-out of SMBC Bank's Bandra Kurla Complex premises across two floors. The project spans executive banking halls, open-plan offices, conference suites, a premium boardroom, and client-facing areas — all delivered to international banking standards with meticulous attention to detail and compliance.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/smbc/01.jpg", alt: "Main banking hall" },
      { src: "/images/smbc/02.jpg", alt: "Executive corridor" },
      { src: "/images/smbc/03.jpg", alt: "Open-plan floor" },
      { src: "/images/smbc/04.jpg", alt: "Conference suite" },
      { src: "/images/smbc/05.jpg", alt: "Banking lobby" },
      { src: "/images/smbc/06.jpg", alt: "Reception area" },
      { src: "/images/smbc/07.jpg", alt: "Workstation zone" },
      { src: "/images/smbc/08.jpg", alt: "Boardroom" },
      { src: "/images/smbc/09.jpg", alt: "Executive zone" },
      { src: "/images/smbc/10.jpg", alt: "Meeting room" },
      { src: "/images/smbc/11.jpg", alt: "Ceiling and lighting detail" },
      { src: "/images/smbc/12.jpg", alt: "Interior corridor" },
      { src: "/images/smbc/13.jpg", alt: "Finished workspace" },
      { src: "/images/smbc/14.jpg", alt: "Entrance lobby" },
    ],
  },

  {
    slug: "hsbc-nagpur",
    name: "HSBC Bank — Nagpur",
    sector: "Banking & Financial",
    city: "Nagpur",
    area: "12,000 sq ft",
    coverImage: "/images/hsbc-nagpur/04.jpg",
    coverAlt: "HSBC Nagpur — signature moss wall with illuminated brand logo",
    desc: "Modern banking interior for HSBC's Nagpur branch, blending global brand standards with local execution.",
    longDesc:
      "A complete interior fit-out for HSBC Bank's Nagpur branch, delivered to the bank's global brand guidelines. The project encompasses a welcoming customer banking hall, teller counters, private banking rooms, back-office workspaces, and executive cabins — all finished with premium materials and brand-compliant design language.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/hsbc-nagpur/01.jpg", alt: "Banking hall" },
      { src: "/images/hsbc-nagpur/02.jpg", alt: "Customer area" },
      { src: "/images/hsbc-nagpur/03.jpg", alt: "Teller counter" },
      { src: "/images/hsbc-nagpur/04.jpg", alt: "Interior view" },
      { src: "/images/hsbc-nagpur/05.jpg", alt: "Office space" },
      { src: "/images/hsbc-nagpur/06.jpg", alt: "Meeting room" },
      { src: "/images/hsbc-nagpur/07.jpg", alt: "Workstation area" },
      { src: "/images/hsbc-nagpur/08.jpg", alt: "Corridor" },
      { src: "/images/hsbc-nagpur/09.jpg", alt: "Finished interior" },
    ],
  },

  {
    slug: "tti-india",
    name: "TTI India",
    sector: "Industrial & Office",
    city: "Pune",
    area: "9,500 sq ft",
    coverImage: "/images/tii/04.jpg",
    coverAlt: "TTI India — premium reception and office interior",
    desc: "Striking reception and workspace design for TTI India's state-of-the-art facility.",
    longDesc:
      "A premium interior fit-out for TTI India's Pune facility, featuring a bold and impactful reception area, modern executive meeting rooms, and a thoughtfully designed open workspace. The project was developed from concept renders through to final delivery, with close coordination between the design team and client.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/tii/04.jpg", alt: "Reception lobby render" },
      { src: "/images/tii/02.jpg", alt: "Canteen area" },
      { src: "/images/tii/03.jpg", alt: "Canteen — wide view" },
      { src: "/images/tii/01.jpg", alt: "Washroom detail" },
    ],
  },

  {
    slug: "zycus-hq",
    name: "Zycus HQ",
    sector: "IT Workspace",
    city: "Pune",
    area: "15,000 sq ft",
    coverImage: "/images/zycus/01.jpg",
    coverAlt: "Zycus HQ — modern IT workspace",
    desc: "Modern agile workspace for one of India's leading procurement technology firms.",
    longDesc:
      "A forward-thinking workplace design for Zycus's Pune headquarters, featuring open-plan collaborative areas, private focus zones, and social spaces that support the company's dynamic work culture. The fit-out was completed with minimal disruption to ongoing operations.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/zycus/01.jpg", alt: "Open-plan office" },
      { src: "/images/zycus/02.jpg", alt: "Workspace area" },
      { src: "/images/zycus/03.jpg", alt: "Office corridor" },
    ],
  },

  {
    slug: "igcc",
    name: "IGCC",
    sector: "Corporate Office",
    city: "Pune",
    area: "8,000 sq ft",
    coverImage: "/images/igcc/01.jpg",
    coverAlt: "IGCC — corporate office interior",
    desc: "A clean, professional corporate interior for IGCC's Pune office.",
    longDesc:
      "A complete interior fit-out for IGCC's Pune office, featuring contemporary workspaces, meeting rooms, and a welcoming reception area. The project was executed with precision and delivered to the client's exacting standards.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/igcc/01.jpg", alt: "Office interior" },
      { src: "/images/igcc/02.jpg", alt: "Workspace area" },
      { src: "/images/igcc/03.jpg", alt: "Meeting room" },
      { src: "/images/igcc/04.jpg", alt: "Interior view" },
      { src: "/images/igcc/05.jpg", alt: "Completed space" },
    ],
  },

  {
    slug: "chromewell",
    name: "Chromewell",
    sector: "Corporate Office",
    city: "Pune",
    area: "10,000 sq ft",
    coverImage: "/images/chromewell/01.jpg",
    coverAlt: "Chromewell — corporate office fit-out",
    desc: "A sleek, modern corporate office with premium finishes and functional design.",
    longDesc:
      "A contemporary corporate fit-out for Chromewell, combining premium aesthetics with highly functional workspaces. The project features a striking reception, open-plan workstations, private cabins, and well-designed collaborative zones that reflect the client's dynamic brand identity.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/chromewell/01.jpg", alt: "Office overview" },
      { src: "/images/chromewell/02.jpg", alt: "Workspace interior" },
      { src: "/images/chromewell/03.jpg", alt: "Collaboration zone" },
      { src: "/images/chromewell/04.jpg", alt: "Interior detail" },
      { src: "/images/chromewell/05.jpg", alt: "Office area" },
      { src: "/images/chromewell/06.jpg", alt: "Meeting room" },
      { src: "/images/chromewell/07.jpg", alt: "Completed project" },
    ],
  },

  {
    slug: "john-deere",
    name: "John Deere India",
    sector: "Agricultural & Industrial",
    city: "Pune",
    area: "18,000 sq ft",
    coverImage: "/images/john-deere/03.jpg",
    coverAlt: "John Deere India — workstation fit-out",
    desc: "State-of-the-art office and facility interior for the global equipment giant's India operations.",
    longDesc:
      "A high-spec fit-out for John Deere India's Pune facility, incorporating modern workspaces, technical areas, and collaborative zones that reflect the brand's precision engineering ethos. Delivered within tight timelines to support the company's India expansion.",
    category: "Industrial Construction",
    images: [
      { src: "/images/john-deere/03.jpg", alt: "Workstation installation in progress" },
      { src: "/images/john-deere/04.jpg", alt: "Open-plan floor installation" },
      { src: "/images/john-deere/05.jpg", alt: "Open-plan floor with yellow accents" },
      { src: "/images/john-deere/07.jpg", alt: "Office layout render" },
      { src: "/images/john-deere/01.jpg", alt: "Washroom detail" },
      { src: "/images/john-deere/02.jpg", alt: "Washroom detail" },
    ],
  },

  {
    slug: "marquardt-talegaon",
    name: "Marquardt — Talegaon",
    sector: "Industrial & Manufacturing",
    city: "Pune",
    area: "22,000 sq ft",
    coverImage: "/images/marquardt-talegaon/01.jpg",
    coverAlt: "Marquardt Talegaon — industrial facility fit-out",
    desc: "Industrial facility fit-out for Marquardt India's Talegaon manufacturing plant.",
    longDesc:
      "A comprehensive industrial facility fit-out for Marquardt India Private Limited at their Talegaon plant. The project covers production-support offices, canteen, locker rooms, reception, and executive areas — all designed to meet the client's German quality standards while complying with Indian industrial norms.",
    category: "Industrial Construction",
    images: [
      { src: "/images/marquardt-talegaon/01.jpg", alt: "Facility view 1" },
      { src: "/images/marquardt-talegaon/02.jpg", alt: "Facility view 2" },
      { src: "/images/marquardt-talegaon/03.jpg", alt: "Interior area" },
      { src: "/images/marquardt-talegaon/04.jpg", alt: "Office space" },
      { src: "/images/marquardt-talegaon/05.jpg", alt: "Production support area" },
      { src: "/images/marquardt-talegaon/06.jpg", alt: "Corridor" },
      { src: "/images/marquardt-talegaon/07.jpg", alt: "Interior detail" },
      { src: "/images/marquardt-talegaon/08.jpg", alt: "Completed facility" },
    ],
  },

  {
    slug: "vanderlande",
    name: "Vanderlande Industries",
    sector: "Industrial & Logistics",
    city: "Pune",
    area: "16,000 sq ft",
    coverImage: "/images/vanderlande/01.jpg",
    coverAlt: "Vanderlande Industries — office and industrial fit-out",
    desc: "Modern office and industrial facility for a global leader in logistics automation.",
    longDesc:
      "A high-spec fit-out for Vanderlande Industries' Pune facility — one of the world's leading suppliers of automated material handling systems. The project delivers a premium office environment alongside functional industrial support areas, executed to the client's international quality standards.",
    category: "Industrial Construction",
    images: [
      { src: "/images/vanderlande/01.jpg", alt: "Facility overview" },
      { src: "/images/vanderlande/02.jpg", alt: "Office interior" },
      { src: "/images/vanderlande/03.jpg", alt: "Workspace area" },
      { src: "/images/vanderlande/04.jpg", alt: "Collaboration zone" },
      { src: "/images/vanderlande/05.jpg", alt: "Interior view" },
      { src: "/images/vanderlande/06.jpg", alt: "Meeting room" },
      { src: "/images/vanderlande/07.jpg", alt: "Industrial area" },
      { src: "/images/vanderlande/08.jpg", alt: "Corridor" },
      { src: "/images/vanderlande/09.jpg", alt: "Completed space" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
