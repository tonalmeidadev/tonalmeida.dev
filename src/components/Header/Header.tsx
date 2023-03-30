import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'

import { Context } from '../../contexts/context'
import { Switch } from '../Switch/Switch'
import { Contact, HeaderContainer, Logo, Status } from './Styled'

export function Header() {
  const { theme } = useContext(Context)
  const [clientRender, setClientRender] = useState(false)

  useEffect(() => {
    setClientRender(true)
  }, [])

  return (
    <HeaderContainer>
      {clientRender && (
        <>
          <Logo variant={theme === 'light' ? 'light' : 'dark'}>
            <Link href="/" title="Ir para a página inicial">
              <Image
                src="/assets/logo.webp"
                alt="Logotipo"
                title="Logotipo do autor da página"
                quality={100}
                height={36}
                width={32}
                priority
              />
            </Link>
          </Logo>
        </>
      )}

      <ul>
        <li>
          <address>
            <Contact
              href="https://api.whatsapp.com/send?phone=5511960245642"
              target="_blank"
              aria-label="Link para enviar mensagem no WhatsApp"
              title="Entrar em contato pelo WhatsApp"
            >
              <Status />
              <span>Disponível agora</span>
              <span>Disponível</span>
            </Contact>
          </address>
        </li>
        <li>
          <Switch />
        </li>
      </ul>
    </HeaderContainer>
  )
}
