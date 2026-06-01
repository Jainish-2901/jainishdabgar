"use client";
import ScrollReveal from "./ScrollReveal";
import TiltGlowCard from "./TiltGlowCard";

const EXPERIENCE = [
  {
    role: "CTO, Co Organizer",
    company: "Code Builders BCA",
    period: "2025 — Present",
    type: "ID // CTO",
    color: "#00d4ff",
    icon: "🚀",
    achievements: [
      "Lead the technical direction and product strategy for a rapidly growing student community of 150+ developers.",
      "Architect and oversee the development of high-impact educational content, including comprehensive MERN stack roadmaps, system design guides, and interview preparation resources.",
      "Spearheaded the Journey to Industry initiative, creating a structured pipeline that transitions students from foundational concepts to production-level engineering skills.",
      "Facilitate hands-on workshops and technical deep-dives, mentoring peers on complex topics such as advanced database management, CI/CD pipelines, and secure API development.",
    ],
    tags: ["MERN Stack", "React.js", "Node.js", "System Design", "CI/CD"],
  },
  {
    role: "Operations Specialist & Digital Architect",
    company: "Jitendra Kumar Manharlal Chhatriwala",
    period: "2024 — Present",
    type: "ID // FAMILY_ENTERPRISE",
    color: "#a78bfa",
    icon: "👔",
    achievements: [
      "Spearheading the digital and operational workflow modernization for a family-owned retail enterprise, bridging daily storefront logistics with modern digital solutions.",
      "Designing high-impact commercial marketing banners, print materials, and localized advertisements to scale regional storefront foot traffic and brand awareness.",
      "Architecting internal operations infrastructure by generating dynamic online invoicing systems, digitizing sales pipelines, and managing active inventory logs.",
      "Actively managing customer acquisition, handling direct-to-consumer product sales, and translating storefront consumer behavior trends into targeted marketing metrics.",
    ],
    tags: ["Operations", "Branding", "Dynamic Invoicing", "Inventory", "Digital Architect"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 0",
        position: "relative",
        zIndex: 1,
        background:
          "linear-gradient(180deg, transparent 0%, rgba(167,139,250,0.02) 50%, transparent 100%)",
      }}
    >
      <div className="section-container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-label">// 06. experience</span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "800",
                color: "#ccd6f6",
                letterSpacing: "-0.02em",
              }}
            >
              Work{" "}
              <span className="gradient-text-violet">Experience</span>
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            maxWidth: "880px",
            margin: "0 auto",
          }}
        >
          {EXPERIENCE.map((exp, i) => (
            <ScrollReveal key={exp.company} direction="up" delay={i * 0.15}>
              <TiltGlowCard
                className="glass experience-card"
                glowColor={`${exp.color}40`}
                intensity={6}
                style={{
                  borderRadius: "16px",
                  padding: "36px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Background accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                  }}
                />

                <div
                  className="experience-header-wrapper"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <div className="experience-company-meta" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "12px",
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.4rem",
                      }}
                    >
                      {exp.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "700",
                          color: "#ccd6f6",
                          marginBottom: "4px",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.9rem",
                          color: exp.color,
                          fontWeight: "600",
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                  </div>

                  <div className="experience-period-badge" style={{ textAlign: "right" }}>
                    <span
                      className="cat-badge"
                      style={{
                        background: `${exp.color}15`,
                        border: `1px solid ${exp.color}30`,
                        color: exp.color,
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      {exp.type}
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "#495670",
                        fontFamily: "monospace",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  {exp.achievements.map((ach) => (
                    <li
                      key={ach}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "0.875rem",
                        color: "#8892b0",
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{ color: exp.color, flexShrink: 0, marginTop: "3px" }}
                      >
                        ▸
                      </span>
                      {ach}
                    </li>
                  ))}
                </ul>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tag-pill"
                      style={{
                        background: `${exp.color}08`,
                        borderColor: `${exp.color}25`,
                        color: exp.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltGlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .experience-card {
            padding: 20px !important;
          }
        }
        @media (max-width: 550px) {
          .experience-header-wrapper {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .experience-period-badge {
            text-align: left !important;
          }
          .experience-company-meta {
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
