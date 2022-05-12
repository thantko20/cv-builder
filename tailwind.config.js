module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      varela: ['Varela Round', 'sans-serif'],
    },
    screens: {
      '3xl': '1600px',
    },
  },
  plugins: [],
};
