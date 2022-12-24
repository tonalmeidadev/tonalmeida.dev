import {
  KBarAnimator as Animator,
  KBarPositioner as Positioner,
  KBarSearch as Search
} from 'kbar'

import { styled, theme } from '../../../stitches.config'

export const KBarPositioner = styled(Positioner, {
  maxWidth: 832,
  margin: '0 auto',
  padding: '0 4rem!important',
  alignItems: 'center!important',
  backgroundColor: '#00000055',
  backdropFilter: 'blur(10px)',

  '@bp3': {
    padding: '0 1rem!important'
  }
})

export const KBarContainer = styled(Animator, {
  width: '100%',
  borderRadius: '1rem',
  backgroundColor: '#00000055',
  backdropFilter: 'blur(10px)',
  border: `2px solid ${theme.colors.dark}`,
  overflow: 'hidden',

  'div:last-child': {
    maxHeight: 'inherit!important'
  }
})

export const KBarSearchContainer = styled('div', {
  position: 'relative',

  '> svg': {
    top: '50%',
    left: '3rem',
    zIndex: 1,
    color: theme.colors.white,
    transform: 'translateY(-50%)',
    position: 'absolute'
  },

  '@bp3': {
    '> svg': {
      left: '1rem'
    }
  }
})

export const KBarSearch = styled(Search, {
  width: '100%',
  border: 'none',
  outline: 'none',
  padding: '1.5rem 3rem 1.5rem 5.5rem',
  backgroundColor: '#00000055',
  backdropFilter: 'blur(10px)',
  borderBottom: `2px solid ${theme.colors.dark}`,
  color: theme.colors.white,

  '&::placeholder': {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '180%',
    color: theme.colors.gray
  },

  '@bp3': {
    padding: '1.5rem 1rem 1.5rem 3rem'
  }
})

export const KBarList = styled('div', {
  fontSize: 10,
  fontWeight: 300,
  letterSpacing: 1,
  padding: '1rem 2rem',
  fontFamily: theme.fonts.custom,
  backgroundColor: '#00000055',
  backdropFilter: 'blur(10px)',
  textTransform: 'uppercase',

  '@bp3': {
    padding: '1rem'
  }
})

export const KBarItemBox = styled('div', {
  margin: 0,
  cursor: 'pointer',
  padding: '1rem 3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@bp3': {
    padding: '1rem'
  },

  variants: {
    variant: {
      active: {
        backgroundColor: '#25252555',
        backdropFilter: 'blur(10px)'
      },

      inactive: {
        backgroundColor: '#00000055',
        backdropFilter: 'blur(10px)'
      }
    }
  }
})

export const KBarItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  '> div span': {
    fontSize: 14,
    fontWeight: 200,
    lineHeight: '180%'
  },

  '@bp3': {
    gap: '1rem'
  }
})

export const KBarIcon = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.white,
  height: 20,
  width: 20
})

export const KBarCommand = styled('div', {
  gap: '0.25rem',
  display: 'grid',
  gridAutoFlow: 'column'
})

export const KBarKbd = styled('kbd', {
  backgroundColor: theme.colors.dark,
  fontFamily: theme.fonts.custom,
  padding: '0.5rem',
  letterSpacing: 1,
  fontSize: 10,
  textTransform: 'uppercase',
  borderRadius: '0.25rem'
})

export const UseKBarContainer = styled('div', {
  gap: '0.5rem',
  height: '2rem',
  display: 'flex',
  cursor: 'pointer',
  width: 'fit-content',
  alignItems: 'center',
  margin: 'auto 0 auto auto',

  div: {
    gap: '0.25rem',
    display: 'flex',
    alignItems: 'center',

    'span, strong': {
      fontFamily: theme.fonts.custom,
      letterSpacing: 1,
      fontSize: 10
    },

    strong: {
      padding: '0.5rem',
      backgroundColor: theme.colors.gray
    }
  },

  '@bp2': {
    div: {
      display: 'none'
    }
  }
})
