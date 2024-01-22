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
    
    },
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

