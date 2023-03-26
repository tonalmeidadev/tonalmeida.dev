import Link from 'next/link'

import { BreadcrumbsProps } from '../../types/types'
import { BreadcrumbsContainer } from './Styled'

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
