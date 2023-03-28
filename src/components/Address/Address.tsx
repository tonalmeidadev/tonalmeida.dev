import { Compass } from '@phosphor-icons/react'

import { AddressProps } from '../../types/types'
import { AddressContainer } from './Styled'

export function Address({ localization }: AddressProps) {
  return (
    <AddressContainer
      href="https://goo.gl/maps/U8mehYfFZdSgxF1W8"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Link para acesso a localização no mapa"
      title="Localização em Sacomã, São Paulo"
    >
      <Compass size={26} />
      <div dangerouslySetInnerHTML={{ __html: localization }} />
    </AddressContainer>
  )
}
