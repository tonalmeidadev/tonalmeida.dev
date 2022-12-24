import React, { forwardRef } from 'react'

import { KBarProps } from './KBar'
import { KBarCommand, KBarIcon, KBarItem, KBarItemBox, KBarKbd } from './Styled'

type KBarContainerProps = {
  action: KBarProps
  active: boolean
}

export function KBarContainer(
  { action, active }: KBarContainerProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <KBarItemBox ref={ref} variant={active ? 'active' : 'inactive'}>
      <KBarItem>
        {action.icon && <KBarIcon>{action.icon}</KBarIcon>}
        <div>
          <span>{action.name}</span>
        </div>
      </KBarItem>
      {action.shortcut?.length ? (
        <KBarCommand aria-hidden>
          {action.shortcut.map((shortcut: string) => (
            <KBarKbd key={shortcut}>{shortcut}</KBarKbd>
          ))}
        </KBarCommand>
      ) : null}
    </KBarItemBox>
  )
}

export const KBarResult = forwardRef(KBarContainer)
