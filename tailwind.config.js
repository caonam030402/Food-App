/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {

  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        'flex-center': {
          'display' : 'flex',
          'justify-content' : 'center',
          'aligns-center': 'center'
        }
        
      })
    })
  ],
  mode: 'jit',
  purge: [
    "./resources/views/*.ejs",
    "./resources/views/customers/*.ejs"
  ],
  content: [
    "./resources/views/*.ejs",
    "./resources/views/customers/*.ejs"
  ],
  theme: {
    colors: {
      'y1': '#EDEEF2',
      'YellowLight': '#FFF3ED',
      'pinkLight': '#FFF3ED',
      'blue': '#4E60FF',
      'orange': '#FD6D22',
      'white': '#fff',
      'black': '#2B2B43',
      'transparent': 'transparent',
      'gray': '#83859C',
      'purpleDark': '#2B2B43',
      'yellowLight2' : '#EDEEF2',
    },
    extend: {},
  },
  plugins: [],
}
