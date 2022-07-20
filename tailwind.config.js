module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/Components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        bgContainer: "linear-gradient(to right bottom, #fbdb89, #f48982)",
        bgHeaderButton: "linear-gradient(to right bottom,#fbdb89,#f48982)",
        bgRecipeTitle: "linear-gradient(to right bottom,#fbdb89,#f48982)",
        bgDirectionBtn:
          "linear-gradient(to right bottom, rgb(251, 219, 137), rgb(244, 137, 130))",
        bgUploadBtn:
          "linear-gradient(to right bottom, rgb(251, 219, 137), rgb(244, 137, 130))",
        bgImage: "linear-gradient(to right bottom,#fbdb89,#f48982)",
      },
      color: {
        howto: "rgb(243, 142, 130)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
