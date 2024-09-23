/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inknutAntiqua': ["Inknut Antiqua"],
        'montSerrat': ["Montserrat"]
      },
      colors: {
        'paleGreen': '#008080',
        'yellowCustom': '#FFDB58',
        'greenCustom': '#A8EAA8',
        'greenCustom2': 'rgb(94 215 124)',
        'pinkCustom': '#FF66FF',
        'yellowCustom2': '#FFE96E',
        'blueCustom': '#4FC3FF',
        'blackCustom': '#1D1D1B'
      },
      screens:{
        'max-mdCustom': {'max': '1000px'},
        'min-mdCustom': {'min': '1000px'},
        'max-smCustom': {'max': '600px'}
      }
    },
  },
  plugins: [],
}