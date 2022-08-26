module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#0B0B0E",
        second: "#080F1B",
        vibyBlue: "#00DEFF",
        whiteWithoutOpacity: "rgba(255, 255, 255, 0.05)",
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  variants: {},
  plugins: [],
};
