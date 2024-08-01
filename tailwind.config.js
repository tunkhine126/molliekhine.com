/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      textColor: {
        'color-primary': '#f171b4',
        'color-secondary': '#898888',
        'secondary': '#424242',
        'color-normal': '#209BF1',
        'color-placeholder': '#585858',
        'color-danger': '#B91C1C',
        'color-twilight': '#e4e4e4',
        'color-confirmation': '#5F6368',
        'color-errorHeader': '#991B1B',
        'color-error': '#F87171',
        'white': '#FFFFFF',
        'nav': '#D1D5DB',
      },
      colors: {
        colorPrimary: '#f171b4',
        colorPrimaryLight: '#209BF1',
        colorSecondary: '#898888',
        secondary: '#424242',
        background: '#F7F8FC',
        footer: '#111827',
        twilight: '#e4e4e4',
        error: '#FFFAFA',
        errorIcon: '#F87171',
        nav: '#2F2F2F',
      },
      letterSpacing: {
        wide: '.67px',
      },
      boxShadow: {
        lg: '0px 4.6102px 4.6102px rgba(0, 0, 0, 0.25)',
      },
      placeholderColor: {
        'color-primary': '#00BAE0',
        'color-secondary': '#898888',
        'color-danger': '#e3342f',
        'color-twilight': '#e4e4e4',
      },
    },
  },
  plugins: [],
}

