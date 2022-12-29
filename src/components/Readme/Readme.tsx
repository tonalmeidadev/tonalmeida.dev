import Image from 'next/image'
import Link from 'next/link'
import { Compass } from 'phosphor-react'

import { HomeProps } from '../../pages'
import { ReadmeContainer, Profile, Photo, Resume } from './Styled'

export function Readme({ home }: HomeProps) {
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
        <h1>{home.name}</h1>
        <h2>{home.position}</h2>
        <span>
          Pressione <strong>Ctrl + K</strong> ou <strong>Command + K</strong>
        </span>
      </Profile>

      <Resume>
        <p>{home.minibiography}</p>
        <Link
          href="https://goo.gl/maps/U8mehYfFZdSgxF1W8"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link para acesso a localização no mapa"
          title="Localização em Sacomã, São Paulo"
        >
          <Compass size={22} />
          <div dangerouslySetInnerHTML={{ __html: home.localization.html }} />
        </Link>
      </Resume>
    </ReadmeContainer>
  )
}
