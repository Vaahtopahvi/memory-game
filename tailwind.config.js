/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#84fab0",
        secondary: "#8fd3f4",
      },
    },
  },
  plugins: [],
};
