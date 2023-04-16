/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brianBlue: '#2e4c6d',
        brightBlue: '#396eb0',
        golfWithBrianGreen: '#59A537',
      },
      borderWidth: {
        16: '16px',
      },
      fontSize: {
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      margin: {
        120: '35rem',
        134: '40rem',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        bump: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.9)' },
          '30%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.15)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        bump: 'bump 1s ease-out',
      },
    },
  },
  plugins: [],
};
