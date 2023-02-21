import { styled, theme } from '../../../stitches.config'

export const BreadcrumbsContainer = styled('nav', {
  display: 'flex',
  marginBottom: '4rem',

  ul: {
    gap: 14,
    display: 'flex',
    position: 'relative',

    '> span': {
      fontSize: 16,
      fontWeight: 600,
      transform: 'translateY(2px)',
      color: theme.colors.gray,
      userSelect: 'none',
      cursor: 'default'
    },

    li: {
      'a, span': {
        fontSize: 10,
        fontWeight: 300,
        letterSpacing: 1,
        fontFamily: theme.fonts.custom
      },

      'a:hover': {
        textDecoration: 'underline'
      },

      'span:hover': {
        cursor: 'default',
        userSelect: 'none'
      },

      '&:first-child': {
        color: theme.colors.gray
      }
    }
  }
})
