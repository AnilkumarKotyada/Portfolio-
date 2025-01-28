/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper1: "url('./assests/wallpaper.avif')",
        wallpaper2: "url('./assests/wallpaper2.jpg')",
      },
      keyframes: {
        widthIncrement: {
          "10%": { width: "1%" },
          "50%": { width: "40%" },
          "65%": { width: "60%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        widthIncrement: "widthIncrement 3s cubic-bezier(0.33, 1, 0.68, 1)",
      },
      scale: {
        175: "1.75",
      },
    },
  },
  plugins: [],
};
