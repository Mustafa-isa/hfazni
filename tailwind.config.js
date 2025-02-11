/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#073e32",
        secondary: "rgba(7,62,50,0.1)",
        mainText: "rgba(11, 44, 61, 1)",
        secondaryText: "#02234D",
        secondaryTextColor: "rgba(92, 97, 127, 1)",

        triblle: "rgba(56, 77, 108, 1)",
      },
    },
  },
  plugins: [],
};
