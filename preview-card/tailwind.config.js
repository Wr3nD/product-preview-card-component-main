/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Fraunces': ['Fraunces', 'serif'],
        'Montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}