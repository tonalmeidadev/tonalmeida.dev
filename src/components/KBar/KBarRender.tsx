/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMatches, KBarResults } from 'kbar'
import React from 'react'

import { KBarResult } from './KBarItem'
import { KBarList } from './Styled'

export function KBarRender() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }: any) =>
        typeof item === 'string' ? (
          <KBarList>{item}</KBarList>
        ) : (
          <KBarResult action={item} active={active} />
        )
      }
    />
  )
}
