"use client";
import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TiltGlowCard from "./TiltGlowCard";

// ─── Typing Animation Hook ────────────────────────────────────
const ROLES = [
  "Full-Stack Web Developer",
  "MERN Stack Engineer",
  "React.js Specialist",
  "Next.js Architect",
  "Python Backend Dev",
];

function useTypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");

  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < target.length) {
        timeout = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          65
        );
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 2000);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("erasing"), 300);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return displayed;
}

// ─── Hero Section ─────────────────────────────────────────────
export default function Hero() {
  const typedText = useTypingAnimation();

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="section-container" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
            minHeight: "calc(100vh - 80px)",
          }}
          className="hero-grid"
        >
          {/* ── Left: Text Content ── */}
          <div style={{ position: "relative" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <p className="section-label" style={{ marginBottom: 0 }}>
                &gt; Initializing Portfolio_v3.0
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="hero-title"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                fontWeight: "900",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
              }}
            >
              <span className="gradient-text">Jainish</span>{" "}
              <span style={{ color: "#ccd6f6" }}>Dabgar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.3rem)",
                  fontWeight: "500",
                  color: "#8892b0",
                  fontFamily: "monospace",
                }}
              >
                <span style={{ color: "#00d4ff" }}>$</span>{" "}
                <span className="text-neon-cyan">{typedText}</span>
                <span className="cursor-blink" />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              style={{
                fontSize: "1rem",
                color: "#8892b0",
                lineHeight: 1.7,
                maxWidth: "480px",
                marginBottom: "40px",
              }}
            >
              Crafting high-performance digital ecosystems with the MERN stack,
              Python, and modern web architectures. Obsessed with clean code,
              cinematic UX, and shipping products that matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hero-btns-wrapper"
              style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
            >
              <button
                suppressHydrationWarning
                id="hero-view-projects"
                className="btn-primary pulse-glow"
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>⚡</span> View Projects
              </button>
              <a
                suppressHydrationWarning
                id="hero-download-cv"
                href="https://drive.google.com/file/d/1yJKGEMOBud6_28gIEysXoEm1wgn-NUF3/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>↓</span> Download CV
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="hero-stats-bar"
              style={{
                display: "flex",
                gap: "32px",
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid rgba(0,212,255,0.1)",
              }}
            >
              {[
                { value: "9+", label: "Projects Built" },
                { value: "3+", label: "Stack Expertise" },
                { value: "2+", label: "Years Coding" },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat-item">
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "800",
                      color: "#00d4ff",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#8892b0",
                      marginTop: "4px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Personal Portrait with Cyber Viewport and Tilt Glow Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            style={{
              height: "520px",
              position: "relative",
            }}
          >
            <TiltGlowCard
              className="glass"
              glowColor="rgba(0, 212, 255, 0.4)"
              intensity={8}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "24px",
                overflow: "hidden",
                position: "relative",
                border: "1px solid rgba(0, 212, 255, 0.25)",
                boxShadow:
                  "0 0 50px rgba(0, 212, 255, 0.06), 0 20px 60px rgba(0, 0, 0, 0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Cinematic Profile Photo */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 0,
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dmhk8m7sa/image/upload/v1780289032/jainishdabgar_brn6dx.jpg"
                  alt="Jainish Dabgar — Full-Stack Developer"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    filter: "brightness(0.85) contrast(1.1)",
                  }}
                  sizes="(max-width: 900px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Neo Cyber Lens / Scanline Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 50%, rgba(2, 4, 8, 0.15) 50%), linear-gradient(to bottom, rgba(0, 212, 255, 0.08), transparent 80%)",
                  backgroundSize: "100% 4px, 100% 100%",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />

              {/* Glowing Corner Accents (Cyber Viewfinder style) */}
              <div
                style={{
                  position: "absolute",
                  inset: "24px",
                  border: "1px solid rgba(0, 212, 255, 0.08)",
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              >
                {/* Top-Left */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "16px", height: "16px", borderLeft: "2px solid #00d4ff", borderTop: "2px solid #00d4ff" }} />
                {/* Top-Right */}
                <div style={{ position: "absolute", top: 0, right: 0, width: "16px", height: "16px", borderRight: "2px solid #00d4ff", borderTop: "2px solid #00d4ff" }} />
                {/* Bottom-Left */}
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "16px", height: "16px", borderLeft: "2px solid #00d4ff", borderBottom: "2px solid #00d4ff" }} />
                {/* Bottom-Right */}
                <div style={{ position: "absolute", bottom: 0, right: 0, width: "16px", height: "16px", borderRight: "2px solid #00d4ff", borderBottom: "2px solid #00d4ff" }} />
              </div>

              {/* Interactive Hover Vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle at center, transparent 40%, rgba(2, 4, 8, 0.85) 100%)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />

              {/* Floating tech labels over image */}
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  right: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  pointerEvents: "none",
                  zIndex: 3,
                }}
              >
                {["MERN", "PYTHON", "PHP", "JS"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: "700",
                      letterSpacing: "0.15em",
                      color: "#00d4ff",
                      background: "rgba(2, 4, 8, 0.8)",
                      border: "1px solid rgba(0,212,255,0.35)",
                      borderRadius: "6px",
                      padding: "5px 10px",
                      fontFamily: "monospace",
                      backdropFilter: "blur(6px)",
                      boxShadow: "0 0 12px rgba(0,212,255,0.15)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Decorative Holographic Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(2, 4, 8, 0.7)",
                  border: "1px solid rgba(167, 139, 250, 0.4)",
                  borderRadius: "20px",
                  padding: "4px 12px",
                  backdropFilter: "blur(4px)",
                  zIndex: 3,
                }}
              >
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                <span
                  style={{
                    fontSize: "0.6rem",
                    color: "#ccd6f6",
                    fontWeight: "600",
                    letterSpacing: "0.05em",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                  }}
                >
                  Systems.Active
                </span>
              </div>
            </TiltGlowCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "#495670",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{
            width: "20px",
            height: "32px",
            borderRadius: "10px",
            border: "1px solid rgba(0,212,255,0.3)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "4px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              borderRadius: "2px",
              background: "#00d4ff",
            }}
          />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-grid > div:last-child {
            height: 320px !important;
          }
          .hero-stats-bar {
            justify-content: center !important;
          }
          .hero-stat-item {
            text-align: center !important;
          }
        }
        @media (max-width: 600px) {
          .hero-title {
            white-space: nowrap !important;
            font-size: clamp(2.0rem, 6vw, 3.2rem) !important;
          }
          .hero-btns-wrapper {
            flex-wrap: nowrap !important;
            flex-direction: row !important;
            gap: 10px !important;
          }
          .hero-btns-wrapper > button,
          .hero-btns-wrapper > a {
            flex: 1 !important;
            padding: 10px 14px !important;
            font-size: 0.75rem !important;
            justify-content: center !important;
            white-space: nowrap !important;
          }
        }
        @media (max-width: 480px) {
          .hero-grid > div:last-child {
            height: 260px !important;
          }
          .hero-stats-bar {
            gap: 20px !important;
          }
          .hero-stat-item > div:first-child {
            font-size: 1.5rem !important;
          }
          .hero-stat-item > div:last-child {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </section>
  );
}
