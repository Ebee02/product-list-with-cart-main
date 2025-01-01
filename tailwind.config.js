/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c73a0f",
        "custom-green": "#008000",
        "custom-rose-50": "#fcf9f7",
        "custom-rose-100": "#f4edeb",
        "custom-rose-300": "#c9aea6",
        "custom-rose-400": "#ad8985",
        "custom-rose-500": "#87635a",
        "custom-rose-900": "#260f08",
      },
    },
  },
  plugins: [],
};
