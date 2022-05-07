const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    colors: {
      transparent: 'transparent',
      brand: colors.violet,
      slate: colors.slate,
      white: colors.white
    },
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [({ addVariant }) => addVariant('child', '& > *'), require('@tailwindcss/line-clamp')]
}
