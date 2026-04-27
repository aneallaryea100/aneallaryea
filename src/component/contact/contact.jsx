import { useEffect, useRef } from "react";
import { AiFillMail } from "react-icons/ai";
import { FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
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

const INPUT_BASE = {
  background: "rgba(14,13,12,0.8)",
  border: "1px solid rgba(217,119,6,0.18)",
  color: "#F5F0E8",
  outline: "none",
  transition: "border-color 0.3s, box-shadow 0.3s",
};

const onFocus = (e) => {
  e.target.style.borderColor = "rgba(217,119,6,0.6)";
  e.target.style.boxShadow   = "0 0 0 3px rgba(217,119,6,0.12)";
};
const onBlur = (e) => {
  e.target.style.borderColor = "rgba(217,119,6,0.18)";
  e.target.style.boxShadow   = "none";
};

const CONTACT_INFO = [
  { icon: <AiFillMail size={17} />,     label: "Email",    value: "aneallaryea100@gmail.com", href: "mailto:aneallaryea100@gmail.com" },
  { icon: <FaPhoneAlt size={14} />,     label: "Phone",    value: "+(233) 549-749-242",       href: "tel:+233549749242"              },
  { icon: <FaMapMarkerAlt size={16} />, label: "Location", value: "Accra, Ghana",              href: null                             },
];

const Contact = () => {
  const titleRef = useReveal("up");
  const leftRef  = useReveal("left");
  const rightRef = useReveal("right");

  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg,#0e0d0c 0%,#151310 100%)" }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div ref={titleRef} className="text-center mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase mb-3" style={{ color: "#D97706" }}>Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#F5F0E8" }}>
            Get in{" "}
            <span
              style={{
                 display: "inline-block",
                background: "linear-gradient(135deg,#D97706,#F59E0B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <div className="section-line" />
        </div>

        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "rgba(22,20,15,0.8)",
            border: "1px solid rgba(217,119,6,0.15)",
            boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
          }}
        >
          <div className="md:flex">

            {/* ── Left panel ──────────────────────────────────── */}
            <div
              ref={leftRef}
              className="md:w-2/5 p-8 md:p-10 flex flex-col justify-between"
              style={{
                background: "linear-gradient(145deg,rgba(217,119,6,0.1),rgba(13,148,136,0.06))",
                borderRight: "1px solid rgba(217,119,6,0.1)",
              }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: "#F5F0E8" }}>Let's work together</h3>
                <p className="leading-relaxed mb-8" style={{ color: "#8A7E6E" }}>
                  I'm always interested in hearing about new projects. If you'd like to collaborate
                  or just say hi, my inbox is always open.
                </p>

                <div className="space-y-5">
                  {CONTACT_INFO.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background: "rgba(217,119,6,0.15)",
                          border: "1px solid rgba(217,119,6,0.25)",
                          color: "#F59E0B",
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider" style={{ color: "#5a5045" }}>{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium transition-colors duration-200"
                            style={{ color: "#C8B99A" }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = "#F59E0B")}
                            onMouseLeave={(e) => (e.currentTarget.style.color = "#C8B99A")}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium" style={{ color: "#C8B99A" }}>{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative orb */}
              <div
                className="w-40 h-40 rounded-full blur-3xl mt-10 opacity-25"
                style={{ background: "radial-gradient(circle,#D97706,transparent)" }}
              />
            </div>

            {/* ── Form panel ──────────────────────────────────── */}
            <div ref={rightRef} className="md:w-3/5 p-8 md:p-10">
              <form action="https://formspree.io/f/xjvllnnl" method="POST" className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8A7E6E" }}>
                      Full Name
                    </label>
                    <input
                      type="text" id="name" name="name"
                      required maxLength={30} placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={{ ...INPUT_BASE, "::placeholder": { color: "#3d3028" } }}
                      onFocus={onFocus} onBlur={onBlur}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8A7E6E" }}>
                      Email Address
                    </label>
                    <input
                      type="email" id="email" name="email"
                      required placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm"
                      style={INPUT_BASE}
                      onFocus={onFocus} onBlur={onBlur}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8A7E6E" }}>
                    Subject
                  </label>
                  <input
                    type="text" id="subject" name="subject"
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={INPUT_BASE}
                    onFocus={onFocus} onBlur={onBlur}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8A7E6E" }}>
                    Message
                  </label>
                  <textarea
                    id="message" name="message"
                    required maxLength={500} rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl text-sm resize-none"
                    style={INPUT_BASE}
                    onFocus={onFocus} onBlur={onBlur}
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(135deg,#D97706,#F59E0B)",
                    color: "#0e0d0c",
                    boxShadow: "0 0 28px rgba(217,119,6,0.35)",
                  }}
                >
                  Send Message
                  <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
