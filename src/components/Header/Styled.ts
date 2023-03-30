import Link from 'next/link'

import { styled, theme } from '../../../stitches.config'
import { flashingLed } from '../../styles/Motions'

export const HeaderContainer = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  ul: {
    gap: '0.5rem',
    display: 'flex',
    alignItems: 'center',

    li: {
      address: {
        fontStyle: 'normal'
      }
    }
  }
})

export const Logo = styled('div', {
  display: 'flex',

  a: {
    padding: '2rem 0.5rem'
  },

  variants: {
    variant: {
      light: {
        filter: 'invert(1)'
      },
      dark: {
        filter: 'invert(0)'
      }
    }
  }
})

export const Contact = styled(Link, {
  height: 36,
  gap: '0.5rem',
  display: 'flex',
  borderRadius: 12,
  padding: '0 22px',
  alignItems: 'center',
  backgroundColor: theme.colors.gray100,
  position: 'relative',

  span: {
    fontSize: 10,
    fontWeight: 400,
    letterSpacing: 1,
    color: theme.colors.neutral900,
    fontFamily: theme.fonts.custom,

    '&:nth-child(3)': {
      display: 'none'
    }
  },

  '@bp5': {
    span: {
      '&:nth-child(3)': {
        display: 'block'
      },
      '&:nth-child(2)': {
        display: 'none'
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
  height: 14,
  width: 8,
  opacity: 1,
  backgroundColor: theme.colors.green,
  animation: `${flashingLed} 5s infinite`
})
