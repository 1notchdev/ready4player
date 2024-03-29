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
        primary: "#86F4FC",
        success: "#6EA42B",
        warning: "#A4572B",
        error: "#A42B2B",
        darkblue: "#242E42",
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '11/4': '11 / 4',
      },
    },
  },
  variants: {},
  plugins: [],
};
