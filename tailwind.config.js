/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#CCEEFF",
        "light-blue": "#00aaff",
        "light-black": "#00aaff1a",
      },
    },
  },
  plugins: [],
};
