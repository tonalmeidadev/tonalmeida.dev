import { gray, grayDark, whiteA, green, red } from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

export const { getCssText, globalCss, styled, theme } = createStitches({
  theme: {
    fonts: {
      default: '"Sora", sans-serif',
      custom: '"Monument Extended", sans-serif'
    },

    colors: {
      neutral100: '#000000',
      neutral300: gray.gray8,
      neutral500: gray.gray7,
      neutral900: gray.gray1,
      gray100: grayDark.gray1,
      gray300: grayDark.gray3,
      gray500: grayDark.gray5,
      gray700: grayDark.gray7,
      gray900: grayDark.gray9,
      grayOpc: whiteA.whiteA5,
      green: green.green10,
      red: red.red10
    }
  },

  media: {
    bp1: '(max-width: 1280px)',
    bp2: '(max-width: 767px)',
    bp3: '(max-width: 539px)',
    bp4: '(max-width: 360px)'
  }
})
