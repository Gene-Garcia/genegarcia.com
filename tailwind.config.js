// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#212427",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Bitter", "serif"],
    },
    extend: {
      colors: {
        "body-color": "#292929",
        accent: "#2196F3",
        "my-green": "#16C79A",
        "my-orange": "#EE6F57",
        "my-purple": "#A82FFC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
