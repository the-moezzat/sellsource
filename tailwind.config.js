/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    colors: require("tailwindcss-open-color"),
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      code: ["JetBrains Mono", "monospace"],
      hand: ["Grape Nuts", "cursive"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
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
          DEFAULT: "#00ffa4",
          foreground: "#154360",
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
          DEFAULT: "#a26bfd",
          foreground: "#fff",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
