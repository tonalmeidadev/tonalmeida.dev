import { globalCss, theme } from '../../stitches.config'
import { spinnerNProgress } from './Motions'

export const globalStyles = globalCss({
  '@font-face': {
    fontFamily: 'Monument Extended',
    src: 'url("/fonts/Monument-Extended.otf")'
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    '&::selection': {
      color: theme.colors.neutral900,
      background: theme.colors.gray500
    }
  },

  '::-webkit-scrollbar': {
    width: 1
  },

  '::-webkit-scrollbar-track': {
    background: theme.colors.neutral100
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: 1,
    backgroundColor: theme.colors.neutral900
  },

  html: {
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    scrollBehavior: 'smooth'
  },

  body: {
    color: theme.colors.neutral900,
    backgroundColor: theme.colors.neutral100,
    '-webkit-font-smoothing': 'antialiased'
  },

  'body, input, textarea, button': {
    fontWeight: 400,
    fontSize: '1rem',
    fontFamily: theme.fonts.default
  },

  li: {
    listStyle: 'none'
  },

  a: {
    color: 'inherit',
    textDecoration: 'none'
  },

  '#nprogress': {
    pointerEvents: 'none',

    '.bar': {
      top: 0,
      left: 0,
      height: 1,
      width: '100%',
      zIndex: 99999,
      position: 'fixed',
      background: theme.colors.neutral900
    },

    '.peg': {
      right: 0,
      width: 4,
      opacity: 1,
      height: '100%',
      display: 'block',
      position: 'absolute',
      transform: 'rotate(3deg) translate(0, 0.25rem)'
    },

    '.spinner': {
      zIndex: 1031,
      top: 0,
      left: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      position: 'fixed',
      display: 'block'
    },

    '.spinner-icon': {
      width: 48,
      height: 48,
      borderRadius: '50%',
      boxSizing: 'border-box',
      border: 'solid 2px transparent',
      borderTopColor: theme.colors.neutral900,
      borderLeftColor: theme.colors.neutral900,
      animation: `${spinnerNProgress} 400ms linear infinite`
    },

    '.nprogress-custom-parent': {
      overflow: 'hidden',
      position: 'relative',

      '#nprogress': {
        '.bar, .spinner': {
          position: 'absolute'
        }
      }
    }
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
