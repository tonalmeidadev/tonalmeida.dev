import { keyframes } from '@stitches/react'

export const spinnerNProgress = keyframes({
  '0%': {
    transform: 'rotate(0deg)'
  },

  '100%': {
    transform: 'rotate(360deg)'
  }
})

export const flashingLed = keyframes({
  '0%, 10%': {
    opacity: 0
  },

  '5%': {
    opacity: 1
  },

  '11%': {
    opacity: 1
  }
})
