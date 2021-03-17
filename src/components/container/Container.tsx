import styled from 'styled-components'

const breakpointSmall = '768px'

const Container = styled.div`
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    
    @media (min-width: ${breakpointSmall}) {
        max-width: 90em;
    }
`

export default Container
