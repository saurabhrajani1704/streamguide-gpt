/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      colors:{
        scrollbar:{
          track: '#1a1a1a',
          thumb: '#888888',
          'thumb-hover': '#555555',
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
