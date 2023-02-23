import { keyframes } from '@stitches/react'

import { styled, theme } from '../../../stitches.config'

const flashingLed = keyframes({
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

export const HeaderContainer = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> div': {
    display: 'flex',

    a: {
      padding: '2rem'
    }
  },

  address: {
    fontStyle: 'normal',

    a: {
      display: 'flex',
      borderRadius: 16,
      padding: '10px 22px',
      backgroundColor: theme.colors.dark,
      position: 'relative',

      span: {
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: 1,
        color: theme.colors.silver,
        fontFamily: theme.fonts.custom,
        transition: 'color 150ms ease-in-out'
      },

      '&:hover': {
        span: {
          color: theme.colors.white
        }
      }
    }
  }
})

export const Status = styled('div', {
  left: 1,
  top: '50%',
  transform: 'translateY(-50%)',
  position: 'absolute',
  borderRadius: 5,
  height: 12,
  width: 6,
  opacity: 1,
  animation: `${flashingLed} 5s infinite`,

  variants: {
    variant: {
      active: {
        backgroundColor: theme.colors.white
      },

      inactive: {
        backgroundColor: theme.colors.graphite
      }
    }
  }
})
