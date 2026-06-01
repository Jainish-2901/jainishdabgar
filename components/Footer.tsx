"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Jainish-2901",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jainish-dabgar-87474a320/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@jainishdabgar2637",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/dabgar_jainish_2901/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    // If not on homepage, redirect first
    if (window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(0,212,255,0.08)",
        background: "rgba(2,4,8,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div
        className="section-container"
        style={{
          padding: "56px 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
            borderBottom: "1px solid rgba(0, 212, 255, 0.05)",
            paddingBottom: "40px",
            marginBottom: "32px",
          }}
          className="footer-grid"
        >
          {/* Brand block */}
          <div style={{ maxWidth: "320px" }}>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "6px",
                  border: "1px solid rgba(0,212,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 0 10px rgba(0,212,255,0.15)",
                }}
              >
                <Image
                  src="/assets/logo.png"
                  alt="Jainish Dabgar Brand Logo"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="32px"
                />
              </div>
              <span
                style={{
                  fontWeight: "700",
                  fontSize: "1rem",
                  color: "#ccd6f6",
                  letterSpacing: "0.02em",
                }}
              >
                Jainish
                <span style={{ color: "#00d4ff" }}> Dabgar</span>
              </span>
            </Link>
            <p
              style={{
                fontSize: "0.82rem",
                color: "#8892b0",
                lineHeight: 1.7,
              }}
            >
              Crafting premium, high-performance digital ecosystems with custom MERN systems, Python core operations, and state-of-the-art cinematic visuals.
            </p>
          </div>

          {/* Quick links map */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.15em",
                color: "#ccd6f6",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontFamily: "monospace",
              }}
            >
              Navigation
            </h4>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px 24px",
              }}
            >
              {FOOTER_LINKS.map((link) => (
                <button
                  suppressHydrationWarning
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#8892b0",
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    transition: "color 0.2s ease, transform 0.2s ease",
                    textAlign: "left",
                    padding: "2px 0",
                    fontFamily: "inherit",
                  }}
                  className="footer-nav-link"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#00d4ff";
                    e.currentTarget.style.transform = "translateX(2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#8892b0";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact / Info */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.15em",
                color: "#ccd6f6",
                textTransform: "uppercase",
                marginBottom: "18px",
                fontFamily: "monospace",
              }}
            >
              Connect
            </h4>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#8892b0",
                marginBottom: "8px",
                fontFamily: "monospace",
              }}
            >
              Email: <a href="mailto:jainishdabgar2901@gmail.com" style={{ color: "#00d4ff", textDecoration: "none" }}>jainishdabgar2901@gmail.com</a>
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#8892b0",
                marginBottom: "8px",
                fontFamily: "monospace",
              }}
            >
              Phone: <a href="tel:+919773272749" style={{ color: "#00d4ff", textDecoration: "none" }}>+91-9773272749</a>
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#8892b0",
                fontFamily: "monospace",
              }}
            >
              Status: <span style={{ color: "#10b981" }}>● Active for Projects</span>
            </p>
          </div>
        </div>

        {/* Lower credit bar */}
        <div
          className="footer-credit-bar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div className="footer-credits-text" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <p
              style={{
                fontSize: "0.8rem",
                color: "#495670",
                lineHeight: 1.5,
              }}
            >
              Designed &amp; Engineered by{" "}
              <span style={{ color: "#00d4ff", fontWeight: "600" }}>Jainish Dabgar</span> · Powered by{" "}
              <span style={{ fontFamily: "monospace", color: "#ccd6f6" }}>Next.js + R3F + Motion</span>
            </p>
            <p style={{ fontSize: "0.75rem", color: "#233554" }}>
              © {new Date().getFullYear()} · All rights reserved · Jainish Dabgar Portfolio
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social-wrapper" style={{ display: "flex", gap: "10px" }}>
            {SOCIAL_LINKS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                id={`footer-${social.label.toLowerCase()}`}
                aria-label={social.label}
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "8px",
                  background: "rgba(13,31,53,0.5)",
                  border: "1px solid rgba(0,212,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#8892b0",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00d4ff";
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.35)";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(0,212,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#8892b0";
                  e.currentTarget.style.borderColor = "rgba(0,212,255,0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-grid {
            flex-direction: column !important;
            gap: 32px !important;
          }
          .footer-credit-bar {
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            text-align: center !important;
            gap: 20px !important;
          }
          .footer-credits-text {
            align-items: center !important;
          }
          .footer-social-wrapper {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
