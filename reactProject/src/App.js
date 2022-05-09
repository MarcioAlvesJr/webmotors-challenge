import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ThemeProvider } from 'styled-components'
import PageWrapper from './components/PageWrapper/PageWrapper'
import GlobalStyle from './styles/GlobalStyle'
import globalTheme from './styles/globalTheme'

const App = () => {
  const queryClient = new QueryClient()
  return <>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={globalTheme}>
        <GlobalStyle/>
        <PageWrapper/>
      </ThemeProvider>
    </QueryClientProvider>
    </>
}

export default App