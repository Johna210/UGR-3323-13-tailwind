/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#111",
          200: "#b31312",
        },
      },
      spacing: {
        82: "18.75rem",
        92: "31.25",
      },
      fontFamily: {
        logo: ["Righteous"],
        title: ["Nova Square"],
        body: ["Roboto"],
        nav: ["Open Sans"],
      },
    },
  },
  plugins: [],
};