/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width: {
        "calc-97-320": "calc(97% - 320px)",
        "calc-98-320": "calc(98% - 320px)",
        "calc-100-320": "calc(100% - 320px)",
      },
    },
  },
  plugins: [],
};
