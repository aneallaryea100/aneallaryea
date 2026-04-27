import { useState, useEffect } from "react";
import {
  AiOutlineBars,
  AiOutlineClose,
  AiFillGithub,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

const NAV_LINKS = [
  { href: "#welcome",  label: "Home",     id: "welcome"  },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#aboutme",  label: "About",    id: "aboutme"  },
  { href: "#contact",  label: "Contact",  id: "contact"  },
];

const SOCIAL_LINKS = [
  { icon: <AiOutlineTwitter />, href: "https://twitter.com/AnealLaryea",      label: "Twitter"  },
  { icon: <AiFillLinkedin />,   href: "https://www.linkedin.com/in/niianeal/",label: "LinkedIn" },
  { icon: <AiFillGithub />,     href: "https://github.com/aneallaryea100",    label: "GitHub"   },
  { icon: <AiFillMail />,       href: "mailto:aneallaryea100@gmail.com",      label: "Email"    },
];

const Navigation = () => {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("welcome");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = ["contact", "aboutme", "projects", "welcome"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: "rgba(14,13,12,0.94)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(217,119,6,0.12)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }
          : { background: "transparent" }
      }
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">

          {/* Logo */}
          <a
            href="#welcome"
            className="text-xl font-bold font-mono tracking-tight"
            style={{
              background: "linear-gradient(135deg,#D97706,#F59E0B,#2DD4BF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            &lt;AL /&gt;
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 group"
                style={{ color: activeSection === link.id ? "#F59E0B" : "#8A7E6E" }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    width: activeSection === link.id ? "100%" : "0%",
                    background: "linear-gradient(90deg,#D97706,#2DD4BF)",
                  }}
                />
                {activeSection !== link.id && (
                  <span
                    className="absolute bottom-0 left-0 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: "linear-gradient(90deg,#D97706,#2DD4BF)", opacity: 0.5 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop social icons */}
          <div className="hidden md:flex items-center gap-4">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-xl transition-all duration-300 hover:scale-110"
                style={{ color: "#5a5045" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E0B")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#5a5045")}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden transition-colors focus:outline-none"
            style={{ color: "#8A7E6E" }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className="md:hidden fixed inset-0 z-40 flex flex-col p-8 transition-all duration-400"
        style={{
          background: "rgba(14,13,12,0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        <div className="flex justify-end mb-12">
          <button
            onClick={() => setMenuOpen(false)}
            className="transition-colors"
            style={{ color: "#8A7E6E" }}
          >
            <AiOutlineClose size={28} />
          </button>
        </div>

        <nav className="flex flex-col gap-8 flex-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold transition-all duration-300 flex items-center gap-3"
              style={{ color: "#F5F0E8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E0B")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F0E8")}
            >
              <span className="font-mono text-base" style={{ color: "#D97706" }}>0{i + 1}.</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex justify-center gap-6 py-8" style={{ borderTop: "1px solid rgba(217,119,6,0.12)" }}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-2xl transition-colors"
              style={{ color: "#5a5045" }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
