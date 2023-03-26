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
  backgroundColor: theme.colors.neutral100,
  borderBottom: `1px solid ${theme.colors.gray100}`,
  fontFamily: theme.fonts.custom,
  color: theme.colors.gray900,
  textAlign: 'initial',
  letterSpacing: 1,
  fontWeight: 400,
  fontSize: 14,
  transition: 'color 150ms ease-in-out',

  svg: {
    color: theme.colors.gray900,
    transition: '150ms ease-in-out'
  },

  '&:hover': {
    color: theme.colors.neutral900,

    svg: {
      color: theme.colors.neutral900
    }
  },

  '&[data-state="open"]': {
    color: theme.colors.neutral900,
    borderBottom: `1px solid ${theme.colors.gray700}`,

    svg: {
      color: theme.colors.neutral900,
      transform: 'rotate(180deg)'
    }
  }
})

export const AccordionContent = styled(Accordion.Content, {
  fontSize: 14,
  fontWeight: 200,
  lineHeight: '180%',
  padding: '16px 0 32px',
  backgroundColor: theme.colors.neutral100,
  transition: 'color 150ms ease-in-out',
  color: theme.colors.neutral900,

  a: {
    marginTop: '1rem',

    '&:hover': {
      textDecoration: 'underline'
    }
  }
})
