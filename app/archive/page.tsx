import type { Metadata } from "next";
import Link from "next/link";
import { ARCHIVE_PROJECTS } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ArchiveClient from "./ArchiveClient";

export const metadata: Metadata = {
  title: "Full Project Archive — Jainish Dabgar",
  description:
    "Complete archive of all projects built by Jainish Dabgar — MERN, Python, PHP, JavaScript.",
};

export default function FullArchivePage() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "100vh",
          background: "#020408",
          paddingTop: "100px",
          paddingBottom: "80px",
          position: "relative",
        }}
      >
        {/* Background */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(0,212,255,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(167,139,250,0.04) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="section-container"
          style={{ position: "relative", zIndex: 1 }}
        >
          {/* Header */}
          <ScrollReveal direction="up">
            <div style={{ marginBottom: "16px" }}>
              <Link
                href="/"
                id="back-home-archive"
                className="back-link"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.8rem",
                  color: "#8892b0",
                  textDecoration: "none",
                  marginBottom: "32px",
                  transition: "color 0.2s",
                }}
              >
                ← Back to Portfolio
              </Link>
            </div>

            <div className="section-header">
              <span className="section-label">// projects.archive.all</span>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: "900",
                  color: "#ccd6f6",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                Full Project{" "}
                <span className="gradient-text">Archive</span>
              </h1>
              <p style={{ color: "#8892b0", fontSize: "0.95rem" }}>
                {ARCHIVE_PROJECTS.length} projects across MERN, Python, PHP &amp;
                JavaScript stacks
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Client Projects Grid */}
          <ArchiveClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
