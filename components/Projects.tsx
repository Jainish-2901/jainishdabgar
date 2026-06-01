"use client";
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ARCHIVE_PROJECTS, Project } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import TiltGlowCard from "./TiltGlowCard";

// ─── Project Card Wrapper (with TiltGlowCard for the Active Front Card) ───
interface ProjectCardWrapperProps {
  project: Project;
  isActive: boolean;
}

function ProjectCardWrapper({ project, isActive }: ProjectCardWrapperProps) {
  const cardContent = (
    <div
      className="glass project-card-body-wrapper"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        border: isActive
          ? "1px solid rgba(0, 212, 255, 0.35)"
          : "1px solid rgba(0, 212, 255, 0.12)",
        boxShadow: isActive
          ? "0 0 50px rgba(0, 212, 255, 0.08), 0 20px 60px rgba(0,0,0,0.5)"
          : "0 10px 30px rgba(0,0,0,0.3)",
        background: isActive
          ? "rgba(2, 4, 8, 0.85)"
          : "rgba(2, 4, 8, 0.65)",
        backdropFilter: "blur(20px)",
        transition: "border 0.3s, background 0.3s, box-shadow 0.3s",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Project Image */}
      <div
        className="project-card-image-wrapper"
        style={{
          height: "220px",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <Image
          src={project.img}
          alt={project.name}
          fill
          style={{
            objectFit: "cover",
            filter: isActive ? "none" : "brightness(0.4) contrast(0.9)",
            transition: "filter 0.4s ease",
          }}
          sizes="(max-width: 768px) 100vw, 600px"
          priority={isActive}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(2,4,8,0) 45%, rgba(2,4,8,0.92) 100%)",
          }}
        />
        {/* Category badge */}
        <div style={{ position: "absolute", top: "16px", left: "16px" }}>
          <span
            className="cat-badge"
            style={{
              background: "rgba(2, 4, 8, 0.75)",
              border: isActive
                ? "1px solid rgba(0, 212, 255, 0.4)"
                : "1px solid rgba(0, 212, 255, 0.15)",
              color: "#00d4ff",
              backdropFilter: "blur(8px)",
              fontSize: "0.65rem",
              fontWeight: "700",
              letterSpacing: "0.1em",
              padding: "4px 10px",
              borderRadius: "4px",
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div 
        className="project-card-content"
        style={{ padding: "26px 28px", flex: 1, display: "flex", flexDirection: "column" }}
      >
        <h3
          className="project-card-title"
          style={{
            fontSize: "1.1rem",
            fontWeight: "800",
            color: "#ccd6f6",
            marginBottom: "10px",
            lineHeight: 1.3,
          }}
        >
          {project.name}
        </h3>

        <p
          className="project-card-desc"
          style={{
            fontSize: "0.85rem",
            color: "#8892b0",
            lineHeight: 1.7,
            marginBottom: "20px",
            minHeight: "72px",
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
          className="project-card-tags"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            marginBottom: "24px",
          }}
        >
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="project-card-actions" style={{ display: "flex", gap: "12px", marginTop: "auto" }}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              id={`project-demo-${project.id}`}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "10px 18px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #00d4ff, #0090b8)",
                color: "#020408",
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: "700",
                letterSpacing: "0.05em",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,212,255,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              ↗ Live Demo
            </a>
          )}
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-source-${project.id}`}
            style={{
              flex: project.demo ? "none" : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
              padding: "10px 18px",
              borderRadius: "8px",
              border: "1px solid rgba(0,212,255,0.3)",
              color: "#00d4ff",
              textDecoration: "none",
              fontSize: "0.8rem",
              fontWeight: "600",
              letterSpacing: "0.05em",
              transition: "background 0.2s ease, box-shadow 0.2s ease",
              background: "rgba(0, 212, 255, 0.03)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,212,255,0.08)";
              e.currentTarget.style.boxShadow = "0 0 12px rgba(0,212,255,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0, 212, 255, 0.03)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ⌥ Source
          </a>
        </div>
      </div>
    </div>
  );

  if (isActive) {
    return (
      <TiltGlowCard
        glowColor="rgba(0, 212, 255, 0.4)"
        intensity={6}
        style={{ height: "100%", width: "100%" }}
      >
        {cardContent}
      </TiltGlowCard>
    );
  }

  return cardContent;
}

// ─── Main Projects Section ─────────────────────────────────────────
export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const count = ARCHIVE_PROJECTS.length;

  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + count) % count),
    [count]
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % count),
    [count]
  );

  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 1,
        background:
          "linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.012) 30%, rgba(167,139,250,0.012) 70%, transparent 100%)",
      }}
    >
      <div className="section-container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-label">// 03. projects.archive</span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "800",
                color: "#ccd6f6",
                letterSpacing: "-0.02em",
              }}
            >
              Project{" "}
              <span className="gradient-text">Showcase</span>
            </h2>
            <p
              style={{
                color: "#8892b0",
                marginTop: "12px",
                fontSize: "0.95rem",
              }}
            >
              {count} production-grade projects engineered across multiple stacks
            </p>
          </div>
        </ScrollReveal>

        {/* Stacked Cards Unified Layout */}
        <ScrollReveal direction="up" delay={0.15}>
          <div
            style={{
              maxWidth: "580px",
              margin: "0 auto",
              position: "relative",
            }}
            className="projects-unified-container"
          >
            {/* The 3D stack wrapper */}
            <div
              className="projects-deck-wrapper"
              style={{
                position: "relative",
                width: "100%",
                height: "560px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <AnimatePresence mode="popLayout">
                {Array.from({ length: 3 }).map((_, stackIndex) => {
                  const projectIndex = (activeIndex + stackIndex) % count;
                  const project = ARCHIVE_PROJECTS[projectIndex];
                  const isActive = stackIndex === 0;

                  // Stack offsets for beautiful 3D deck depth
                  const scale = 1 - stackIndex * 0.045;
                  const translateY = stackIndex * 16;
                  const opacity = isActive ? 1 : 0.8 - stackIndex * 0.35;
                  const zIndex = 10 - stackIndex;

                  return (
                    <motion.div
                      key={project.id}
                      className="projects-deck-card"
                      style={{
                        position: "absolute",
                        width: "100%",
                        zIndex: zIndex,
                        transformOrigin: "bottom center",
                        pointerEvents: isActive ? "auto" : "none",
                        height: "510px",
                      }}
                      initial={isActive ? { x: 0, opacity: 0, scale: 0.9 } : false}
                      animate={{
                        opacity: opacity,
                        scale: scale,
                        y: translateY,
                        // Tilt the background cards back for a natural stacked card look
                        rotateX: isActive ? 0 : -2.5 * stackIndex,
                      }}
                      exit={{
                        x: -320, // Clean fly-out swipe animation to the left
                        opacity: 0,
                        scale: 0.85,
                        rotate: -10,
                        transition: { duration: 0.38, ease: [0.32, 0.94, 0.6, 1] }
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 24,
                      }}
                    >
                      <ProjectCardWrapper project={project} isActive={isActive} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Controls Bar directly below the stack */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "32px",
                padding: "0 8px",
              }}
              className="projects-nav-controls"
            >
              {/* Left: Project counter */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span
                  style={{
                    fontSize: "0.68rem",
                    color: "#495670",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  Project Matrix
                </span>
                <span
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "800",
                    color: "#00d4ff",
                    fontFamily: "monospace",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {String(activeIndex + 1).padStart(2, "0")}{" "}
                  <span style={{ color: "#495670", fontWeight: "300" }}>/</span>{" "}
                  <span style={{ color: "#8892b0", fontSize: "0.95rem" }}>
                    {String(count).padStart(2, "0")}
                  </span>
                </span>
              </div>

              {/* Middle: Pagination Dots */}
              <div style={{ display: "flex", gap: "6px" }} className="desktop-dots-only">
                {ARCHIVE_PROJECTS.map((_, i) => (
                  <button
                    key={i}
                    id={`carousel-dot-${i}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Go to project ${i + 1}`}
                    style={{
                      width: i === activeIndex ? "24px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background:
                        i === activeIndex ? "#00d4ff" : "rgba(0,212,255,0.2)",
                      border: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      boxShadow:
                        i === activeIndex
                          ? "0 0 8px rgba(0,212,255,0.5)"
                          : "none",
                    }}
                  />
                ))}
              </div>

              {/* Right: Left-Right Navigation Buttons */}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  id="carousel-prev"
                  onClick={prev}
                  aria-label="Previous project"
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "10px",
                    border: "1px solid rgba(0,212,255,0.2)",
                    background: "rgba(2, 4, 8, 0.4)",
                    color: "#00d4ff",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,212,255,0.08)";
                    e.currentTarget.style.borderColor = "#00d4ff";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(0,212,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(2, 4, 8, 0.4)";
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  ←
                </button>

                <button
                  id="carousel-next"
                  onClick={next}
                  aria-label="Next project"
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "10px",
                    border: "1px solid rgba(0,212,255,0.2)",
                    background: "rgba(2, 4, 8, 0.4)",
                    color: "#00d4ff",
                    cursor: "pointer",
                    fontSize: "1.1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,212,255,0.08)";
                    e.currentTarget.style.borderColor = "#00d4ff";
                    e.currentTarget.style.boxShadow = "0 0 12px rgba(0,212,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(2, 4, 8, 0.4)";
                    e.currentTarget.style.borderColor = "rgba(0,212,255,0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* View archive link */}
        <ScrollReveal direction="up" delay={0.25}>
          <div style={{ textAlign: "center", marginTop: "56px" }}>
            <Link
              href="/archive"
              id="view-full-archive"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 36px",
                borderRadius: "8px",
                border: "1px solid rgba(0,212,255,0.25)",
                color: "#00d4ff",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,212,255,0.08)";
                e.currentTarget.style.boxShadow = "0 0 24px rgba(0,212,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              View Full Archive ({count} Projects) →
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-dots-only {
            display: none !important;
          }
        }

        /* Perfect Mobile Responsiveness for 3D Deck of Cards */
        @media (max-width: 500px) {
          .project-card-image-wrapper {
            height: 150px !important;
          }
          .project-card-content {
            padding: 18px 20px !important;
          }
          .project-card-title {
            font-size: 0.95rem !important;
            margin-bottom: 6px !important;
          }
          .project-card-desc {
            font-size: 0.78rem !important;
            min-height: auto !important;
            margin-bottom: 12px !important;
            line-height: 1.6 !important;
            -webkit-line-clamp: 2 !important;
          }
          .project-card-tags {
            margin-bottom: 16px !important;
            gap: 4px !important;
          }
          .tag-pill {
            font-size: 0.65rem !important;
            padding: 2px 8px !important;
          }
          .project-card-actions {
            gap: 8px !important;
          }
          .project-card-actions a {
            padding: 8px 12px !important;
            font-size: 0.72rem !important;
          }
          .projects-deck-wrapper {
            height: 480px !important;
          }
          .projects-deck-card {
            height: 430px !important;
          }
        }
      `}</style>
    </section>
  );
}
