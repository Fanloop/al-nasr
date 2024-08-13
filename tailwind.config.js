/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kufam: ["Kufam", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        yellow: "#FFC265",
        "cyan-2": "#C1FFFA",
        "cyan-3": "#1DA599",
        "cyan-4": "#C1FFFA",
      },
    },
  },
  plugins: [],
};
