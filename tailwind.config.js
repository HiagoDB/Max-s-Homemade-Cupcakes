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
        imgColorTop: '#151213',
        imgColorMid: '#191717',
        imgColorBot: '#110D0E',
        footerColor: '#F08CC1',
      },
      backgroundImage:{
        'home-image': "url('./src/assets/homeImage.svg')"
      }
    },
  },
  plugins: [],
}
