const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./modules/**/*.{tsx,ts}",
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    fontFamily: {
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      alt: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
