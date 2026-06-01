"use client";
import ScrollReveal from "./ScrollReveal";
import TiltGlowCard from "./TiltGlowCard";

const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Som-Lalit Institute of Computer Application - Gujarat University",
    period: "2024 — PRESENT",
    status: "Pursuing",
    color: "#00d4ff",
    icon: "🎓",
    details: [
      "Currently executing Semester 4 core operations with a rock-solid 7.82 SGPA maintained throughout Semesters 1, 2, and 3.",
      "Deepening specialization in advanced data structures, full-stack database architectures, and engineering optimized, zero-latency microservices.",
      "Affiliation: Gujarat University",
      "Record Metric: SY Core // 7.82 Consistent SGPA",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC // Std 12)",
    institution: "H. B. Kapadia New High School",
    period: "2024",
    status: "Completed",
    color: "#a78bfa",
    icon: "📖",
    details: [
      "Graduated from the Commerce stream with a strong 77.71% score.",
      "Developed a rigorous baseline in financial systems, resource statistics, and logical accounting patterns—now applied directly to optimizing backend business logic and database models.",
      "Affiliation: GHSEB // Ahmedabad District",
      "Record Metric: 77.71% Academic Score",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC // Std 10)",
    institution: "H. B. Kapadia New High School",
    period: "2022",
    status: "Completed",
    color: "#10b981",
    icon: "📚",
    details: [
      "Graduated secondary board matrix with an 81.67% score, validating deep early aptitude for logical reasoning, core science layouts, and systematic hardware problem solving.",
      "Affiliation: GSEB // Ahmedabad District",
      "Record Metric: 81.67% Graduation Rank",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: "100px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-label">// 05. education</span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "800",
                color: "#ccd6f6",
                letterSpacing: "-0.02em",
              }}
            >
              Academic{" "}
              <span className="gradient-text">Foundation</span>
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {EDUCATION.map((edu, i) => (
            <ScrollReveal key={edu.degree} direction="up" delay={i * 0.15}>
              <TiltGlowCard
                className="glass education-card"
                glowColor={`${edu.color}40`}
                intensity={6}
                style={{
                  borderRadius: "16px",
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden",
                  borderLeft: `4px solid ${edu.color}`,
                }}
              >
                {/* Glow bg */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${edu.color}08 0%, transparent 70%)`,
                  }}
                />

                <div
                  className="education-content-wrapper"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "12px",
                      background: `${edu.color}15`,
                      border: `1px solid ${edu.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      flexShrink: 0,
                    }}
                  >
                    {edu.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: "700",
                          color: "#ccd6f6",
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <span
                        className="cat-badge"
                        style={{
                          background: `${edu.color}15`,
                          border: `1px solid ${edu.color}30`,
                          color: edu.color,
                        }}
                      >
                        {edu.status}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: edu.color,
                        fontWeight: "600",
                        marginBottom: "4px",
                      }}
                    >
                      {edu.institution}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#495670",
                        marginBottom: "16px",
                        fontFamily: "monospace",
                      }}
                    >
                      {edu.period}
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      {edu.details.map((d) => (
                        <li
                          key={d}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            fontSize: "0.85rem",
                            color: "#8892b0",
                          }}
                        >
                          <span
                            style={{
                              color: edu.color,
                              marginTop: "2px",
                              flexShrink: 0,
                            }}
                          >
                            ▸
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltGlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .education-card {
            padding: 20px !important;
          }
        }
        @media (max-width: 500px) {
          .education-content-wrapper {
            flex-direction: column !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
