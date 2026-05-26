import { BadgeIndianRupee, ClipboardList, Clock, Users } from "lucide-react";

const values = [
  { icon: Clock, label: "Timeline-led execution" },
  { icon: BadgeIndianRupee, label: "Budget clarity before site" },
  { icon: ClipboardList, label: "Documented handover" },
  { icon: Users, label: "Single accountable team" },
];

export default function ValueStrip() {
  return (
    <div className="value-strip">
      <div className="value-strip-inner">
        {values.map((item) => (
          <div className="value-item" key={item.label}>
            <item.icon aria-hidden size={24} strokeWidth={1.7} />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
