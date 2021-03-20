import Input from 'components/input/Input'
import styled from 'styled-components'
import { fontSizeLarge, fontSizeMedium } from 'styles/fontSize'

export const MovieContainer = styled.div`
    margin: 1.5em 0;
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(13em, 1fr) );
    grid-template-rows: auto;
    justify-content: space-between;
    gap: 3em;

    & > * {
        margin: auto;
    }
`

export const PagingContainer = styled.div`
    display: flex;
    flex: 0 0 auto;
    width: 100%;
    padding: 1em 0;
    justify-content: center;
    position: fixed;
    top: calc(100vh - 4em);
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 1px 0 2px 2px ${({ theme }) => theme.colors.shadow};
`

export const SearchInput = styled(Input)`
    max-width: 20em;
`

export const ContentContainer = styled.div`
    flex: 1;
    margin: 1em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const PrimaryMessage = styled.p`
    font-size: ${fontSizeLarge};
    margin-bottom: 0.5em;
    text-align: center;
`

export const Description = styled.p`
    font-size: ${fontSizeMedium};
    text-align: center;
    color: ${({ theme }) => theme.colors.primary}
`
