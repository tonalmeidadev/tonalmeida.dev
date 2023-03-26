import { styled, theme } from '../../../stitches.config'

export const PageContainer = styled('main', {
  gap: '1.5rem',
  width: '100bw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

  h1: {
    gap: '1.5rem',
    display: 'flex',
    width: 'min-content',
    alignItems: 'center',

    span: {
      fontWeight: 400,

      '&:first-child': {
        fontSize: '2.25rem',
        fontFamily: theme.fonts.custom
      },

      '&:last-child': {
        fontSize: '1rem'
      }
    },

    div: {
      width: 1,
      height: '4rem',
      backgroundColor: theme.colors.neutral900
    }
  }
})
