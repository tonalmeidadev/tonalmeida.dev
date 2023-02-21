import * as Accordion from '@radix-ui/react-accordion'

import { styled, theme } from '../../../stitches.config'

export const AccordionContainer = styled(Accordion.Root, {
  display: 'flex',
  flexDirection: 'column'
})

export const AccordionItem = styled(Accordion.Item, {})
export const AccordionHeader = styled(Accordion.Header, {})

export const AccordionTrigger = styled(Accordion.Trigger, {
  border: 0,
  width: '100%',
  outline: 'none',
  display: 'flex',
  padding: '14px 0',
  cursor: 'pointer',
  alignItems: 'center',
  background: 'transparent',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.colors.smooky}`,
  fontFamily: theme.fonts.custom,
  color: theme.colors.silver,
  textAlign: 'initial',
  letterSpacing: 1,
  fontWeight: 400,
  fontSize: 14,
  transition: 'color 150ms ease-in-out',

  '&:hover': {
    color: theme.colors.white
  },

  svg: {
    transition: 'transform 150ms ease-in-out'
  },

  '&[data-state="open"]': {
    color: theme.colors.white,

    svg: {
      transform: 'rotate(180deg)'
    }
  }
})

export const AccordionContent = styled(Accordion.Content, {
  padding: '16px 0',
  fontSize: 14,
  fontWeight: 200,
  lineHeight: '180%',
  transition: 'color 150ms ease-in-out'
})
