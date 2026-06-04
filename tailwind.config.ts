import type { Config } from 'tailwindcss'

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "contrast": "#CE7BB0",
        "contrast-2": "#A267AC",
        "contrast-3": "#6867AC",
        "background": "#EFEFEF",
        "background-2": "#f9f9f9",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        head: ["Playfair Display", "ui-sans-serif", "system-ui"],
        amsterdam: ["Amsterdam", "Arial", "serif"],
      },
      keyframes: {
        petalFall: {
          "0%": {
            transform: "translateY(-10vh) translateX(0) rotate(0deg)",
            opacity: "0",
          },
          "10%": { opacity: "0.7" },
          "90%": { opacity: "0.7" },
          "100%": {
            transform:
              "translateY(110vh) translateX(var(--drift, 40px)) rotate(360deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        "petal-fall": "petalFall linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config

