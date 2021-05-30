const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './styles/**/*.scss'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        red: colors.red,
        blue: colors.lightBlue,
        purple: colors.purple,
        green: colors.green,
        yellow: colors.amber,
        rose: colors.rose,
        pink: colors.pink,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-line-clamp')],
};
