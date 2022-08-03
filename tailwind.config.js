const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  mode: 'jit',
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['"Roboto Slab"', 'serif'],
      body: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
})
