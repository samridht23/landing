/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob1: "blob1 7s infinite",
        blob2: "blob2 7s infinite",
        mobileblob1: "mobileblob1 7s infinite",
        mobileblob2: "mobileblob2 7s infinite",
      },
      keyframes: {
        blob1: {
          "0%": { transform: "translate(0px , -400px)" },
          "50%": { transform: "translate(0px,-350px) scale(1.3)" },
          "100%": { transform: "translate(0px,-400px)" },
        },
        blob2: {
          "0%": { transform: "translate(0px , -300px)" },
          "50%": { transform: "translate(0px,-350px) scale(1.3)" },
          "100%": { transform: "translate(0px,-300px)" },
        },
        mobileblob1: {
          "0%": { transform: "translate(0px , -300px)" },
          "50%": { transform: "translate(0px,-250px) scale(1.3) " },
          "100%": { transform: "translate(0px,-300px)" },
        },
        mobileblob2: {
          "0%": { transform: "translate(0px , -200px)" },
          "50%": { transform: "translate(0px,-250px) scale(1.3)" },
          "100%": { transform: "translate(0px,-200px)" },
        },
      },
    },
  },
  plugins: [],
};
