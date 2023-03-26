import {
  DribbbleLogo,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo
} from '@phosphor-icons/react'
import Image from 'next/image'

import { AboutPageProps, ServicesProps } from '../../pages/sobre'
import { Accordion } from '../Accordion/Accordion'
import { Address } from '../Address/Address'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Button } from '../Button/Button'
import { AboutContainer, Aboutme, Biography, Buttons } from './Styled'

export function About({ about, services }: AboutPageProps & ServicesProps) {
  return (
    <AboutContainer>
      <Breadcrumbs text="Sobre" />

      <Aboutme>
        <section>
          <h1>{about.name}</h1>
          <h2>{about.position}</h2>
          <Biography
            dangerouslySetInnerHTML={{ __html: about.biography.html }}
          />
          <Address localization={about.localization.html} />

          <Buttons>
            <Button path={about.resume.url} text="Currículo" name="Currículo" />
            <div>
              <Button path="https://github.com/tonalmeidadev" name="GitHub">
                <GithubLogo size={22} />
              </Button>
              <Button
                path="https://linkedin.com/in/wellington-frontend/"
                name="LinkedIn"
              >
                <LinkedinLogo size={22} />
              </Button>
              <Button path="https://dribbble.com/tonalmeidadev" name="Dribble">
                <DribbbleLogo size={22} />
              </Button>
              <Button
                path="https://instagram.com/tonalmeidadev"
                name="Instagram"
              >
                <InstagramLogo size={22} />
              </Button>
              <Button path="mailto:oi@tonalmeida.dev" name="E-mail">
                <EnvelopeSimple size={22} />
              </Button>
            </div>
          </Buttons>
        </section>
        <aside>
          <Image
            src="/assets/photo-one.webp"
            alt="Foto 1"
            width={160}
            height={160}
            quality={100}
            priority
          />
          <Image
            src="/assets/photo-two.webp"
            alt="Foto 2"
            width={160}
            height={160}
            quality={100}
            priority
          />
          <Image
            src="/assets/photo-three.webp"
            alt="Foto 3"
            width={160}
            height={160}
            quality={100}
            priority
          />
        </aside>
      </Aboutme>

      <Breadcrumbs text="Serviços" />
      <Accordion services={services} />
    </AboutContainer>
  )
}
