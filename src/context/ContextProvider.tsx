import React, { ReactElement, FC } from 'react'

import ThemeProvider from './ThemeContext'

interface ContextProviderInterface {
  children: ReactElement
}

const ContextProvider: FC<ContextProviderInterface> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default ContextProvider
