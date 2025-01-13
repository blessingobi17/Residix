/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "hsla(0, 0%, 100%, 0.3)",
      },
      translate: {
        navWidth: "-5%",
      },
      fontFamily: {
        roboto: "Roboto Flex, sans-serif",
      },
      height: {
        headerHeight: "650px",
        videoHeight: "500px",
      },
      width: {
        semiFull: "90%",
      },
      fontSize: {
        heroText: "64px",
      },
    },
  },
  plugins: [],
};
