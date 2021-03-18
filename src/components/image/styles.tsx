import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
from {
    opacity: 0
}

to {
    opacity: 1
}
`

export const AnimatedImage = styled.img<{ loaded: boolean }>`
animation: ${({ loaded }) => loaded ? css`${fadeIn} 0.5s linear` : 'none'};
transition: opacity 0.5 linear;
`
