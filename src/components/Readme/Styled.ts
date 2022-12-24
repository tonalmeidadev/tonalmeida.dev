import { keyframes } from '@stitches/react'

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

export const ReadmeContainer = styled('main', {
  display: 'grid',
  alignItems: 'flex-end',
  gridTemplateColumns: '1fr 1fr',

  section: {
    display: 'flex',
    flexDirection: 'column'
  },

  '@bp2': {
    gap: '2rem',
    gridTemplateColumns: '1fr'
  }
})

export const Profile = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.125rem',

  img: {
    borderRadius: '50%',
    border: `1px solid ${theme.colors.dark}`
  },

  h1: {
    fontSize: 36,
    fontWeight: 400,
    fontFamily: theme.fonts.custom,
    textTransform: 'uppercase',
    lineHeight: '85%'
  },

  h2: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: theme.fonts.custom
  },

  span: {
    height: '1.5rem',
    fontSize: 14,
    fontWeight: 200,
    lineHeight: '180%',

    strong: {
      fontWeight: 200,
      textDecoration: 'underline'
    }
  },

  '@bp2': {
    span: {
      display: 'none'
    }
  }
})

export const Photo = styled('div', {
  display: 'flex',
  padding: '0.25rem',
  borderRadius: '50%',
  marginBottom: '1rem',
  width: 'fit-content',
  height: 'fit-content',
  border: `6px solid ${theme.colors.dark}`
})

export const Resume = styled('section', {
  width: 300,
  gap: '1.125rem',
  marginLeft: 'auto',

  p: {
    fontSize: 14,
    fontWeight: 200,
    lineHeight: '180%'
  },

  a: {
    gap: '1rem',
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.white,
    width: 'fit-content',

    svg: {
      animation: `${compassMovement} 2s alternate infinite`
    },

    span: {
      fontSize: 10,
      fontWeight: 300,
      letterSpacing: 1,
      fontFamily: theme.fonts.custom,
      textTransform: 'uppercase'
    },

    '&:hover span': {
      textDecoration: 'underline'
    }
  },

  '@bp2': {
    width: 'inherit',
    gap: '2rem',

    a: {
      span: {
        br: {
          display: 'none'
        }
      }
    }
  }
})
