/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary":   "#0e0d0c",
        "dark-secondary": "#151310",
        "dark-card":      "#16140f",
        amber:            "#D97706",
        "amber-light":    "#F59E0B",
        teal:             "#0D9488",
        "teal-light":     "#2DD4BF",
        cream:            "#F5F0E8",
        "warm-muted":     "#8A7E6E",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono:  ["Fira Code", "monospace"],
      },
      animation: {
        float:            "float 6s ease-in-out infinite",
        "float-reverse":  "floatReverse 7s ease-in-out infinite",
        "pulse-glow":     "pulse-glow-amber 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 5s ease infinite",
        "spin-slow":      "spin-slow 20s linear infinite",
        blink:            "blink 1s step-end infinite",
      },
      keyframes: {
        float:            { "0%,100%": { transform: "translateY(0px)"   }, "50%": { transform: "translateY(-20px)" } },
        floatReverse:     { "0%,100%": { transform: "translateY(-15px)" }, "50%": { transform: "translateY(5px)"   } },
        "pulse-glow-amber": { "0%,100%": { boxShadow: "0 0 20px rgba(217,119,6,.35)" }, "50%": { boxShadow: "0 0 40px rgba(217,119,6,.7),0 0 60px rgba(13,148,136,.35)" } },
        "gradient-shift": { "0%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0% 50%" } },
        "spin-slow":      { from: { transform: "rotate(0deg)"   }, to: { transform: "rotate(360deg)" } },
        blink:            { "0%,50%": { opacity: "1" }, "51%,100%": { opacity: "0" } },
      },
    },
  },
  plugins: [],
};
