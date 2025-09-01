/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 important for manual toggling
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}