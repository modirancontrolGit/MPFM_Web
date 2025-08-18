/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts}", // scan Angular components/templates
  ],
  theme: {
    extend: {
      colors: {
        plotbg: "#e2fffd",
        mainbg: "#b7d3d4",
        primary: "#009999",
        plot: "#74c0e0",
      },
    },
  },
  plugins: [],
};
