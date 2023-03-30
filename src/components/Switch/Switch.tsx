import { Desktop, Moon, Sun } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'

import { Context } from '../../contexts/context'
import { SwitchContainer } from './Styled'

export function Switch() {
  const { theme, handleThemeChange } = useContext(Context)
  const [clientRender, setClientRender] = useState(false)

  useEffect(() => {
    setClientRender(true)
  }, [])

  return (
    <SwitchContainer onClick={handleThemeChange}>
      {clientRender && (
        <>
          {theme === 'system' && <Desktop size={16} weight="bold" />}
          {theme === 'light' && <Moon size={16} weight="bold" />}
          {theme === 'dark' && <Sun size={16} weight="bold" />}
        </>
      )}
    </SwitchContainer>
  )
}
