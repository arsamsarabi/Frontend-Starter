import React, { FC } from 'react'
import styled from 'styled-components'

const StyledLayout = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const Layout: FC = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default Layout
