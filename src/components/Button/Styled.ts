import { styled, theme } from '../../../stitches.config'

export const ButtonContainer = styled('button', {
  backgroundColor: theme.colors.gray100,
  width: 'fit-content',
  borderRadius: 10,
  outline: 'none',
  border: 'none',
  minHeight: 50,
  display: 'flex',
  alignItems: 'center',

  a: {
    gap: '0.5rem',
    borderRadius: 10,
    display: 'flex',
    padding: 14,
    fontSize: 10,
    fontWeight: 300,
    letterSpacing: 1,
    lineHeight: '20px',
    textTransform: 'uppercase',
    color: theme.colors.neutral500,
    fontFamily: theme.fonts.custom,
    transition: 'color 150ms ease-in-out',

    svg: {
      color: theme.colors.neutral500,
      transition: '150ms ease-in-out'
    },

    '&:hover': {
      color: theme.colors.neutral900,

      svg: {
        color: theme.colors.neutral900,
        transform: 'translateY(-0.125rem)'
      }
    }
  },

  variants: {
    variant: {
      text: {
        padding: '0 14px'
      },

      noText: {
        padding: 0
      }
    }
  }
})
