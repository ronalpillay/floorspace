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
  {
    slug: "smbc-bank-bkc",
    name: "SMBC Bank — BKC",
    sector: "Banking & Financial",
    city: "Mumbai",
    area: "57,000 sq ft",
    coverImage: "/images/smbc-bkc-reception.jpg",
    coverAlt: "SMBC BKC — banking and executive floor interior",
    desc: "A landmark banking interior across multiple floors in Mumbai's financial district.",
    longDesc:
      "Complete interior fit-out of SMBC Bank's Bandra Kurla Complex premises across two floors. The project spans executive banking halls, open-plan offices, conference suites, a premium boardroom, and client-facing areas — all delivered to international banking standards with meticulous attention to detail and compliance.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/smbc-bkc-reception.jpg", alt: "Main reception lobby" },
      { src: "/images/smbc-bkc-corridor.jpg", alt: "Executive corridor" },
      { src: "/images/smbc-boardroom.jpg", alt: "Premium boardroom" },
      { src: "/images/smbc-conference.jpg", alt: "Conference suite" },
      { src: "/images/smbc-entrance.jpg", alt: "Main entrance" },
      { src: "/images/smbc-lobby.jpg", alt: "Banking lobby" },
      { src: "/images/smbc-reception.jpg", alt: "Reception area" },
      { src: "/images/smbc/001.jpg", alt: "Banking floor interior" },
      { src: "/images/smbc/005.jpg", alt: "Office workspace" },
      { src: "/images/smbc/007.jpg", alt: "Open plan floor" },
      { src: "/images/smbc/010.jpg", alt: "Executive zone" },
      { src: "/images/smbc/013.jpg", alt: "Corridor view" },
      { src: "/images/smbc/018.jpg", alt: "Meeting room" },
      { src: "/images/smbc/020.jpg", alt: "Workstation area" },
      { src: "/images/smbc/025.jpg", alt: "Interior detail" },
      { src: "/images/smbc/030.jpg", alt: "Ceiling and lighting" },
      { src: "/images/smbc/036.jpg", alt: "Finished space" },
    ],
  },
  {
    slug: "octillion-capital",
    name: "Octillion Capital HQ",
    sector: "Corporate Office",
    city: "Pune",
    area: "30,000 sq ft",
    coverImage: "/images/octillion-reception-main.jpg",
    coverAlt: "Octillion Capital — premium corporate headquarters",
    desc: "Premium corporate headquarters with lounge, boardroom, and open-plan floors.",
    longDesc:
      "A flagship corporate headquarters for Octillion Capital, featuring an impressive reception, executive boardroom suites, biophilic lounges, and expansive open-plan workspaces. The design balances prestige with practicality — integrating natural elements, premium materials, and intelligent space planning across multiple floors.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/octillion-reception-main.jpg", alt: "Grand reception" },
      { src: "/images/octillion-boardroom-main.jpg", alt: "Premium boardroom" },
      { src: "/images/octillion-biophilic.jpg", alt: "Biophilic lounge" },
      { src: "/images/octillion-boardroom.jpg", alt: "Boardroom detail" },
      { src: "/images/octillion-cafeteria.jpg", alt: "Cafeteria" },
      { src: "/images/octillion-collab.jpg", alt: "Collaboration zone" },
      { src: "/images/octillion-conference.jpg", alt: "Conference room" },
      { src: "/images/octillion-lounge.jpg", alt: "Executive lounge" },
      { src: "/images/octillion-openplan.jpg", alt: "Open-plan workspace" },
      { src: "/images/octillion-planters.jpg", alt: "Biophilic planters" },
      { src: "/images/octillion-reception.jpg", alt: "Reception desk" },
      { src: "/images/octillion-workspace.jpg", alt: "Workspace area" },
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
      { src: "/images/tristone/12.jpg", alt: "Interior view" },
      { src: "/images/tristone/13.jpg", alt: "Workspace detail" },
      { src: "/images/tristone/14.jpg", alt: "Office corridor" },
      { src: "/images/tristone/15.jpg", alt: "Completed space" },
      { src: "/images/tristone-reception.jpg", alt: "Reception area" },
      { src: "/images/tristone-corridor.jpg", alt: "Main corridor" },
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
    category: "Interior Fit Out",
    images: [
      { src: "/images/john-deere/03.jpg", alt: "Workstation fit-out" },
      { src: "/images/john-deere/04.jpg", alt: "Open-plan floor" },
      { src: "/images/john-deere/06.jpg", alt: "Completed office view" },
    ],
  },
  {
    slug: "mqt-workspace",
    name: "MQT Modern Workspace",
    sector: "Corporate Office",
    city: "Pune",
    area: "12,000 sq ft",
    coverImage: "/images/mqt/open-ceiling.jpg",
    coverAlt: "MQT Workspace — open-plan office with feature ceiling",
    desc: "A dynamic modern workspace with open ceilings, collaboration pods, and flexible zones.",
    longDesc:
      "A contemporary corporate workspace designed for agility and creativity. Features exposed ceiling elements, modular collaboration pods, and varied seating zones that support both focused work and spontaneous collaboration. The palette blends industrial texture with warm accents for a distinctly human environment.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/mqt/open-ceiling.jpg", alt: "Exposed ceiling design" },
      { src: "/images/mqt/open-cell.jpg", alt: "Open cell workspace" },
      { src: "/images/mqt/canteen-1.jpg", alt: "Canteen and dining" },
      { src: "/images/mqt/canteen-2.jpg", alt: "Canteen seating area" },
      { src: "/images/mqt/floor.jpg", alt: "Flooring detail" },
      { src: "/images/mqt/passage.jpg", alt: "Office passage" },
    ],
  },
  {
    slug: "tti-india",
    name: "TTI India",
    sector: "Industrial & Office",
    city: "Pune",
    area: "9,500 sq ft",
    coverImage: "/images/tii/reception-1.jpg",
    coverAlt: "TTI India — premium reception and office interior",
    desc: "Striking reception and workspace design for TTI India's state-of-the-art facility.",
    longDesc:
      "A premium interior fit-out for TTI India's Pune facility, featuring a bold and impactful reception area, modern executive meeting rooms, and a thoughtfully designed open workspace. The project was developed from concept renders through to final delivery, with close coordination between the design team and client.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/tii/reception-1.jpg", alt: "Main reception" },
      { src: "/images/tii/reception-2.jpg", alt: "Reception desk" },
      { src: "/images/tii/reception-3.jpg", alt: "Reception lobby" },
      { src: "/images/tii/reception-4.jpg", alt: "Reception seating" },
      { src: "/images/tii/render-1.jpg", alt: "Design render — view 1" },
      { src: "/images/tii/render-2.jpg", alt: "Design render — view 2" },
      { src: "/images/tii/view-1.jpg", alt: "Completed office view" },
    ],
  },
  {
    slug: "mazak-technology-centre",
    name: "Mazak Technology Centre",
    sector: "Industrial",
    city: "Pune",
    area: "35,000 sq ft",
    coverImage: "/images/mazak-lobby.jpg",
    coverAlt: "Mazak Technology Centre — industrial facility",
    desc: "State-of-the-art industrial facility combining manufacturing showroom and office space.",
    longDesc:
      "A landmark industrial construction project for Yamazaki Mazak India. The facility integrates a precision manufacturing showroom, technical training centre, and executive reception areas — all built to international standards. The project required close coordination with Mazak's global design team to align with their worldwide facility specifications.",
    category: "Industrial Construction",
    images: [
      { src: "/images/mazak-lobby.jpg", alt: "Technology centre lobby" },
      { src: "/images/mazak-exterior.jpg", alt: "Building exterior" },
    ],
  },
  {
    slug: "zycus-hq",
    name: "Zycus HQ",
    sector: "IT Workspace",
    city: "Pune",
    area: "15,000 sq ft",
    coverImage: "/images/zycus-openplan.jpg",
    coverAlt: "Zycus HQ — modern IT workspace",
    desc: "Modern agile workspace for one of India's leading procurement technology firms.",
    longDesc:
      "A forward-thinking workplace design for Zycus's Pune headquarters, featuring open-plan collaborative areas, private focus zones, and social spaces that support the company's dynamic work culture. The fit-out was completed with minimal disruption to ongoing operations.",
    category: "Interior Fit Out",
    images: [
      { src: "/images/zycus-openplan.jpg", alt: "Open-plan office" },
      { src: "/images/zycus-corridor.jpg", alt: "Office corridor" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
