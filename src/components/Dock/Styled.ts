import Link from 'next/link'

import { styled, theme } from '../../../stitches.config'

export const DockContainer = styled('div', {
  position: 'fixed',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 10,

  '@bp4': {
    gap: 0
  }
})

export const UseKBar = styled('button', {
  border: 0,
  padding: 6,
  display: 'flex',
  borderRadius: 16,
  backdropFilter: 'blur(10px)',
  backgroundColor: theme.colors.grayOpacity,
  cursor: 'pointer',

  div: {
    padding: 16,
    display: 'flex',
    borderRadius: 12,
    backgroundColor: theme.colors.black,

    svg: {
      fontSize: 22,
      color: theme.colors.white
    }
  },

  '@bp4': {
    padding: '6px 0 6px 6px',
    borderRadius: '16px 0 0 16px'
  }
})

export const Navigation = styled('nav', {
  ul: {
    gap: 6,
    padding: 6,
    display: 'flex',
    borderRadius: '0.875rem',
    backdropFilter: 'blur(10px)',
    backgroundColor: theme.colors.grayOpacity,

    li: {
      border: 0,
      display: 'flex'
    }
  },

  '@bp4': {
    ul: {
      borderRadius: '0 16px 16px 0',

      li: {
        '&:last-child': {
          display: 'none'
        }
      }
    }
  }
})

export const NextLink = styled(Link, {
  padding: 16,
  display: 'flex',
  borderRadius: 12,
  backgroundColor: theme.colors.black,
  transition: 'transform 150ms ease-in-out',

  svg: {
    fontSize: 22,
    transition: 'color 150ms ease-in-out'
  },

  '&:hover': {
    transform: 'translateY(-0.125rem)',

    svg: {
      color: theme.colors.white
    }
  },

  variants: {
    variant: {
      true: {
        '&:hover': {
          transform: 'inherit',

          svg: {
            color: theme.colors.white
          }
        }
      },

      false: {
        svg: {
          color: theme.colors.gray
        }
      }
    }
  }
})
