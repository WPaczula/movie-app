import Container from 'components/container/Container'
import Logo from 'components/logo/Logo'
import React from 'react'
import styled from 'styled-components'
import { fontSizeSmall } from 'styles/fontSize'

const FooterWrapper = styled.footer`
  width: 100wh;
  background-color: ${({ theme }) => theme.colors.secondary};
  
  padding: 0.5em 0;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Legal = styled.p`
  color: ${({ theme }) => theme.colors.textInverse};
  font-size: ${fontSizeSmall};
`

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <ContentWrapper>
          <Logo small />
          <Legal>2021 by Wojciech Paczuła</Legal>
        </ContentWrapper>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
