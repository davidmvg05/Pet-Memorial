/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
    },
    extend: {
      colors: {
        pet: {
          teal: {
            50: '#F2F7F7',
            100: '#E1EDEE',
            200: '#C5DCDF',
            300: '#9EC2C7',
            400: '#75A5AC',
            500: '#52858B', // Core Brand Color (Verde Ardósia / Slated Teal)
            600: '#426D72',
            700: '#38595D',
            800: '#324C50',
            900: '#2D4144',
            950: '#1A282A',
          },
          dark: '#121516',
          muted: '#64748B',
          light: '#F8FAFA',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Montserrat"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      lineHeight: {
        relaxed: '1.75',
      },
    },
  },
  plugins: [],
};
