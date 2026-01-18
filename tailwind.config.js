/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#0C1A3E',
        'bright-orange': '#F66A00',
        'soft-gray': '#F4F4F4',
      },
    },
  },
  plugins: [],
}
