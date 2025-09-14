/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f98e2b",
        secondary: "#f3f3f3",
      },
      animation: {
        'shine': 'shine 2s infinite',
      },
      keyframes: {
        shine: {
          'from': { transform: 'translateX(-100%)' },
          'to': { transform: 'translateX(200%)' },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "3rem",
      },
    },
    backgroundImage: {
      "hero-pattern": "url('./assets/blob.svg')",
    },
  },
  plugins: [],
};
