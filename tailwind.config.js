/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      inset: {
        alpha: 'calc(50% - 20rem)',
      },
      gridTemplateColumns: {
        '1fr-1fr': '1fr 1fr',
        '1fr-2fr': '1fr 2fr',
        '1fr-2.8fr': '1fr 2.8fr',
        '3fr-2fr': '3fr 2fr',
        '7rem-1fr': '7rem 1fr',
        '6.5rem-1fr': '6.5rem 1fr',
      },
      gridRow: {
        '1/span2': '1 / span 2',
        '1/span4': '1 / span 4',
      },
      gridColumn: {
        '1/-1': '1/-1',
        '1/span2': '1 / span 2',
        '2/3': '2 / 3',
        2: '2',
      },
      fontSize: {
        adapt: {
          h1: 'clamp(3rem, 1rem + 10vw, 7rem)',
          p: 'clamp(1rem, 0.5rem + 10vw, 1.5rem)',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        openSans: ['"Open Sans"', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          darker: 'rgb(var(--color-primary-darker) / <alpha-value>)',
          darkMode: 'rgb(var(--color-darkMode) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          darker: 'rgb(var(--color-secondary-darker) / <alpha-value>)',
        },
        tertiary: {
          DEFAULT: 'rgb(var(--color-tertiary) / <alpha-value>)',
          darker: 'rgb(var(--color-tertiary-darker) / <alpha-value>)',
        },
        gradient: {
          primary: {
            one: 'rgb(var(--gradient-primary-one) / <alpha-value>)',
            two: 'rgb(var(--gradient-primary-two) / <alpha-value>)',
          },
          secondary: {
            one: 'rgb(var(--gradient-secondary-one) / <alpha-value>)',
            two: 'rgb(var(--gradient-secondary-two) / <alpha-value>)',
          },
        },
      },
      screens: {
        min: '300px',
        smaller: '320px', // => @media (min-width: 320px) { ... }
        small: '450px', // => @media (min-width: 450px) { ... }
        med: '500px', // => @media (min-width: 500px) { ... }
        big: '900px', // => @media (min-width: 900px) { ... }
        bigger: '1200px', // => @media (min-width: 1200px) { ... }
        large: '2000px', // => @media (min-width: 2000px) { ... }
      },
    },
  },
  plugins: [],
};
