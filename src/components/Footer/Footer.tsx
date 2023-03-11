import Link from 'next/link'
import { CaretUp } from 'phosphor-react'

import { FooterContainer, Separator } from './Styled'

export function Footer() {
  const getCurrentYear = new Date().getFullYear()

  function handleScrollTop() {
    window.scrollTo({ top: 0 })
  }

  return (
    <FooterContainer id="footer">
      <h3>Entre em contato</h3>
      <Link href="mailto:oi@tonalmeida.dev">oi@tonalmeida.dev</Link>

      <Separator />

      <h3>Sigam-me</h3>
      <ul>
        <li>
          <Link href="https://github.com/tonalmeidadev">GitHub</Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/wellington-frontend">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://dribbble.com/tonalmeidadev">Dribbble</Link>
        </li>
        <li>
          <Link href="https://instagram.com/tonalmeidadev">Instagram</Link>
        </li>
      </ul>

      <Separator />

      <div>
        <span>Copyright and Designed by Ton Almeida — {getCurrentYear}</span>
        <button onClick={handleScrollTop} title="Ir para o topo">
          <CaretUp size={20} />
        </button>
      </div>
    </FooterContainer>
  )
}
