/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ['Poppins', 'sans-serif'],
        racing: ['Racing Sans One', 'sans-serif'],
      },
    },
    creens: {
      'sm': {'min': '340px', 'max': '1000px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '1001px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}

