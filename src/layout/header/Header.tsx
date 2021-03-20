import Container from 'components/container/Container'
import Logo from 'components/logo/Logo'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  top: 0;
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1em 0;
  z-index: 1;
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
