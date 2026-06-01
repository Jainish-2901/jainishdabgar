"use client";
import { useState } from "react";
import { ARCHIVE_ACHIEVEMENTS } from "@/lib/data";
import ScrollReveal from "@/components/ScrollReveal";
import TiltGlowCard from "@/components/TiltGlowCard";

const CATEGORY_COLORS: Record<string, string> = {
  CERTIFICATIONS: "#00d4ff",
  HACKATHONS: "#a78bfa",
  AWARDS: "#10b981",
  COMPETITIONS: "#f59e0b",
};

export default function AchievementsClient() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", ...Array.from(new Set(ARCHIVE_ACHIEVEMENTS.map((a) => a.category)))];

  const filteredAchievements = selectedCategory === "ALL"
    ? ARCHIVE_ACHIEVEMENTS
    : ARCHIVE_ACHIEVEMENTS.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div>
      {/* Category filter pills */}
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
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const color = cat === "ALL" ? "#ccd6f6" : CATEGORY_COLORS[cat] || "#00d4ff";
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
                  fontSize: "0.75rem",
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

      {/* Achievement Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {filteredAchievements.map((item, i) => {
          const color = CATEGORY_COLORS[item.category] || "#00d4ff";
          return (
            <ScrollReveal key={`${item.id}-${selectedCategory}`} direction="up" delay={i * 0.05}>
              <TiltGlowCard
                className="glass"
                glowColor={`${color}40`}
                intensity={6}
                style={{
                  borderRadius: "16px",
                  padding: "28px",
                  height: "100%",
                  borderLeft: `3px solid ${color}`,
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ marginBottom: "14px" }}>
                  <span
                    className="cat-badge"
                    style={{
                      background: `${color}12`,
                      border: `1px solid ${color}30`,
                      color: color,
                    }}
                  >
                    {item.category}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    color: "#ccd6f6",
                    marginBottom: "10px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#8892b0",
                    marginBottom: "16px",
                    lineHeight: 1.5,
                    flex: 1,
                  }}
                >
                  {item.issuer}
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: item.credentialUrl ? "16px" : "0",
                    marginTop: "auto",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "monospace",
                      color: color,
                      fontWeight: "700",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {item.scope}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "#495670" }}>
                    {item.date}
                  </span>
                </div>

                {item.credentialUrl && (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`achievement-credential-${item.id}`}
                    className="cred-link"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                      fontSize: "0.75rem",
                      color: color,
                      textDecoration: "none",
                      fontWeight: "600",
                      padding: "8px 16px",
                      borderRadius: "6px",
                      background: `${color}10`,
                      border: `1px solid ${color}25`,
                      transition: "filter 0.2s ease, background 0.2s ease",
                      marginTop: "12px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${color}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = `${color}10`;
                    }}
                  >
                    ↗ View Credential
                  </a>
                )}
              </TiltGlowCard>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
