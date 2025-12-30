/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ka-black': '#F9F4EF', // Cream Background
        'ka-red': '#C62222',   // Stamp Red
        'ka-gold': '#D4AF37',  // Gold
        'ka-gray': '#1A1A1A',  // Ink Black
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
    },
  },
  plugins: [],
}
