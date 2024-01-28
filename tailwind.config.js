/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}","./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark': '#0F0F0F',
        'second': '#005B41',
        'midnight': '#040D12',
        'metal': '#183D3D',
        'tahiti': '#3F2E3E',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#A5C9CA',
      },
    },
  },
  plugins: [],
}

