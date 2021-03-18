import Input from 'components/input/Input'
import styled from 'styled-components'

export const MovieContainer = styled.div`
    margin: 1.5em 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1em;
`

export const PagingContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 1.5em 0;
    justify-content: center;
`

export const SearchInput = styled(Input)`
    max-width: 20em;
`
