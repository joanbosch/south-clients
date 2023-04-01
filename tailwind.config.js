/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        southDark: '#272d30',
        southGray: '#c3c2c6',
        southBrown: '#473826',
        southBrownLight: '#e7cab2'
      }
    }
  },
  plugins: []
}
