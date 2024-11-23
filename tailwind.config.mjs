/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#7B68EE',
        secondary: '#6C757D',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: '#1a1a1a',
            p: {
              textAlign: 'justify',
              hyphens: 'auto',
            },
            h1: {
              color: '#1a1a1a',
              fontWeight: '700',
            },
            h2: {
              color: '#1a1a1a',
              fontWeight: '600',
            },
            h3: {
              color: '#1a1a1a',
              fontWeight: '600',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            img: {
              borderRadius: '0.5rem',
              marginTop: '2em',
              marginBottom: '2em',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}