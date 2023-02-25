/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    keyframes: {
      rotateColor: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      rotateColor: 'rotateColor 5s linear infinite',
    },
    fontFamily: {
      mono: ['Roboto Mono', 'monospace'],
      display: ['Roboto Mono', 'monospace'],
      body: ['Roboto Mono', 'monospace'],
    },
    extend: {
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      fontFamily: {
        sans: ['var(--primary-font)'],
        arabic: ['Noto Kufi Arabic', 'sans-serif'],
      },
      colors: {
        'primary-light': {
          DEFAULT: '#F8F8F8',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#F8F8F8',
          400: '#E6E6E6',
          500: '#D4D4D4',
          600: '#C2C2C2',
          700: '#B1B1B1',
          800: '#9F9F9F',
          900: '#8D8D8D',
        },
        'primary-dark': {
          DEFAULT: '#100F13',
          50: '#66607A',
          100: '#5D576E',
          200: '#4A4557',
          300: '#363341',
          400: '#23212A',
          500: '#100F13',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        primary: {
          DEFAULT: '#CE72FF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F9ECFF',
          300: '#EAC4FF',
          400: '#DC9BFF',
          500: '#CE72FF',
          600: '#BB3AFF',
          700: '#A702FF',
          800: '#8300C9',
          900: '#5E0091',
        },
        secondary: {
          DEFAULT: '#FAA61A',
          50: '#FEECCE',
          100: '#FDE4BA',
          200: '#FDD592',
          300: '#FCC56A',
          400: '#FBB642',
          500: '#FAA61A',
          600: '#D78805',
          700: '#A06603',
          800: '#694302',
          900: '#322001',
        },
        black: '#111016',
        background: '#08090A',
        'background-light': '#F8F8F8',
      },
    },
  },
  plugins: [require('tailwindcss-rtl')],
};
