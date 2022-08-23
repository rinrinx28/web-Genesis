/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'rotate-45',
    '-rotate-45'
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      zIndex: {
        '70': '70',
        '60': '60'
      },
      maxWidth: {
        '11xl': '112rem',
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Lobster': ['Lobster', 'cursive'],
        'Abril-Fatface': ['Abril Fatface', 'cursive']
      }
    },
  },
  plugins: [],
}