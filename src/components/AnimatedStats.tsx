"use client";

import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";

interface Stat {
  value: string;
  label: string;
}

function StatItem({ value, label, triggered }: Stat & { triggered: boolean }) {
  // Parse numeric part and suffix (e.g. "470+" → 470, "+")
  const match = value.match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const isNumeric = match !== null;

  const count = useCounter(numeric, 1800, triggered && isNumeric);

  return (
    <div className="c-stats-value">
      {isNumeric ? `${count}${suffix}` : value}
    </div>
  );
}

export default function AnimatedStats({ stats }: { stats: Stat[] }) {
  const { ref, inView } = useInView(0.3);

  return (
    <section className="c-stats-strip" aria-label="Key metrics" ref={ref}>
      {stats.map((s, i) => (
        <div className="c-stats-item" key={s.label}>
          {i > 0 && <div className="c-stats-divider" aria-hidden />}
          <StatItem {...s} triggered={inView} />
          <p className="c-stats-label">{s.label}</p>
        </div>
      ))}
    </section>
  );
}
