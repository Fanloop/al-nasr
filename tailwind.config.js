/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.{html,js}"],
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
