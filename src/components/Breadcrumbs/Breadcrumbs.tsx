import Link from 'next/link'

import { BreadcrumbsContainer } from './Styled'

type BreadcrumbsProps = {
  link: string
  text: string
}

export function Breadcrumbs({ link, text }: BreadcrumbsProps) {
  return (
    <BreadcrumbsContainer>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href={link}>{text}</Link>
        </li>
      </ul>
    </BreadcrumbsContainer>
  )
}
