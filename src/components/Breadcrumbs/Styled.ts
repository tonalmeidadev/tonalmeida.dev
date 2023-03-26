import { styled, theme } from '../../../stitches.config'

export const BreadcrumbsContainer = styled('nav', {
  display: 'flex',
  marginBottom: '4rem',

  ul: {
    gap: 14,
    display: 'flex',
    position: 'relative',

    li: {
      fontSize: 10,
      fontWeight: 300,
      letterSpacing: 1,
      fontFamily: theme.fonts.custom,
      color: theme.colors.gray700,

      'a:hover': {
        textDecoration: 'underline'
      },

      'span:hover': {
        cursor: 'default',
        userSelect: 'none'
      },

      '&:first-child': {
        color: theme.colors.neutral900
      }
    }
  }
})
