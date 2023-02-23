import Link from 'next/link'

import { BreadcrumbsContainer } from './Styled'

type BreadcrumbsProps = {
  text: string
}

export function Breadcrumbs({ text }: BreadcrumbsProps) {
  return (
    <BreadcrumbsContainer>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <span>/</span>
        </li>
        <li>
          <span>{text}</span>
        </li>
      </ul>
    </BreadcrumbsContainer>
  )
}
