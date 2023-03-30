/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        southBlue: { 50: '#0c7baa', 100: '#0c7baa', 200: '#0c7baa', 300: '#0c7baa', 400: '#0c7baa', 500: '#0c7baa', 600: '#0c7baa', 700: '#0c7baa', 800: '#0c7baa', 900: '#0c7baa' },
        southGray: { 50: '#efeae9', 100: '#efeae9', 200: '#efeae9', 300: '#efeae9', 400: '#efeae9', 500: '#efeae9', 600: '#efeae9', 700: '#efeae9', 800: '#efeae9', 900: '#efeae9' },
        southClearBrown: { 50: '#e7cab2', 100: '#e7cab2', 200: '#e7cab2', 300: '#e7cab2', 400: '#e7cab2', 500: '#e7cab2', 600: '#e7cab2', 700: '#e7cab2', 800: '#e7cab2', 900: '#e7cab2' },
        southClearBrown2: { 50: '#e1bc9b', 100: '#e1bc9b', 200: '#e1bc9b', 300: '#e1bc9b', 400: '#e1bc9b', 500: '#e1bc9b', 600: '#e1bc9b', 700: '#e1bc9b', 800: '#e1bc9b', 900: '#e1bc9b' },
        southDarkBrown: { 50: '#c9926d', 100: '#c9926d', 200: '#c9926d', 300: '#c9926d', 400: '#c9926d', 500: '#c9926d', 600: '#c9926d', 700: '#c9926d', 800: '#c9926d', 900: '#c9926d' },
        southDarkBrown2: { 50: '#bc8769', 100: '#bc8769', 200: '#bc8769', 300: '#bc8769', 400: '#bc8769', 500: '#bc8769', 600: '#bc8769', 700: '#bc8769', 800: '#bc8769', 900: '#bc8769' }

      }
    }
  },
  plugins: []
}
