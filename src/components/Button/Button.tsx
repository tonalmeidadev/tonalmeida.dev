import Link from 'next/link'

import { ButtonContainer } from './Styled'

type ButtonProps = {
  path: string
  text?: string
  children?: React.ReactNode
}

export function Button({ path, text, children }: ButtonProps) {
  return (
    <ButtonContainer type="button">
      <Link href={path} target="_blank" rel="noopener noreferrer">
        {text && <span>{text}</span>}
        {children}
      </Link>
    </ButtonContainer>
  )
}
