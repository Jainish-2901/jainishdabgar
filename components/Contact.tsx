"use client";
import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ScrollReveal from "./ScrollReveal";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "10px",
    background: "rgba(5, 12, 20, 0.7)",
    border: "1px solid rgba(0,212,255,0.15)",
    color: "#ccd6f6",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    transition: "all 0.2s ease",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <div className="section-container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-label">// 07. contact</span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "800",
                color: "#ccd6f6",
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s{" "}
              <span className="gradient-text">Connect</span>
            </h2>
            <p
              style={{
                color: "#8892b0",
                marginTop: "12px",
                fontSize: "0.95rem",
                maxWidth: "500px",
                margin: "12px auto 0",
              }}
            >
              Open to freelance projects, collaborations, and full-time roles.
              Drop a message — I respond within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "56px",
            alignItems: "start",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
          className="contact-grid"
        >
          {/* ── Left: Info ── */}
          <ScrollReveal direction="left">
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Status chip */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 8px #10b981",
                    display: "inline-block",
                    animation: "pulse-glow 2s infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: "600",
                    color: "#10b981",
                    letterSpacing: "0.08em",
                  }}
                >
                  Open to Opportunities
                </span>
              </div>

              <div
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#495670",
                  fontFamily: "monospace",
                  marginTop: "8px",
                  marginBottom: "-4px",
                }}
              >
                // Direct Node Endpoint
              </div>

              {[
                {
                  icon: "✉",
                  label: "Secure Email",
                  value: "jainishdabgar2901@gmail.com",
                  href: "mailto:jainishdabgar2901@gmail.com",
                  color: "#00d4ff",
                },
                {
                  icon: "📞",
                  label: "Direct Line",
                  value: "+91-9773272749",
                  href: "tel:+919773272749",
                  color: "#a78bfa",
                },
                {
                  icon: "📍",
                  label: "Location Hub",
                  value: "Ahmedabad, Gujarat, India",
                  href: "https://maps.google.com/?q=Ahmedabad,+Gujarat,+India",
                  color: "#10b981",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`contact-${item.label.toLowerCase().replace(" ", "-")}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 20px",
                    borderRadius: "12px",
                    background: "rgba(13,31,53,0.5)",
                    border: `1px solid ${item.color}20`,
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}50`;
                    e.currentTarget.style.background = `${item.color}08`;
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${item.color}20`;
                    e.currentTarget.style.background = "rgba(13,31,53,0.5)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.2rem",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
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
                        color: item.color,
                        fontWeight: "600",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}

              {/* Social Channels */}
              <div
                style={{
                  marginTop: "8px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#495670",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontFamily: "monospace",
                  }}
                >
                  // Secure Channels
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  {[
                    {
                      label: "GitHub",
                      href: "https://github.com/Jainish-2901",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      ),
                      color: "#ccd6f6",
                    },
                    {
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/jainish-dabgar-87474a320/",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      ),
                      color: "#00d4ff",
                    },
                    {
                      label: "YouTube",
                      href: "https://www.youtube.com/@jainishdabgar2637",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      ),
                      color: "#f43f5e",
                    },
                    {
                      label: "Instagram",
                      href: "https://www.instagram.com/dabgar_jainish_2901/",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                        </svg>
                      ),
                      color: "#a78bfa",
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`contact-social-${social.label.toLowerCase()}`}
                      aria-label={social.label}
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "10px",
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
                        e.currentTarget.style.color = social.color;
                        e.currentTarget.style.borderColor = `${social.color}60`;
                        e.currentTarget.style.boxShadow = `0 0 12px ${social.color}25`;
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
          </ScrollReveal>

          {/* ── Right: Form ── */}
          <ScrollReveal direction="right" delay={0.15}>
            <div
              className="glass contact-form-card"
              style={{ borderRadius: "20px", padding: "40px" }}
            >
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  color: "#ccd6f6",
                  marginBottom: "28px",
                }}
              >
                Send a Message
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "16px" }}
              >
                <input type="hidden" name="name" value={formData.name} />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "16px",
                  }}
                  className="form-row"
                >
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        color: "#8892b0",
                        marginBottom: "6px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="from_name"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,212,255,0.4)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(0,212,255,0.05)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(0,212,255,0.15)";
                        e.target.style.boxShadow = "none";
                      }}
                      suppressHydrationWarning
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        color: "#8892b0",
                        marginBottom: "6px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="reply_to"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,212,255,0.4)";
                        e.target.style.boxShadow =
                          "0 0 0 3px rgba(0,212,255,0.05)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(0,212,255,0.15)";
                        e.target.style.boxShadow = "none";
                      }}
                      suppressHydrationWarning
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      color: "#8892b0",
                      marginBottom: "6px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Project collaboration, hire, etc."
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(0,212,255,0.4)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(0,212,255,0.05)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(0,212,255,0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                    suppressHydrationWarning
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontSize: "0.75rem",
                      color: "#8892b0",
                      marginBottom: "6px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, and budget..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: "120px",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(0,212,255,0.4)";
                      e.target.style.boxShadow =
                        "0 0 0 3px rgba(0,212,255,0.05)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(0,212,255,0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                    suppressHydrationWarning
                  />
                </div>

                <motion.button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={status === "idle" ? { scale: 1.02 } : {}}
                  whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  suppressHydrationWarning
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "10px",
                    border: "none",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    fontFamily: "inherit",
                    fontWeight: "700",
                    fontSize: "0.9rem",
                    letterSpacing: "0.05em",
                    background:
                      status === "success"
                        ? "linear-gradient(135deg, #10b981, #059669)"
                        : status === "error"
                        ? "linear-gradient(135deg, #f43f5e, #be123c)"
                        : "linear-gradient(135deg, #00d4ff, #0090b8)",
                    color:
                      status === "success" || status === "error"
                        ? "#fff"
                        : "#020408",
                    boxShadow:
                      status === "success"
                        ? "0 0 24px rgba(16,185,129,0.4)"
                        : status === "error"
                        ? "0 0 24px rgba(244,63,94,0.4)"
                        : "0 0 24px rgba(0,212,255,0.3)",
                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={status}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                    >
                      {status === "idle" && <><span>⚡</span> Send Message</>}
                      {status === "sending" && <><span style={{ display: "inline-block", animation: "spin-glow 0.8s linear infinite" }}>◌</span> Sending...</>}
                      {status === "success" && <><span>✓</span> Message Sent!</>}
                      {status === "error" && <><span>✕</span> Failed — Try Again</>}
                    </motion.span>
                  </AnimatePresence>
                </motion.button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .contact-form-card {
            padding: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes spin-glow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
