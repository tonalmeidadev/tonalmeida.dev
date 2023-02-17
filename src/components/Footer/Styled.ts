import { Root } from '@radix-ui/react-separator'

import { styled, theme } from '../../../stitches.config'

export const FooterContainer = styled('footer', {
  gap: '1rem',
  display: 'flex',
  flexDirection: 'column',
  margin: '10rem 0 8rem',

  h3: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: theme.fonts.custom
  },

  'a, span': {
    fontSize: 14,
    fontWeight: 200,
    lineHeight: '180%'
  },

  a: {
    '&:hover': {
      textDecoration: 'underline'
    }
  }
})

export const Separator = styled(Root, {
  height: '1px',
  width: '100%',
  backgroundColor: theme.colors.smooky
})
