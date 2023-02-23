import Image from 'next/image'

import { WorksPageProps } from '../../pages/trabalhos'
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs'
import { Button } from '../Button/Button'
import { WorksContainer, Cards, Card } from './Styled'

export function Works({ works, collaborates }: WorksPageProps) {
  return (
    <WorksContainer>
      <Breadcrumbs text="Trabalhos" />

      <h2>Trabalhos recentes</h2>
      <Cards>
        {works.map((works) => (
          <Card
            key={works.id}
            href={works.online ? works.link : '/trabalhos'}
            variant={works.online ? 'true' : 'false'}
            target={works.online ? '_blank' : '_self'}
            rel="noopener noreferrer"
          >
            <div>
              <strong>{works.online ? 'Online' : 'Em breve'}</strong>
              <Image
                src={works.image.url}
                alt="Logo do projeto"
                width={144}
                height={64}
                priority
              />
            </div>
            <span>{works.title}</span>
          </Card>
        ))}

        <Button
          path="https://github.com/otonalmeidas"
          text="Veja mais"
          name="GitHub"
        />
      </Cards>

      <h2 style={{ marginTop: '8rem' }}>Projeto que faço parte</h2>
      <Cards>
        {collaborates.map((collaborates) => (
          <Card
            key={collaborates.id}
            href={collaborates.online ? collaborates.link : '/trabalhos'}
            variant={collaborates.online ? 'true' : 'false'}
            target={collaborates.online ? '_blank' : '_self'}
            rel="noopener noreferrer"
          >
            <div>
              <strong>{collaborates.online ? 'Online' : 'Em breve'}</strong>
              <Image
                src={collaborates.image.url}
                width={144}
                height={64}
                alt="Logo do projeto"
              />
            </div>
            <span>{collaborates.title}</span>
          </Card>
        ))}
      </Cards>
    </WorksContainer>
  )
}
