import { keyframes } from '@stitches/react'
import Link from 'next/link'

import { styled, theme } from '../../../stitches.config'

const compassMovement = keyframes({
  '0%': {
    transform: 'scale(1) rotate(0deg)'
  },

  '50%': {
    transform: 'scale(1) rotate(80deg)'
  },

  '100%': {
    transform: 'scale(1) rotate(-180deg)'
  }
})

export const AddressContainer = styled(Link, {
  gap: '1rem',
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.neutral900,
  width: 'fit-content',

  svg: {
    animation: `${compassMovement} 2s alternate infinite`
  },

  div: {
    p: {
      fontSize: 10,
      fontWeight: 300,
      letterSpacing: 1,
      fontFamily: theme.fonts.custom,
      textTransform: 'uppercase'
    }
  },

  '&:hover': {
    svg: {
      animation: 'nome'
    },

    p: {
      textDecoration: 'underline'
    }
  }
})
