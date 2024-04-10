/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      vulcan: '#0B0D17',
      tropical_blue: '#D0D6F9',
      white: '#ffffff',
    },
    fontFamily: {
      'bellefair': ["Bellefair", serif],
      'barlow': ["Barlow Condensed", sans-serif],
    }
  },
  plugins: [],
}