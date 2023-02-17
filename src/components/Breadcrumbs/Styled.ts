import { styled, theme } from '../../../stitches.config'

export const BreadcrumbsContainer = styled('nav', {
  display: 'flex',
  marginBottom: '4rem',

  ul: {
    gap: 14,
    display: 'flex',
    position: 'relative',

    '&:before': {
      content: '/',
      bottom: 0,
      top: '50%',
      left: '50%',
      transform: 'translate(-80%, -80%)',
      color: theme.colors.gray,
      position: 'absolute'
    },

    li: {
      a: {
        fontSize: 10,
        fontWeight: 300,
        letterSpacing: 1,
        fontFamily: theme.fonts.custom
      },

      '&:hover': {
        textDecoration: 'underline'
      },

      '&:first-child': {
        color: theme.colors.gray
      }
    }
  }
})
