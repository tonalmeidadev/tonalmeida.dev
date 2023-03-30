import { blackA, gray, slate, grayDark, lime, whiteA } from '@radix-ui/colors'
import { createStitches, createTheme } from '@stitches/react'

export const { getCssText, globalCss, styled, theme } = createStitches({
  theme: {
    fonts: {
      default: '"Sora", sans-serif',
      custom: '"Monument Extended", sans-serif'
    },

    colors: {
      neutral100: slate.slate3,
      neutral300: slate.slate9,
      neutral500: slate.slate11,
      neutral900: '#000000',
      gray100: slate.slate5,
      gray500: slate.slate8,
      gray700: slate.slate10,
      gray900: slate.slate8,
      grayOpc100: '#F1F3F566',
      grayOpc500: blackA.blackA2,
      grayOpc900: blackA.blackA2,
      green: lime.lime9
    }
  },

  media: {
    bp1: '(max-width: 1280px)',
    bp2: '(max-height: 820px)',
    bp3: '(max-width: 767px)',
    bp4: '(max-width: 539px)',
    bp5: '(max-width: 360px)'
  }
})

export const dark = createTheme({
  colors: {
    neutral100: '#000000',
    neutral300: gray.gray8,
    neutral500: gray.gray7,
    neutral900: gray.gray1,
    gray100: grayDark.gray1,
    gray500: grayDark.gray5,
    gray700: grayDark.gray7,
    gray900: grayDark.gray9,
    grayOpc900: whiteA.whiteA5,
    grayOpc500: whiteA.whiteA4,
    grayOpc100: blackA.blackA9,
    green: lime.lime9
  }
})
