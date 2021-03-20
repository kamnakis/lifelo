/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable quote-props */
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './src/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mulberry': {
          DEFAULT: '#D1489B',
          '50': '#F6DBEB',
          '100': '#F2CAE2',
          '200': '#EAAAD0',
          '300': '#E189BF',
          '400': '#D969AD',
          '500': '#D1489B',
          '600': '#C03087',
          '700': '#9F2870',
          '800': '#7F2059',
          '900': '#5E1842'
        },
        'ship-gray': {
          DEFAULT: '#39383C',
          '50': '#949299',
          '100': '#8A8890',
          '200': '#75737B',
          '300': '#615F66',
          '400': '#4D4C51',
          '500': '#39383C',
          '600': '#2C2C2F',
          '700': '#201F22',
          '800': '#131314',
          '900': '#070707'
        }
      },
      boxShadow: {
        's1': '0px 2px 4px rgba(0, 0, 0, 0.12)',
        's2': '0px 2px 6px rgba(0, 0, 0, 0.12)',
        's3': '0px 2px 8px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        'xxs': '18rem'
      },
      height: {
        '75vh': '75vh',
        '150vh': '150vh'
      }
    },
  },
  variants: {
    extend: {
      textColor: ['responsive', 'hover', 'active', 'focus' , 'important'],
      borderWidth: ['responsive', 'hover', 'active', 'focus' , 'important'],
      borderColor: ['responsive', 'hover', 'active', 'focus' , 'important']
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('important', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `.${rule.selector.slice(1)}\\!`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    })
  ],
}
