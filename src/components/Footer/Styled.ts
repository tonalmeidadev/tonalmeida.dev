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
  },

  div: {
    gap: '2rem',
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: '1fr auto',

    button: {
      width: 32,
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      color: theme.colors.white,
      cursor: 'pointer',
      border: '0'
    }
  }
})

export const Separator = styled(Root, {
  height: '1px',
  width: '100%',
  backgroundColor: theme.colors.smooky
})
