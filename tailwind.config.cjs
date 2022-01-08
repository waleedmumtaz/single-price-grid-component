const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            cyan: 'hsl(179, 62%, 43%)',
            'bright-yellow': 'hsl(71, 73%, 54%)',
          },
          neutral: {
            'light-gray': 'hsl(204, 43%, 93%)',
            'grayish-blue': 'hsl(218, 22%, 67%)',
          },
        },
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
