import React from 'react'
import { ThemeProvider } from 'styled-components'
import PageWrapper from './components/PageWrapper/PageWrapper'
import GlobalStyle from './styles/GlobalStyle'
import globalTheme from './styles/globalTheme'

const App = () => {
  return <>
    <ThemeProvider theme={globalTheme}>
      <GlobalStyle/>
      <PageWrapper/>
    </ThemeProvider>
    </>
}

export default App