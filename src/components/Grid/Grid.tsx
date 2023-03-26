import { useRouter } from 'next/router'

import { GridProps } from '../../types/types'
import { GridContainer } from './Styled'

export function Grid({ children }: GridProps) {
  const router = useRouter()

  return (
    <GridContainer variant={router.pathname === '/' ? 'home' : 'others'}>
      {children}
    </GridContainer>
  )
}
