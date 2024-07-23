/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: '#FFFFFF',
        primaryDarkBlack: '#202020',
        primaryBlack: '#4E4E4E',
        primaryGreen: '#74B853',
        primarySubtleGreen: '#D0FFB9',
        primaryRed: '#EA6F54',
        primaryYellow: '#FBC151',
        secondaryGray: '#C7C9D9',
        secondarySoftGrey: '#B9B9B9',
        secondaryLightGray: '#F8F7F3',
        secondarySubtleGray: '#F9F9FB',
        secondaryBronze: '#CD7F32',
      },
      fontFamily: {
        ubuntu: ["Ubuntu", 'sans-serif'],
        opensans: ["Open Sans", 'sans-serif']
      },
      fontSize: {
        '10px': '10px',
        '8px': '8px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

