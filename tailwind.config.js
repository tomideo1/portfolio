import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  mode: 'jit',
  exposeConfig: true,
  config: {
    darkMode: 'class', // or 'media' or 'class'
    purge: {
      content: ['~/node_modules/tailwindcss-dark-mode/prefers-dark.{js,ts}'],
    },
    theme: {
      darkSelector: '.dark-mode',
      extend: {
        screens: {
          xs: '425px',
          ...defaultTheme.screens,
        },
      },
      variants: {
        extend: {
          backgroundColor: [
            'dark',
            'dark-hover',
            'dark-group-hover',
            'dark-even',
            'dark-odd',
            'active',
            'disabled',
            'hover',
            'checked',
          ],
          borderColor: [
            'dark',
            'dark-focus',
            'dark-focus-within',
            'active',
            'disabled',
            'hover',
            'focus-within',
            'focus',
          ],
          borderRadius: [
            'active',
            'disabled',
            'hover',
            'focus-within',
            'focus',
          ],
          textColor: ['active', 'disabled', 'hover', 'focus'],
          cursor: ['responsive', 'hover', 'disabled'],
        },
      },
      plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('tailwindcss-dark-mode')(),
      ],
    },
  },
}

