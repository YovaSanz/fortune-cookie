/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "flip-horizontal": "flip-horizontal 1.5s ease-in-out"
      },
      keyframes: {
        "flip-horizontal": {
          "0%": {
            "transform": "rotateY(0deg)"
          },
          "50%": {
            "color": "transparent"
          },
          "100%": {
            "transform": "rotateY(180deg)"
          }
        }
      }
    },
  },
  plugins: [],
}

