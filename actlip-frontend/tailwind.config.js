module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary1: "#0D5CA3",
        secondary1: "#a5b4fc",
        background1: "#94B9F9",
        button1: "#91B3FA",
      },
      fontFamily: {
        poppins: ["Poppins"],
        pirate: ["Pirate One", "cursive"],
      },
      spacing: {
        1: "4px",
      },
      backgroundImage: {
        aboutbg: "url('../src/assets/background.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
