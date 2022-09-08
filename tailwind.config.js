/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",

    // Shared folder
    "./src/shared/**/*.{jsx,js}",
    "./src/shared/**/**/*.{jsx,js}",
    "./src/shared/**/**/**/*.{jsx,js}",

    // App directories
    "./src/screens/App/components/*.{jsx,js}",
    "./src/screens/App/components/**/*.{jsx,js}",

    "./src/screens/App/screens/**/*.{js,jsx,ts,tsx}",
    "./src/screens/App/screens/**/components/*.{js,jsx,ts,tsx}",
    "./src/screens/App/screens/**/components/**/*.{js,jsx,ts,tsx}",
    "./src/screens/App/screens/**/utils/*.{js,jsx,ts,tsx}",
    "./src/screens/App/screens/**/utils/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
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

      width: {
        ninety: "90%",
        ten: "10%",
        thirty: "30%",
        seventy: "70%",
        eightfive: "85%",
        fifteen: "15%",
      },

      height: {
        ninety: "90%",
        ten: "10%",
        thirty: "30%",
        seventy: "70%",
        twenty: "20%",
        eightfive: "85%",
        fifteen: "15%",
        min: "min-content",
      },

      minHeight: {
        98: "29rem",
      },

      minWidth: {
        44: "11rem",
      },

      spacing: {
        86: "22rem",
      },

      outline: {
        accent: "0.5px solid #2196F3",
      },

      fontSize: {
        "2xs": ".5rem",
      },
    },
  },
  plugins: [
    // must always be at the end
    // require("autoprefixer"),
  ],
};
