/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0f',
          card: '#13131a',
          hover: '#1a1a24',
        },
        neon: {
          cyan: '#00ffff',
          purple: '#bf00ff',
          pink: '#ff00ff',
          blue: '#0080ff',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3)',
        'neon-purple': '0 0 10px rgba(191, 0, 255, 0.5), 0 0 20px rgba(191, 0, 255, 0.3)',
        'neon-pink': '0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)',
        'glow-sm': '0 0 5px rgba(0, 255, 255, 0.3)',
        'glow-md': '0 0 15px rgba(0, 255, 255, 0.4)',
        'glow-lg': '0 0 25px rgba(0, 255, 255, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
