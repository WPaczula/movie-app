import styled from 'styled-components'

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  & > * {
    margin: 1em 1em;
  }
`

export const PagingContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1.5em;
    justify-content: center;
`
