/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'sans serif'],
      },
      letterSpacing: {
        thigher: '0%',
      },
      fontSize: {
        xs: '16px',
        sm: '20px',
        md: '22px',
        base: '24px',
        lg: '28px',
        xl: '32px',
        xxl: '36px',
        xxxl: '40px',
      },
      lineHeight: {
        tigh: '24px',
        tigher: '28px',
        tighest: '30px',
      },
      colors: {
        primary: '#0B2E4C',
        secondary: '#F77F00',
        secondaryScale10: '#FEF2E6',
        greyScale300: '#556D82',
        geyScale100: '#CDD5E0',
      },
      borderRadius: {
        base: '6px',
        lg: '8px',
        xl: '12px',
        xxl: '16px',
      },
    },
  },
  plugins: [],
}
