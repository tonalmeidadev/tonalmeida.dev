import { styled, theme } from '../../../stitches.config'

export const AboutContainer = styled('main', {
  marginTop: '10rem',

  '@bp1': {
    marginTop: '8rem'
  },

  '@bp4': {
    marginTop: '5rem'
  }
})

export const Aboutme = styled('section', {
  gap: '8rem',
  display: 'grid',
  marginBottom: '8rem',
  gridTemplateColumns: 'auto auto',

  section: {
    h1: {
      fontSize: 36,
      fontWeight: 400,
      fontFamily: theme.fonts.custom,
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
    width: 160,
    display: 'flex',
    flexDirection: 'column',

    img: {
      borderRadius: '50%',
      border: `2px solid ${theme.colors.gray100}`,

      '&:nth-child(2)': {
        marginTop: '-80px'
      },

      '&:nth-child(3)': {
        marginTop: '-80px'
      }
    }
  },

  '@bp3': {
    gap: '4rem',
    gridTemplateColumns: '1fr',

    section: {
      order: 1
    },

    aside: {
      width: 'fit-content',
      flexDirection: 'row',

      img: {
        '&:nth-child(2)': {
          margin: '0 0 0 -64px'
        },

        '&:nth-child(3)': {
          margin: '0 0 0 -64px'
        }
      }
    }
  },

  '@bp4': {
    aside: {
      img: {
        '&:nth-child(2)': {
          margin: '0 0 0 -86px'
        },

        '&:nth-child(3)': {
          margin: '0 0 0 -86px'
        }
      }
    }
  },

  '@bp5': {
    aside: {
      img: {
        '&:nth-child(2)': {
          opacity: '0.65',
          margin: '0 0 0 -130px'
        },

        '&:nth-child(3)': {
          margin: '0 0 0 -110px',
          opacity: '0.5'
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
