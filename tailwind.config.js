module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'default-blue': '#333644',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
