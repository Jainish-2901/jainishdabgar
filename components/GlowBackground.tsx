"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// ─── Starfield Component ──────────────────────────────────────
function Stars({ count = 3000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const { mouse, viewport } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();

    // Slow autonomous rotation
    ref.current.rotation.x = t * 0.012;
    ref.current.rotation.y = t * 0.008;

    // Mouse parallax drift
    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      mouse.x * 0.8,
      0.02
    );
    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      mouse.y * 0.8,
      0.02
    );
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.08}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

// ─── Secondary dim stars ──────────────────────────────────────
function DimStars({ count = 1500 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 100;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 100;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.getElapsedTime() * -0.006;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.004;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#a78bfa"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

// ─── Scene ────────────────────────────────────────────────────
function StarfieldScene() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return (
    <>
      <Stars count={isMobile ? 800 : 3000} />
      <DimStars count={isMobile ? 400 : 1500} />
    </>
  );
}

// ─── Export ───────────────────────────────────────────────────
export default function GlowBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(0,212,255,0.03) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(167,139,250,0.04) 0%, transparent 50%), #020408",
      }}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 20], fov: 75 }}
        gl={{ antialias: false, alpha: false }}
      >
        <StarfieldScene />
      </Canvas>
    </div>
  );
}
