import Link from 'next/link'

import { styled, theme } from '../../../stitches.config'
import { flashingLed } from '../../styles/Motions'

export const HeaderContainer = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> div': {
    display: 'flex',

    a: {
      padding: '2rem 1rem 2rem 0.5rem'
    }
  },

  ul: {
    gap: '1.5rem',
    display: 'flex',
    alignItems: 'center',

    li: {
      address: {
        fontStyle: 'normal'
      }
    }
  }
})

export const Contact = styled(Link, {
  gap: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 12,
  padding: '12px 22px',
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
