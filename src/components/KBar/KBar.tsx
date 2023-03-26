import {
  Copy,
  FingerprintSimple,
  Laptop,
  LinkSimple,
  MagnifyingGlass,
  ShareNetwork,
  Square
} from '@phosphor-icons/react'
import { KBarPortal, KBarProvider } from 'kbar'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

import { KBarProps } from '../../types/types'
import { KBarRender } from './KBarRender'
import {
  KBarContainer,
  KBarPositioner,
  KBarSearch,
  KBarSearchContainer
} from './Styled'

export function KBar({ children }: KBarProps) {
  const router = useRouter()

  const actions = [
    {
      id: 'copiar',
      name: 'Copiar link atual',
      shortcut: ['c'],
      keywords: 'copiar-url',
      section: 'Outros',
      perform: () => {
        navigator.clipboard.writeText(window.location.href)
        toast('Link atual copiado!')
      },
      icon: <Copy size={20} />
    },
    {
      id: 'home',
      name: 'Página inicial',
      shortcut: ['p', 'i'],
      keywords: 'ir-pagina-inicial',
      section: 'Ir para',
      perform: () => router.push('/'),
      icon: <Square size={20} />
    },
    {
      id: 'about',
      name: 'Sobre mim',
      shortcut: ['s', 'm'],
      keywords: 'ir-sobre',
      section: 'Ir para',
      perform: () => router.push('/sobre'),
      icon: <FingerprintSimple size={20} />
    },
    {
      id: 'trabalhos',
      name: 'Trabalhos',
      shortcut: ['t', 'b'],
      keywords: 'ir-trabalhos',
      section: 'Ir para',
      perform: () => router.push('/trabalhos'),
      icon: <LinkSimple size={20} />
    },
    {
      id: 'setup',
      name: 'Setup',
      shortcut: ['s', 't'],
      keywords: 'ir-setup',
      section: 'Ourtos',
      perform: () => router.push('/setup'),
      icon: <Laptop size={20} />
    },
    {
      id: 'social',
      name: 'Redes Sociais',
      shortcut: ['s', 'm'],
      keywords: 'ir-setup',
      section: 'Ourtos',
      perform: () => router.push('/setup#footer'),
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
