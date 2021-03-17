import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.type.fontSizeLarge};
  font-weight: bold;
`

const Test = () => <Container>
  Hello there 👋
</Container>

export default Test
