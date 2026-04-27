import { useEffect, useRef } from "react";
import img1 from "../../images/niinii.jpg";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";

function useReveal(direction = "up") {
  const ref = useRef(null);
  useEffect(() => {
    const cls =
      direction === "left"  ? "reveal-left"  :
      direction === "right" ? "reveal-right" : "reveal";
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
    if (el) {
      el.classList.add(cls);
      observer.observe(el);
    }
    return () => el && observer.unobserve(el);
  }, [direction]);
  return ref;
}

const TECHNOLOGIES = [
  "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
  "Redux", "Node.js", "Ruby", "PostgreSQL",
  "MySQL", "Tailwind CSS", "REST APIs",
];

const SOCIAL_LINKS = [
  { icon: <AiOutlineTwitter />, href: "https://twitter.com/AnealLaryea",      label: "Twitter"  },
  { icon: <AiFillLinkedin />,   href: "https://www.linkedin.com/in/niianeal/",label: "LinkedIn" },
  { icon: <AiFillGithub />,     href: "https://github.com/aneallaryea100",    label: "GitHub"   },
  { icon: <AiFillMail />,       href: "mailto:aneallaryea100@gmail.com",      label: "Email"    },
];

const STATS = [
  { value: "3+",  label: "Years Exp." },
  { value: "10+", label: "Projects"   },
  { value: "5+",  label: "Clients"    },
];

function About() {
  const titleRef   = useReveal("up");
  const imageRef   = useReveal("left");
  const contentRef = useReveal("right");

  return (
    <section
      id="aboutme"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg,#151310 0%,#0e0d0c 100%)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#D97706" }}>Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#F5F0E8" }}>
            About{" "}
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg,#D97706,#F59E0B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
            </span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">

          {/* ── Image column ──────────────────────────────────── */}
          <div ref={imageRef} className="md:col-span-2 flex flex-col items-center gap-8">
            <div className="relative">
              {/* Animated gradient ring */}
              <div
                className="absolute -inset-1 rounded-2xl blur-sm"
                style={{
                  background: "linear-gradient(135deg,#D97706,#F59E0B,#2DD4BF,#D97706)",
                  backgroundSize: "300% 300%",
                  animation: "gradient-shift 4s ease infinite",
                }}
              />
              <div className="relative rounded-2xl overflow-hidden" style={{ border: "3px solid transparent" }}>
                <img src={img1} alt="Aneal Laryea" className="w-60 h-72 object-cover block" />
              </div>

              {/* Badge */}
              <div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl text-sm font-bold"
                style={{
                  background: "linear-gradient(135deg,#D97706,#F59E0B)",
                  color: "#0e0d0c",
                  boxShadow: "0 8px 24px rgba(217,119,6,0.45)",
                }}
              >
                👨‍💻 Dev
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="text-3xl font-black"
                    style={{
                      background: "linear-gradient(135deg,#D97706,#F59E0B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#5a5045" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Content column ───────────────────────────────── */}
          <div ref={contentRef} className="md:col-span-3">
            <p className="text-lg mb-5 leading-relaxed" style={{ color: "#C8B99A" }}>
              Hello! I'm{" "}
              <span className="font-semibold" style={{ color: "#F59E0B" }}>Aneal Laryea</span>,
              a Software Developer based in{" "}
              <span className="font-semibold" style={{ color: "#F59E0B" }}>Accra, Ghana</span>. I specialize
              in building exceptional websites and applications, turning ideas into reality with clean,
              performant code.
            </p>
            <p className="mb-8 leading-relaxed" style={{ color: "#8A7E6E" }}>
              I'm passionate about afro-beats music 🎶 and always curious to explore new technologies.
              I love creative coding and crafting solutions that make a real difference for users.
            </p>

            {/* Technologies */}
            <div className="mb-8">
              <h3 className="font-semibold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider" style={{ color: "#F5F0E8" }}>
                <span className="w-2 h-2 rounded-full" style={{ background: "#D97706" }} />
                Technologies I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {TECHNOLOGIES.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium cursor-default transition-all duration-300 hover:scale-105"
                    style={{
                      background: "rgba(217,119,6,0.08)",
                      border: "1px solid rgba(217,119,6,0.2)",
                      color: "#A09080",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E0B")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#A09080")}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://docs.google.com/document/d/13TzaREufesZA7KSEc-5XRk5xl2ltWEwOckuljC9Z6Kg/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg,#D97706,#F59E0B)",
                  color: "#0e0d0c",
                  boxShadow: "0 0 24px rgba(217,119,6,0.35)",
                }}
              >
                <FaDownload size={13} className="group-hover:animate-bounce" />
                Resume
              </a>

              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all duration-300 hover:scale-110"
                    style={{
                      background: "rgba(217,119,6,0.08)",
                      border: "1px solid rgba(217,119,6,0.2)",
                      color: "#5a5045",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E0B")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5045")}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
