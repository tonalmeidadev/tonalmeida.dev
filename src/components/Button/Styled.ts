import { styled, theme } from '../../../stitches.config'

export const ButtonContainer = styled('button', {
  backgroundColor: theme.colors.dark,
  width: 'fit-content',
  borderRadius: 10,
  outline: 'none',
  border: 'none',

  a: {
    borderRadius: 10,
    display: 'flex',
    padding: 14,

    span: {
      fontSize: 10,
      fontWeight: 300,
      letterSpacing: 1,
      padding: '0 14px',
      color: theme.colors.silver,
      textTransform: 'uppercase',
      fontFamily: theme.fonts.custom,
      transition: 'color 150ms ease-in-out'
    },

    svg: {
      color: theme.colors.silver,
      transition: '150ms ease-in-out'
    },

    '&:hover': {
      span: {
        color: theme.colors.white
      },

      svg: {
        color: theme.colors.white,
        transform: 'translateY(-0.125rem)'
      }
    }
  }
})
