import styled from 'styled-components'
import { fontSizeLarge } from 'styles/fontSize'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${fontSizeLarge};
  font-weight: bold;
  flex: 1
`

const Test = () => <Container>
  Hello there 👋
</Container>

export default Test
