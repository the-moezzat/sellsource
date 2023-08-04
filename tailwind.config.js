/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: require("tailwindcss-open-color"),
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      code: ["JetBrains Mono", "monospace"],
      hand: ["Grape Nuts", "cursive"],
    },
    extend: {
      colors: {
        primary: {
          base: "#00ffa4",
          1: "#ccffed",
          2: "#aaffe1",
          3: "#80ffd2",
          4: "#55ffc2",
          5: "#2affb3",
          6: "#00d589",
          7: "#00aa6d",
          8: "#008052",
          9: "#005537",
          10: "#003321",
        },
        accent: {
          base: "#a26bfd",
          1: "#ece1ff",
          2: "#e0cefe",
          3: "#d1b5fe",
          4: "#c19cfe",
          5: "#b284fd",
          6: "#8759d3",
          7: "#6c47a9",
          8: "#51367f",
          9: "#362454",
          10: "#201533",
        },
        tertiary: {
          base: "#154360",
          1: "#d0d9df",
          2: "#b1c0ca",
          3: "#8aa1b0",
          4: "#638295",
          5: "#3c627b",
          6: "#123850",
          7: "#0e2d40",
          8: "#0b2230",
          9: "#071620",
          10: "#040d13",
        },
      },
    },
  },

  plugins: [],
};
