/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#000000', // Pure black (primary) - black
        'secondary': '#FFFFFF', // Clean white (secondary) - white
        'accent': '#004cff', // Warm pink (accent) - pink-400
        'background': '#FAFAFA', // Subtle off-white (background) - gray-50
        'surface': '#F5F5F5', // Light gray (surface) - gray-100
        'text-primary': '#1A1A1A', // Near-black (text-primary) - gray-900
        'text-secondary': '#666666', // Medium gray (text-secondary) - gray-500
        'success': '#4ECDC4', // Teal-blue (success) - teal-400
        'warning': '#FFE66D', // Soft yellow (warning) - yellow-300
        'error': '#FF8A80', // Muted coral (error) - red-300
        'border': '#E5E5E5', // Light gray (border) - gray-200
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'DEFAULT': '8px',
        'sm': '4px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'minimal': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'slide-in-right': 'slideInRight 0.3s cubic-bezier(0.4, 0.0, 0.2, 1)',
        'stagger-letters': 'staggerLetters 0.05s cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      zIndex: {
        '100': '100',
        '200': '200',
        '300': '300',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}