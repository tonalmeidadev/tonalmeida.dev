import {
  DribbbleLogo,
  EnvelopeSimple,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo
} from 'phosphor-react'

import { AboutProps } from '../../pages/sobre'
import { Address } from '../Address/Address'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Button } from '../Button/Button'
import { AboutContainer, Aboutme, Biography, Buttons } from './Styled'

export function About({ about }: AboutProps) {
  return (
    <AboutContainer>
      <Breadcrumbs link="/sobre" text="Sobre" />

      <Aboutme>
        <section>
          <h1>{about.name}</h1>
          <h2>{about.position}</h2>
          <Biography
            dangerouslySetInnerHTML={{ __html: about.biography.html }}
          />
          <Address localization={about.localization.html} />

          <Buttons>
            <Button path={about.resume.url} text="Currículo" />
            <div>
              <Button path="https://github.com/otonalmeidas">
                <GithubLogo size={22} />
              </Button>
              <Button path="https://linkedin.com/in/wellington-frontend/">
                <LinkedinLogo size={22} />
              </Button>
              <Button path="https://dribbble.com/otonalmeidas">
                <DribbbleLogo size={22} />
              </Button>
              <Button path="https://instagram.com/otonalmeidas">
                <InstagramLogo size={22} />
              </Button>
              <Button path="mailto:oi@tonalmeida.dev">
                <EnvelopeSimple size={22} />
              </Button>
            </div>
          </Buttons>
        </section>
        <aside>
          <div></div>
          <div></div>
          <div></div>
        </aside>
      </Aboutme>
    </AboutContainer>
  )
}
