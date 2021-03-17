import GlobalStyle from 'globalStyle'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import Test from 'components/test/Test'
import theme from 'theme'
import Layout from 'layout/Layout'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Reset />
        <GlobalStyle />
        <Layout>
          <Test />
        </Layout>
      </>
    </ThemeProvider>
  )
}

export default App
