/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Barlow": "Poppins, sans-serif",
        "Mulish": "Poppins, sans-serif"
      },
      colors: {
        primary: "#0E28C3",
        secondary: "#fff",
        purple: "#C0272D",
        bg: "#f0f0f0"
      }
    },
  },
  plugins: [],
}