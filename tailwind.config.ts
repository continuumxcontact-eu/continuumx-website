import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7A0E1B',
          dark: '#5B0A13',
          soft: '#9B1B2A',
        },
        graphite: '#2B2B2B',
        slate: '#4B5563',
        lightGray: '#E5E7EB',
        backgroundLight: '#FAF7F5',
        surfaceLight: '#FFFFFF',
        textPrimary: '#1F2937',
        textMuted: '#6B7280',
        accent: '#C7A15A',
        backgroundDark: '#0B0B0D',
        surfaceDark: '#111114',
        textOnDark: '#F3F4F6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
