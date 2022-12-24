import { globalCss, theme } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '&::selection': {
      color: theme.colors.black,
      background: theme.colors.white
    }
  },

  '::-webkit-scrollbar': {
    width: 1
  },

  '::-webkit-scrollbar-track': {
    background: theme.colors.black
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: 1,
    background: theme.colors.white
  },

  html: {
    width: '100%',
    height: '100%',
    overflowX: 'hidden'
  },

  body: {
    color: theme.colors.white,
    background: theme.colors.black,
    '-webkit-font-smoothing': 'antialiased'
  },

  'body, input, textarea, button': {
    fontWeight: 400,
    fontSize: '1rem',
    fontFamily: '$default'
  },

  li: {
    listStyle: 'none'
  },

  a: {
    color: 'inherit',
    textDecoration: 'none'
  },

  '@bp1': {
    html: {
      fontSize: '93.75%'
    }
  },

  '@bp2': {
    html: {
      fontSize: '87.5%'
    }
  },

  '@bp3': {
    'a, button, div': {
      cursor: 'default !important'
    }
  }
})
