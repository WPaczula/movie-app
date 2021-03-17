import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.type.fontSizeLarge};
  font-weight: bold;
  flex: 1
`

const Test = () => <Container>
  Hello there 👋
</Container>

export default Test
