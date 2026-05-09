/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Sf-Pro-Regular', 'sans-serif'],
        telegraf: ['Telegraf', 'sans-serif'],
      },
    },
  },
  plugins: [],
}