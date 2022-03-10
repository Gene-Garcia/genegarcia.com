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

      spacing: {
        // 83: "21rem",
        86: "22rem",
        // 90: "23rem",
      },
    },
  },
  variants: {
    extend: {
      filter: ["hover"],
      ringWidth: ["group-hover", "hover", "active"],
      ringColor: ["hover", "group-hover", "active"],
      ringOpacity: ["hover", "group-hover", "active"],
      ringOffsetWidth: ["hover", "active"],
      groupHover: ["display"],
      boxShadow: ["hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};

/*
 * 'sm': '640px'
 * 'md': '768px'
 * 'lg': '1024px'
 * 'xl': '1280px'
 * '2xl': '1536px'
 */
