/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Barlow": "Barlow, sans-serif",
        "Mulish": "Mulish, sans-serif"
      },
      colors: {
        primary: "#000",
        secondary: "#fff",
        bg: "#f0f0f0"
      }
    },
  },
  plugins: [],
}