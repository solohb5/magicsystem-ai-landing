import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'magic-dark': '#0A0A0A',
        'magic-cyan': '#00D9FF',
        'magic-purple': '#7C3AED',
        'magic-gray': '#1A1A1A',
        'magic-light-gray': '#2A2A2A',
        // Professional palette
        'stone': {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        'warm': {
          50: '#fefdf8',
          100: '#fef7ed',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      fontWeight: {
        'ultralight': '100',
        'light': '300',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'particle': 'particle 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'magnetic': 'magnetic 0.3s ease-out',
        'premium-glow': 'premiumGlow 3s ease-in-out infinite',
        'text-shimmer': 'textShimmer 2.5s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'breathe': 'breathe 6s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'energy-pulse': 'energyPulse 2s ease-in-out infinite',
        'holographic': 'holographic 3s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px var(--magic-cyan), 0 0 10px var(--magic-cyan), 0 0 15px var(--magic-cyan)' },
          '100%': { boxShadow: '0 0 20px var(--magic-cyan), 0 0 30px var(--magic-cyan), 0 0 40px var(--magic-cyan)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        particle: {
          '0%': { transform: 'translateX(-100vw) translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateX(100vw) translateY(-50px) rotate(360deg)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        magnetic: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(1deg)' },
          '100%': { transform: 'scale(1.1) rotate(0deg)' },
        },
        premiumGlow: {
          '0%': { 
            textShadow: '0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3), 0 0 30px rgba(0, 217, 255, 0.1)',
            filter: 'brightness(1)'
          },
          '50%': { 
            textShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.6), 0 0 60px rgba(0, 217, 255, 0.4), 0 0 80px rgba(124, 58, 237, 0.2)',
            filter: 'brightness(1.1)'
          },
          '100%': { 
            textShadow: '0 0 10px rgba(0, 217, 255, 0.5), 0 0 20px rgba(0, 217, 255, 0.3), 0 0 30px rgba(0, 217, 255, 0.1)',
            filter: 'brightness(1)'
          },
        },
        textShimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1) translateY(0px)' },
          '50%': { transform: 'scale(1.01) translateY(-2px)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        energyPulse: {
          '0%': { 
            boxShadow: '0 0 0 0 rgba(0, 217, 255, 0.4)', 
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 0 20px rgba(0, 217, 255, 0)', 
            transform: 'scale(1.02)' 
          },
          '100%': { 
            boxShadow: '0 0 0 0 rgba(0, 217, 255, 0)', 
            transform: 'scale(1)' 
          },
        },
        holographic: {
          '0%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(0deg) brightness(1)'
          },
          '33%': { 
            backgroundPosition: '50% 0%',
            filter: 'hue-rotate(120deg) brightness(1.1)'
          },
          '66%': { 
            backgroundPosition: '100% 50%',
            filter: 'hue-rotate(240deg) brightness(0.9)'
          },
          '100%': { 
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(360deg) brightness(1)'
          },
        },
      },
      boxShadow: {
        'magic-glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'magic-glow-lg': '0 0 40px rgba(0, 217, 255, 0.4)',
        'magic-purple-glow': '0 0 20px rgba(124, 58, 237, 0.3)',
        'premium-glow': '0 0 30px rgba(0, 217, 255, 0.4), 0 0 60px rgba(0, 217, 255, 0.2), 0 0 90px rgba(124, 58, 237, 0.1)',
        'holographic': '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(124, 58, 237, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)',
        'energy-field': '0 0 50px rgba(0, 217, 255, 0.3), inset 0 0 50px rgba(124, 58, 237, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neural-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300D9FF" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        'premium-text': 'linear-gradient(135deg, #ffffff 0%, #00D9FF 25%, #ffffff 50%, #7C3AED 75%, #ffffff 100%)',
        'holographic-text': 'linear-gradient(45deg, #ff0080 0%, #00D9FF 25%, #7C3AED 50%, #ffffff 75%, #00D9FF 100%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
        'energy-gradient': 'radial-gradient(ellipse at center, rgba(0, 217, 255, 0.15) 0%, rgba(124, 58, 237, 0.1) 50%, transparent 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, #00D9FF 0px, transparent 50%), radial-gradient(at 80% 0%, #7C3AED 0px, transparent 50%), radial-gradient(at 0% 50%, #00D9FF 0px, transparent 50%), radial-gradient(at 80% 50%, #7C3AED 0px, transparent 50%), radial-gradient(at 0% 100%, #00D9FF 0px, transparent 50%), radial-gradient(at 80% 100%, #7C3AED 0px, transparent 50%)',
      },
    },
  },
  plugins: [],
}
export default config