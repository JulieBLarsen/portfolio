module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './styles/**/*.scss'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-line-clamp')],
}
