import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Spinner = styled.div`
    display: inline-block;
    width: 3em;
    height: 3em;
    margin: auto;

  &:after {
    content: "";
    display: block;
    width: 2em;
    height: 2em;
    margin: 0.3em;
    border-radius: 50%;
    border: 0.3em solid ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary} transparent ${({ theme }) => theme.colors.primary} transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`

export default Spinner
