/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(75 0 151)",
        text: "rgb(42 42 43)",
        secondary: "rgb(53 53 53)",
        light: "rgb(230 224 235)",
      },
      backgroundColor: {
        primary: "rgb(75 0 151)",
        secondary: "rgb(53 53 53)",
        light: "rgb(230 224 235)",
      },
      fill: {
        primary: "rgb(75 0 151)",
        secondary: "rgb(53 53 53)",
        light: "rgb(230 224 235)",
      },
    },
  },
  plugins: [],
};
