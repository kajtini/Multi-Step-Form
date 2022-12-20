/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue-marine": "hsl(213, 96%, 18%)",
        "primary-blue-purplish": "hsl(243, 100%, 62%)",
        "primary-blue-pastel": "hsl(228, 100%, 84%)",
        "primary-blue-light": "hsl(206, 94%, 87%)",
        "primary-red": "hsl(354, 84%, 57%)",

        "neutral-gray-cool": "hsl(231, 11%, 63%)",
        "neutral-gray-light": "hsl(229, 24%, 87%)",
        "neutral-magnolia": "hsl(217, 100%, 97%)",
        "neutral-alabaster": "hsl(231, 100%, 99%)",

        white: "hsl(0, 0%, 100%)",
      },

      backgroundImage: {
        "sidebar-pattern": "url('./public/images/bg-sidebar-desktop.svg')",
      },

      fontFamily: {
        primary: ["Ubuntu", "open-sans"],
      },
    },
  },
  plugins: [],
};
