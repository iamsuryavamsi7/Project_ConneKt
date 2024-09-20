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
        'pinkCustom': '#FF66FF'
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