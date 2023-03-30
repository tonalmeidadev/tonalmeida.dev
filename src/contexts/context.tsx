import { useTheme } from 'next-themes'
import { createContext } from 'react'

type ContextProps = {
  theme: string | undefined
  setTheme: (theme: string) => void
  handleThemeChange(): void
  children?: React.ReactNode
}

export const Context = createContext<ContextProps>({} as ContextProps)

export default function ContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  const { theme, setTheme } = useTheme()

  function handleThemeChange() {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  return (
    <Context.Provider
      value={{
        theme,
        setTheme,
        handleThemeChange
      }}
    >
      {children}
    </Context.Provider>
  )
}
