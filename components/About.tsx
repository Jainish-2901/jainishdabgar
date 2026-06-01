"use client";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import TiltGlowCard from "./TiltGlowCard";

const TIMELINE = [
  {
    year: "2026",
    title: "National Hackathon Competitor",
    detail: "36-hour offline hackathon at Gandhinagar University — IEEE",
    color: "#00d4ff",
  },
  {
    year: "2025",
    title: "IIT Kharagpur NPTEL — Java Elite Silver",
    detail: "86% score — National Program on Technology Enhanced Learning",
    color: "#a78bfa",
  },
  {
    year: "2025",
    title: "Full-Stack MERN Developer",
    detail:
      "Started to build production-grade applications across MERN, Python & PHP",
    color: "#10b981",
  },
  {
    year: "2024",
    title: "Started BS(B.C.A.)",
    detail: "Pursuing Bachelor of Science in Computer Applications",
    color: "#f59e0b",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <div className="section-container">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-label">// 01. about.me</span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "800",
                color: "#ccd6f6",
                letterSpacing: "-0.02em",
              }}
            >
              Engineered for{" "}
              <span className="gradient-text-violet">impact</span>
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* ── Left: Bio ── */}
          <div>
            <ScrollReveal direction="left" delay={0.1}>
              <TiltGlowCard
                className="glass about-bio-card"
                style={{
                  borderRadius: "16px",
                  padding: "40px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Avatar Image */}
                <div
                  className="about-avatar-wrapper"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    border: "2px solid rgba(0,212,255,0.4)",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "24px",
                    boxShadow: "0 0 30px rgba(0,212,255,0.25)",
                  }}
                >
                  <Image
                    src="https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289032/jainishdabgar_brn6dx.jpg"
                    alt="Jainish Dabgar"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="80px"
                    priority
                  />
                </div>

                <h3
                  className="about-operator-name"
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#ccd6f6",
                    marginBottom: "8px",
                  }}
                >
                  Jainish Dabgar
                </h3>
                <p
                  className="about-operator-role"
                  style={{
                    fontSize: "0.85rem",
                    color: "#00d4ff",
                    fontWeight: "600",
                    letterSpacing: "0.1em",
                    marginBottom: "20px",
                    fontFamily: "monospace",
                  }}
                >
                  Full-Stack Web Developer
                </p>

                <p
                  style={{
                    color: "#8892b0",
                    lineHeight: 1.8,
                    marginBottom: "16px",
                    fontSize: "0.95rem",
                  }}
                >
                  I&apos;m a full-stack web developer with a passion for crafting
                  performant, visually captivating digital products. I specialize
                  in the MERN stack and modern web architectures that balance
                  elegance with scalability.
                </p>

                <p
                  style={{
                    color: "#8892b0",
                    lineHeight: 1.8,
                    marginBottom: "24px",
                    fontSize: "0.95rem",
                  }}
                >
                  From serving as the{" "}
                  <span style={{ color: "#ccd6f6", fontWeight: "600" }}>CTO & Co-Organizer</span> of{" "}
                  <a
                    href="https://www.codebuilders.co.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#00d4ff",
                      textDecoration: "none",
                      fontWeight: "600",
                      borderBottom: "1px dashed rgba(0, 212, 255, 0.4)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.borderBottomColor = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#00d4ff";
                      e.currentTarget.style.borderBottomColor = "rgba(0, 212, 255, 0.4)";
                    }}
                  >
                    Code Builders
                  </a>{" "}
                  to engineering AI-powered academic platforms like{" "}
                  <a
                    href="https://gyanstack.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#a78bfa",
                      textDecoration: "none",
                      fontWeight: "600",
                      borderBottom: "1px dashed rgba(167, 139, 250, 0.4)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                      e.currentTarget.style.borderBottomColor = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#a78bfa";
                      e.currentTarget.style.borderBottomColor = "rgba(167, 139, 250, 0.4)";
                    }}
                  >
                    GyanStack
                  </a>{" "}
                  — I ship products that solve real problems with clean, maintainable code.
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[
                    "React.js",
                    "Next.js",
                    "Node.js",
                    "MongoDB",
                    "Python",
                    "TypeScript",
                  ].map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info grid */}
                <div
                  className="about-info-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginTop: "28px",
                    paddingTop: "24px",
                    borderTop: "1px solid rgba(0,212,255,0.1)",
                  }}
                >
                  {[
                    { label: "Location", value: "India 🇮🇳" },
                    { label: "Status", value: "Open to Work ✅" },
                    { label: "Focus", value: "Full-Stack Dev" },
                    { label: "Degree", value: "BS(B.C.A.)" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div
                        style={{
                          fontSize: "0.7rem",
                          color: "#495670",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "2px",
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#ccd6f6",
                          fontWeight: "500",
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </TiltGlowCard>
            </ScrollReveal>
          </div>

          {/* ── Right: Timeline ── */}
          <div style={{ position: "relative" }}>
            <ScrollReveal direction="right" delay={0.2}>
              <p
                className="section-label"
                style={{ marginBottom: "32px", display: "block" }}
              >
                Journey Timeline
              </p>
            </ScrollReveal>

            <div style={{ position: "relative" }}>
              {/* Vertical wire */}
              <div
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "0",
                  bottom: "0",
                  width: "2px",
                  background:
                    "linear-gradient(180deg, #00d4ff, #a78bfa, transparent)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  paddingLeft: "52px",
                }}
              >
                {TIMELINE.map((item, i) => (
                  <ScrollReveal
                    key={`${item.year}-${item.title}`}
                    direction="right"
                    delay={0.1 * i + 0.3}
                  >
                    <div style={{ position: "relative" }}>
                      {/* Dot */}
                      <div
                        style={{
                          position: "absolute",
                          left: "-40px",
                          top: "4px",
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: item.color,
                          border: "2px solid rgba(2,4,8,0.8)",
                          boxShadow: `0 0 12px ${item.color}80`,
                        }}
                      />

                      {/* Card */}
                      <div
                        className="glass"
                        style={{
                          borderRadius: "12px",
                          padding: "20px 24px",
                          borderLeft: `3px solid ${item.color}`,
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: "700",
                            letterSpacing: "0.15em",
                            color: item.color,
                            fontFamily: "monospace",
                          }}
                        >
                          {item.year}
                        </span>
                        <h4
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: "700",
                            color: "#ccd6f6",
                            margin: "6px 0 4px",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          style={{
                            fontSize: "0.82rem",
                            color: "#8892b0",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-avatar-wrapper {
            margin: 0 auto 24px !important;
          }
          .about-operator-name,
          .about-operator-role {
            text-align: center !important;
          }
        }
        @media (max-width: 600px) {
          .about-bio-card {
            padding: 20px !important;
          }
        }
        @media (max-width: 480px) {
          .about-info-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
