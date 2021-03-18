import ImageComponent from 'components/image/Image'
import styled, { css } from 'styled-components'
import { fontSizeMedium } from 'styles/fontSize'

const borderRadius = css`
    border-radius: 4px
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 15px 5px ${({ theme }) => theme.colors.shadow};
    height: 18em;
    width: 12em;
    display: flex;
    background-color: ${({ theme }) => theme.colors.secondary};
    ${borderRadius}
`

export const MovieImage = styled(ImageComponent)`
    object-fit: cover;
    overflow: hidden;
    flex: 1;
    object-position: center;
    ${borderRadius}
`

export const Gradient = styled.div`
    position: absolute;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    bottom: 65%;
    left: 0;
    right: 0;
    top: -2em;
    background-image: linear-gradient(transparent, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.secondary});
`

export const InfoContainer = styled.div`
    flex: 0 0 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};;
    position: relative;
    padding: 1em;
    ${borderRadius}
`

export const Title = styled.h1`
    font-size: ${fontSizeMedium};
    color: ${({ theme }) => theme.colors.textInverse};
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    letter-spacing: 2px;
    position: relative;
`
