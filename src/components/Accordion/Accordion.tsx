import { CaretDown } from '@phosphor-icons/react'

import { ServicesProps } from '../../pages/sobre'
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger
} from './Styled'

export function Accordion({ services }: ServicesProps) {
  return (
    <AccordionContainer
      type="single"
      defaultValue={services[0].tag}
      collapsible
    >
      {services.map((services) => (
        <AccordionItem key={services.id} value={services.tag}>
          <AccordionHeader>
            <AccordionTrigger>
              {services.title}
              <CaretDown size={20} aria-hidden />
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent>
            <div
              dangerouslySetInnerHTML={{ __html: services.description.html }}
            />
          </AccordionContent>
        </AccordionItem>
      ))}
    </AccordionContainer>
  )
}
