/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brianBlue: '#2e4c6d',
        twinsBlue: '#002b5c',
        twinsRed: '#d31145',
        twinsGold: '#B9975B',
      },
      borderWidth: {
        16: '16px',
      },
      fontSize: {
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    },
  },
  plugins: [],
};
