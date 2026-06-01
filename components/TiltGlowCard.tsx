"use client";
import { useRef, useState, ReactNode, CSSProperties } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltGlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
  style?: CSSProperties;
}

export default function TiltGlowCard({
  children,
  className = "",
  glowColor = "rgba(0, 212, 255, 0.3)",
  intensity = 12,
  style: externalStyle,
}: TiltGlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [intensity, -intensity]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-intensity, intensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
        ...externalStyle,
      }}
      className={className}
    >
      {/* Glow border */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "absolute",
            inset: "-1px",
            borderRadius: "inherit",
            background: `linear-gradient(135deg, ${glowColor}, rgba(167,139,250,0.3))`,
            zIndex: -1,
            filter: "blur(1px)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
