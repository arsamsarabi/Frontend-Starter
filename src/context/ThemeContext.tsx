import React, {
  createContext,
  useContext,
  useState,
  ReactElement,
  FC,
} from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'

import defaultTheme from '#styles/theme'
import type { ThemeModes } from '#types/theme'
import GlobalStyles from '#styles/GlobalStyles'

interface ThemeState {
  themeMode: ThemeModes
  dayNamesRowHeight: string
}

type ThemeContext = ThemeState & {
  setThemeMode: (newMode: ThemeModes) => void
}

const initialState: ThemeState = {
  themeMode: 'light',
  dayNamesRowHeight: '3%',
}

const ThemeContext = createContext<ThemeContext>({
  ...initialState,
  setThemeMode: () => {},
})

interface ThemeProviderProps {
  children: ReactElement
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [state, setState] = useState<ThemeState>(initialState)

  const value: ThemeContext = {
    ...state,
    setThemeMode: themeMode => setState({ ...state, themeMode }),
  }

  const board = {
    dimensions: `${document.body.clientWidth * 0.8}px`,
  }

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider
        theme={{ ...defaultTheme, board, mode: state.themeMode }}
      >
        <GlobalStyles />
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
export const useThemeContext = (): ThemeContext => useContext(ThemeContext)
