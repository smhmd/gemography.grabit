module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.jsx', './src/**/*.js'],
  theme: {
    extend: {
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
    },
  },
  variants: {},
  plugins: [],
}
