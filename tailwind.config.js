export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
   primary:   '#7C3AED',  // violet-600 → softer, confident
secondary: '#5a21b6bc',  // deep royal purple
accent:    '#F3E8FF',  // very soft lavender (clean background)

      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        logo: ["'Great Vibes'", "cursive"],
      },
    },
  },
  plugins: [],
};
