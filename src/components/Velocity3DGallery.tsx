"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";

/* ─── ScrambledText ────────────────────────────────────────────── */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function useScramble(text: string, active: boolean) {
  const [display, setDisplay] = useState(text);
  const ivRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (ivRef.current) clearInterval(ivRef.current);
    if (!active) { setDisplay(text); return; }
    let i = 0;
    ivRef.current = setInterval(() => {
      setDisplay(
        text.split("").map((c, j) => {
          if (c === " ") return " ";
          if (j < i) return c;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join("")
      );
      if (i++ >= text.length) {
        clearInterval(ivRef.current!);
        setDisplay(text);
      }
    }, 28);
    return () => { if (ivRef.current) clearInterval(ivRef.current); };
  }, [active, text]);

  return display;
}

/* ─── Types ────────────────────────────────────────────────────── */
interface Project {
  name: string;
  sector: string;
  city: string;
  area: string;
  image: string;
}

/* ─── Card ─────────────────────────────────────────────────────── */
function Card3D({
  project,
  index,
  total,
  smoothVelocity,
}: {
  project: Project;
  index: number;
  total: number;
  smoothVelocity: ReturnType<typeof useSpring>;
}) {
  const [hovered, setHovered] = useState(false);
  const scrambled = useScramble(project.name, hovered);

  // -1 (leftmost card) → +1 (rightmost card)
  const norm = total > 1 ? (index / (total - 1)) * 2 - 1 : 0;

  // Wave: left cards tilt one way, right the other — velocity sets intensity
  const rotateY = useTransform(smoothVelocity, (v) =>
    (Math.max(-800, Math.min(800, v)) / 800) * norm * 20
  );

  // All cards share a uniform forward/back tilt from velocity
  const rotateX = useTransform(smoothVelocity, (v) =>
    (Math.max(-800, Math.min(800, v)) / 800) * -9
  );

  return (
    <motion.div
      className="v3d-card"
      style={{ rotateY, rotateX }}
      whileHover={{ z: 80, scale: 1.05 }}
      whileTap={{ z: 40, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <Link href="/projects" className="v3d-link" aria-label={project.name}>
        {/* Image */}
        <div className="v3d-img-wrap">
          <Image
            alt={project.name}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 85vw, 380px"
            src={project.image}
            style={{ objectFit: "cover" }}
            className="v3d-img"
          />
          <motion.div
            className="v3d-overlay"
            animate={{ opacity: hovered ? 0.85 : 0.55 }}
            transition={{ duration: 0.3 }}
            aria-hidden
          />
        </div>

        {/* Animated label — reveals on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="v3d-label"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="v3d-label-sector">{project.sector}</p>
              <p className="v3d-label-name">{scrambled}</p>
              <p className="v3d-label-loc">
                {project.city}&nbsp;·&nbsp;{project.area}
              </p>
              <span className="v3d-label-cta">
                View Project&nbsp;↗
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
}

/* ─── Main component ───────────────────────────────────────────── */
export default function Velocity3DGallery({ projects }: { projects: Project[] }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  // Physics-based spring smooths the raw velocity into a silky value
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
    restDelta: 0.001,
  });

  return (
    <section className="v3d-section" id="projects" aria-labelledby="v3d-h">
      <div className="v3d-header">
        <div className="v3d-header-left">
          <p className="v3d-kicker">Selected Work</p>
          <h2 className="v3d-headline" id="v3d-h">Featured Projects</h2>
        </div>
        <Link href="/projects" className="v3d-all">
          View All Projects →
        </Link>
      </div>

      {/* Perspective stage — clips overflow, provides 3D context */}
      <div className="v3d-stage">
        <div className="v3d-track">
          {projects.map((p, i) => (
            <Card3D
              key={p.name}
              project={p}
              index={i}
              total={projects.length}
              smoothVelocity={smoothVelocity}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
