import Image from 'next/image'
import Link from 'next/link'

import { HeaderContainer, Status } from './Styled'

export function Header() {
  return (
    <HeaderContainer>
      <div>
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
      </div>

      <ul>
        <li>
          <address>
            <Link
              href="https://api.whatsapp.com/send?phone=5511960245642"
              target="_blank"
              aria-label="Link para enviar mensagem no WhatsApp"
              title="Entrar em contato pelo WhatsApp"
            >
              <Status />
              <span>Disponível agora</span>
            </Link>
          </address>
        </li>
      </ul>
    </HeaderContainer>
  )
}
