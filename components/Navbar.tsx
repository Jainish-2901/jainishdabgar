"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ─── Scroll Spy Observer ───
  useEffect(() => {
    // Only track scroll spy on the main homepage
    if (window.location.pathname !== "/") return;

    const handleScrollSpy = () => {
      const sections = ["about", "skills", "projects", "achievements", "education", "experience", "contact"];
      const scrollPosition = window.scrollY + 200; // Trigger slightly early for perfect timing

      // Hero active check (at the top of the page)
      if (window.scrollY < 150) {
        setActiveSection("");
        return;
      }

      let currentSection = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 100; // offset for nav height
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy(); // Run initially
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    // If not on homepage, redirect first
    if (window.location.pathname !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      id="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(2, 4, 8, 0.85)"
          : "rgba(2, 4, 8, 0.4)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        borderBottom: scrolled
          ? "1px solid rgba(0, 212, 255, 0.12)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              border: "1px solid rgba(0,212,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 15px rgba(0,212,255,0.2)",
            }}
          >
            <Image
              src="/assets/logo.png"
              alt="Jainish Dabgar Brand Logo"
              fill
              style={{ objectFit: "cover" }}
              sizes="38px"
              priority
            />
          </motion.div>
          <span
            style={{
              fontWeight: "700",
              fontSize: "1.1rem",
              color: "#ccd6f6",
              letterSpacing: "0.02em",
            }}
          >
            Jainish
            <span style={{ color: "#00d4ff" }}> Dabgar</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                suppressHydrationWarning
                key={link.label}
                id={`nav-${link.label.toLowerCase()}`}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: isActive ? "#00d4ff" : "#8892b0",
                  fontSize: "0.875rem",
                  fontWeight: isActive ? "600" : "500",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  transition: "color 0.3s ease",
                  letterSpacing: "0.02em",
                  fontFamily: "inherit",
                  position: "relative",
                }}
                className="nav-btn-item"
              >
                {link.label}

                {/* Sliding active underline bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: "14px",
                      right: "14px",
                      height: "2px",
                      background: "linear-gradient(90deg, #00d4ff, #a78bfa)",
                      boxShadow: "0 0 10px rgba(0, 212, 255, 0.6)",
                      borderRadius: "100px",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            );
          })}

          <a
            href="https://drive.google.com/file/d/1yJKGEMOBud6_28gIEysXoEm1wgn-NUF3/view"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-download-cv"
            style={{
              marginLeft: "8px",
              padding: "8px 20px",
              borderRadius: "6px",
              background: "transparent",
              border: "1px solid rgba(0,212,255,0.4)",
              color: "#00d4ff",
              fontSize: "0.8rem",
              fontWeight: "600",
              letterSpacing: "0.08em",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLAnchorElement).style.background =
                "rgba(0,212,255,0.1)";
              (e.target as HTMLAnchorElement).style.boxShadow =
                "0 0 16px rgba(0,212,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLAnchorElement).style.background = "transparent";
              (e.target as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          suppressHydrationWarning
          id="mobile-menu-btn"
          aria-label="Toggle mobile menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            color: "#ccd6f6",
          }}
          className="mobile-menu-btn"
        >
          <div
            style={{
              width: "22px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <motion.div
              animate={
                mobileOpen
                  ? { rotate: 45, y: 7, background: "#00d4ff" }
                  : { rotate: 0, y: 0, background: "#ccd6f6" }
              }
              style={{ height: "2px", borderRadius: "1px" }}
            />
            <motion.div
              animate={mobileOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
              style={{ height: "2px", background: "#ccd6f6", borderRadius: "1px" }}
            />
            <motion.div
              animate={
                mobileOpen
                  ? { rotate: -45, y: -7, background: "#00d4ff" }
                  : { rotate: 0, y: 0, background: "#ccd6f6" }
              }
              style={{ height: "2px", borderRadius: "1px" }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              background: "rgba(2, 4, 8, 0.95)",
              borderTop: "1px solid rgba(0,212,255,0.12)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 24px 24px",
                gap: "4px",
              }}
            >
              {NAV_LINKS.map((link, i) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.button
                    suppressHydrationWarning
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      border: "none",
                      cursor: "pointer",
                      color: isActive ? "#00d4ff" : "#8892b0",
                      fontSize: "1rem",
                      fontWeight: isActive ? "600" : "500",
                      padding: "12px 16px",
                      borderRadius: "6px",
                      textAlign: "left",
                      fontFamily: "inherit",
                      transition: "all 0.2s ease",
                      borderLeft: isActive ? "2.5px solid #00d4ff" : "2.5px solid transparent",
                      background: isActive ? "rgba(0, 212, 255, 0.04)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        (e.target as HTMLElement).style.color = "#00d4ff";
                        (e.target as HTMLElement).style.background =
                          "rgba(0,212,255,0.06)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        (e.target as HTMLElement).style.color = "#8892b0";
                        (e.target as HTMLElement).style.background = "none";
                      }
                    }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
              <a
                href="https://drive.google.com/file/d/1yJKGEMOBud6_28gIEysXoEm1wgn-NUF3/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "8px",
                  padding: "12px 16px",
                  borderRadius: "6px",
                  border: "1px solid rgba(0,212,255,0.4)",
                  color: "#00d4ff",
                  textDecoration: "none",
                  textAlign: "center",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                }}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        /* Dynamic micro hover line effect */
        .nav-btn-item {
          position: relative;
        }
        .nav-btn-item::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: rgba(0, 212, 255, 0.4);
          transition: width 0.3s ease, left 0.3s ease;
          border-radius: 100px;
          pointer-events: none;
        }
        .nav-btn-item:hover::after {
          width: 60%;
          left: 20%;
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  );
}
