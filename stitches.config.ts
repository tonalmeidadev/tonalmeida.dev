import { Sora } from '@next/font/google'
import localFont from '@next/font/local'
import { createStitches } from '@stitches/react'

const monument = localFont({ src: './public/fonts/Monument-Extended.otf' })
const sora = Sora({
  weight: ['200', '400', '700'],
  subsets: ['latin']
})

export const { getCssText, globalCss, styled, theme } = createStitches({
  theme: {
    fonts: {
      default: `${sora.style.fontFamily}`,
      custom: `${monument.style.fontFamily}`
    },

    colors: {
      white: '#F5F5FA',
      black: '#000000',
      dark: '#111111',
      smooky: '#222222',
      graphite: '#3A3A3A',
      gray: '#5C5C5C',
      silver: '#B5B5B5',
      grayOpacity: '#77777725'
    }
  },

  media: {
    bp1: '(max-width: 1280px)',
    bp2: '(max-width: 767px)',
    bp3: '(max-width: 539px)',
    bp4: '(max-width: 360px)'
  }
})
