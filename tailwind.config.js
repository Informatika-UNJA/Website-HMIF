/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1f1402",
          50: "#FAF7F2",
          100: "#F3E7D7",
          200: "#E2C6A8",
          300: "#C69A74",
          400: "#A97752",
          500: "#8B5E3C",
          600: "#64402B",
          700: "#4A2F20",
          800: "#342116",
          900: "#22150D",
          950: "#140D08 ",
        },
        gold: {
          DEFAULT: "#D4A373",
          100: "#c7b89c",
          200: "#1E140D",
          300: "#FAF7F2",
          400: "#DCC4A8",
          500: "#D4A657",
          600: "#B4863C",
          700: "#8C6830",
        },
        teal: {
          DEFAULT: "#FFFDFA",
          100: "#f7ead8",
          200: "#f7e6cd",
          300: "#bdaf99",
          400: "#b3a38e",
          500: "#8b7f6c",
          600: "#74634e",
          700: "#8b7b62",
        },
        paper: "#EEF1F5",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      animation: {
        "marquee": "marquee 28s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
