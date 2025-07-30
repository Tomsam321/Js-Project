/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/form.js"
  ],
  theme: {
    extend: {
      colors: {
        green: {
          200: 'hsl(148, 38%, 91%)', // lighter
          600: 'hsl(169, 82%, 27%)', // medium
        },
        red: {
          DEFAULT: 'hsl(0, 66%, 54%)',
        },
        white: 'hsl(0, 0%, 100%)',
        gray: {
          500: 'hsl(186, 15%, 59%)', // medium
          900: 'hsl(187, 24%, 22%)', // darker
        },
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
