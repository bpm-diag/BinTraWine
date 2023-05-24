/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-default': '#FCFCFD',
        nord0: { base: '#2F3541', light: '', dark: '' },
        nord1: { base: '#3C4353', light: '', dark: '' },
        nord2: { base: '#444D5F', light: '', dark: '' },
        nord3: { base: '#4D576A', light: '', dark: '' },
        nord4: { base: '#D8DEE9', light: '', dark: '' },
        nord5: { base: '#E5E9F0', light: '', dark: '' },
        nord6: { base: '#ECEFF4', light: '', dark: '' },
        nord7: { base: '#8FBCBB', light: '', dark: '' },
        nord8: { base: '77B8CA', light: '', dark: '#87BFCF' },
        nord9: { base: '#8EABC7', light: '', dark: '#7396BA' },
        nord10: { base: '#5D81AC', light: '', dark: '' },
        nord11: { base: '#BE6069', light: '', dark: '' },
        nord12: { base: '#D18771', light: '', dark: '' },
        nord13: { base: '#EBCA89', light: '', dark: '' },
        nord14: { base: '#A4BF8D', light: '', dark: '' },
        nord15: { base: '#B48EAD', light: '#e1d2de', dark: '' },
      },
      fontFamily: {
        regular: ['Rubik', 'sans-serif'],
        medium: ['Rubik-Medium', 'sans-serif'],
        bold: ['Rubik-Bold', 'sans-serif'],
        code: ['Source Code Pro', 'monospace'],
      }
    },
  },
  plugins: [],
};
