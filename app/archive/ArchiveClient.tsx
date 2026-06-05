"use client";
import { useState } from "react";
import Image from "next/image";
import { ARCHIVE_PROJECTS } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import TiltGlowCard from "@/components/TiltGlowCard";

const CATEGORY_COLORS: Record<string, string> = {
  MERN: "#00d4ff",
  PYTHON: "#a78bfa",
  PHP: "#f59e0b",
  JavaScript: "#34d399",
  "React Web App": "#61dafb"
};

const CATEGORIES = ["ALL", "MERN", "PYTHON", "PHP", "JavaScript", "React Web App"];

export default function ArchiveClient() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredProjects = selectedCategory === "ALL"
    ? ARCHIVE_PROJECTS
    : ARCHIVE_PROJECTS.filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div>
      {/* Category Filter Pills */}
      <ScrollReveal direction="up" delay={0.1}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "56px",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const color = cat === "ALL" ? "#ccd6f6" : CATEGORY_COLORS[cat] || "#8892b0";
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "8px 20px",
                  borderRadius: "100px",
                  background: isActive ? `${color}20` : "rgba(204,214,246,0.02)",
                  border: `1px solid ${isActive ? color : "rgba(204,214,246,0.1)"}`,
                  color: color,
                  fontSize: "0.78rem",
                  fontWeight: "700",
                  letterSpacing: "0.1em",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  boxShadow: isActive ? `0 0 16px ${color}25` : "none",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = `${color}60`;
                    e.currentTarget.style.background = `${color}08`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = "rgba(204,214,246,0.1)";
                    e.currentTarget.style.background = "rgba(204,214,246,0.02)";
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
          gap: "28px",
        }}
      >
        {filteredProjects.map((project, i) => {
          const color = CATEGORY_COLORS[project.category] || "#00d4ff";
          const textColor =
            project.category === "JavaScript" || project.category === "MERN"
              ? "#020408"
              : "#fff";

          return (
            <ScrollReveal key={`${project.id}-${selectedCategory}`} direction="up" delay={i * 0.04}>
              <TiltGlowCard
                glowColor={`${color}40`}
                intensity={6}
                style={{
                  height: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
                className="glass"
              >
                {/* Project image */}
                <div
                  style={{
                    height: "180px",
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <Image
                    src={project.img}
                    alt={project.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, rgba(2,4,8,0) 30%, rgba(2,4,8,0.85) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                    }}
                  >
                    <span
                      className="cat-badge"
                      style={{
                        background: `${color}20`,
                        border: `1px solid ${color}40`,
                        color: color,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h2
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      color: "#ccd6f6",
                      marginBottom: "10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {project.name}
                  </h2>

                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#8892b0",
                      lineHeight: 1.65,
                      marginBottom: "14px",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      flex: 1,
                    }}
                  >
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "5px",
                      marginBottom: "18px",
                    }}
                  >
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill"
                        style={{
                          background: `${color}08`,
                          borderColor: `${color}20`,
                          color: color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span
                        className="tag-pill"
                        style={{
                          background: "rgba(73,86,112,0.2)",
                          borderColor: "rgba(73,86,112,0.3)",
                          color: "#8892b0",
                        }}
                      >
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`archive-demo-${project.id}`}
                        className="archive-demo-link"
                        style={{
                          flex: 1,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "5px",
                          padding: "8px 14px",
                          borderRadius: "7px",
                          background: `linear-gradient(135deg, ${color}, ${color}99)`,
                          color: textColor,
                          textDecoration: "none",
                          fontSize: "0.75rem",
                          fontWeight: "700",
                          letterSpacing: "0.04em",
                          transition: "opacity 0.2s ease",
                        }}
                      >
                        ↗ Demo
                      </a>
                    )}
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`archive-source-${project.id}`}
                      className="archive-source-link"
                      style={{
                        flex: project.demo ? "none" : 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                        padding: "8px 14px",
                        borderRadius: "7px",
                        border: `1px solid ${color}30`,
                        color: color,
                        textDecoration: "none",
                        fontSize: "0.75rem",
                        fontWeight: "600",
                        letterSpacing: "0.04em",
                        transition: "filter 0.2s ease",
                        background: `${color}06`,
                      }}
                    >
                      ⌥ Source
                    </a>
                  </div>
                </div>
              </TiltGlowCard>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
