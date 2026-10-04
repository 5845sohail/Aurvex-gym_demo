/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        aurvex: {
          ink: '#0B0B09',
          paper: '#F4EFE5',
          muted: '#B8B0A2',
          gold: '#D9B36C',
          gold2: '#F0D59C',
          panel: '#151512',
          line: 'rgba(244,239,229,.12)'
        }
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(217,179,108,.25), 0 18px 60px rgba(0,0,0,.45)'
      }
    }
  },
  plugins: []
}
