/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        deepPurple: 'hsl(272, 34%, 23%)',
      },
      fontFamily: {
        primary: ['Questrial']
      },
    },
  },
  plugins: [],
}

