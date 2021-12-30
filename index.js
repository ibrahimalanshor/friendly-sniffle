const plugin = require('tailwindcss/plugin')
const svgToDataURI = require('mini-svg-data-uri')

const { spacing, width, fontWeight, fontSize, borderWidth, borderRadius } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = plugin(function ({ addComponents }) {
  const border = {
    borderWidth: borderWidth.DEFAULT,
    borderStyle: 'solid',
    borderColor: colors.gray['200'],
    borderRadius: borderRadius.DEFAULT,
  }

  const form = {
    '.form': {
      display: 'block',
      marginBottom: spacing['4']
    }
  }
  const label = {
    '.label': {
      display: 'block',
      fontWeight: fontWeight.bold,
      marginBottom: spacing['2']
    }
  }
  const input = {
    '.input': {
      display: 'block',
      width: '100%',
      backgroundColor: colors.white,
      padding: `${spacing['2']} ${spacing['3']}`,
      ...border
    },
    '.input.input-sm': {
      padding: `${spacing['1']} ${spacing['2']}`
    },
    '.input.input-lg': {
      padding: `${spacing['3']} ${spacing['4']}`
    },
    '.input:focus': {
      outline: 'none',
      borderColor: colors.blue['400'],
    },
    '.input.input-error': {
      borderColor: colors.red['500']
    },
    '.input.input-select': {
      appearance: 'none',
      backgroundImage: `url("${svgToDataURI(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="${colors.gray['500']}"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>`)}")` ,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: `right ${spacing[3]} center`,
      backgroundSize: spacing['4']
    },
    '.input-checkbox, .input-radio': {
      display: 'block',
    },
    '.input-checkbox input[type=checkbox], .input-radio input[type=radio]': {
      display: 'none'
    },
    '.checkbox-label, .radio-label': {
      display: 'inline-flex',
      alignItems: 'center',
    },
    '.checkbox-label:before, .radio-label:before': {
      content: "''",
      display: 'block',
      width: '20px',
      height: '20px',
      marginRight: spacing['2'],
      ...border
    },
    '.radio-label:before': {
      borderRadius: borderRadius.full
    },
    'input[type=checkbox]:checked ~ .checkbox-label:before, input[type=radio]:checked ~ .radio-label:before': {
      backgroundColor: colors.blue['500'],
      borderColor: colors.blue['500'],
    },
    'input[type=checkbox]:checked ~ .checkbox-label:before': {
      backgroundImage: `url("${svgToDataURI(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="${colors.white}"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`)}")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: spacing['4']
    },
    'input[type=radio]:checked ~ .radio-label:before': {
      backgroundImage: `url("${svgToDataURI(`<svg xmlns="http://www.w3.org/2000/svg" fill="${colors.white}" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5"/></svg>`)}")`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }
  }
  const formText = {
    '.form-text': {
      display: 'block',
      marginTop: spacing['1'],
      fontSize: fontSize.sm[0],
      lineHeight: fontSize.sm[1].lineHeight,
    },
    '.form-text.form-text-error': {
      color: colors.red['500']
    }
  }

  addComponents([form, label, input, formText])
})