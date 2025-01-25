/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#00026F',
        secondary: "#232C35",
        black_1: '#191919',
        yellow: "#F5C603",
        gray: "#7A7A7A",
        gray_light: "#F6F6F6",
        gray_light_2: "#E4E7E8",
        gray_light_3: "#F6F6F8",
        gray_light_4: "#F1F2F6",
        skyblue: "#E3EAFF",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      {
        flycity: {
          primary: '#00026F',
          secondary: '#232C35',
          accent: '#FCFFFD',
          neutral: '#3D4451',
          dark: '#191919',
          yellow: "#F5C603",
          gray: "#7A7A7A",
          gray_light: "#F6F6F6",
          gray_light_2: "#E4E7E8",
          skyblue: "#E3EAFF",


        },
      },
    ],
  },
}

