import { useEffect, useRef } from "react";
import projectData from "../../data/projectData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);
  return ref;
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("revealed"), index * 110);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, [index]);

  const openLink = (url, e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <article
      ref={ref}
      className="reveal group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 flex flex-col"
      style={{
        background: "rgba(22,20,15,0.9)",
        border: "1px solid rgba(217,119,6,0.12)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        willChange: "transform",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(217,119,6,0.4)";
        e.currentTarget.style.boxShadow = "0 8px 40px rgba(217,119,6,0.12), 0 2px 8px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(217,119,6,0.12)";
        e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.3)";
      }}
    >
      {/* ── Image area ────────────────────────────────────────── */}
      <div className="relative h-52 overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Static gradient so image bottom doesn't bleed into card bg */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, transparent 40%, rgba(22,20,15,0.95) 100%)",
          }}
        />

        {/* Action overlay – only rendered when the project has at least one link */}
        {(project.livedemo || project.github) && (
          <div
            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100"
            style={{
              background: "rgba(14,13,12,0.78)",
              backdropFilter: "blur(6px)",
              transition: "opacity 0.25s ease",
            }}
          >
            {project.livedemo && (
              <button
                onClick={(e) => openLink(project.livedemo, e)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#D97706,#F59E0B)",
                  color: "#0e0d0c",
                  boxShadow: "0 4px 16px rgba(217,119,6,0.45)",
                  transition: "transform 0.15s ease",
                }}
              >
                <FaExternalLinkAlt size={11} /> Live Demo
              </button>
            )}
            {project.github && (
              <button
                onClick={(e) => openLink(project.github, e)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 active:scale-95"
                style={{
                  background: "rgba(22,20,15,0.95)",
                  color: "#F5F0E8",
                  border: "1px solid rgba(217,119,6,0.3)",
                  transition: "transform 0.15s ease, border-color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(217,119,6,0.7)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(217,119,6,0.3)")}
              >
                <FaGithub size={13} /> Code
              </button>
            )}
          </div>
        )}
      </div>

      {/* ── Details – never dimmed, always readable ───────────── */}
      <div className="p-6 flex flex-col flex-1" style={{ background: "rgba(22,20,15,0.9)" }}>
        <div className="flex items-start justify-between mb-2">
          <h3
            className="text-lg font-bold transition-colors duration-300 group-hover:text-amber-400"
            style={{ color: "#F5F0E8" }}
          >
            {project.name}
          </h3>
          <FaGithub className="shrink-0 mt-0.5" size={14} style={{ color: "#3d3028" }} />
        </div>

        {/* Description: solid contrast, never affected by hover overlay */}
        <p className="text-sm mb-5 leading-relaxed" style={{ color: "#A09080" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full"
              style={{
                background: "rgba(217,119,6,0.1)",
                color: "#D97706",
                border: "1px solid rgba(217,119,6,0.2)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const titleRef = useReveal();

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg,#0e0d0c 0%,#151310 50%,#0e0d0c 100%)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#D97706" }}>My Work</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#F5F0E8" }}>
            Recent{" "}
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg,#D97706,#F59E0B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
          <div className="section-line" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
