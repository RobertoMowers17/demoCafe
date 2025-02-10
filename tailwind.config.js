// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"AlteHaskGrotesk"', '"InterVariableFont"', "sans-serif"],
      },
      animation: {
        fadeInUp: 'fadeInUp 1.25s ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',  
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',   
          },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('flowbite/plugin')
  ],
};