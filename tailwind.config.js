/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C8102E",
          redDark: "#95001F",
          ink: "#161311",
          cream: "#F7F4EF",
          amber: "#F2A93B",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
