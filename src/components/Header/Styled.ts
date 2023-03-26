import { styled, theme } from '../../../stitches.config'
import { flashingLed } from '../../styles/Motions'

export const HeaderContainer = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> div': {
    display: 'flex',

    a: {
      padding: '2rem 1rem'
    }
  },

  ul: {
    gap: '1.5rem',
    display: 'flex',
    alignItems: 'center',

    li: {
      address: {
        fontStyle: 'normal',

        a: {
          gap: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          borderRadius: 12,
          padding: '12px 22px',
          backgroundColor: theme.colors.gray100,
          position: 'relative',

          span: {
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: 1,
            color: theme.colors.neutral900,
            fontFamily: theme.fonts.custom
          }
        }
      }
    }
  }
})

export const Status = styled('div', {
  left: 1,
  top: '50%',
  transform: 'translateY(-50%)',
  position: 'absolute',
  borderRadius: 5,
  height: 14,
  width: 8,
  opacity: 1,
  backgroundColor: theme.colors.green,
  animation: `${flashingLed} 5s infinite`
})
