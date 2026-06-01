"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ARCHIVE_ACHIEVEMENTS } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import TiltGlowCard from "./TiltGlowCard";

const CATEGORY_COLORS: Record<string, string> = {
  CERTIFICATIONS: "#00d4ff",
  HACKATHONS: "#a78bfa",
  AWARDS: "#10b981",
  COMPETITIONS: "#f59e0b",
};

export default function Achievement() {
  return (
    <section
      id="achievements"
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 1,
        background:
          "linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.02) 50%, transparent 100%)",
        overflow: "hidden",
      }}
    >
      <div className="section-container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-label">// 04. achievements</span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "800",
                color: "#ccd6f6",
                letterSpacing: "-0.02em",
              }}
            >
              Milestones &amp;{" "}
              <span className="gradient-text">Recognition</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {/* Center wire */}
          <div
            className="achievement-wire"
            style={{
              position: "absolute",
              left: "50%",
              top: "0",
              bottom: "80px",
              width: "2px",
              background:
                "linear-gradient(180deg, #00d4ff, #a78bfa, rgba(167,139,250,0))",
              transform: "translateX(-50%)",
            }}
          />

          {ARCHIVE_ACHIEVEMENTS.map((item, i) => {
            const color = CATEGORY_COLORS[item.category] || "#00d4ff";
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal
                key={item.id}
                direction={isLeft ? "left" : "right"}
                delay={i * 0.15}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 48px 1fr",
                    alignItems: "center",
                    marginBottom: "48px",
                  }}
                  className="achievement-row"
                >
                  {/* Left card */}
                  <div
                    style={{
                      gridColumn: isLeft ? "1" : "3",
                      gridRow: "1",
                    }}
                  >
                    <TiltGlowCard
                      className={`glass achievement-card ${isLeft ? "left-card" : "right-card"}`}
                      glowColor={`${color}50`}
                      intensity={8}
                      style={{
                        borderRadius: "14px",
                        padding: "24px",
                        borderLeft: isLeft ? `3px solid ${color}` : "none",
                        borderRight: isLeft ? "none" : `3px solid ${color}`,
                        ["--accent-color" as any]: color,
                      }}
                    >
                      {/* Category badge */}
                      <div style={{ marginBottom: "12px" }}>
                        <span
                          className="cat-badge"
                          style={{
                            background: `${color}18`,
                            border: `1px solid ${color}40`,
                            color: color,
                          }}
                        >
                          {item.category}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: "700",
                          color: "#ccd6f6",
                          marginBottom: "8px",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "#8892b0",
                          marginBottom: "8px",
                        }}
                      >
                        {item.issuer}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontFamily: "monospace",
                            color: color,
                            fontWeight: "700",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {item.scope}
                        </span>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            color: "#495670",
                          }}
                        >
                          {item.date}
                        </span>
                      </div>

                      {item.credentialUrl && (
                        <a
                          href={item.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            marginTop: "14px",
                            fontSize: "0.75rem",
                            color: color,
                            textDecoration: "none",
                            fontWeight: "600",
                            letterSpacing: "0.05em",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            background: `${color}10`,
                            border: `1px solid ${color}30`,
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            (e.target as HTMLAnchorElement).style.background =
                              `${color}20`;
                          }}
                          onMouseLeave={(e) => {
                            (e.target as HTMLAnchorElement).style.background =
                              `${color}10`;
                          }}
                        >
                          ↗ View Credential
                        </a>
                      )}
                    </TiltGlowCard>
                  </div>

                  {/* Center dot */}
                  <div
                    style={{
                      gridColumn: "2",
                      gridRow: "1",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: color,
                        boxShadow: `0 0 20px ${color}`,
                        border: "3px solid #020408",
                      }}
                    />
                  </div>

                  {/* Placeholder for opposite side */}
                  <div
                    style={{
                      gridColumn: isLeft ? "3" : "1",
                      gridRow: "1",
                    }}
                  />
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View all link */}
        <ScrollReveal direction="up" delay={0.4}>
          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <Link
              href="/achievements"
              id="view-all-achievements"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 32px",
                borderRadius: "8px",
                border: "1px solid rgba(0,212,255,0.3)",
                color: "#00d4ff",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.875rem",
                letterSpacing: "0.05em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(0,212,255,0.08)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 20px rgba(0,212,255,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              View All Achievements →
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .achievement-wire {
            left: 20px !important;
            transform: none !important;
          }
          .achievement-row {
            grid-template-columns: 1fr !important;
            position: relative !important;
          }
          .achievement-row > div:nth-child(2) {
            display: flex !important;
            position: absolute !important;
            left: 12px !important;
            top: 24px !important;
            z-index: 5 !important;
            grid-column: auto !important;
            grid-row: auto !important;
          }
          .achievement-row > div:nth-child(3) {
            display: none !important;
          }
          .achievement-row > div:nth-child(1) {
            grid-column: 1 !important;
            padding-left: 44px !important;
          }
          .achievement-card {
            border-left: 3px solid var(--accent-color) !important;
            border-right: none !important;
          }
        }
      `}</style>
    </section>
  );
}
