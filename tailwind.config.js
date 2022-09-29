/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      headings: 'Montserrat',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#0d1820',
        light: '#BDBDBD',
        accent: '#00c195',
        accentHover: '#e05216',
        grey: '#777777',
      },
      // backgroundImage: {
      //   overview: "url('/src/assets/img/overview/bg.svg')",
      //   cta: "url('/src/assets/img/cta/bg.svg')",
      // },
    },
  },
  plugins: [],
};
