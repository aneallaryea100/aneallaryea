import { useState, useEffect } from "react";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

const ROLES = [
  "Software Engineer",
  "Frontend Developer",
  "React Specialist",
  "Full Stack Developer",
];

export default function Welcome() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting,  setDeleting]  = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let t;
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="welcome"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(145deg,#0e0d0c 0%,#151310 55%,#0e0d0c 100%)" }}
    >
      {/* ── Animated background ──────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Amber orb – top left */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "500px", height: "500px",
            background: "radial-gradient(circle,rgba(217,119,6,0.22),transparent 70%)",
            top: "-8%", left: "-10%",
            animation: "float 9s ease-in-out infinite",
          }}
        />
        {/* Teal orb – bottom right */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "400px", height: "400px",
            background: "radial-gradient(circle,rgba(13,148,136,0.18),transparent 70%)",
            bottom: "5%", right: "0%",
            animation: "floatReverse 11s ease-in-out infinite",
          }}
        />
        {/* Amber orb – centre right */}
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: "260px", height: "260px",
            background: "radial-gradient(circle,rgba(245,158,11,0.1),transparent 70%)",
            top: "40%", left: "65%",
            animation: "float 13s ease-in-out infinite",
          }}
        />

        {/* Subtle warm grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(217,119,6,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(217,119,6,0.06) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Floating dots */}
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${6 + (i % 3) * 3}px`,
              height: `${6 + (i % 3) * 3}px`,
              background: i % 2 === 0 ? "rgba(217,119,6,0.35)" : "rgba(45,212,191,0.25)",
              top: `${15 + i * 11}%`,
              left: `${8 + i * 13}%`,
              animation: `float ${5 + i * 1.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "rgba(217,119,6,0.1)",
            border: "1px solid rgba(217,119,6,0.3)",
            color: "#F59E0B",
            animation: "fadeInUp 0.5s ease both",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to new opportunities
        </div>

        {/* Name */}
        <div style={{ animation: "fadeInUp 0.6s ease 0.1s both" }}>
          <p className="font-mono text-base mb-2 tracking-wider" style={{ color: "#8A7E6E" }}>Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4" style={{ color: "#F5F0E8" }}>
            Aneal{" "}
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg,#D97706,#F59E0B,#2DD4BF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Laryea
            </span>
          </h1>
        </div>

        {/* Typewriter */}
        <div
          className="flex items-center justify-center h-12 text-xl md:text-2xl font-semibold mb-6"
          style={{ color: "#C8B99A", animation: "fadeInUp 0.6s ease 0.2s both" }}
        >
          <span>{displayed}</span>
          <span className="cursor" />
        </div>

        {/* Description */}
        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#8A7E6E", animation: "fadeInUp 0.6s ease 0.3s both" }}
        >
          I architect scalable solutions that blend technical expertise with creative vision.
          Passionate about building exceptional digital experiences that make an impact.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          style={{ animation: "fadeInUp 0.6s ease 0.4s both" }}
        >
          <a
            href="mailto:aneallaryea100@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg,#D97706,#F59E0B)",
              boxShadow: "0 0 32px rgba(217,119,6,0.4)",
              color: "#0e0d0c",
            }}
          >
            Let's Talk
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={14} />
          </a>

          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            style={{
              color: "#C8B99A",
              border: "1px solid rgba(217,119,6,0.25)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(217,119,6,0.6)";
              e.currentTarget.style.color = "#F5F0E8";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(217,119,6,0.25)";
              e.currentTarget.style.color = "#C8B99A";
            }}
          >
            View Work
          </a>
        </div>

        {/* Social row */}
        <div
          className="flex items-center justify-center gap-6"
          style={{ animation: "fadeInUp 0.6s ease 0.5s both" }}
        >
          <a
            href="https://github.com/aneallaryea100"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 hover:scale-125"
            style={{ color: "#5a5045" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E0B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5045")}
          >
            <FaGithub size={22} />
          </a>
          <span className="h-px w-8" style={{ background: "#2a2520" }} />
          <a
            href="https://www.linkedin.com/in/niianeal/"
            target="_blank"
            rel="noreferrer"
            className="transition-all duration-300 hover:scale-125"
            style={{ color: "#5a5045" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E0B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5045")}
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animation: "float 2.5s ease-in-out infinite" }}
      >
        <div
          className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
          style={{ border: "2px solid rgba(217,119,6,0.3)" }}
        >
          <div
            className="w-1 h-2.5 rounded-full"
            style={{ background: "#D97706", animation: "float 1.5s ease-in-out infinite" }}
          />
        </div>
        <span className="text-xs tracking-widest" style={{ color: "#3d3028" }}>SCROLL</span>
      </div>
    </section>
  );
}
