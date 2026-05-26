"use client";

import {
  ArrowRight,
  Award,
  Building2,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Trophy,
} from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ListItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  link: string;
}

interface List2Props {
  heading?: string;
  items?: ListItem[];
}

export const List2 = ({
  heading = "Our Achievements & Recognition",
  items = [
    {
      icon: <Trophy />,
      title: "Industry Recognition",
      category: "Achievement",
      description: "Outstanding Performance Award — ranked #1 among commercial fit-out firms in India.",
      link: "#",
    },
    {
      icon: <Award />,
      title: "Excellence Award",
      category: "Recognition",
      description: "Best Workplace Design of the Year, Asia-Pacific Design Awards 2024.",
      link: "#",
    },
    {
      icon: <Lightbulb />,
      title: "Innovation Prize",
      category: "Technology",
      description: "Breakthrough Solution of the Year for modular GMP-certified environments.",
      link: "#",
    },
    {
      icon: <HeartHandshake />,
      title: "Client Satisfaction",
      category: "Service",
      description: "Top-Rated Design & Build Provider — 98% client retention across 15 years.",
      link: "#",
    },
    {
      icon: <Building2 />,
      title: "Global Leadership",
      category: "Delivery",
      description: "Executive team of the year, completing 470+ projects with zero scope failures.",
      link: "#",
    },
    {
      icon: <Leaf />,
      title: "Sustainability Impact",
      category: "Environmental",
      description: "Green Initiative Excellence — LEED-aligned delivery across 60% of portfolio.",
      link: "#",
    },
  ],
}: List2Props) => {
  return (
    <section
      style={{
        background: "var(--color-paper)",
        padding: "clamp(64px,8vw,120px) clamp(16px,4vw,48px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-outfit, sans-serif)",
            fontSize: "10px",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            color: "var(--color-bronze, #8d6f4d)",
            marginBottom: "16px",
          }}
        >
          Recognition
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "var(--color-ink, #20221f)",
            marginBottom: "clamp(40px, 6vw, 72px)",
            maxWidth: "640px",
            lineHeight: 1.08,
          }}
        >
          {heading}
        </h2>

        {/* List */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Separator />
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="group"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr auto",
                  alignItems: "center",
                  gap: "clamp(16px,3vw,40px)",
                  padding: "clamp(20px,2.5vw,28px) 0",
                  transition: "background 0.2s",
                }}
              >
                {/* Left: icon + title + category */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "52px",
                      height: "52px",
                      flexShrink: 0,
                      background: "var(--color-paper-muted, #e9e2d6)",
                      borderRadius: "10px",
                      color: "var(--color-bronze, #8d6f4d)",
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p
                      style={{
                        fontWeight: 600,
                        fontSize: "15px",
                        color: "var(--color-ink, #20221f)",
                        marginBottom: "3px",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--color-muted, #74766d)",
                      }}
                    >
                      {item.category}
                    </p>
                  </div>
                </div>

                {/* Middle: description */}
                <p
                  style={{
                    fontSize: "clamp(15px, 1.6vw, 18px)",
                    fontWeight: 500,
                    color: "var(--color-ink-soft, #50534c)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.description}
                </p>

                {/* Right: CTA */}
                <Button
                  variant="outline"
                  asChild
                  style={{
                    borderColor: "var(--color-line, rgba(32,34,31,0.16))",
                    color: "var(--color-ink, #20221f)",
                    background: "transparent",
                    fontSize: "12px",
                    letterSpacing: "0.05em",
                    gap: "6px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <a href={item.link}>
                    View project
                    <ArrowRight style={{ width: "14px", height: "14px" }} />
                  </a>
                </Button>
              </div>
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
