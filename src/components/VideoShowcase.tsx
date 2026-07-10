"use client";

const videos = [
  { src: "/videos/floorspace.mp4", label: "Floor-Space India" },
  { src: "/videos/floor-space-corporate.mp4", label: "Corporate Projects" },
  { src: "/videos/zycus-project.mp4", label: "Zycus — Corporate Office" },
  { src: "/videos/btpl.mp4", label: "BTPL Project" },
];

export default function VideoShowcase() {
  return (
    <section className="section c-video-section" aria-labelledby="video-h">
      <div className="section-inner">
        <p className="section-kicker">In Motion</p>
        <h2 className="section-title" id="video-h" style={{ marginBottom: 36 }}>
          Projects, captured.
        </h2>
        <div className="c-video-grid">
          {videos.map((v) => (
            <div className="c-video-card" key={v.src}>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                aria-label={v.label}
              >
                <source src={v.src} type="video/mp4" />
              </video>
              <p className="c-video-caption">{v.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
