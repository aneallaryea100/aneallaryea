import { useState, useEffect, useRef, useCallback } from "react";
import projectData from "../../data/projectData";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight, FaBookOpen } from "react-icons/fa";

const PER_PAGE = 3; // projects per "page spread"
const TOTAL    = projectData.length;
const PAGES    = Math.ceil(TOTAL / PER_PAGE);

/* ── useReveal for section header ─────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); } },
      { threshold: 0.1 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => el && observer.unobserve(el);
  }, []);
  return ref;
}

/* ── Single project card ───────────────────────────────────────── */
function ProjectCard({ project }) {
  const openLink = (url, e) => { e.preventDefault(); e.stopPropagation(); window.open(url, "_blank"); };
  const hasLinks = project.livedemo || project.github;

  return (
    <article
      className="group relative rounded-xl overflow-hidden flex flex-col h-full transition-all duration-400 hover:-translate-y-1"
      style={{
        background: "rgba(22,20,15,0.95)",
        border: "1px solid rgba(217,119,6,0.12)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
        willChange: "transform",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(217,119,6,0.38)";
        e.currentTarget.style.boxShadow   = "0 8px 36px rgba(217,119,6,0.1), 0 2px 8px rgba(0,0,0,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(217,119,6,0.12)";
        e.currentTarget.style.boxShadow   = "0 4px 20px rgba(0,0,0,0.3)";
      }}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
          style={{ transition: "transform 0.6s ease" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 35%, rgba(22,20,15,0.97) 100%)" }}
        />

        {/* Link buttons – only if links exist */}
        {hasLinks && (
          <div
            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100"
            style={{ background: "rgba(14,13,12,0.75)", backdropFilter: "blur(5px)", transition: "opacity 0.25s ease" }}
          >
            {project.livedemo && (
              <button
                onClick={(e) => openLink(project.livedemo, e)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg,#D97706,#F59E0B)",
                  color: "#0e0d0c",
                  boxShadow: "0 4px 14px rgba(217,119,6,0.4)",
                  transition: "transform 0.15s ease",
                }}
              >
                <FaExternalLinkAlt size={10} /> Live Demo
              </button>
            )}
            {project.github && (
              <button
                onClick={(e) => openLink(project.github, e)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold hover:scale-105 active:scale-95"
                style={{
                  background: "rgba(22,20,15,0.95)",
                  color: "#F5F0E8",
                  border: "1px solid rgba(217,119,6,0.35)",
                  transition: "transform 0.15s ease",
                }}
              >
                <FaGithub size={12} /> Code
              </button>
            )}
          </div>
        )}
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1" style={{ background: "rgba(22,20,15,0.95)" }}>
        <div className="flex items-start justify-between mb-1.5">
          <h3
            className="text-base font-bold leading-snug transition-colors duration-300 group-hover:text-amber-400"
            style={{ color: "#F5F0E8" }}
          >
            {project.name}
          </h3>
          <FaGithub size={13} className="shrink-0 mt-0.5 ml-2" style={{ color: "#3d3028" }} />
        </div>
        <p className="text-xs leading-relaxed mb-4 flex-1" style={{ color: "#A09080" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-xs font-medium rounded-full"
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

/* ── Main Projects component ──────────────────────────────────── */
function Projects() {
  const [page,      setPage]      = useState(0);
  const [slideClass, setSlideClass] = useState("");
  const [animKey,   setAnimKey]   = useState(0);
  const titleRef = useReveal();

  /* ── navigate with direction-aware animation ─────────────────── */
  const navigate = useCallback((targetPage, dir) => {
    if (targetPage < 0 || targetPage >= PAGES || targetPage === page) return;
    setSlideClass(dir === "next" ? "page-slide-next" : "page-slide-prev");
    setPage(targetPage);
    setAnimKey((k) => k + 1);
  }, [page]);

  const goNext = () => navigate(page + 1, "next");
  const goPrev = () => navigate(page - 1, "prev");

  /* ── keyboard navigation ─────────────────────────────────────── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const startIdx      = page * PER_PAGE;
  const currentSlice  = projectData.slice(startIdx, startIdx + PER_PAGE);
  const progressPct   = ((page + 1) / PAGES) * 100;

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg,#0e0d0c 0%,#151310 50%,#0e0d0c 100%)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ──────────────────────────────────── */}
        <div ref={titleRef} className="reveal text-center mb-14">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#D97706" }}>My Work</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#F5F0E8" }}>
            Project{" "}
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg,#D97706,#F59E0B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Library
            </span>
          </h2>
          <div className="section-line mb-5" />

          {/* Project count badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              background: "rgba(217,119,6,0.1)",
              border: "1px solid rgba(217,119,6,0.25)",
              color: "#F59E0B",
            }}
          >
            <FaBookOpen size={13} />
            {TOTAL} Projects · Page {page + 1} of {PAGES}
          </div>
        </div>

        {/* ── Book container ──────────────────────────────────── */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "rgba(18,16,13,0.9)",
            border: "1px solid rgba(217,119,6,0.14)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(217,119,6,0.06)",
          }}
        >
          {/* Book top bar */}
          <div
            className="flex items-center justify-between px-6 py-3"
            style={{ borderBottom: "1px solid rgba(217,119,6,0.1)", background: "rgba(14,13,12,0.6)" }}
          >
            <span className="font-mono text-xs" style={{ color: "#5a5045" }}>
              Showing {startIdx + 1}–{Math.min(startIdx + PER_PAGE, TOTAL)} of {TOTAL} projects
            </span>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: PAGES }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i, i > page ? "next" : "prev")}
                  className="rounded-full transition-all duration-300 hover:scale-125"
                  style={{
                    width:   i === page ? "20px" : "8px",
                    height:  "8px",
                    background: i === page
                      ? "linear-gradient(90deg,#D97706,#F59E0B)"
                      : "rgba(217,119,6,0.2)",
                    border: i === page ? "none" : "1px solid rgba(217,119,6,0.15)",
                  }}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* ── Left page-turn trigger ──────────────────────── */}
          <button
            onClick={goPrev}
            disabled={page === 0}
            className="absolute left-0 top-12 bottom-16 z-20 w-14 flex items-center justify-center group transition-all duration-300"
            style={{ opacity: page === 0 ? 0.2 : 1, cursor: page === 0 ? "default" : "pointer" }}
            aria-label="Previous page"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: "rgba(217,119,6,0.12)",
                border: "1px solid rgba(217,119,6,0.25)",
                color: "#D97706",
              }}
            >
              <FaChevronLeft size={14} />
            </div>
            {/* Page-curl hint */}
            <div
              className="absolute left-0 top-0 bottom-0 w-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(90deg,rgba(217,119,6,0.15),transparent)" }}
            />
          </button>

          {/* ── Right page-turn trigger ─────────────────────── */}
          <button
            onClick={goNext}
            disabled={page === PAGES - 1}
            className="absolute right-0 top-12 bottom-16 z-20 w-14 flex items-center justify-center group transition-all duration-300"
            style={{ opacity: page === PAGES - 1 ? 0.2 : 1, cursor: page === PAGES - 1 ? "default" : "pointer" }}
            aria-label="Next page"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{
                background: "rgba(217,119,6,0.12)",
                border: "1px solid rgba(217,119,6,0.25)",
                color: "#D97706",
              }}
            >
              <FaChevronRight size={14} />
            </div>
            {/* Page-curl hint */}
            <div
              className="absolute right-0 top-0 bottom-0 w-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(270deg,rgba(217,119,6,0.15),transparent)" }}
            />
          </button>

          {/* ── Animated project grid ───────────────────────── */}
          <div className="px-16 py-8">
            <div
              key={animKey}
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ${slideClass}`}
            >
              {currentSlice.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}

              {/* Empty slot placeholders so grid stays stable on last page */}
              {currentSlice.length < PER_PAGE &&
                Array.from({ length: PER_PAGE - currentSlice.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="rounded-xl" style={{ minHeight: "280px", border: "1px dashed rgba(217,119,6,0.08)" }} />
                ))
              }
            </div>
          </div>

          {/* ── Bottom book footer ──────────────────────────── */}
          <div
            className="flex items-center justify-between px-16 py-4"
            style={{ borderTop: "1px solid rgba(217,119,6,0.1)", background: "rgba(14,13,12,0.5)" }}
          >
            {/* Prev button */}
            <button
              onClick={goPrev}
              disabled={page === 0}
              className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3 disabled:opacity-30"
              style={{ color: "#D97706" }}
            >
              <FaChevronLeft size={12} />
              Previous
            </button>

            {/* Center: page number in book style */}
            <div className="flex flex-col items-center gap-1">
              <span className="font-mono text-xs" style={{ color: "#5a5045" }}>
                — {page + 1} —
              </span>
              {/* Progress bar */}
              <div className="w-32 h-1 rounded-full overflow-hidden" style={{ background: "rgba(217,119,6,0.12)" }}>
                <div
                  className="h-full rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${progressPct}%`,
                    background: "linear-gradient(90deg,#D97706,#F59E0B)",
                  }}
                />
              </div>
              <span className="font-mono text-xs" style={{ color: "#3d3028" }}>
                {page + 1} / {PAGES} pages
              </span>
            </div>

            {/* Next button */}
            <button
              onClick={goNext}
              disabled={page === PAGES - 1}
              className="flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3 disabled:opacity-30"
              style={{ color: "#D97706" }}
            >
              Next
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* Keyboard hint */}
        <p className="text-center mt-5 text-xs font-mono" style={{ color: "#3d3028" }}>
          Use ← → arrow keys to flip pages
        </p>
      </div>
    </section>
  );
}

export default Projects;
