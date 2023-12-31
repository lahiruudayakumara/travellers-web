/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': "#54A0FF",
      'brown': "#C0392B",
      'white': '#ffffff',
      'gray': '#757575',
      'yellow': "#f1c200",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/hero_pattern.png')"
      }
    },
  },
  plugins: [],
}