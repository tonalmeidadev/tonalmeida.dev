import Image from 'next/image'
import Link from 'next/link'
import { Compass } from 'phosphor-react'

import { ReadmeContainer, Profile, Photo, Resume } from './Styled'

export function Readme() {
  return (
    <ReadmeContainer>
      <Profile>
        <Photo>
          <Image
            src="https://github.com/otonalmeidas.png"
            alt="Avatar"
            title="Avatar de Ton"
            height={217}
            width={217}
            priority
          />
        </Photo>
        <h1>Ton Almeida</h1>
        <h2>Front-end & Creative Developer</h2>
        <span>
          Pressione <strong>Ctrl + K</strong> ou <strong>Command + K</strong>
        </span>
      </Profile>

      <Resume>
        <p>
          Um Desenvolvedor Front-End criativo, aspirante a designer de UX que
          constrói produtos digitais e vive em São Paulo.
        </p>
        <Link
          href="https://goo.gl/maps/U8mehYfFZdSgxF1W8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link para acesso a localização no mapa"
          title="Localização em Sacomã, São Paulo"
        >
          <Compass size={22} />
          <span>
            23° 36&lsquo; 53.135&quot; S,
            <br />
            46° 35&rsquo; 44.957&quot; W
          </span>
        </Link>
      </Resume>
    </ReadmeContainer>
  )
}
