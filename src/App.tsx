import GlobalStyle from 'globalStyle'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import theme from 'theme'
import Layout from 'layout/Layout'
import Main from 'routes/main/Main'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Reset />
        <GlobalStyle />
        <Layout>
          <Main />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default App
