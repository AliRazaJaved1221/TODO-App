// tailwind.config.js
module.exports = {

  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your source files
    "./public/index.html",        // Include the HTML file if needed
  ],
  theme: {
    container: {
      center: true, // Centers the container by default
      padding: '15rem', // Adds default padding
    },
  },
  plugins: [],
};