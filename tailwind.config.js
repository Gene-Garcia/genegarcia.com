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

      minHeight: {
        98: "29rem",
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
  variants: {
    extend: {
      filter: ["hover"],
      ringWidth: ["group-hover", "hover", "active"],
      ringColor: ["hover", "group-hover", "active"],
      ringOpacity: ["hover", "group-hover", "active"],
      ringOffsetWidth: ["hover", "active"],
      groupHover: ["display"],
      backgroundColor: ["active"],
      textColor: ["active"],
      boxShadow: ["hover"],
      display: ["group-hover"],
      borderColor: ["hover"],
      borderWidth: ["hover"],
      borderOpacity: ["hover"],
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
