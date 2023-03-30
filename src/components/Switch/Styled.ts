import { styled, theme } from '../../../stitches.config'

export const SwitchContainer = styled('button', {
  width: 36,
  height: 36,
  border: 'none',
  display: 'flex',
  borderRadius: 12,
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.gray100
})
