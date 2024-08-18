/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "k-bg": "url('./images/watherbg.jpg')",
      },
    },
    fontFamily: {
      "k-font": "'Playfair Display', serif",
    },
  },
  plugins: [],
};
