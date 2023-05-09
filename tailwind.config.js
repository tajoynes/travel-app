/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cardcolor: "#e0e0e0",
      },
      backgroundImage: {
        "hero-banner": "url('src/assets/herobanner.jpg')",
        "map-background": "url('src/assets/usermapbanner.jpg')",
        "app-background": "url('src/assets/greyscalemap.png')",
      },
    },
    plugins: [],
  },
};
