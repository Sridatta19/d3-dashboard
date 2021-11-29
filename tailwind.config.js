const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./**/*.{ts,tsx}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        rose: colors.rose,
        orange: colors.orange,
      },
      fontFamily: {
        exo: ["'Exo', sans-serif", ...defaultTheme.fontFamily.sans],
        quattro: [
          "'Quattrocento Sans', serif",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
