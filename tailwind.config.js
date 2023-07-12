/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        special_orange: "#FF8A56",
        special_red: "#FF5E69",
        special_purple: "#B16CEA",
        gray: "#666666",
      },
      fontFamily: {
        'roboto' : ['roboto' , 'sans-serif'],
        'roboto-medium' : ['roboto medium' , 'sans-serif'],
      }
    },
  },
  plugins: [],
}

