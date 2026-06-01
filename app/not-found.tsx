"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic import of fixed Starfield to preserve page speed
const GlowBackground = dynamic(() => import("@/components/GlowBackground"), {
  ssr: false,
});

interface LogLine {
  text: string;
  type: "system" | "error" | "input" | "success" | "info";
  time: string;
}

export default function NotFound() {
  const router = useRouter();
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<LogLine[]>([]);
  const [matrixActive, setMatrixActive] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get current timestamp
  const getTimestamp = () => {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
  };

  // Initial diagnostics logs
  useEffect(() => {
    const initialLogs: LogLine[] = [
      { text: "SYSTEM DIAGNOSTICS [v3.0.404]", type: "info", time: getTimestamp() },
      { text: "Initializing quantum network scan...", type: "system", time: getTimestamp() },
      { text: "Error: Host destination resolved to sector 0x404 [NULL_ROUTE]", type: "error", time: getTimestamp() },
      { text: "Status: Page not found. Current coordinates drifted from main cluster.", type: "error", time: getTimestamp() },
      { text: "Type 'help' or click navigation nodes to establish link.", type: "success", time: getTimestamp() },
    ];
    setLogs(initialLogs);
  }, []);

  // Auto scroll terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  // Handle command execution
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    // Add user input to logs
    const newLogs = [...logs, { text: `$ ${inputVal}`, type: "input" as const, time: getTimestamp() }];

    setTimeout(() => {
      switch (cleanCmd) {
        case "help":
          setLogs([
            ...newLogs,
            { text: "Available Sector Commands:", type: "info", time: getTimestamp() },
            { text: "  home      ➔ Warp back to home portal", type: "system", time: getTimestamp() },
            { text: "  projects  ➔ Establish secure link to projects sector", type: "system", time: getTimestamp() },
            { text: "  matrix    ➔ Overload grid and activate holographic rain", type: "system", time: getTimestamp() },
            { text: "  clear     ➔ Flush local buffer logs", type: "system", time: getTimestamp() },
            { text: "  about     ➔ Learn about systems operator (Jainish)", type: "system", time: getTimestamp() },
            { text: "  status    ➔ Get diagnostic metrics", type: "system", time: getTimestamp() },
          ]);
          break;
        case "home":
        case "exit":
          setLogs([
            ...newLogs,
            { text: "Establishing link to Sector 0xHOME... [WARPING]", type: "success", time: getTimestamp() },
          ]);
          setTimeout(() => router.push("/"), 1200);
          break;
        case "projects":
          setLogs([
            ...newLogs,
            { text: "Establishing link to Sector 0xPROJECTS... [WARPING]", type: "success", time: getTimestamp() },
          ]);
          setTimeout(() => router.push("/#projects"), 1200);
          break;
        case "about":
          setLogs([
            ...newLogs,
            { text: "Establishing link to Operator Bio... [WARPING]", type: "success", time: getTimestamp() },
          ]);
          setTimeout(() => router.push("/#about"), 1200);
          break;
        case "matrix":
          setMatrixActive((prev) => !prev);
          setLogs([
            ...newLogs,
            {
              text: !matrixActive
                ? "WARNING: Core grid gridlock overloaded. Code rain initialized."
                : "Holographic code rain terminated. Grid stabilized.",
              type: !matrixActive ? "error" : "success",
              time: getTimestamp(),
            },
          ]);
          break;
        case "clear":
          setLogs([]);
          break;
        case "status":
          setLogs([
            ...newLogs,
            { text: `OS: BS(B.C.A.) v3.0`, type: "info", time: getTimestamp() },
            { text: `Shields: 99.8% // Subnets: Active`, type: "success", time: getTimestamp() },
            { text: `Operator: Jainish Dabgar`, type: "info", time: getTimestamp() },
            { text: `Holographic Overload: ${matrixActive ? "ON" : "OFF"}`, type: "info", time: getTimestamp() },
          ]);
          break;
        default:
          setLogs([
            ...newLogs,
            { text: `Command not recognized: '${cleanCmd}'. Type 'help' for matrix subcommands.`, type: "error", time: getTimestamp() },
          ]);
          break;
      }
    }, 100);

    setInputVal("");
  };

  return (
    <>
      {/* Background Starfield */}
      <GlowBackground />

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px 16px",
          position: "relative",
          zIndex: 10,
          background: matrixActive
            ? "radial-gradient(circle at center, rgba(16,185,129,0.08) 0%, transparent 100%)"
            : "radial-gradient(circle at center, rgba(0,212,255,0.03) 0%, transparent 100%)",
          transition: "background 0.5s ease",
          color: "#ccd6f6",
        }}
      >
        {/* Holographic matrix digital code rain backdrop */}
        <AnimatePresence>
          {matrixActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: "linear-gradient(rgba(16,185,129,0.1) 50%, transparent 50%)",
                backgroundSize: "100% 4px",
                pointerEvents: "none",
                zIndex: -1,
                overflow: "hidden",
              }}
              className="matrix-rain"
            />
          )}
        </AnimatePresence>

        <div
          style={{
            maxWidth: "680px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* Animated 404 Glitch Title */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{ marginBottom: "32px" }}
          >
            <h1
              className="glitch-text"
              style={{
                fontSize: "clamp(4.5rem, 12vw, 8rem)",
                fontWeight: "900",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                background: matrixActive
                  ? "linear-gradient(135deg, #10b981 0%, #047857 100%)"
                  : "linear-gradient(135deg, #a78bfa 0%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: matrixActive
                  ? "0 0 40px rgba(16,185,129,0.4)"
                  : "0 0 40px rgba(0,212,255,0.4)",
              }}
            >
              404
            </h1>
            <p
              style={{
                fontSize: "0.875rem",
                fontWeight: "700",
                letterSpacing: "0.2em",
                color: matrixActive ? "#10b981" : "#00d4ff",
                textTransform: "uppercase",
                marginTop: "12px",
                fontFamily: "monospace",
              }}
            >
              &gt; Coordinate_Drift_Detected
            </p>
          </motion.div>

          {/* Interactive terminal console */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass"
            style={{
              borderRadius: "16px",
              border: matrixActive
                ? "1px solid rgba(16,185,129,0.3)"
                : "1px solid rgba(0, 212, 255, 0.15)",
              boxShadow: matrixActive
                ? "0 0 30px rgba(16,185,129,0.06), 0 20px 50px rgba(0,0,0,0.6)"
                : "0 0 30px rgba(0, 212, 255, 0.04), 0 20px 50px rgba(0,0,0,0.6)",
              textAlign: "left",
              overflow: "hidden",
              marginBottom: "32px",
              transition: "border 0.5s ease, box-shadow 0.5s ease",
            }}
          >
            {/* Terminal Window Header Bar */}
            <div
              style={{
                background: "rgba(2, 4, 8, 0.7)",
                borderBottom: matrixActive
                  ? "1px solid rgba(16,185,129,0.15)"
                  : "1px solid rgba(0, 212, 255, 0.1)",
                padding: "12px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.75rem",
                color: "#8892b0",
                fontFamily: "monospace",
              }}
            >
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f43f5e" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
              </div>
              <span>operator@jainish.terminal</span>
              <span style={{ color: matrixActive ? "#10b981" : "#00d4ff" }}>[ACTIVE]</span>
            </div>

            {/* Terminal Log Screen */}
            <div
              style={{
                padding: "24px 20px",
                height: "220px",
                overflowY: "auto",
                fontFamily: "monospace",
                fontSize: "0.85rem",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                background: "rgba(2, 4, 8, 0.4)",
              }}
              className="terminal-screen"
            >
              {logs.map((log, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", lineHeight: 1.5 }}>
                  <span style={{ color: "#495670", flexShrink: 0 }}>[{log.time}]</span>
                  <span
                    style={{
                      color:
                        log.type === "error"
                          ? "#f43f5e"
                          : log.type === "success"
                          ? matrixActive
                            ? "#10b981"
                            : "#00d4ff"
                          : log.type === "input"
                          ? "#ccd6f6"
                          : log.type === "info"
                          ? "#a78bfa"
                          : "#8892b0",
                    }}
                  >
                    {log.text}
                  </span>
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Terminal Command Input Form */}
            <form
              onSubmit={handleCommand}
              onClick={() => inputRef.current?.focus()}
              style={{
                display: "flex",
                alignItems: "center",
                background: "rgba(2, 4, 8, 0.7)",
                borderTop: matrixActive
                  ? "1px solid rgba(16,185,129,0.15)"
                  : "1px solid rgba(0, 212, 255, 0.1)",
                padding: "14px 20px",
                fontFamily: "monospace",
                cursor: "text",
              }}
            >
              <span
                style={{
                  color: matrixActive ? "#10b981" : "#00d4ff",
                  fontWeight: "bold",
                  marginRight: "10px",
                  fontSize: "0.9rem",
                }}
              >
                $
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type 'help' for instructions..."
                autoComplete="off"
                autoFocus
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "#ccd6f6",
                  width: "100%",
                  fontSize: "0.875rem",
                  fontFamily: "inherit",
                }}
              />
            </form>
          </motion.div>

          {/* Escape warp links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              className="btn-secondary"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 24px",
                fontSize: "0.85rem",
                borderColor: matrixActive ? "rgba(16,185,129,0.4)" : "rgba(0, 212, 255, 0.4)",
                color: matrixActive ? "#10b981" : "#00d4ff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = matrixActive
                  ? "rgba(16,185,129,0.08)"
                  : "rgba(0,212,255,0.08)";
                e.currentTarget.style.borderColor = matrixActive ? "#10b981" : "#00d4ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = matrixActive
                  ? "rgba(16,185,129,0.4)"
                  : "rgba(0, 212, 255, 0.4)";
              }}
            >
              <span>⚡</span> Escape Portal
            </Link>
            <Link
              href="/#projects"
              className="btn-secondary"
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 24px",
                fontSize: "0.85rem",
                borderColor: "rgba(167, 139, 250, 0.4)",
                color: "#a78bfa",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(167,139,250,0.08)";
                e.currentTarget.style.borderColor = "#a78bfa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(167, 139, 250, 0.4)";
              }}
            >
              <span>⌥</span> Sectors Archive
            </Link>
          </motion.div>
        </div>
      </main>

      <style>{`
        /* Terminal scrollbar */
        .terminal-screen::-webkit-scrollbar {
          width: 4px;
        }
        .terminal-screen::-webkit-scrollbar-track {
          background: transparent;
        }
        .terminal-screen::-webkit-scrollbar-thumb {
          background: ${matrixActive ? "rgba(16,185,129,0.3)" : "rgba(0,212,255,0.3)"};
          border-radius: 2px;
        }

        /* Matrix rain simulation scanning */
        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        .matrix-rain {
          animation: scanline 20s linear infinite;
        }
      `}</style>
    </>
  );
}
