import { createStitches } from '@stitches/react'

export const { getCssText, globalCss, styled, theme } = createStitches({
  theme: {
    fonts: {
      default: 'Sora, sans-serif',
      custom: 'Monument Extended, sans serif'
    },

    colors: {
      white: '#F5F5FA',
      black: '#000000',
      dark: '#111111',
      smooky: '#3A3A3A',
      gray: '#5C5C5C',
      silver: '#B5B5B5',
      grayOpacity: '#5C5C5C20'
    }
  },

  media: {
    bp1: '(max-width: 1280px)',
    bp2: '(max-width: 767px)',
    bp3: '(max-width: 539px)',
    bp4: '(max-width: 360px)'
  }
})
