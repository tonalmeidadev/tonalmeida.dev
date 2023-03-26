import {
  Command,
  FingerprintSimple,
  LinkSimple,
  PaperPlaneTilt,
  Square
} from '@phosphor-icons/react'
import { useKBar } from 'kbar'

import { DockLink } from './DockLink'
import { DockContainer, UseKBar, Navigation } from './Styled'

export function Dock() {
  const { query } = useKBar()

  function handleKBar() {
    query.toggle()
  }

  return (
    <DockContainer>
      <UseKBar
        type="button"
        onClick={handleKBar}
        aria-label="Botão para abrir menu"
        title="Abrir menu"
      >
        <div>
          <Command weight="regular" />
        </div>
      </UseKBar>

      <Navigation>
        <ul>
          <li>
            <DockLink
              href="/"
              aria="Link para página inicial"
              title="Ir para página inicial"
            >
              <Square weight="regular" />
            </DockLink>
          </li>
          <li>
            <DockLink
              href="/sobre"
              aria="Link para página sobre mim"
              title="Ir para página sobre mim"
            >
              <FingerprintSimple weight="regular" />
            </DockLink>
          </li>
          <li>
            <DockLink
              href="/trabalhos"
              aria="Link para página de projetos"
              title="Ir para página de trabalhos"
            >
              <LinkSimple weight="regular" />
            </DockLink>
          </li>
          <li>
            <DockLink
              href="mailto:oi@tonalmeida.dev"
              aria="Link para enviar e-mail"
              title="Ir para enviar e-mail"
            >
              <PaperPlaneTilt weight="regular" />
            </DockLink>
          </li>
        </ul>
      </Navigation>
    </DockContainer>
  )
}
