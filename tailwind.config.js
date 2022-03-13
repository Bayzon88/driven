module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        // xl: "8rem",
      },
      margin: {
        xl: "10rem",
      },
    },
    screens: {
      desk: "1200px",
      tableta: "1020px",
      telefono: "768px",
    },
    extend: {
      spacing: {
        100: "100%",
        110: "700px",
      },
    },
  },
  plugins: [],
};
