/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      silverTree:'#5BB5A2',
      harp:'#E8F2EE',
      palePink:'#F1DFDF',
      linkWater:'#DFE1F1',
      lavenderMist:'#DFEAF1',
      desertStrom:'#F8F8F8',
      white:'#FFFFFF',
      greenWhite:'#E8E8E8',
      mirage:'#1A191E',
      osloGrey:'#8C8C8F',
    },
  },
  plugins: [require("daisyui")],
}
