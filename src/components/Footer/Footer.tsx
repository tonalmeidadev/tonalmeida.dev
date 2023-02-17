import Link from 'next/link'

import { FooterContainer, Separator } from './Styled'

export function Footer() {
  const getCurrentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <h3>Entre em contato</h3>
      <Link href="mailto:oi@tonalmeida.dev">oi@tonalmeida.dev</Link>

      <Separator />

      <h3>Sigam-me</h3>
      <ul>
        <li>
          <Link href="https://github.com/otonalmeidas">GitHub</Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/wellington-frontend">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://dribbble.com/otonalmeidas">Dribbble</Link>
        </li>
        <li>
          <Link href="https://instagram.com/otonalmeidas">Instagram</Link>
        </li>
      </ul>

      <Separator />

      <span>Copyright and Designed by Ton Almeida — {getCurrentYear}</span>
    </FooterContainer>
  )
}
