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
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'particle': 'particle 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'magnetic': 'magnetic 0.3s ease-out',
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
      },
      boxShadow: {
        'magic-glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'magic-glow-lg': '0 0 40px rgba(0, 217, 255, 0.4)',
        'magic-purple-glow': '0 0 20px rgba(124, 58, 237, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neural-pattern': 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2300D9FF" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
export default config