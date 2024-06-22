import type { Config } from 'tailwindcss'

// const ThemeBlue = {
//   '50': '#edfefe',
//   '100': '#d1f9fc',
//   '200': '#aaf2f7',
//   '300': '#6fe6f1',
//   '400': '#2dd1e3',
//   '500': '#11b4c9',
//   '600': '#1190a9',
//   '700': '#157489',
//   '800': '#1a5e70',
//   '900': '#1a4e5f',
//   '950': '#05171d',
// }

const Theme_Dark = {
  '50': '#f0f8ff',
  '100': '#e0f0fe',
  '200': '#bae1fd',
  '300': '#7dcafc',
  '400': '#39aff7',
  '500': '#21a1f1', //Principal Color
  '600': '#0376c6',
  '700': '#035da1',
  '800': '#075085',
  '900': '#0c436e',
  '950': '#082a49',
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
        customTheme: Theme_Dark,
        white: '#f0f8ff',
        whitesmoke: '#e0f0fe',
        blackBlue: '#0e0e11',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },

  plugins: [],
}
export default config
