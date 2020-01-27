module.exports = {
  theme: {
    extend: {
      colors: {
        cell: '#FFFCF4',
        border: '#D4D4D4',
        hover: '#FFECBB',
        text: '#5F5F5F',
        title: '#3F3F3F',
        disabled: '#F2F0E9',
        accent: {
          100: '#3302F9',
          700: '#180174'
        }
      },
      width: {
        '1/7': 'calc(100%/7)'
      }
    }
  },
  variants: {
    margin: ['responsive', 'last']
  },
  plugins: []
}
