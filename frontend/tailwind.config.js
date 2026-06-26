/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"]
      },
      colors: {
        navy: {
          950: "#0a1628",
          900: "#0f2744",
          800: "#1e3a5f",
          700: "#2a5080",
          600: "#3d6a9e"
        },
        "amber-brand": {
          DEFAULT: "#c8791a",
          hover: "#a86415"
        },
        "slate-muted": "#64748b"
      }
    }
  },
  plugins: []
};
