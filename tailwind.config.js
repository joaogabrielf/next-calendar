/** @type {import('tailwindcss').Config} */

import {
  colors,
  borderRadius,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
} from '@joaogabrielf/tokens'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@joaogabrielf/react/**/*.{js,ts,jsx,tsx,mdx, d.ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors,
      borderRadius,
      fontFamily,
      fontSize,
      fontWeight,
      lineHeight,
    },
  },
  plugins: [],
}
