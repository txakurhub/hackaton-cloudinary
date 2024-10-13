/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        celeste: "#0293CE",
        verde: "#2D9E55",
        naranja: "#EB943E",
        violeta: "#C32188",
      },
      fontFamily: {
        title: ["Old Celtiberians", "sans-serif"],
        body: ["ChelseaMarket", "sans-serif"],
      },
    },
  },
  plugins: [],
};
