import styled from 'styled-components'

interface Props {
  small?: boolean;
}

const LogoWrapper = styled.span<Props>`
  color: ${({ theme }) => theme.colors.logo};
  font-size: ${({ theme, small }) =>
    small ? theme.type.fontSizeMedium : theme.type.logoSize};
  font-weight: bolder;
  letter-spacing: 1px;
`

const Logo = ({ small = false }: Props) => (
  <LogoWrapper small={small}>MOVIE APP</LogoWrapper>
)

export default Logo
