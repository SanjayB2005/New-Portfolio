module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8e44ad",
        secondary: "#1e1e2e",
        white: "#ffffff",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #8e44ad, #3498db)',
      },
    },
  },
  plugins: [],
}