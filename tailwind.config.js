// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Bitter", "serif"],
    },
    extend: {
      colors: {
        black: "#212427",
        "body-color": "#292929",
        accent: "#2196F3",
        "my-green": "#16C79A",
        "my-orange": "#EE6F57",
        "my-purple": "#A82FFC",
      },

      width: { ninety: "90%", ten: "10%" },
      height: { ninety: "90%", ten: "10%" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
