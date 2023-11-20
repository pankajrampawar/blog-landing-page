/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'top': 'hsl(13, 100%, 72%)',
        'bottom': 'hsl(353, 100%, 62%)',
        'headings': 'hsl(208, 49%, 24%)',
        'body-text': 'hsl(356, 100%, 66%)',
        'dark-greyish-blue': 'hsl(207, 13%, 34%)',
        'top1': 'hsl(237, 17%, 21%)',
        'bottom1': 'hsl(237, 23%, 32%)',
        'fotter-bg': 'hsl(240, 10%, 16%)',
        'fotter-text': 'hsl(240, 2%, 79%)'
      },
      borderRadius: {
        'ic': '150px;'
      },
      fontSize: {
        'intro-head': '40px;',
        'subtext': '21px'
      }
    },
  },
  plugins: [],
}
