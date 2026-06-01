"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy-load 3D-heavy sections to preserve initial page speed
const GlowBackground = dynamic(() => import("@/components/GlowBackground"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <>
      {/* Fixed global starfield canvas */}
      <Suspense fallback={null}>
        <GlowBackground />
      </Suspense>

      {/* Navigation */}
      <Navbar />

      {/* Main content above canvas */}
      <main style={{ position: "relative", zIndex: 1, overflow: "hidden" }}>
        <Hero />

        <About />

        <Suspense
          fallback={
            <div
              style={{
                height: "600px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="loader-ring" />
            </div>
          }
        >
          <Skills />
        </Suspense>

        <Suspense
          fallback={
            <div
              style={{
                height: "700px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="loader-ring" />
            </div>
          }
        >
          <Projects />
        </Suspense>

        <Achievement />
        <Education />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
