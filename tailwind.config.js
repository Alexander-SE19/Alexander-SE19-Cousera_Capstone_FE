/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customGreen: '#495E57',
        customHoverGreen: '#3C4E45',
        customYellow: '#F4CE14',
        customCardBg: '#F4F4F4',
        customPrice: '#EE9972',
        shadowCol: '#00000033',
      },
      fontFamily: {
        'markazi': ['Markazi Text', 'serif'],
        'karla': ['Karla', 'sans-serif'],
      },
      screens: {
        '3xl': '2300px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
