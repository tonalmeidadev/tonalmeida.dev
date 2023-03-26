import React, { forwardRef } from 'react'

import { KBarContainerProps } from '../../types/types'
import { KBarCommand, KBarIcon, KBarItem, KBarItemBox, KBarKbd } from './Styled'

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
