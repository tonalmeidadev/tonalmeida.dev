import { useRouter } from 'next/router'

import { GridContainer } from './Styled'

type GridProps = {
  children: React.ReactNode
}

export function Grid({ children }: GridProps) {
  const router = useRouter()

  return (
    <GridContainer variant={router.pathname === '/' ? 'home' : 'others'}>
      {children}
    </GridContainer>
  )
}
