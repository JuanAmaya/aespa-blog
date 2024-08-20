/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '130': '36rem',
        '192': '48rem'
      },
      colors: {
        mainBlue: "#0802F9",
        aespaPink: "#E133AB",
        aespaBlue: "#4EBAE1",
        brightYellow: "#FFF72A",
        brigthRed: "#F7240A",
        windowsGray: "#DDDDDD"
      },
      backgroundImage: {
        'galaxy-gif': "url('/MV/Space.gif')"
      },
      rotate: {
        '270': '270deg'
      }
    },
  },
  plugins: [],
}

