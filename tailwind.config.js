/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // integral: ["Integral", 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'], // font-satoshi
      },
      colors: {
        
      },
      animation: {
        bounceSlow: "bounceSlow 2s infinite",
      },
      keyframes: {
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(-10px)", opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
}

