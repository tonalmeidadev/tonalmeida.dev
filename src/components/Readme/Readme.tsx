import Image from 'next/image'

import { HomeProps } from '../../types/types'
import { Address } from '../Address/Address'
import { ReadmeContainer, Profile, Photo, Resume } from './Styled'

export function Readme({ home }: HomeProps) {
  return (
    <ReadmeContainer>
      <Profile>
        <Photo>
          <Image
            src="https://github.com/tonalmeidadev.png"
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
        <Address localization={home.localization.html} />
      </Resume>
    </ReadmeContainer>
  )
}
