/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#020170",
        mainColorDarker: "#01014D",
        mainColorLighter: "#000060",
     },
    },
  },
  plugins: [],
}

