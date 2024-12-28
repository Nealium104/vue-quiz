/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'anki-gray-100': 'rgb(44, 44, 44)',
        'anki-gray-200': 'rgb(48, 48, 48)',
        'anki-gray-300': 'rgb(54, 54, 54)',
      }
    },
  },
  plugins: [],
}