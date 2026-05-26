import Image from "next/image";

const steps = [
  {
    title: "Consultation",
  },
  {
    title: "Planning",
  },
  {
    title: "Design development",
  },
  {
    title: "Execution",
  },
  {
    title: "Quality & handover",
  },
];

export default function Process() {
  return (
    <section className="section process-section" id="process">
      <div className="section-inner process-editorial">
        <div className="process-visual" aria-hidden>
          <Image
            alt=""
            className="process-photo"
            fill
            loading="eager"
            sizes="(max-width: 900px) 100vw, 44vw"
            src="/images/octillion-boardroom.jpg"
          />
        </div>

        <div className="process-copy">
          <div>
            <p className="section-kicker">Our process</p>
            <h2 className="section-title">A measured way to build.</h2>
          </div>

          <div className="process-list">
            {steps.map((step, index) => (
              <article className="process-item" key={step.title}>
                <span className="process-num">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="process-title">{step.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
