/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "velog-color": "#21c998",
        "velog-darker": "#17906c",
        "sky-blue": "#21a6c9",
      },
    },
  },
  plugins: [],
};
