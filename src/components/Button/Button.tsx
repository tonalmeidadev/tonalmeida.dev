import Link from 'next/link'

import { ButtonContainer } from './Styled'

type ButtonProps = {
  path: string
  name: string
  text?: string
  children?: React.ReactNode
}

export function Button({ path, name, text, children }: ButtonProps) {
  return (
    <ButtonContainer variant={text ? 'text' : 'noText'}>
      <Link
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        title={`Acessar ${name}`}
        aria-label={`Acesse meu ${name}`}
      >
        {text}
        {children}
      </Link>
    </ButtonContainer>
  )
}
