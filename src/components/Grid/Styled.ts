import { styled, theme } from '../../../stitches.config'

export const GridContainer = styled('div', {
  width: '100%',
  maxWidth: 900,
  minHeight: '100vh',
  padding: '0 4rem',
  margin: '0 auto',
  position: 'relative',
  borderRight: `1px solid ${theme.colors.gray100}`,
  borderLeft: `1px solid ${theme.colors.gray100}`,

  '&:before': {
    content: '',
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.colors.gray100,
    position: 'absolute',
    height: '100%',
    width: 1
  },

  '@bp4': {
    padding: '0 2rem'
  },

  '@bp5': {
    padding: '0 1.5rem'
  },

  variants: {
    variant: {
      home: {
        gap: '2rem',
        display: 'grid',
        gridTemplateAreas: `
          'header'
          'main'
          'empty'
        `,

        header: {
          gridArea: 'header',
          height: 'fit-content'
        },

        main: {
          gridArea: 'main',
          height: 'fit-content'
        },

        '@bp2': {
          paddingBottom: '8.375rem'
        }
      },

      others: {
        display: 'flex',
        flexDirection: 'column'
      }
    }
  }
})
