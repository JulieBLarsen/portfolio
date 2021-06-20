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
      height: {
        xxl: '450px',
      },
      screens: {
        xs: '475px',
      },
      boxShadow: {
        'fog-purple':
          '0px 50px 100px -20px rgba(79, 70, 229, 0.15),0px 30px 60px -30px rgba(79, 70, 229, 0.2) ',
        'fog-mint':
          '0px 50px 100px -20px rgba(110, 231, 183, 0.15),0px 30px 60px -30px rgba(110, 231, 183, 0.2) ',
      },
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
      animation: {
        'spin-reverse': 'spin-reverse 2s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': {
            transform: 'rotate(-90deg), rotate(-89deg)',
          },
          '100%': { transform: 'rotate(-357deg)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
