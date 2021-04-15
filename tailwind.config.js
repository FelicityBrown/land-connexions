const colors = require("./src/tailwind/colors");
const text = require("./src/tailwind/text");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    ...colors,
    ...text,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
