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
        mono: ['"Red Hat Mono"', 'monospace'],
        avserif: ['"Averia Serif Libre"', 'serif']
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
        fadeInUp: 'fadeInUp 1.25s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
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