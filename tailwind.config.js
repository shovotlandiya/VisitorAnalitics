/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 5px 15px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "text-color": "#111111",
        footerColor: "#133d4a",
        "light-gray": "#EAEAEA",
        gray: "#A9A9A9",
      },
      fontSize: {
        fontText: "10px",
        fontBenefit: "150px",
      },
      backgroundImage: {
        "custom-image":
          "url('https://preview.cruip.com/job-board/images/hero-illustration.svg')",
      },
    },
  },
  plugins: [],
};
