/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Rubik',
      body: 'Open Sans',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292A4A',
          // my style
          lightBlue:'#0EA5E9',
          darkBlue:'#0B1120',
          lightYellow:'#ede8c4',
        },

        accent: {
          DEFAULT: '#ffad33',
          hover: '#BB864E',
        },

        white: '#ffffff',
      },
      spacing: {
        54: '54px',
        800: '800px',
      },
    },
  },
  plugins: [],
}
