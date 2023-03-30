import { Toaster as ToastProvider } from 'react-hot-toast'

import { theme } from '../../../stitches.config'

export function Toaster() {
  return (
    <ToastProvider
      position="bottom-center"
      containerStyle={{
        top: '2rem',
        left: '2rem',
        bottom: '8rem',
        right: '2rem'
      }}
      toastOptions={{
        style: {
          height: 36,
          fontSize: 10,
          fontWeight: 400,
          letterSpacing: 1,
          borderRadius: 12,
          boxShadow: 'none',
          padding: '12px 22px',
          fontFamily: `${theme.fonts.custom}`,
          backgroundColor: `${theme.colors.gray100}`,
          color: `${theme.colors.neutral900}`
        }
      }}
    />
  )
}
