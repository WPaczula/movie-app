import Container from 'components/container/Container'
import Logo from 'components/logo/Logo'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  padding: 0.5em 0;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo />
      </Container>
    </HeaderWrapper>
  )
}

export default Header
