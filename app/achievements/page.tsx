import type { Metadata } from "next";
import Link from "next/link";
import { ARCHIVE_ACHIEVEMENTS } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import AchievementsClient from "./AchievementsClient";

export const metadata: Metadata = {
  title: "All Achievements — Jainish Dabgar",
  description:
    "Full list of certifications, hackathons, and academic achievements by Jainish Dabgar.",
};

export default function AllAchievementsPage() {
  const categories = Array.from(new Set(ARCHIVE_ACHIEVEMENTS.map((a) => a.category)));

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
        {/* Background radial glow */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(0,212,255,0.04) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(167,139,250,0.04) 0%, transparent 50%)",
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
                id="back-home-achievements"
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
              <span className="section-label">// achievements.all</span>
              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: "900",
                  color: "#ccd6f6",
                  letterSpacing: "-0.02em",
                  marginBottom: "12px",
                }}
              >
                All <span className="gradient-text">Achievements</span>
              </h1>
              <p style={{ color: "#8892b0", fontSize: "0.95rem" }}>
                {ARCHIVE_ACHIEVEMENTS.length} milestones milestones across{" "}
                {categories.length} categories
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Client Achievements Grid */}
          <AchievementsClient />
        </div>
      </main>
      <Footer />
    </>
  );
}
