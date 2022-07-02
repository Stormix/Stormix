/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: ['Roboto Mono', 'monospace'],
      display: ['Roboto Mono', 'monospace'],
      body: ['Roboto Mono', 'monospace'],
    },
    extend: {
      fontFamily: {
        sans: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'primary-dark': '#3d375e7f',
        primary: '#a277ff',
        secondary: '#61ffca',
        black: '#111016',
        background: '#15141b',
        'gray-4': '#6d6d6d',
        'gray-3': '#ACB5BD',
        'gray-2': '#DDE2E5',
        'gray-1': '#F8F9FA',
      },
    },
  },
  plugins: [],
};
