/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        celestial: 'rgb(var(--color-celestial) / <alpha-value>)',
        terreal: 'rgb(var(--color-terreal) / <alpha-value>)',
        abissal: 'rgb(var(--color-abissal) / <alpha-value>)',
      },
      backgroundColor: {
        'bg-dark': 'rgb(var(--bg-dark) / <alpha-value>)',
        'bg-darker': 'rgb(var(--bg-darker) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
