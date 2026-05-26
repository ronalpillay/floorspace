import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Home,
  MonitorSmartphone,
  ShoppingBag,
  Utensils,
} from "lucide-react";

const sectors = [
  {
    icon: Building2,
    title: "Corporate offices",
  },
  {
    icon: MonitorSmartphone,
    title: "IT and ITES spaces",
  },
  {
    icon: Factory,
    title: "Industrial facilities",
  },
  {
    icon: HeartPulse,
    title: "Healthcare and wellness",
  },
  {
    icon: ShoppingBag,
    title: "Retail environments",
  },
  {
    icon: Utensils,
    title: "Hospitality areas",
  },
  {
    icon: GraduationCap,
    title: "Institutions",
  },
  {
    icon: Home,
    title: "Residential interiors",
  },
];

export default function Sectors() {
  return (
    <section className="section services-section" id="services">
      <div className="section-inner sector-editorial">
        <div className="services-header">
          <div>
            <p className="section-kicker">Sectors we serve</p>
            <h2 className="section-title">Spaces we transform.</h2>
          </div>
        </div>

        <div className="sector-list" aria-label="Sectors served">
          {sectors.map((sector) => (
            <Link
              aria-label={`Discuss ${sector.title}`}
              className="sector-row"
              href="#contact"
              key={sector.title}
            >
              <span className="sector-icon" aria-hidden>
                <sector.icon size={24} strokeWidth={1.6} />
              </span>
              <h3>{sector.title}</h3>
              <ArrowUpRight className="sector-arrow" aria-hidden size={18} strokeWidth={1.7} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
