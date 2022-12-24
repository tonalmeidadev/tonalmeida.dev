import { useKBar } from 'kbar'
import {
  AppWindow,
  Command,
  HouseSimple,
  PaperPlaneTilt,
  User
} from 'phosphor-react'

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
          <Command />
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
              <HouseSimple />
            </DockLink>
          </li>
          <li>
            <DockLink
              href="/sobre"
              aria="Link para página sobre mim"
              title="Ir para página sobre mim"
            >
              <User />
            </DockLink>
          </li>
          <li>
            <DockLink
              href="/trabalhos"
              aria="Link para página de projetos"
              title="Ir para página de trabalhos"
            >
              <AppWindow />
            </DockLink>
          </li>
          <li>
            <DockLink
              href="mailto:oi@tonalmeida.dev"
              aria="Link para enviar e-mail"
              title="Ir para enviar e-mail"
            >
              <PaperPlaneTilt />
            </DockLink>
          </li>
        </ul>
      </Navigation>
    </DockContainer>
  )
}
