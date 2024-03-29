import Link from 'next/link'

import { styled, theme } from '../../../stitches.config'

export const WorksContainer = styled('main', {
  marginTop: '10rem',

  '@bp1': {
    marginTop: '8rem'
  },

  '@bp4': {
    marginTop: '5rem'
  },

  h2: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: theme.fonts.custom,
    marginBottom: '2rem'
  }
})

export const Cards = styled('section', {
  gap: '3rem 3rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',

  button: {
    height: 'fit-content',
    margin: 'auto auto'
  },

  '@bp4': {
    gridTemplateColumns: '1fr'
  }
})

export const Card = styled(Link, {
  display: 'flex',
  cursor: 'pointer',
  flexDirection: 'column',
  borderRadius: 14,

  div: {
    width: '100%',
    height: '10rem',
    borderRadius: 14,
    marginBottom: '1rem',
    position: 'relative',
    backgroundColor: theme.colors.gray100,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    strong: {
      fontSize: 10,
      fontWeight: 300,
      letterSpacing: 1,
      color: theme.colors.green,
      fontFamily: theme.fonts.custom,
      backgroundColor: theme.colors.neutral100,
      borderRadius: '14px 0 14px 0',
      padding: '10px 18px',
      left: 0,
      top: 0,
      position: 'absolute',
      transition: 'color 150ms ease-in-out',

      '&:before': {
        content: '',
        top: 32,
        left: 0,
        width: 14,
        height: 14,
        position: 'absolute',
        background: theme.colors.neutral100
      },

      '&:after': {
        content: '',
        top: 32,
        left: 0,
        width: 14,
        height: 14,
        position: 'absolute',
        borderRadius: '14px 0 0 0',
        background: theme.colors.gray100
      }
    }
  },

  span: {
    fontSize: 10,
    fontWeight: 300,
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: theme.colors.neutral900,
    fontFamily: theme.fonts.custom,
    transition: 'color 150ms ease-in-out'
  },

  variants: {
    variant: {
      true: {},
      false: {
        userSelect: 'none',
        pointerEvents: 'none',

        div: {
          opacity: 0.5,

          strong: {
            color: theme.colors.gray900
          }
        },

        span: {
          color: theme.colors.gray500
        }
      }
    }
  }
})
