import styled from 'styled-components'
import { desktop } from 'styles/responsive'

const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    
    ${desktop`
        max-width: 90em;
    `};
`

export default Container
