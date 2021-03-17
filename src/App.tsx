import GlobalStyle from 'globalStyle'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import Test from 'components/test/Test'
import theme from 'theme'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Reset />
        <GlobalStyle />
        <Test />
      </>
    </ThemeProvider>
  )
}

export default App
