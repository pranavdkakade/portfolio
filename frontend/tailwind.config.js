/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#020B18',
          800: '#071526',
          700: '#0A1E35',
          600: '#0D2845',
        },
        accent: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
          glow: '#60A5FA',
        },
      },
      fontFamily: {
        mono: ['Space Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'main-gradient': 'radial-gradient(ellipse at top, #0D2845 0%, #020B18 60%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'modal-pop': 'modalPop 0.25s cubic-bezier(0.34,1.56,0.64,1) both',
        'backdrop-in': 'backdropIn 0.2s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #3B82F6, 0 0 10px #3B82F6' },
          '100%': { boxShadow: '0 0 20px #3B82F6, 0 0 40px #3B82F640' },
        },
        modalPop: {
          '0%':   { opacity: '0', transform: 'scale(0.88) translateY(16px)' },
          '100%': { opacity: '1', transform: 'scale(1)   translateY(0)' },
        },
        backdropIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

