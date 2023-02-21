import { styled, theme } from '../../../stitches.config'

export const AboutContainer = styled('main', {
  marginTop: '10rem'
})

export const Aboutme = styled('section', {
  gap: '4rem',
  display: 'grid',
  marginBottom: '8rem',
  gridTemplateColumns: 'auto auto',

  section: {
    h1: {
      fontSize: 36,
      fontWeight: 400,
      fontFamily: theme.fonts.custom,
      textTransform: 'uppercase',
      marginBottom: '1rem',
      lineHeight: '85%'
    },

    h2: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: theme.fonts.custom,
      marginBottom: '2rem'
    }
  },

  aside: {
    width: 128,
    display: 'flex',
    flexDirection: 'column',

    div: {
      width: 128,
      height: 128,
      borderRadius: '50%',
      border: `1px solid ${theme.colors.gray}`,

      '&:nth-child(2)': {
        marginTop: '-64px'
      },

      '&:nth-child(3)': {
        marginTop: '-64px'
      }
    }
  },

  '@bp2': {
    gridTemplateColumns: '1fr',

    section: {
      order: 1
    },

    aside: {
      width: 'fit-content',
      flexDirection: 'row',

      div: {
        '&:nth-child(2)': {
          margin: '0 0 0 -64px'
        },

        '&:nth-child(3)': {
          margin: '0 0 0 -64px'
        }
      }
    }
  }
})

export const Biography = styled('div', {
  gap: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '2rem',

  p: {
    fontSize: 14,
    fontWeight: 200,
    lineHeight: '180%'
  }
})

export const Buttons = styled('div', {
  gap: '1rem',
  display: 'flex',
  marginTop: '2rem',
  flexWrap: 'wrap',

  div: {
    gap: '1rem',
    display: 'flex',
    flexWrap: 'wrap'
  }
})
