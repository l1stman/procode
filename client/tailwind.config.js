/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      first: "#262322",
      second: "#03B5AA",
      third: "#4DBA7C",
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [],
};
