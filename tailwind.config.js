/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      },
      colors: {
        "primary": "#F8FAFC",
        "secondary": "#DFE3FB",
      }
    },
    screens: {
      'xsm': {'max': '383px'},
      'smx': {'max': '530px'}
    }
  },
  plugins: [],
}
