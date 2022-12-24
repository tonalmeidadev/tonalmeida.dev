import { ActionId, ActionImpl, KBarPortal, KBarProvider } from 'kbar'
import { useRouter } from 'next/router'
import {
  AppWindow,
  Copy,
  Gear,
  GithubLogo,
  MagnifyingGlass,
  ShareNetwork,
  User
} from 'phosphor-react'
import { toast } from 'react-hot-toast'

import { KBarRender } from './KBarRender'
import {
  KBarContainer,
  KBarPositioner,
  KBarSearch,
  KBarSearchContainer
} from './Styled'

export type KBarProps = {
  id?: ActionId
  name?: string
  shortcut?: string[]
  keywords?: string
  section?: string
  icon?: string | React.ReactElement | React.ReactNode
  perform?: (currentActionImpl: ActionImpl) => void
  children?: React.ReactNode
}

export function KBar({ children }: KBarProps) {
  const router = useRouter()

  const actions = [
    {
      id: 'copiar',
      name: 'Copiar link atual',
      shortcut: ['c'],
      keywords: 'copiar-url',
      section: 'Geral',
      perform: () => {
        navigator.clipboard.writeText(window.location.href)
        toast('Link atual copiado!')
      },
      icon: <Copy size={20} />
    },
    {
      id: 'about',
      name: 'Sobre mim',
      shortcut: ['s', 'm'],
      keywords: 'ir-sobre',
      section: 'Ir para',
      perform: () => router.push('/sobre'),
      icon: <User size={20} />
    },
    {
      id: 'trabalhos',
      name: 'Trabalhos',
      shortcut: ['t', 'b'],
      keywords: 'ir-trabalhos',
      section: 'Ir para',
      perform: () => router.push('/trabalhos'),
      icon: <AppWindow size={20} />
    },
    {
      id: 'setup',
      name: 'Setup',
      shortcut: ['s', 't'],
      keywords: 'ir-setup',
      section: 'Ir para',
      perform: () => router.push('/setup'),
      icon: <Gear size={20} />
    },
    {
      id: 'github',
      name: 'GitHub',
      shortcut: ['g', 'h'],
      keywords: 'ir-github',
      section: 'Redes Sociais',
      perform: () =>
        window.open('https://www.github.com/otonalmeidas', '_blank'),
      icon: <GithubLogo size={20} />
    },
    {
      id: 'others',
      name: 'Outras',
      shortcut: ['o', 't'],
      keywords: 'ir-outros',
      section: 'Redes Sociais',
      perform: () => router.push('/about#social'),
      icon: <ShareNetwork size={20} />
    }
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarContainer>
            <KBarSearchContainer>
              <MagnifyingGlass size={20} />
              <KBarSearch defaultPlaceholder="Digite um comando ou pesquise" />
            </KBarSearchContainer>
            <KBarRender />
          </KBarContainer>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}
