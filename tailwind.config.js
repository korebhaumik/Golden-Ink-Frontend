/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      backgroundColor: {
        "primary-0": "#FFFFFF",
        "primary-200": "#F6F9F8",
        "primary-600": "#1E293B",
        "primary-800": "#1E1E1E",
        "primary-1000": "#000000",
        "accent-blue-33": "rgba(20, 132, 212, 0.33)",
        "accent-blue-77": "rgba(29, 78, 216, 0.7)",
      },
      colors: {
        "primary-200": "#F6F9F8",
        "primary-400": "#94A3B8",
        "primary-600": "#1E293B",
        "primary-800": "#1E1E1E",
        "accent-blue-600": "#1484D4",
        "accent-blue-800": "#1D4ED8",
        "accent-pink": "#DA5077",
        "accent-green": "#04E690",
        "accent-green-600": "#08A569",
        "accent-green-gray": "#6B9BA5",
        "accent-blue-33": "rgba(20, 132, 212, 0.33)",
        "accent-blue-77": "rgba(29, 78, 216, 0.7)",
      },
      maxWidth: {
        "5.5xl": "66.5rem"
      }
    },
  },
  plugins: [],
};
