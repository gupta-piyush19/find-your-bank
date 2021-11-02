module.exports = {
  // mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        merienda: ["Merienda", "sans-serif"],
        pridi: ["Pridi", "sans-serif"],
      },
      colors: {
        // darkBg: "#191919",
        darkBg: "#1F1B24",
        darkLink: "#FF6FFF",
        darkLinkHover: "#FF69B4",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
