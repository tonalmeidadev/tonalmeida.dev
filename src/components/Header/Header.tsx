import Image from 'next/image'
import Link from 'next/link'

import { HeaderContainer, Status } from './Styled'

export function Header() {
  const getDate = new Date().getHours()
  const available = getDate >= 7 && getDate <= 23

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

      <address>
        {available ? (
          <Link
            href="https://api.whatsapp.com/send?phone=5511960245642"
            target="_blank"
            aria-label="Link para enviar mensagem no WhatsApp"
            title="Entrar em contato pelo WhatsApp"
          >
            <Status variant={'active'} />
            <span>Disponível agora</span>
          </Link>
        ) : (
          <Link
            href="mailto:oi@tonalmeida.dev"
            target="_self"
            aria-label="Link para enviar e-mail"
            title="Entrar em contato por e-mail"
          >
            <Status variant={'inactive'} />
            <span>Não disponível</span>
          </Link>
        )}
      </address>
    </HeaderContainer>
  )
}
