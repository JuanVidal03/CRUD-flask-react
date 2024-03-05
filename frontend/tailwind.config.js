/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark-color': '#1e1e1e',
      },
      boxShadow:{
        'dark-top-shadow': '0px -5px 20px  #00000040',
        'dark-bottom-shadow': '0px 5px 20px  #00000040',
      },
      backgroundImage:{
        'landscape': 'linear-gradient(0deg, rgba(255,255,255,0) 1%, rgba(30,30,30,1) 100%), url("./src/assets/img/personas-bg.jpg")'
      }
    },
  },
  plugins: [],
}