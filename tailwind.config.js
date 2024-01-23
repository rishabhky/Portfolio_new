/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        londrina: ['Londrina Outline', 'sans-serif'],
        mukta: ['Mukta', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
      },
      textStrokeWidth: {
        'default': '4px',
      },
      boxShadow: {
        'hover': '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)'
      }
    },
  }, 
  variants: {
    boxShadow: ['responsive', 'hover', 'focus']
  }, 
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          WebkitTextStroke: `var(--text-stroke-width) currentColor`,
          WebkitTextFillColor: 'transparent',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

