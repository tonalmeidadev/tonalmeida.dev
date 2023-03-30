import Link from 'next/link'

import { styled, theme } from '../../../stitches.config'

export const DockContainer = styled('div', {
  position: 'fixed',
  bottom: '2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 10,

  '@bp5': {
    gap: 0,
    bottom: '1.5rem'
  }
})

export const UseKBar = styled('button', {
  border: 0,
  padding: 6,
  display: 'flex',
  borderRadius: 18,
  backdropFilter: 'blur(10px)',
  backgroundColor: theme.colors.grayOpc900,
  cursor: 'pointer',

  div: {
    padding: 16,
    display: 'flex',
    borderRadius: 14,
    backgroundColor: theme.colors.neutral100,

    svg: {
      fontSize: 22,
      color: theme.colors.neutral900
    }
  },

  '@bp5': {
    padding: '6px 0 6px 6px',
    borderRadius: '16px 0 0 16px'
  }
})

export const Navigation = styled('nav', {
  ul: {
    gap: 6,
    padding: 6,
    display: 'flex',
    borderRadius: 18,
    backdropFilter: 'blur(10px)',
    backgroundColor: theme.colors.grayOpc900,

    li: {
      border: 0,
      display: 'flex'
    }
  },

  '@bp5': {
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
  borderRadius: 14,
  backgroundColor: theme.colors.neutral100,
  transition: 'transform 150ms ease-in-out',

  svg: {
    fontSize: 22,
    transition: 'color 150ms ease-in-out'
  },

  '&:hover': {
    transform: 'translateY(-0.125rem)',

    svg: {
      color: theme.colors.neutral900
    }
  },

  variants: {
    variant: {
      true: {
        '&:hover': {
          transform: 'inherit',

          svg: {
            color: theme.colors.neutral900
          }
        }
      },

      false: {
        svg: {
          color: theme.colors.gray700
        }
      }
    }
  }
})
