/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': '#6A1B78;',
        'hover-color':'#CE5988',
        'bg-clr':'#FBF8FC',
        'box1':'#804C8f',
        'box2':'#C54962',
        'box3':'#582768',
        'box4':'#893144',
        'box5':'#CD4F7F',
      },
      textColor:{
        'hover-color':'#CE5988'
      }
    },
  },
  plugins: [],
}