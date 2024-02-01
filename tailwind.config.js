/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Epilogue", "sans-serif"],
    },
    extend: {
      colors: {
        "almost-White": "hsl(0, 0%, 98%)",
        "medium-Gray": "hsl(0, 0%, 41%)",
        "almost-Black": "hsl(0, 0%, 8%)",
        "some-blue-color": "hsl(228, 45%, 44%)",
      },
    },
  },
  plugins: [],
};
