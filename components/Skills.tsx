"use client";
import { useRef, useState, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import { SKILLS } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

type SkillCategory = keyof typeof SKILLS;

// ─── 3D Skill Orb ────────────────────────────────────────────
function SkillOrb({
  position,
  color,
  label,
  isActive,
  onClick,
}: {
  position: [number, number, number];
  color: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.6;
    meshRef.current.rotation.x = t * 0.3;
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.8;
    }

    // Pulse scale when active
    const targetScale = isActive ? 1.4 : 1;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.08
    );
  });

  return (
    <group position={position} onClick={onClick}>
      {/* Outer glow ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[0.42, 0.02, 8, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isActive ? 2 : 0.4}
          transparent
          opacity={isActive ? 0.9 : 0.4}
        />
      </mesh>

      {/* Main orb */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isActive ? 0.6 : 0.15}
          roughness={0.2}
          metalness={0.8}
          wireframe={!isActive}
        />
      </mesh>
    </group>
  );
}

// ─── Node Wire between orbs ───────────────────────────────────
function OrbWire({
  start,
  end,
  color,
  opacity = 0.15,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  opacity?: number;
}) {
  const lineObj = useMemo(() => {
    const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity,
    });
    return new THREE.Line(geometry, material);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opacity]);

  return <primitive object={lineObj} />;
}

// ─── Skills 3D Scene ──────────────────────────────────────────
function SkillsScene({
  activeCategory,
  onSelectCategory,
}: {
  activeCategory: SkillCategory | null;
  onSelectCategory: (cat: SkillCategory) => void;
}) {
  const groupRef = useRef<THREE.Group>(null!);

  const ORB_POSITIONS: Record<SkillCategory, [number, number, number]> = {
    MERN: [-1.5, 0.8, 0],
    Python: [1.5, 0.8, 0],
    PHP: [-1.5, -0.8, 0],
    JavaScript: [1.5, -0.8, 0],
  };

  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.15;
  });

  const categories = Object.keys(SKILLS) as SkillCategory[];

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <pointLight position={[3, 3, 3]} intensity={2} color="#00d4ff" />
      <pointLight position={[-3, -3, 3]} intensity={1.5} color="#a78bfa" />

      {/* Center connecting hub */}
      <mesh>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.8}
          roughness={0}
          metalness={1}
        />
      </mesh>

      {/* Wires from center to orbs */}
      {categories.map((cat) => (
        <OrbWire
          key={`wire-${cat}`}
          start={[0, 0, 0]}
          end={ORB_POSITIONS[cat]}
          color={SKILLS[cat].color}
          opacity={activeCategory === cat ? 0.6 : 0.15}
        />
      ))}

      {/* Orbs */}
      {categories.map((cat) => (
        <SkillOrb
          key={cat}
          position={ORB_POSITIONS[cat]}
          color={SKILLS[cat].color}
          label={cat}
          isActive={activeCategory === cat}
          onClick={() => onSelectCategory(cat)}
        />
      ))}
    </group>
  );
}

// ─── Skills Section ───────────────────────────────────────────
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(
    "MERN"
  );

  const categories = Object.keys(SKILLS) as SkillCategory[];
  const activeData = activeCategory ? SKILLS[activeCategory] : null;

  return (
    <section
      id="skills"
      style={{
        padding: "120px 0",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="section-container">
        <ScrollReveal direction="up">
          <div className="section-header">
            <span className="section-label">// 02. skills.stack</span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: "800",
                color: "#ccd6f6",
                letterSpacing: "-0.02em",
              }}
            >
              Technology{" "}
              <span className="gradient-text">Cluster</span>
            </h2>
            <p
              style={{
                color: "#8892b0",
                marginTop: "12px",
                fontSize: "0.95rem",
              }}
            >
              Click any node to explore the skill matrix
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="skills-grid"
        >
          {/* ── Left: 3D Canvas ── */}
          <ScrollReveal direction="left">
            <div
              style={{
                height: "440px",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                background:
                  "radial-gradient(ellipse at center, rgba(0,212,255,0.05) 0%, rgba(2,4,8,0.6) 70%)",
                border: "1px solid rgba(0,212,255,0.08)",
              }}
            >
              <Suspense
                fallback={
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div className="loader-ring" />
                  </div>
                }
              >
                <Canvas
                  dpr={[1, 2]}
                  camera={{ position: [0, 0, 5], fov: 60 }}
                  gl={{ antialias: true, alpha: true }}
                  style={{ background: "transparent" }}
                >
                  <SkillsScene
                    activeCategory={activeCategory}
                    onSelectCategory={setActiveCategory}
                  />
                </Canvas>
              </Suspense>

              {/* Category buttons overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "8px",
                }}
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    id={`skill-btn-${cat.toLowerCase()}`}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "100px",
                      border: `1px solid ${SKILLS[cat].color}${activeCategory === cat ? "80" : "30"}`,
                      background:
                        activeCategory === cat
                          ? `${SKILLS[cat].color}20`
                          : "transparent",
                      color: SKILLS[cat].color,
                      fontSize: "0.65rem",
                      fontWeight: "700",
                      letterSpacing: "0.1em",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right: Skill Panel ── */}
          <ScrollReveal direction="right" delay={0.15}>
            <AnimatePresence mode="wait">
              {activeData && activeCategory && (
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="glass"
                  style={{
                    borderRadius: "20px",
                    padding: "36px",
                    borderLeft: `4px solid ${activeData.color}`,
                  }}
                >
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      marginBottom: "28px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: `${activeData.color}15`,
                        border: `1px solid ${activeData.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.4rem",
                      }}
                    >
                      {activeData.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "700",
                          color: activeData.color,
                        }}
                      >
                        {activeCategory} Stack
                      </h3>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          color: "#495670",
                          fontFamily: "monospace",
                        }}
                      >
                        {activeData.items.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skill bars */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    {activeData.items.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "6px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.875rem",
                              fontWeight: "600",
                              color: "#ccd6f6",
                            }}
                          >
                            {skill.name}
                          </span>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: activeData.color,
                              fontFamily: "monospace",
                              fontWeight: "700",
                            }}
                          >
                            {skill.level}%
                          </span>
                        </div>
                        <div
                          style={{
                            height: "4px",
                            borderRadius: "2px",
                            background: "rgba(255,255,255,0.05)",
                            overflow: "hidden",
                          }}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 0.8,
                              delay: i * 0.06 + 0.2,
                              ease: "easeOut",
                            }}
                            style={{
                              height: "100%",
                              borderRadius: "2px",
                              background: `linear-gradient(90deg, ${activeData.color}, ${activeData.color}80)`,
                              boxShadow: `0 0 8px ${activeData.color}60`,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-grid > div:first-child > div {
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
