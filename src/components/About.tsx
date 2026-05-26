import Image from "next/image";
import Link from "next/link";

const metrics = [
  { value: "Pune", label: "base" },
  { value: "India", label: "project reach" },
  { value: "470+", label: "delivered spaces" },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-inner about-grid">
        <div className="about-copy">
          <p className="section-kicker">About Floor Space India</p>
          <h2 className="section-title">Designing today, enriching tomorrow.</h2>
          <p className="section-lede">
            We shape commercial spaces with calm detailing, dependable execution, and a clear sense
            of permanence.
          </p>

          <div className="about-actions">
            <Link className="fs-button fs-button-outline" href="#contact">
              Start a conversation
            </Link>
          </div>

          <div className="about-metrics" aria-label="Company highlights">
            {metrics.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-collage" aria-label="Project details">
          <div className="about-image">
            <Image
              alt="Completed reception area with marble and veneer finishes"
              className="about-photo"
              fill
              loading="eager"
              sizes="(max-width: 1020px) 100vw, 38vw"
              src="/images/smbc-reception.jpg"
            />
          </div>
          <div className="about-image about-image-small">
            <Image
              alt="Completed lounge and meeting area interior detail"
              className="about-photo"
              fill
              loading="eager"
              sizes="(max-width: 1020px) 100vw, 44vw"
              src="/images/octillion-lounge.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
