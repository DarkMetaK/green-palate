import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray900: '#090E09',
      gray800: '#131912',
      gray700: '#242E23',
      gray600: '#354033',
      gray500: '#4D594A',
      gray400: '#647160',
      gray300: '#8D9C88',
      gray250: '#A6B39F',
      gray200: '#C0CCBA',
      gray150: '#D5DECE',
      gray100: '#E6EDE1',
      gray50: '#FBFFF8',

      green: '#00563F',
      lightGreen: '#27903E',

      black: '#000',
      white: '#fff',
    }
  },
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 760px)',
    lg: '(max-width: 1160px)',
  },
})
