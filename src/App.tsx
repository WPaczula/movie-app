import GlobalStyle from 'globalStyle'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import theme from 'theme'
import Layout from 'layout/Layout'
import Main from 'routes/main/Main'
import { QueryClient, QueryClientProvider } from 'react-query'
import ErrorBoundary from 'error-boundary/ErrorBoundary'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false
    }
  }
})

function App () {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={client}>
          <Reset />
          <GlobalStyle />
          <Layout>
            <Main />
          </Layout>
        </ QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
