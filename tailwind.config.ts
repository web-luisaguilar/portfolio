import type { Config } from 'tailwindcss'

const ThemeBlue = {
  '50': '#edfefe',
  '100': '#d1f9fc',
  '200': '#aaf2f7',
  '300': '#6fe6f1',
  '400': '#2dd1e3',
  '500': '#11b4c9',
  '600': '#1190a9',
  '700': '#157489',
  '800': '#1a5e70',
  '900': '#1a4e5f',
  '950': '#05171d',
}
const ThemeGreen = {
  '900': '#18181b',
  '800': '#003b3d',
  '700': '#006666',
  '600': '#007777',
  '500': '#009794',
  '400': '#00bfb9',
  '300': '#00eddf',
  '200': '#00fff8',
  '100': '#31fdff',
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        customTheme: ThemeBlue,
        white: '#ecfffd',
        whitesmoke: '#7bffff',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },

  plugins: [],
}
export default config
