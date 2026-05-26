import Image from "next/image";

const capabilities = [
  {
    title: "General contracting",
    kicker: "Plan / Build / Deliver",
    text: "One accountable site team from pre-construction to handover.",
    image: "/images/mazak-lobby.jpg",
  },
  {
    title: "Commercial interiors",
    kicker: "Design / Detail / Execute",
    text: "Workplaces shaped for focus, movement, hospitality, and daily use.",
    image: "/images/zycus-openplan.jpg",
  },
];

export default function FeaturedWork() {
  return (
    <section className="section capability-section" id="portfolio">
      <div className="section-inner">
        <div className="work-header">
          <div>
            <p className="section-kicker">Core capabilities</p>
            <h2 className="section-title">Built with restraint. Delivered with control.</h2>
          </div>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability, index) => (
            <article className="capability-card" key={capability.title}>
              <Image
                alt=""
                className="capability-image"
                fill
                priority={index === 0}
                sizes="(max-width: 900px) 100vw, 50vw"
                src={capability.image}
              />
              <div className="capability-content">
                <div className="capability-topline">
                  <span>{capability.kicker}</span>
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
