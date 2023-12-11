/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,jsx,js,tsx}"],
  theme: {
    extend: {
      width: {
         // Project sizes
        '45': '40px',
      },
      height: {
         // Project sizes
        '45': '40px',
        '748': '747px',
      },
      colors: {
        // Project colors
        primary: '#E63F97',
      },
      backgroundImage:{
        'home-image': "url('./src/assets/homeImage.svg')"
      }
    },
  },
  plugins: [],
}
