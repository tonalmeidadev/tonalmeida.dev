import { styled, theme } from '../../../stitches.config'

export const WorkstationContainer = styled('main', {
  marginTop: '10rem',

  '@bp1': {
    marginTop: '8rem'
  },

  '@bp3': {
    marginTop: '5rem'
  },

  div: {
    'h1, h2': {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: theme.fonts.custom,
      marginBottom: '1rem'
    },

    p: {
      fontSize: 14,
      fontWeight: 200,
      lineHeight: '180%',
      marginBottom: '2rem'
    },

    ul: {
      gap: '0.5rem',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '2rem',

      li: {
        fontSize: 14,
        fontWeight: 200,
        lineHeight: '180%',

        em: {
          color: theme.colors.silver
        },

        '&::maker': {
          marginLeft: '1rem'
        }
      }
    }
  }
})
