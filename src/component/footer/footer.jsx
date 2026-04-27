import { AiOutlineMail, AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";

const SOCIAL = [
  { Icon: AiOutlineMail,     href: "mailto:aneallaryea100@gmail.com",      label: "Email"    },
  { Icon: AiOutlineGithub,   href: "https://github.com/aneallaryea100",    label: "GitHub"   },
  { Icon: AiOutlineLinkedin, href: "https://www.linkedin.com/in/niianeal/",label: "LinkedIn" },
  { Icon: AiOutlineTwitter,  href: "https://twitter.com/AnealLaryea",      label: "Twitter"  },
];

const Footer = () => (
  <footer
    className="py-8 px-4"
    style={{
      background: "#0e0d0c",
      borderTop: "1px solid rgba(217,119,6,0.1)",
    }}
  >
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm" style={{ color: "#5a5045" }}>
        Designed &amp; Built by{" "}
        <span
          className="font-semibold"
          style={{
            background: "linear-gradient(135deg,#D97706,#F59E0B)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Aneal Laryea
        </span>{" "}
        · {new Date().getFullYear()}
      </p>

      <div className="flex items-center gap-4">
        {SOCIAL.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={label}
            className="transition-all duration-300 hover:scale-110"
            style={{ color: "#3d3028" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#D97706")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#3d3028")}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
