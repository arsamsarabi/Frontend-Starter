import React, { FC } from 'react'

import Navigation from '#navigation/Navigation'
import ContextProvider from '#context/ContextProvider'

export const App: FC = () => (
  <ContextProvider>
    <Navigation />
  </ContextProvider>
)

export default App
