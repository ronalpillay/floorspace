import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "15+", label: "Years" },
  { value: "470+", label: "Projects" },
  { value: "Pan-India", label: "Delivery" },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media" aria-hidden>
        <Image
          alt=""
          className="hero-image"
          fill
          priority
          sizes="100vw"
          src="/images/octillion-lounge.jpg"
        />
      </div>

      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Interior design & turnkey solutions</p>
          <h1 className="hero-title">Spaces that work beautifully.</h1>
          <p className="hero-lede">
            Premium commercial interiors, planned and delivered with quiet precision.
          </p>
          <div className="hero-actions">
            <Link className="fs-button fs-button-primary" href="#contact">
              Discuss a project
              <ArrowRight aria-hidden size={17} strokeWidth={1.8} />
            </Link>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Company highlights">
          <div className="hero-proof">
            {stats.map((item) => (
              <div key={item.value}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
