import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-8s': 'spin 8s linear infinite'
      }
    }
  },
  plugins: []
} satisfies Config;
