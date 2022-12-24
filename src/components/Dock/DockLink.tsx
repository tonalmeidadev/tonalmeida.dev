import { useRouter } from 'next/router'

import { NextLink as Link } from './Styled'

export type DockLinkProps = {
  includes?: boolean
  href: string
  aria: string
  title: string
  children: React.ReactNode
}

export function DockLink({
  includes,
  href,
  aria,
  title,
  children
}: DockLinkProps) {
  const router = useRouter()

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(href)
    }

    return href === router.pathname
  }

  const variant = verifyIfIsActive()

  return (
    <Link href={href} variant={variant} aria-label={aria} title={title}>
      {children}
    </Link>
  )
}
