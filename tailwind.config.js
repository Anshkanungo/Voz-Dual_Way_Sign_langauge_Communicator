/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakground: "#7F3DFF",
        text: "#FCFCFC",
        neutral: "#FCFCFC",
        light: "#EEE5FF",
        inactive: "#C6C6C6"
      }
    },
  },
  plugins: [],
}

